import { tool } from 'ai'

import { generateMusicSchema } from '@/lib/schema/generateMusic'
import { logToolPayload } from '@/lib/utils/usage-logging'

// A collection of gorgeous high-quality stock audio loops for the zero-config fallback mode
const STOCK_MUSIC = [
  {
    keywords: [
      'cyber',
      'neon',
      'synthwave',
      'future',
      'scifi',
      'retro',
      'electronic',
      'techno'
    ],
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    title: 'Neon Pulse Cyberpunk',
    genre: 'Synthwave',
    cover: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80'
  },
  {
    keywords: [
      'lofi',
      'relaxing',
      'chill',
      'soothing',
      'study',
      'hiphop',
      'soft',
      'peaceful'
    ],
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    title: 'Midnight Cozy Study',
    genre: 'Lofi Hip Hop',
    cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80'
  },
  {
    keywords: [
      'space',
      'galaxy',
      'ambient',
      'calm',
      'stars',
      'cosmos',
      'meditation',
      'deep'
    ],
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    title: 'Cosmic Whispers',
    genre: 'Ambient Space',
    cover: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=600&q=80'
  },
  {
    keywords: [
      'nature',
      'acoustic',
      'guitar',
      'forest',
      'peaceful',
      'happy',
      'bright',
      'sunlight'
    ],
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    title: 'Sunlit Forest Breeze',
    genre: 'Acoustic Folk',
    cover: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80'
  },
  {
    keywords: [
      'epic',
      'cinematic',
      'orchestral',
      'drama',
      'action',
      'adventure',
      'dark',
      'grand'
    ],
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    title: 'Dawn of Hope',
    genre: 'Cinematic Orchestral',
    cover: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80'
  }
]

export const generateMusicTool = tool({
  description: 'Generate an AI music track based on a detailed text prompt.',
  inputSchema: generateMusicSchema,
  async *execute({ prompt, duration = 30, tempo = 'medium' }) {
    // Yield generating state
    yield {
      state: 'generating' as const,
      prompt,
      duration,
      tempo
    }

    let url = ''
    let title = ''
    let genre = ''
    let cover = ''
    let provider = 'stock-fallback'

    try {
      // 1. Smart local stock music fallback (zero-config, works immediately)
      const searchText = prompt.toLowerCase()
      let matchedMusic = STOCK_MUSIC[1] // Lofi as default

      // Find the best match based on keywords
      let maxMatches = 0
      for (const music of STOCK_MUSIC) {
        let matches = 0
        for (const kw of music.keywords) {
          if (searchText.includes(kw)) {
            matches++
          }
        }
        if (matches > maxMatches) {
          maxMatches = matches
          matchedMusic = music
        }
      }

      url = matchedMusic.url
      title = matchedMusic.title
      genre = matchedMusic.genre
      cover = matchedMusic.cover
    } catch (e) {
      console.error('Error generating music:', e)
      url = STOCK_MUSIC[1].url
      title = STOCK_MUSIC[1].title
      genre = STOCK_MUSIC[1].genre
      cover = STOCK_MUSIC[1].cover
    }

    logToolPayload('generateMusic', prompt, { url, provider })

    yield {
      state: 'complete' as const,
      url,
      title,
      genre,
      cover,
      prompt,
      duration,
      tempo,
      provider
    }
  }
})
