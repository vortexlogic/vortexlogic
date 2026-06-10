import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing Plans - VortexLogic',
  description:
    'Choose the best creative plan for your visual pipeline. Flexible pricing for creators, professionals, and enterprises.'
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-20 blur-[120px] bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 rounded-full" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-900 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                VortexLogic
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
              <Link
                href="/studio"
                className="hover:text-slate-100 transition-colors"
              >
                Studio
              </Link>
              <Link
                href="/pricing"
                className="text-slate-100 font-semibold transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/search-engine"
                className="hover:text-slate-100 transition-colors"
              >
                AI Search
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/studio"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all"
            >
              Launch Studio
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Choose Your AI Creative Pipeline
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl">
            Whether you generate simple assets or produce high-fidelity studio
            cinematic campaigns, we have a plan for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
          {/* Free Tier */}
          <div className="rounded-2xl border border-slate-900 bg-slate-950 p-8 flex flex-col justify-between hover:border-slate-800 transition-all">
            <div>
              <div className="mb-4">
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Personal
                </span>
              </div>
              <h2 className="text-2xl font-bold text-slate-100 mb-2">Free</h2>
              <p className="text-sm text-slate-400 mb-6">
                Explore basic creative generative tools.
              </p>
              <div className="flex items-baseline text-slate-100 mb-8">
                <span className="text-5xl font-extrabold tracking-tight">
                  $0
                </span>
                <span className="ml-1 text-sm font-semibold text-slate-500">
                  /mo
                </span>
              </div>

              <div className="border-t border-slate-900 my-6" />

              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-center gap-2.5">
                  <svg
                    className="w-4 h-4 text-violet-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  10 free generation credits/mo
                </li>
                <li className="flex items-center gap-2.5">
                  <svg
                    className="w-4 h-4 text-violet-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Standard Generation Speed
                </li>
                <li className="flex items-center gap-2.5">
                  <svg
                    className="w-4 h-4 text-slate-600 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  No Cinematic 4K Output (720p max)
                </li>
                <li className="flex items-center gap-2.5">
                  <svg
                    className="w-4 h-4 text-slate-600 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  No Custom Aspect Ratios
                </li>
              </ul>
            </div>
            <Link
              href="/studio"
              className="mt-8 block w-full text-center px-4 py-3 rounded-xl text-sm font-semibold border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-900 transition-all"
            >
              Launch Studio Free
            </Link>
          </div>

          {/* Pro Tier */}
          <div className="rounded-2xl border-2 border-violet-500 bg-slate-900/30 p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(124,58,237,0.15)] relative scale-105">
            <div className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-violet-600 shadow-md">
              Most Popular
            </div>
            <div>
              <div className="mb-4">
                <span className="px-2.5 py-1 rounded bg-violet-500/10 border border-violet-500/20 text-[10px] font-bold text-violet-400 uppercase tracking-widest">
                  Professional
                </span>
              </div>
              <h2 className="text-2xl font-bold text-slate-100 mb-2">Pro</h2>
              <p className="text-sm text-slate-400 mb-6">
                Designed for filmmakers, designers, and creators.
              </p>
              <div className="flex items-baseline text-slate-100 mb-8">
                <span className="text-5xl font-extrabold tracking-tight">
                  $200
                </span>
                <span className="ml-1 text-sm font-semibold text-slate-500">
                  /mo
                </span>
              </div>

              <div className="border-t border-slate-900 my-6" />

              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-center gap-2.5">
                  <svg
                    className="w-4 h-4 text-violet-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  2000 Fast-generation credits/mo
                </li>
                <li className="flex items-center gap-2.5">
                  <svg
                    className="w-4 h-4 text-violet-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Priority queue bypass (5x faster)
                </li>
                <li className="flex items-center gap-2.5">
                  <svg
                    className="w-4 h-4 text-violet-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Cinematic 4K Video Exports
                </li>
                <li className="flex items-center gap-2.5">
                  <svg
                    className="w-4 h-4 text-violet-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Custom Aspect Ratios & 3D Tracks
                </li>
                <li className="flex items-center gap-2.5">
                  <svg
                    className="w-4 h-4 text-violet-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  No Watermarks
                </li>
              </ul>
            </div>
            <Link
              href="/studio?tier=pro"
              className="mt-8 block w-full text-center px-4 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all shadow-lg shadow-violet-600/20 active:scale-95"
            >
              Subscribe to Pro
            </Link>
          </div>

          {/* Business Tier */}
          <div className="rounded-2xl border border-slate-900 bg-slate-950 p-8 flex flex-col justify-between hover:border-slate-800 transition-all">
            <div>
              <div className="mb-4">
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Enterprise
                </span>
              </div>
              <h2 className="text-2xl font-bold text-slate-100 mb-2">
                Business
              </h2>
              <p className="text-sm text-slate-400 mb-6">
                Unrestricted rendering power for production teams.
              </p>
              <div className="flex items-baseline text-slate-100 mb-8">
                <span className="text-5xl font-extrabold tracking-tight">
                  $500
                </span>
                <span className="ml-1 text-sm font-semibold text-slate-500">
                  /mo
                </span>
              </div>

              <div className="border-t border-slate-900 my-6" />

              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <svg
                    className="w-4 h-4 text-violet-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Unlimited rendering credits
                </li>
                <li className="flex items-center gap-2.5">
                  <svg
                    className="w-4 h-4 text-violet-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Dedicated cluster (no rendering queue)
                </li>
                <li className="flex items-center gap-2.5">
                  <svg
                    className="w-4 h-4 text-violet-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Custom fine-tuned styles & LoRAs
                </li>
                <li className="flex items-center gap-2.5">
                  <svg
                    className="w-4 h-4 text-violet-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Dedicated accounts manager
                </li>
                <li className="flex items-center gap-2.5">
                  <svg
                    className="w-4 h-4 text-violet-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Multi-user seat collaboration
                </li>
              </ul>
            </div>
            <Link
              href="/studio?tier=business"
              className="mt-8 block w-full text-center px-4 py-3 rounded-xl text-sm font-semibold border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-900 transition-all"
            >
              Contact Sales / Buy Now
            </Link>
          </div>
        </div>

        {/* Feature Comparison */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Compare features
          </h2>
          <div className="border border-slate-900 rounded-2xl bg-slate-950/50 backdrop-blur-sm overflow-hidden">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-900 bg-slate-900/10">
                  <th className="p-4 font-bold text-slate-300">Feature</th>
                  <th className="p-4 font-bold text-slate-300">Free</th>
                  <th className="p-4 font-bold text-slate-300">Pro</th>
                  <th className="p-4 font-bold text-slate-300">Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900 text-slate-400">
                <tr>
                  <td className="p-4 text-slate-200 font-medium">
                    Monthly credits
                  </td>
                  <td className="p-4">10</td>
                  <td className="p-4 text-violet-400 font-semibold">
                    2,000 (Fast)
                  </td>
                  <td className="p-4 text-cyan-400 font-semibold">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200 font-medium">
                    Max resolution
                  </td>
                  <td className="p-4">720p</td>
                  <td className="p-4">4K Cinematic</td>
                  <td className="p-4">8K (Upscaled)</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200 font-medium">
                    Frames-to-Video models
                  </td>
                  <td className="p-4">Flux Schnell</td>
                  <td className="p-4">Runway Gen-4 + Kling</td>
                  <td className="p-4">Runway Gen-4 + Kling + Sora</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200 font-medium">
                    Character locking
                  </td>
                  <td className="p-4">No</td>
                  <td className="p-4">Yes</td>
                  <td className="p-4">Yes (Custom upload)</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200 font-medium">
                    Team collaboration
                  </td>
                  <td className="p-4">No</td>
                  <td className="p-4">Up to 3 seats</td>
                  <td className="p-4">Unlimited seats</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-slate-900 bg-slate-950">
              <h3 className="font-bold text-slate-200 mb-2">
                Do I own the copyrights to the generated files?
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Yes. Any assets generated through the VortexLogic studio on paid
                plans (Pro and Business) are 100% owned by you for both
                commercial and non-commercial utilization.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-slate-900 bg-slate-950">
              <h3 className="font-bold text-slate-200 mb-2">
                Can I cancel my subscription anytime?
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Absolutely. You can cancel your monthly subscription at any time
                with a single click inside the Studio dashboard billing
                settings.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
            <span className="text-sm font-bold text-slate-300">
              VortexLogic
            </span>
          </div>
          <p className="text-xs text-slate-500">
            &copy; 2026 VortexLogic Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
