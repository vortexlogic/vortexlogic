'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import {
  IconArrowRight as ArrowRight,
  IconBolt as BoltIcon,
  IconBrandGithub as GithubIcon,
  IconChevronRight as ChevronRight,
  IconCpu as CpuIcon,
  IconDeviceLaptop as LaptopIcon,
  IconLock as LockIcon,
  IconMenu2 as MenuIcon,
  IconPhoto as PhotoIcon,
  IconSearch as SearchIcon,
  IconSparkles as SparklesIcon,
  IconVideo as VideoIcon,
  IconX as CloseIcon} from '@tabler/icons-react'

import { Button } from '@/components/ui/button'

import { BookDemoModal } from '@/components/book-demo-modal'

export default function LandingPage() {
  const [demoOpen, setDemoOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      icon: SearchIcon,
      title: 'Real-Time Answers',
      description: 'Fetch, analyze, and present up-to-the-minute web information. Powered by Tavily, Brave, and SearXNG.'
    },
    {
      icon: VideoIcon,
      title: 'Cinematic AI Videos',
      description: 'Generate stunning, high-definition 16:9 cinematic video loops directly from natural language prompts.'
    },
    {
      icon: PhotoIcon,
      title: 'Flux Image Generation',
      description: 'Create hyper-realistic art and imagery with granular aspect ratios, styles, and seed parameters.'
    },
    {
      icon: SparklesIcon,
      title: 'Agentic Deep Research',
      description: 'Deploy multi-turn planning agents to research complex subjects, synthesize documentation, and write reports.'
    }
  ]

  const showcaseItems = [
    {
      type: 'video',
      title: 'Cinematic Landscapes',
      prompt: 'Cinematic drone shot of neon-lit Tokyo streets in heavy rain, cyberpunk style, slow motion, 8k resolution',
      bgGradient: 'from-purple-900/40 via-neutral-900 to-black',
      tag: 'AI Video',
      icon: VideoIcon
    },
    {
      type: 'image',
      title: 'Surreal Portraiture',
      prompt: 'A close-up photographic portrait of an astronaut exploring a bioluminescent forest, highly detailed, flux core',
      bgGradient: 'from-emerald-900/40 via-neutral-900 to-black',
      tag: 'Flux Image',
      icon: PhotoIcon
    }
  ]

  return (
    <div className="flex flex-col min-h-screen w-full bg-neutral-950 text-white selection:bg-rose-500/30 selection:text-rose-200">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[10%] w-[50%] h-[50%] bg-radial from-rose-500/10 via-transparent to-transparent blur-3xl opacity-60" />
        <div className="absolute top-[20%] left-[50%] w-[45%] h-[45%] bg-radial from-emerald-500/5 via-transparent to-transparent blur-3xl opacity-40" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />

      {/* FLOATING HEADER NAVBAR */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-900 bg-neutral-950/70 backdrop-blur-md transition-all">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5 group select-none">
              <div className="w-6 h-6 rounded-lg bg-rose-500 flex items-center justify-center font-bold text-sm shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform duration-200">
                V
              </div>
              <span className="font-bold tracking-tight text-neutral-100 group-hover:text-white transition-colors">
                VortexLogic
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-xs text-neutral-400 hover:text-neutral-200 transition-colors">
                Features
              </a>
              <a href="#showcase" className="text-xs text-neutral-400 hover:text-neutral-200 transition-colors">
                Showcase
              </a>
              <Link href="/studio" className="text-xs text-neutral-400 hover:text-neutral-200 transition-colors">
                Creative Studio
              </Link>
              <Link href="/pricing" className="text-xs text-neutral-400 hover:text-neutral-200 transition-colors font-medium">
                Pricing
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setDemoOpen(true)}
              className="px-3 py-1.5 rounded-lg border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/50 text-xs text-neutral-300 font-semibold transition-all cursor-pointer"
            >
              Book a Demo
            </button>
            <Link
              href="/auth/login"
              className="px-3 py-1.5 text-xs text-neutral-400 hover:text-neutral-200 font-semibold transition-all"
            >
              Log in
            </Link>
            <Link
              href="/search-engine"
              className="px-3.5 py-1.5 rounded-lg bg-rose-500 hover:bg-rose-600 text-xs text-white font-semibold shadow-xs transition-colors"
            >
              Start for Free
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 rounded-lg border border-neutral-900 text-neutral-400 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden w-full border-b border-neutral-900 bg-neutral-950 p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-3">
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-neutral-400 hover:text-white transition-colors py-1"
              >
                Features
              </a>
              <a
                href="#showcase"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-neutral-400 hover:text-white transition-colors py-1"
              >
                Showcase
              </a>
              <Link
                href="/studio"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-neutral-400 hover:text-white transition-colors py-1"
              >
                Creative Studio
              </Link>
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-neutral-400 hover:text-white transition-colors py-1"
              >
                Pricing
              </Link>
            </nav>
            <hr className="border-neutral-900" />
            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setDemoOpen(true)
                }}
                className="w-full py-2 rounded-xl border border-neutral-800 hover:bg-neutral-900 text-xs text-center font-semibold transition-all cursor-pointer"
              >
                Book a Demo
              </button>
              <Link
                href="/auth/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2 text-xs text-center text-neutral-400 hover:text-white font-semibold transition-all"
              >
                Log in
              </Link>
              <Link
                href="/search-engine"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-xs text-center text-white font-semibold transition-colors"
              >
                Start for Free
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative w-full max-w-5xl mx-auto pt-20 md:pt-32 px-6 flex flex-col items-center text-center z-10 select-none">
        {/* Announcement Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/5 text-rose-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
          <span>VortexLogic v2.0 - Hyper-intelligent creative suite</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 bg-clip-text text-transparent bg-linear-to-b from-neutral-50 via-neutral-100 to-neutral-500">
          The Creative Engine <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-400 via-rose-500 to-rose-600">
            for Cinematic AI
          </span>
        </h1>

        {/* Hero Description */}
        <p className="text-xs md:text-base text-neutral-400 max-w-2xl mb-10 leading-relaxed font-normal">
          Generate high-fidelity AI images, produce premium cinematic video loops, and run deep agentic web research inside a single, black-sleek flow state.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 z-20">
          <Link
            href="/search-engine"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-sm font-semibold text-white shadow-lg shadow-rose-500/10 transition-all group cursor-pointer"
          >
            <span>Start Generating for Free</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <button
            onClick={() => setDemoOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/40 text-sm font-semibold text-neutral-300 transition-colors cursor-pointer"
          >
            <span>Book Interactive Demo</span>
          </button>
        </div>

        {/* Product Visual Mockup */}
        <div className="w-full mt-20 rounded-2xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-xs p-2.5 shadow-2xl relative">
          {/* Glass header bar */}
          <div className="w-full h-8 flex items-center justify-between px-3 border-b border-neutral-900/60 text-[10px] text-neutral-600 font-semibold mb-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
            </div>
            <span>vortexlogic.vercel.app/search-engine</span>
            <div className="w-10" />
          </div>

          {/* Sandbox Body Visual */}
          <div className="w-full aspect-[16/9] md:aspect-[2.35/1] bg-black/60 rounded-xl overflow-hidden flex flex-col justify-between p-6 text-left relative group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(244,63,94,0.06),transparent)] pointer-events-none" />

            <div className="flex justify-between items-start">
              <div className="flex gap-2">
                <span className="px-2 py-0.5 rounded-md border border-neutral-800 bg-neutral-900 text-[10px] text-neutral-400">
                  Model: GPT-4o
                </span>
                <span className="px-2 py-0.5 rounded-md border border-neutral-800 bg-neutral-900 text-[10px] text-neutral-400 flex items-center gap-1">
                  <VideoIcon className="w-3 h-3 text-rose-500" />
                  Video Generation Enabled
                </span>
              </div>
            </div>

            {/* Simulated Chat Interface */}
            <div className="max-w-md space-y-3 z-10">
              <div className="text-[11px] text-neutral-500 font-mono">/prompt: video-gen</div>
              <div className="text-xs md:text-sm font-semibold text-neutral-200">
                &ldquo;An cinematic fly-over of a misty emerald mountain pass at sunrise, ultra high fidelity&rdquo;
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">
                  Autonomous planning agent generating video loop...
                </span>
              </div>
            </div>

            {/* Bottom Bar input field mock */}
            <div className="w-full h-11 rounded-xl border border-neutral-800 bg-neutral-950/80 px-4 flex items-center justify-between text-xs text-neutral-500 mt-4">
              <span>Ask VortexLogic anything or start research...</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] border border-neutral-800 px-1.5 py-0.5 rounded-md font-mono bg-neutral-900">
                  Ctrl + Enter
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE GRID SECTION */}
      <section id="features" className="w-full max-w-5xl mx-auto px-6 py-28 z-10 border-t border-neutral-900/60 mt-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Unified Creativity Framework
          </h2>
          <p className="text-xs md:text-sm text-neutral-400">
            A state-of-the-art suite integrating advanced search models, vector workflows, and high-fidelity media pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {features.map((feat, idx) => {
            const Icon = feat.icon
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-neutral-900 bg-neutral-950/20 backdrop-blur-md p-6 transition-all duration-300 hover:border-rose-500/20 hover:bg-neutral-900/[0.04]"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-850 text-neutral-400 group-hover:text-white group-hover:border-rose-500/30 transition-all">
                    <Icon className="w-5 h-5 text-rose-400" />
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
      </section>

      {/* SHOWCASE SECTION */}
      <section id="showcase" className="w-full max-w-5xl mx-auto px-6 py-10 z-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Next-Gen AI Output Showcase
          </h2>
          <p className="text-xs md:text-sm text-neutral-400">
            Preview the quality generated natively by our custom integrated media APIs inside VortexLogic threads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {showcaseItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-900 overflow-hidden flex flex-col justify-between h-[360px] p-6 relative group"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-b ${item.bgGradient} opacity-60 z-0`} />

                <div className="flex justify-between items-start z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5" />
                    {item.tag}
                  </span>
                  <span className="text-[10px] text-neutral-600 font-mono">Seed: 847294</span>
                </div>

                {/* Prompt Details Card */}
                <div className="bg-neutral-950/80 backdrop-blur-md border border-neutral-900 rounded-xl p-4 z-10 transition-all group-hover:border-neutral-800">
                  <span className="text-[9px] text-rose-400 font-semibold uppercase tracking-widest block mb-1">
                    System Prompt
                  </span>
                  <p className="text-xs text-neutral-300 font-medium leading-relaxed mb-3">
                    &ldquo;{item.prompt}&rdquo;
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-neutral-500 border-t border-neutral-900/60 pt-2">
                    <span>Aspect Ratio: 16:9</span>
                    <span>Duration: 4s</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* TECH BANNER / TRUST BANNER */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20 border-t border-neutral-900/60 mt-16 z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-left max-w-xs">
          <h3 className="text-sm font-bold text-white mb-1">State-of-the-Art Architecture</h3>
          <p className="text-[11px] text-neutral-500 leading-relaxed">
            Running with Next.js 16, React 19, Turbopack, and Dockerized database systems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
          <div className="flex items-center gap-2 border border-neutral-900 bg-neutral-900/20 px-3 py-1.5 rounded-lg">
            <CpuIcon className="w-4 h-4 text-rose-500" />
            <span>NextJS 16 & React 19</span>
          </div>
          <div className="flex items-center gap-2 border border-neutral-900 bg-neutral-900/20 px-3 py-1.5 rounded-lg">
            <LaptopIcon className="w-4 h-4 text-rose-500" />
            <span>Dockerized Services</span>
          </div>
          <div className="flex items-center gap-2 border border-neutral-900 bg-neutral-900/20 px-3 py-1.5 rounded-lg">
            <LockIcon className="w-4 h-4 text-rose-500" />
            <span>Supabase Secured</span>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="w-full bg-linear-to-b from-neutral-950 to-black py-28 relative z-10 border-t border-neutral-900/60">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Enter the Flow State of Creation
          </h2>
          <p className="text-xs md:text-sm text-neutral-400 max-w-lg mb-10 leading-relaxed">
            Deploy VortexLogic on your servers or use our global hosting sandbox. Start generating premium AI output now.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/search-engine"
              className="px-6 py-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-sm font-semibold text-white shadow-lg shadow-rose-500/10 text-center transition-colors"
            >
              Start for Free
            </Link>
            <button
              onClick={() => setDemoOpen(true)}
              className="px-6 py-3 rounded-xl border border-neutral-800 hover:bg-neutral-900/40 text-sm font-semibold text-neutral-300 text-center transition-colors cursor-pointer"
            >
              Request Enterprise Access
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-neutral-900 bg-black py-12 text-xs text-neutral-500 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-neutral-300 text-sm">VortexLogic</span>
            <span className="text-[10px] text-neutral-600">| MIT License</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/vortexlogic/vortexlogic"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </a>
          </div>

          <p className="text-[10px] text-neutral-600">
            &copy; {new Date().getFullYear()} VortexLogic, Inc. All rights reserved.
          </p>
        </div>
      </footer>

      {/* BOOK DEMO MODAL POPUP */}
      <BookDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  )
}
