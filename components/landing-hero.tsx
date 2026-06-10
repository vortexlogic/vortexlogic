'use client'

import {
  IconCircleCheck as Check,
  IconCpu as Cpu,
  IconFlame as Flame,
  IconPhoto as Photo,
  IconSearch as Search,
  IconServer as Server,
  IconShieldCheck as Shield,
  IconSparkles as Sparkles,
  IconVideo as Video
} from '@tabler/icons-react'

import { Button } from './ui/button'

export function LandingHeroHeader() {
  return (
    <div className="w-full max-w-4xl mx-auto pt-16 md:pt-24 px-6 flex flex-col items-center text-center relative z-10 select-none">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-radial from-rose-500/10 via-transparent to-transparent blur-3xl opacity-75" />
        <div className="absolute top-[10%] left-[40%] w-[40%] h-[40%] bg-radial from-emerald-500/5 via-transparent to-transparent blur-3xl opacity-50" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none z-0" />

      {/* Announcement Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/5 text-rose-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
        <span>VortexLogic v2.0 - Hyper-intelligent creative suite</span>
      </div>

      {/* Hero Title */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 bg-clip-text text-transparent bg-linear-to-b from-neutral-50 via-neutral-200 to-neutral-500 leading-tight">
        The Creative AI Engine
      </h1>

      {/* Hero Description */}
      <p className="text-xs md:text-sm text-neutral-400 max-w-xl mb-8 leading-relaxed">
        Generate cinematic AI videos, high-fidelity images, and search the web with autonomous agentic loops in a single, black-sleek flow state.
      </p>
    </div>
  )
}

export function LandingHeroFooter() {
  const features = [
    {
      icon: Search,
      title: 'Real-Time Answers',
      description:
        'Powered by Tavily, Brave, and SearXNG to fetch, compile, and present facts instantly.'
    },
    {
      icon: Video,
      title: 'Cinematic AI Videos',
      description:
        'Generate stunning 16:9 cinematic video loops directly inside your chat threads.'
    },
    {
      icon: Photo,
      title: 'Flux Image Generation',
      description:
        'Create high-fidelity images with granular aspect ratio, preset style, and seed parameters.'
    },
    {
      icon: Sparkles,
      title: 'Agentic Deep Research',
      description:
        'Multi-turn task planning and autonomous step execution to synthesize complex documentation.'
    }
  ]

  const pricingTiers = [
    {
      name: 'VortexLogic Local',
      price: 'Free',
      description: 'The open-source edge. Fully under your control.',
      features: [
        'Unlimited AI queries',
        'Zero-configuration setup',
        'Local PostgreSQL & Redis history',
        'Direct API integrations',
        '100% privacy and data ownership'
      ],
      cta: 'Currently Active',
      active: true
    },
    {
      name: 'Proprietary Apps',
      price: '$20 / mo',
      description: 'Commercial AI alternatives with heavy usage limits.',
      features: [
        'Rate-limited premium mode',
        'Locked data and histories',
        'No self-hosting option',
        'Proprietary search middleware',
        'Cloud-only dependencies'
      ],
      cta: 'Pay to Play',
      active: false
    }
  ]

  return (
    <div className="w-full max-w-4xl mx-auto px-6 mt-16 pb-24 z-10 flex flex-col items-center text-center">
      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left mb-20">
        {features.map((feat, idx) => {
          const Icon = feat.icon
          return (
            <div
              key={idx}
              className="group relative rounded-2xl border border-border bg-muted/20 backdrop-blur-md p-6 transition-all duration-300 hover:border-neutral-700 hover:shadow-lg hover:shadow-neutral-950/40"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 rounded-xl bg-neutral-900 border text-neutral-400 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-sm text-neutral-100">
                  {feat.title}
                </h3>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {feat.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Why VortexLogic Comparison Section */}
      <div className="w-full flex flex-col items-center mb-20">
        <h2 className="text-xl md:text-3xl font-bold tracking-tight text-white mb-3">
          Built for Developers & Creators
        </h2>
        <p className="text-[10px] md:text-xs text-neutral-400 max-w-md mb-8">
          Self-hosted AI infrastructure that outperforms expensive commercial suites.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl text-left">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border p-6 flex flex-col justify-between ${
                tier.active
                  ? 'border-rose-500/40 bg-rose-500/[0.02] shadow-[0_0_20px_-5px_rgba(244,63,94,0.1)]'
                  : 'bg-card/25 border-neutral-850'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-sm text-neutral-200">
                    {tier.name}
                  </span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      tier.active
                        ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    {tier.price}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                  {tier.description}
                </p>
                <ul className="space-y-2.5 text-xs text-neutral-300">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <Check
                        className={`w-3.5 h-3.5 ${
                          tier.active ? 'text-rose-400' : 'text-neutral-500'
                        }`}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Button
                  variant={tier.active ? 'default' : 'outline'}
                  className={`w-full text-xs font-semibold ${
                    tier.active
                      ? 'bg-rose-500 hover:bg-rose-600 text-white shadow-xs'
                      : 'border-neutral-700 text-neutral-400 hover:bg-neutral-900'
                  }`}
                  disabled={tier.active}
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Banner */}
      <div className="w-full border-t border-neutral-900 pt-10 flex flex-wrap justify-center items-center gap-8 text-[10px] md:text-xs text-neutral-500 uppercase tracking-widest font-semibold">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-rose-500/50" />
          <span>NextJS 16 & React 19</span>
        </div>
        <div className="flex items-center gap-2">
          <Server className="w-4 h-4 text-rose-500/50" />
          <span>Dockerized Stack</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-rose-500/50" />
          <span>Supabase Auth Ready</span>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-[10px] md:text-xs text-neutral-600 space-y-1">
        <p>&copy; {new Date().getFullYear()} VortexLogic. MIT License.</p>
        <p className="flex items-center justify-center gap-1">
          <span>Powering the decentralized web with</span>
          <Flame className="w-3 h-3 text-rose-500" />
        </p>
      </footer>
    </div>
  )
}
