import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VortexLogic - Premium AI Creative Video & Image Studio',
  description: 'Create cinematic videos, 3D motion, and consistent characters with VortexLogic. The next-generation creative engine powered by state-of-the-art AI.',
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden font-sans select-none selection:bg-violet-500/30 selection:text-violet-200">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-30 blur-[130px] bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 rounded-full" />
      <div className="absolute top-[800px] -left-40 w-96 h-96 pointer-events-none opacity-10 blur-[120px] bg-pink-500 rounded-full" />
      <div className="absolute top-[1600px] -right-40 w-[500px] h-[500px] pointer-events-none opacity-10 blur-[150px] bg-indigo-500 rounded-full" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-900/80 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.3)] group-hover:scale-105 transition-all duration-300">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
                VortexLogic
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
              <Link href="/studio" className="hover:text-slate-100 transition-colors">Studio</Link>
              <Link href="/pricing" className="hover:text-slate-100 transition-colors">Pricing</Link>
              <Link href="/search-engine" className="hover:text-slate-100 transition-colors">AI Search</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/studio" className="hidden sm:inline-flex text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link href="/studio" className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all duration-200 shadow-[0_4px_20px_rgba(124,58,237,0.25)] hover:shadow-[0_4px_25px_rgba(124,58,237,0.4)] active:scale-95">
              Launch Studio
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-xs font-semibold text-violet-300 mb-8 animate-fade-in shadow-[0_0_15px_rgba(124,58,237,0.05)]">
          <span className="flex h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
          VortexLogic Studio v2.0 is now live
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none mb-6">
          <span className="block text-slate-100">Create Cinematic Videos</span>
          <span className="block bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent mt-2">
            with Next-Gen AI
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
          From simple text prompts and static images to high-fidelity animations, character-consistent scenes, and professional 3D motion.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link href="/studio" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all duration-200 shadow-[0_4px_30px_rgba(124,58,237,0.3)] hover:shadow-[0_4px_35px_rgba(124,58,237,0.45)] hover:-translate-y-0.5 active:scale-95">
            Start Creating Free
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/pricing" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-200 hover:-translate-y-0.5">
            View Pricing
          </Link>
        </div>

        {/* Video / Studio Interface Showcase mockup */}
        <div className="relative max-w-5xl mx-auto rounded-2xl border border-slate-800/80 bg-slate-950/40 p-4 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-sm">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-violet-500/10 via-transparent to-cyan-500/10 opacity-30 pointer-events-none" />
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 relative group flex items-center justify-center">
            {/* Mock Canvas with preview */}
            <div className="absolute inset-0 bg-cover bg-center filter brightness-75 group-hover:scale-[1.01] transition-transform duration-700" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop")' }} />
            
            {/* Mock Glass Overlay controls */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl border border-white/10 bg-slate-950/40 backdrop-blur-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-lg bg-violet-600 hover:bg-violet-500 flex items-center justify-center text-white transition-colors shadow-lg">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <div className="text-left">
                  <p className="text-xs font-semibold text-white">Project: Cyberpunk City Cinematic</p>
                  <p className="text-[10px] text-slate-400">Gen-4 Video Model • Active</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                  4K WebM
                </span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-bold text-slate-300">
                  00:08s
                </span>
              </div>
            </div>

            {/* Futuristic play button in center */}
            <div className="relative z-10 w-20 h-20 rounded-full border-2 border-white/20 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white backdrop-blur-sm cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 group">
              <svg className="w-8 h-8 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="border-t border-slate-900 bg-slate-950/40 py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Everything you need for premium AI Video & Art
            </h2>
            <p className="text-slate-400 text-lg">
              Unlock cutting-edge tools to bypass standard workflow bottlenecks and output studio-quality cinematic visual assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl border border-slate-900 hover:border-slate-800 bg-slate-900/20 hover:bg-slate-900/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-100 group-hover:text-violet-300 transition-colors">Frames-to-Video</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Convert still designs or AI images into realistic, fluid animations. Simply upload your frame, define motion, and render.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl border border-slate-900 hover:border-slate-800 bg-slate-900/20 hover:bg-slate-900/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-100 group-hover:text-cyan-300 transition-colors">3D Motion Camera</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Add cinematic camera tracks (pan, orbit, zoom, crane) to static scenes. Fully configurable velocity and path mapping.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl border border-slate-900 hover:border-slate-800 bg-slate-900/20 hover:bg-slate-900/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-100 group-hover:text-indigo-300 transition-colors">Character Consistency</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Tired of shape-shifting characters? Lock key features, clothing, and styles across entire cinematic sequences.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl border border-slate-900 hover:border-slate-800 bg-slate-900/20 hover:bg-slate-900/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-pink-600/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-100 group-hover:text-pink-300 transition-colors">Live Canvas</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Work dynamically with your design team in a shared multiplayer sandbox. Edit timelines and select presets in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Simple, transparent plans
          </h2>
          <p className="text-slate-400 text-lg">
            Choose a plan that fits your production pipeline. Start for free, scale when you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Freemium Plan */}
          <div className="rounded-2xl border border-slate-900 bg-slate-900/10 p-8 flex flex-col justify-between hover:border-slate-800 transition-colors duration-300">
            <div>
              <h3 className="text-lg font-bold text-slate-200 mb-2">Free</h3>
              <p className="text-sm text-slate-400 mb-6">For hobbyists and quick exploration.</p>
              <div className="flex items-baseline text-slate-100 mb-8">
                <span className="text-4xl font-extrabold tracking-tight">$0</span>
                <span className="ml-1 text-sm font-semibold text-slate-500">/month</span>
              </div>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  10 free generation credits/mo
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Standard generation speed
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  720p maximum resolution
                </li>
              </ul>
            </div>
            <Link href="/studio" className="mt-8 block w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white bg-slate-950/50 hover:bg-slate-950 transition-colors">
              Get Started
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="rounded-2xl border-2 border-violet-500 bg-slate-900/30 p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(124,58,237,0.15)] relative scale-105">
            <div className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-violet-600 shadow-md">
              Most Popular
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">Pro</h3>
              <p className="text-sm text-slate-400 mb-6">For professional creators and agencies.</p>
              <div className="flex items-baseline text-slate-100 mb-8">
                <span className="text-4xl font-extrabold tracking-tight">$200</span>
                <span className="ml-1 text-sm font-semibold text-slate-500">/month</span>
              </div>
              <ul className="space-y-4 text-sm text-slate-200 font-medium">
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  2000 fast-generation credits/mo
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Priority generation queue
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Cinematic 4K Resolution
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Advanced 3D camera controls
                </li>
              </ul>
            </div>
            <Link href="/pricing" className="mt-8 block w-full text-center px-4 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-colors shadow-lg shadow-violet-600/20">
              Upgrade to Pro
            </Link>
          </div>

          {/* Business Plan */}
          <div className="rounded-2xl border border-slate-900 bg-slate-900/10 p-8 flex flex-col justify-between hover:border-slate-800 transition-colors duration-300">
            <div>
              <h3 className="text-lg font-bold text-slate-200 mb-2">Business</h3>
              <p className="text-sm text-slate-400 mb-6">For large scale enterprises & studios.</p>
              <div className="flex items-baseline text-slate-100 mb-8">
                <span className="text-4xl font-extrabold tracking-tight">$500</span>
                <span className="ml-1 text-sm font-semibold text-slate-500">/month</span>
              </div>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Unlimited generation credits
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Dedicated cluster nodes (zero queue)
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Custom fine-tuned styles
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  24/7 dedicated support
                </li>
              </ul>
            </div>
            <Link href="/pricing" className="mt-8 block w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white bg-slate-950/50 hover:bg-slate-950 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <span className="text-sm font-bold text-slate-300">VortexLogic</span>
          </div>
          <p className="text-xs text-slate-500">
            &copy; 2026 VortexLogic Inc. All rights reserved. Revamped from Morphic stack.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <Link href="/studio" className="hover:text-slate-200">Studio</Link>
            <Link href="/pricing" className="hover:text-slate-200">Pricing</Link>
            <Link href="/search-engine" className="hover:text-slate-200">Search Engine</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
