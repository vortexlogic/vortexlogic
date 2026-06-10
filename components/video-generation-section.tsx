'use client'

import { useState } from 'react'
import {
  IconDownload as Download,
  IconCopy as Copy,
  IconCheck as Check,
  IconSparkles as Sparkles,
  IconVideo as VideoIcon
} from '@tabler/icons-react'
import { toast } from 'sonner'

interface VideoGenerationSectionProps {
  tool: {
    state: 'input-streaming' | 'input-available' | 'output-available' | 'output-error'
    input: {
      prompt: string
      aspectRatio?: string
      duration?: number
      style?: string
    }
    output?: {
      url: string
      thumbnail?: string
      prompt: string
      aspectRatio: string
      duration: number
      style?: string
      provider: string
    }
    errorText?: string
  }
}

export function VideoGenerationSection({ tool }: VideoGenerationSectionProps) {
  const { state, input, output, errorText } = tool
  const [copied, setCopied] = useState(false)

  const isGenerating = state === 'input-streaming' || state === 'input-available' || (!output && state !== 'output-error')
  const promptText = output?.prompt || input.prompt
  const videoUrl = output?.url

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(promptText)
    setCopied(true)
    toast.success('Prompt copied to clipboard')
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = async () => {
    if (!videoUrl) return
    try {
      toast.info('Downloading video...')
      const response = await fetch(videoUrl)
      const blob = await response.blob()
      const blobUrl = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = `vortexlogic-video-${Date.now()}.mp4`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(blobUrl)
      toast.success('Download complete')
    } catch (e) {
      console.error(e)
      window.open(videoUrl, '_blank')
    }
  }

  if (state === 'output-error' && !output) {
    return (
      <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
        <h4 className="font-semibold mb-1">Video Generation Failed</h4>
        <p className="text-xs opacity-90">{errorText || 'An error occurred during video generation.'}</p>
      </div>
    )
  }

  return (
    <div className="w-full my-4 animate-in fade-in-50 duration-300">
      <div className="relative overflow-hidden rounded-2xl border bg-card/60 backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-xl">
        {/* Shimmer / Loader State */}
        {isGenerating ? (
          <div className="flex flex-col items-center justify-center p-8 min-h-64 space-y-4 text-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-rose-500/20 blur-xl animate-pulse" />
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full border border-rose-500/30 bg-rose-500/5 animate-spin duration-[3000ms]">
                <Sparkles className="w-8 h-8 text-rose-500 animate-pulse" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground animate-pulse">
                Rendering cinematic frames...
              </p>
              <p className="text-xs text-muted-foreground max-w-sm">
                "{input.prompt}"
              </p>
            </div>
            <div className="w-48 h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-rose-500 rounded-full animate-progress-bar" style={{ width: '40%' }} />
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row">
            {/* Visual Display */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-64 max-h-[500px]">
              {videoUrl ? (
                <video
                  src={videoUrl}
                  poster={output?.thumbnail}
                  className="w-full h-full max-h-[500px]"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <div className="text-muted-foreground flex flex-col items-center gap-2">
                  <VideoIcon className="w-10 h-10 opacity-40" />
                  <span className="text-xs">Video missing</span>
                </div>
              )}
            </div>

            {/* Info panel */}
            <div className="w-full md:w-80 p-4 border-t md:border-t-0 md:border-l flex flex-col justify-between bg-muted/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Generated Video
                  </span>
                  {output?.provider && (
                    <span className="text-[10px] font-medium uppercase px-2 py-0.5 rounded-full border bg-background text-muted-foreground">
                      {output.provider}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-medium text-muted-foreground">Prompt</span>
                  <p className="text-xs text-foreground leading-relaxed line-clamp-6 bg-muted/40 p-2.5 rounded-lg border border-border/50">
                    {promptText}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-muted/40 p-2 rounded-lg border border-border/50">
                    <div className="text-[10px] text-muted-foreground">Aspect Ratio</div>
                    <div className="font-semibold">{output?.aspectRatio || input.aspectRatio || '16:9'}</div>
                  </div>
                  <div className="bg-muted/40 p-2 rounded-lg border border-border/50">
                    <div className="text-[10px] text-muted-foreground">Duration</div>
                    <div className="font-semibold">{output?.duration || input.duration || 5}s</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t border-border/40">
                <button
                  onClick={handleCopyPrompt}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border bg-background hover:bg-muted text-foreground transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  Copy Prompt
                </button>
                <button
                  onClick={handleDownload}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-rose-500 hover:bg-rose-600 text-white shadow-xs transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
