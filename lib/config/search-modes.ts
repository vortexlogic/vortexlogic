import {
  IconMusic as Music,
  IconPhoto as Photo,
  IconSearch as Search,
  IconVideo as Video} from '@tabler/icons-react'

import { SearchMode } from '@/lib/types/search'

import { IconLogoOutline } from '@/components/ui/icons'

export interface SearchModeConfig {
  value: SearchMode
  label: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

// Centralized search mode configuration
export const SEARCH_MODE_CONFIGS: SearchModeConfig[] = [
  {
    value: 'quick',
    label: 'Quick',
    description: 'Streamlined search for fast, concise responses',
    icon: Search,
    color: 'text-amber-500'
  },
  {
    value: 'adaptive',
    label: 'Adaptive',
    description: 'Adaptive agentic search with intelligent query understanding',
    icon: IconLogoOutline,
    color: 'text-violet-500'
  },
  {
    value: 'image',
    label: 'Image',
    description: 'High-quality AI image generation and editing',
    icon: Photo,
    color: 'text-emerald-500'
  },
  {
    value: 'video',
    label: 'Video',
    description: 'Stunning cinematic AI video generation studio',
    icon: Video,
    color: 'text-rose-500'
  },
  {
    value: 'music',
    label: 'Music',
    description: 'Beautiful high-fidelity AI music generation studio',
    icon: Music,
    color: 'text-cyan-500'
  }
]

// Helper function to get a specific mode config
export function getSearchModeConfig(
  mode: SearchMode
): SearchModeConfig | undefined {
  return SEARCH_MODE_CONFIGS.find(config => config.value === mode)
}
