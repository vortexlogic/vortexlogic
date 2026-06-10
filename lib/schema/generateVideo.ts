import { z } from 'zod'

export const generateVideoSchema = z.object({
  prompt: z.string().describe('Detailed prompt describing the scene and motion for the video to generate'),
  aspectRatio: z
    .enum(['16:9', '9:16', '1:1', '4:3'])
    .optional()
    .default('16:9')
    .describe('The aspect ratio of the generated video'),
  duration: z
    .number()
    .optional()
    .default(5)
    .describe('The duration of the video in seconds (typically 5, 10, or 15)'),
  style: z
    .string()
    .optional()
    .describe('Artistic style or style preset (e.g. cinematic, anime, realistic, cyberpunk, 3d-render)')
})

export type GenerateVideoInput = z.infer<typeof generateVideoSchema>
