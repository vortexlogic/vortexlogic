import { z } from 'zod'

export const generateMusicSchema = z.object({
  prompt: z
    .string()
    .describe(
      'Detailed prompt describing the style, genre, instruments, and mood of the music to generate'
    ),
  duration: z
    .number()
    .optional()
    .default(30)
    .describe('The duration of the music track in seconds (typically 15, 30, or 60)'),
  tempo: z
    .enum(['slow', 'medium', 'fast'])
    .optional()
    .default('medium')
    .describe('The tempo of the generated music')
})

export type GenerateMusicInput = z.infer<typeof generateMusicSchema>
