import { tool } from 'ai'
import { generateVideoSchema } from '@/lib/schema/generateVideo'
import { logToolPayload } from '@/lib/utils/usage-logging'

// A collection of gorgeous high-quality stock video loops for the zero-config fallback mode
const STOCK_VIDEOS = [
  {
    keywords: ['cyber', 'neon', 'city', 'future', 'futuristic', 'street', 'night', 'scifi', 'car', 'blade', 'runner'],
    url: 'https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-neon-city-street-at-night-40242-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80'
  },
  {
    keywords: ['digital', 'network', 'ai', 'brain', 'technology', 'tech', 'code', 'data', 'internet', 'connection'],
    url: 'https://assets.mixkit.co/videos/preview/mixkit-tech-animation-of-a-digital-network-41662-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80'
  },
  {
    keywords: ['space', 'galaxy', 'planet', 'earth', 'stars', 'cosmos', 'orbit', 'universe', 'astronaut'],
    url: 'https://assets.mixkit.co/videos/preview/mixkit-rotating-planet-earth-in-space-11425-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=600&q=80'
  },
  {
    keywords: ['nature', 'forest', 'sunlight', 'sun', 'stream', 'river', 'mountain', 'trees', 'green', 'woods'],
    url: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80'
  },
  {
    keywords: ['ocean', 'sea', 'water', 'underwater', 'wave', 'blue', 'swim', 'fish', 'coral', 'deep'],
    url: 'https://assets.mixkit.co/videos/preview/mixkit-underwater-view-of-deep-blue-ocean-water-41908-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=600&q=80'
  },
  {
    keywords: ['fire', 'particle', 'particles', 'gold', 'wave', 'abstract', 'fluid', 'magic', 'energy'],
    url: 'https://assets.mixkit.co/videos/preview/mixkit-particles-forming-a-golden-abstract-fluid-wave-43093-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80'
  },
  {
    keywords: ['anime', 'retro', 'synthwave', 'car', 'driving', 'road', 'sunset', 'cartoon', 'purple', 'vaporwave'],
    url: 'https://assets.mixkit.co/videos/preview/mixkit-driving-in-a-futuristic-retro-neon-city-43187-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80'
  },
  {
    keywords: ['tunnel', 'light', 'lights', 'blue', 'speed', 'portal', 'warp', 'hyperspace', 'dimension'],
    url: 'https://assets.mixkit.co/videos/preview/mixkit-tunnel-of-futuristic-blue-lights-42542-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=600&q=80'
  }
]

export const generateVideoTool = tool({
  description: 'Generate an AI video based on a detailed text prompt.',
  inputSchema: generateVideoSchema,
  async *execute({ prompt, aspectRatio = '16:9', duration = 5, style }) {
    // Yield generating state
    yield {
      state: 'generating' as const,
      prompt,
      aspectRatio,
      duration,
      style
    }

    let url = ''
    let thumbnail = ''
    let provider = 'stock-fallback'
    const fullPrompt = style ? `${prompt}, in ${style} style` : prompt

    try {
      // 1. Check Fal.ai Luma Dream Machine Integration
      if (process.env.FAL_KEY) {
        provider = 'fal'
        const response = await fetch('https://queue.fal.run/fal-ai/luma-dream-machine', {
          method: 'POST',
          headers: {
            'Authorization': `Key ${process.env.FAL_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            prompt: fullPrompt,
            aspect_ratio: aspectRatio,
            loop: false,
            sync_mode: true
          })
        })

        if (response.ok) {
          const data = await response.json()
          if (data.video && data.video.url) {
            url = data.video.url
            thumbnail = data.video.thumbnail_url || ''
          }
        }
      }

      // 2. Check Replicate Luma Integration if Fal.ai is not available
      if (!url && process.env.REPLICATE_API_TOKEN) {
        provider = 'replicate'
        const response = await fetch('https://api.replicate.com/v1/predictions', {
          method: 'POST',
          headers: {
            'Authorization': `Token ${process.env.REPLICATE_API_TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            version: 'luma/dream-machine', // Hypothetical Replicate URL for Luma
            input: {
              prompt: fullPrompt,
              aspect_ratio: aspectRatio
            }
          })
        })

        if (response.ok) {
          let prediction = await response.json()
          const maxPolls = 60 // Video generation takes longer, poll for up to 30s
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

          if (prediction.status === 'succeeded' && prediction.output) {
            // Replicate output could be an array of urls or a single url
            url = Array.isArray(prediction.output) ? prediction.output[0] : prediction.output
          }
        }
      }

      // 3. Smart local stock video fallback (zero-config, works immediately)
      if (!url) {
        provider = 'stock-fallback'
        const searchText = prompt.toLowerCase()
        let matchedVideo = STOCK_VIDEOS[5] // Golden wave as default

        // Find the best match based on keywords
        let maxMatches = 0
        for (const video of STOCK_VIDEOS) {
          let matches = 0
          for (const kw of video.keywords) {
            if (searchText.includes(kw)) {
              matches++
            }
          }
          if (matches > maxMatches) {
            maxMatches = matches
            matchedVideo = video
          }
        }

        url = matchedVideo.url
        thumbnail = matchedVideo.thumbnail
      }
    } catch (e) {
      console.error('Error generating video via API:', e)
      provider = 'stock-fallback'
      url = STOCK_VIDEOS[5].url
      thumbnail = STOCK_VIDEOS[5].thumbnail
    }

    logToolPayload('generateVideo', prompt, { url, provider })

    yield {
      state: 'complete' as const,
      url,
      thumbnail,
      prompt,
      aspectRatio,
      duration,
      style,
      provider
    }
  }
})
