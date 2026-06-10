import { tool } from 'ai'
import { generateImageSchema } from '@/lib/schema/generateImage'
import { logToolPayload } from '@/lib/utils/usage-logging'

export const generateImageTool = tool({
  description: 'Generate an AI image based on a detailed text prompt.',
  inputSchema: generateImageSchema,
  async *execute({ prompt, aspectRatio = '1:1', style }) {
    // Yield generating state
    yield {
      state: 'generating' as const,
      prompt,
      aspectRatio,
      style
    }

    let url = ''
    let provider = 'pollinations'
    const fullPrompt = style ? `${prompt}, in ${style} style` : prompt

    // Determine dimensions based on aspect ratio
    let width = 1024
    let height = 1024
    if (aspectRatio === '16:9') {
      width = 1024
      height = 576
    } else if (aspectRatio === '9:16') {
      width = 576
      height = 1024
    } else if (aspectRatio === '4:3') {
      width = 1024
      height = 768
    } else if (aspectRatio === '3:2') {
      width = 1024
      height = 683
    }

    try {
      // 1. Check Fal.ai integration
      if (process.env.FAL_KEY) {
        provider = 'fal'
        const response = await fetch('https://queue.fal.run/fal-ai/flux/schnell', {
          method: 'POST',
          headers: {
            'Authorization': `Key ${process.env.FAL_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            prompt: fullPrompt,
            image_size: aspectRatio === '1:1' ? 'square' : aspectRatio === '16:9' ? 'landscape_16_9' : aspectRatio === '9:16' ? 'portrait_16_9' : 'square',
            num_inference_steps: 4,
            sync_mode: true
          })
        })

        if (response.ok) {
          const data = await response.json()
          if (data.images && data.images.length > 0) {
            url = data.images[0].url
          }
        }
      }

      // 2. Check Replicate integration if Fal.ai is not available
      if (!url && process.env.REPLICATE_API_TOKEN) {
        provider = 'replicate'
        const response = await fetch('https://api.replicate.com/v1/predictions', {
          method: 'POST',
          headers: {
            'Authorization': `Token ${process.env.REPLICATE_API_TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            version: '557a511c77c61774b78631bfa2b32252a106f4776104bc172153f938d99c450c', // Flux Schnell
            input: {
              prompt: fullPrompt,
              aspect_ratio: aspectRatio === '1:1' ? '1:1' : aspectRatio === '16:9' ? '16:9' : aspectRatio === '9:16' ? '9:16' : '1:1',
              go_fast: true,
              megapixels: '1',
              num_outputs: 1,
              output_format: 'webp',
              output_quality: 80
            }
          })
        })

        if (response.ok) {
          let prediction = await response.json()
          // Poll for completion since Replicate is async
          const maxPolls = 30
          let polls = 0
          while (prediction.status !== 'succeeded' && prediction.status !== 'failed' && polls < maxPolls) {
            await new Promise(resolve => setTimeout(resolve, 500))
            const pollRes = await fetch(`https://api.replicate.com/v1/predictions/${prediction.id}`, {
              headers: {
                'Authorization': `Token ${process.env.REPLICATE_API_TOKEN}`
              }
            })
            if (pollRes.ok) {
              prediction = await pollRes.json()
            }
            polls++
          }

          if (prediction.status === 'succeeded' && prediction.output && prediction.output.length > 0) {
            url = prediction.output[0]
          }
        }
      }

      // 3. Fallback to Pollinations.ai (completely free, zero-config)
      if (!url) {
        provider = 'pollinations'
        const seed = Math.floor(Math.random() * 10000000)
        url = `https://image.pollinations.ai/prompt/${encodeURIComponent(fullPrompt)}?width=${width}&height=${height}&model=flux&nologo=true&seed=${seed}`
      }
    } catch (e) {
      console.error('Error generating image via API:', e)
      // Fallback url
      const seed = Math.floor(Math.random() * 10000000)
      url = `https://image.pollinations.ai/prompt/${encodeURIComponent(fullPrompt)}?width=${width}&height=${height}&model=flux&nologo=true&seed=${seed}`
    }

    logToolPayload('generateImage', prompt, { url, provider })

    yield {
      state: 'complete' as const,
      url,
      prompt,
      aspectRatio,
      style,
      provider
    }
  }
})
