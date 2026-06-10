import { stepCountIs, tool, ToolLoopAgent } from 'ai'

import type { ResearcherTools } from '@/lib/types/agent'
import { type Model } from '@/lib/types/models'

import { fetchTool } from '../tools/fetch'
import { generateImageTool } from '../tools/generateImage'
import { generateMusicTool } from '../tools/generateMusic'
import { generateVideoTool } from '../tools/generateVideo'
import { createQuestionTool } from '../tools/question'
import { createSearchTool } from '../tools/search'
import { createTodoTools } from '../tools/todo'
import { SearchMode } from '../types/search'
import { getModel } from '../utils/registry'
import { isTracingEnabled } from '../utils/telemetry'

import {
  getAdaptiveModePrompt,
  getImageModePrompt,
  getMusicModePrompt,
  getVideoModePrompt,
  QUICK_MODE_PROMPT
} from './prompts/search-mode-prompts'

// Enhanced wrapper function with better type safety and streaming support
function wrapSearchToolForQuickMode<
  T extends ReturnType<typeof createSearchTool>
>(originalTool: T): T {
  return tool({
    description: originalTool.description,
    inputSchema: originalTool.inputSchema,
    // Preserve the original tool's model-output trimming (strips the duplicated
    // citationMap / UI-only images) so quick mode gets the same payload savings.
    toModelOutput: originalTool.toModelOutput,
    async *execute(params, context) {
      const executeFunc = originalTool.execute
      if (!executeFunc) {
        throw new Error('Search tool execute function is not defined')
      }

      // Force optimized type for quick mode
      const modifiedParams = {
        ...params,
        type: 'optimized' as const
      }

      // Execute the original tool and pass through all yielded values
      const result = executeFunc(modifiedParams, context)

      // Handle AsyncIterable (streaming) case
      if (
        result &&
        typeof result === 'object' &&
        Symbol.asyncIterator in result
      ) {
        for await (const chunk of result) {
          yield chunk
        }
      } else {
        // Fallback for non-streaming (shouldn't happen with new implementation)
        const finalResult = await result
        yield finalResult || {
          state: 'complete' as const,
          results: [],
          images: [],
          query: params.query,
          number_of_results: 0
        }
      }
    }
  }) as T
}

// Enhanced researcher function with improved type safety using ToolLoopAgent
// Note: abortSignal should be passed to agent.stream() or agent.generate() calls, not to the agent constructor
export function createResearcher({
  model,
  modelConfig,
  parentTraceId,
  searchMode = 'adaptive',
  aspectRatio,
  stylePreset,
  duration
}: {
  model: string
  modelConfig?: Model
  parentTraceId?: string
  searchMode?: SearchMode
  aspectRatio?: string
  stylePreset?: string
  duration?: string
}) {
  try {
    const currentDate = new Date().toLocaleString()

    // Create model-specific tools with proper typing
    const originalSearchTool = createSearchTool(model)
    const askQuestionTool = createQuestionTool(model)
    const todoTools = createTodoTools()

    let systemPrompt: string
    let activeToolsList: (keyof ResearcherTools)[] = []
    let maxSteps: number
    let searchTool = originalSearchTool

    // Configure based on search mode
    switch (searchMode) {
      case 'image':
        console.log(
          '[Researcher] Image mode: maxSteps=5, tools=[generateImage]'
        )
        systemPrompt = `${getImageModePrompt()}\n\nUser's selected generation settings:\n- Aspect Ratio: ${aspectRatio || '1:1'}\n- Style Preset: ${stylePreset || 'cinematic'}\n\nYou MUST use these exact settings when calling the generateImage tool.`
        activeToolsList = ['generateImage']
        maxSteps = 5
        break

      case 'video':
        console.log(
          '[Researcher] Video mode: maxSteps=5, tools=[generateVideo]'
        )
        systemPrompt = `${getVideoModePrompt()}\n\nUser's selected generation settings:\n- Aspect Ratio: ${aspectRatio || '16:9'}\n- Style Preset: ${stylePreset || 'cinematic'}\n- Duration: ${duration || '5'} seconds\n\nYou MUST use these exact settings when calling the generateVideo tool.`
        activeToolsList = ['generateVideo']
        maxSteps = 5
        break

      case 'music':
        console.log(
          '[Researcher] Music mode: maxSteps=5, tools=[generateMusic]'
        )
        systemPrompt = `${getMusicModePrompt()}\n\nUser's selected generation settings:\n- Duration: ${duration || '30'} seconds\n\nYou MUST use these exact settings when calling the generateMusic tool.`
        activeToolsList = ['generateMusic']
        maxSteps = 5
        break

      case 'quick':
        console.log(
          '[Researcher] Quick mode: maxSteps=20, tools=[search, fetch, generateImage, generateVideo, generateMusic]'
        )
        systemPrompt = QUICK_MODE_PROMPT
        activeToolsList = ['search', 'fetch', 'generateImage', 'generateVideo', 'generateMusic']
        maxSteps = 20
        searchTool = wrapSearchToolForQuickMode(originalSearchTool)
        break

      case 'adaptive':
      default:
        systemPrompt = getAdaptiveModePrompt()
        activeToolsList = [
          'search',
          'fetch',
          'todoWrite',
          'generateImage',
          'generateVideo',
          'generateMusic'
        ]
        console.log(
          `[Researcher] Adaptive mode: maxSteps=50, tools=[${activeToolsList.join(', ')}]`
        )
        maxSteps = 50
        searchTool = originalSearchTool
        break
    }

    // Build tools object with proper typing
    const tools: ResearcherTools = {
      search: searchTool,
      fetch: fetchTool,
      askQuestion: askQuestionTool,
      generateImage: generateImageTool,
      generateVideo: generateVideoTool,
      generateMusic: generateMusicTool,
      ...todoTools
    } as ResearcherTools

    // Create ToolLoopAgent with all configuration
    const agent = new ToolLoopAgent({
      model: getModel(model),
      instructions: `${systemPrompt}\nCurrent date and time: ${currentDate}`,
      tools,
      activeTools: activeToolsList,
      stopWhen: stepCountIs(maxSteps),
      ...(modelConfig?.providerOptions && {
        providerOptions: modelConfig.providerOptions
      }),
      experimental_telemetry: {
        isEnabled: isTracingEnabled(),
        functionId: 'research-agent',
        metadata: {
          modelId: model,
          agentType: 'researcher',
          searchMode,
          ...(parentTraceId && {
            langfuseTraceId: parentTraceId,
            langfuseUpdateParent: false
          })
        }
      }
    })

    return agent
  } catch (error) {
    console.error('Error in createResearcher:', error)
    throw error
  }
}

// Helper function to access agent tools
export function getResearcherTools(
  agent: ToolLoopAgent<never, ResearcherTools, never>
): ResearcherTools {
  return agent.tools
}

// Export the legacy function name for backward compatibility
export const researcher = createResearcher
