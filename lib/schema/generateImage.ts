import { z } from 'zod'

export const generateImageSchema = z.object({
  prompt: z
    .string()
    .describe('Detailed prompt describing the image to generate'),
  aspectRatio: z
    .enum(['1:1', '16:9', '9:16', '4:3', '3:2'])
    .optional()
    .default('1:1')
    .describe('The aspect ratio of the generated image'),
  style: z
    .string()
    .optional()
    .describe(
      'Styling keywords e.g. cinematic, realistic, digital art, anime, cyberpunk, 3d-render'
    )
})

export type GenerateImageInput = z.infer<typeof generateImageSchema>
