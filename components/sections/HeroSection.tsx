'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'

export default function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('why-choose')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-12 sm:pt-32 md:pt-34 lg:pt-34 md:pb-16 overflow-hidden">
      {/* Dotted Background inspired by uploaded reference */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-offwhite via-white to-neutral-offwhite">
        <div className="absolute inset-0 pointer-events-none">
          {/* Top-left dotted area (hidden on small screens to avoid overlap) */}
          <div className="hidden sm:block absolute -top-16 -left-16 h-72 w-72 rounded-3xl bg-[radial-gradient(circle,rgba(100,116,139,0.75)_1.2px,transparent_0)] bg-[length:16px_16px] opacity-80" />

          {/* Bottom-right dotted area */}
          <div className="absolute -bottom-16 -right-16 h-80 w-80 rounded-3xl bg-[radial-gradient(circle,rgba(100,116,139,0.75)_1.2px,transparent_0)] bg-[length:16px_16px] opacity-80" />

          {/* Mid-right soft dotted blob */}
          <div className="absolute top-10 right-1/4 h-40 w-40 rounded-[3rem] bg-[radial-gradient(circle,rgba(148,163,184,0.55)_1px,transparent_0)] bg-[length:15px_15px] opacity-70" />

          {/* Bottom-center faint arc of dots */}
          <div className="absolute -bottom-20 left-1/3 h-40 w-56 rounded-[999px] bg-[radial-gradient(circle,rgba(148,163,184,0.45)_1px,transparent_0)] bg-[length:18px_18px] opacity-60" />

          {/* Soft central dotted field behind content */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-56 w-80 rounded-[3rem] bg-[radial-gradient(circle,rgba(148,163,184,0.35)_1px,transparent_0)] bg-[length:16px_16px] opacity-55" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h1 className="mb-4 md:mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-deep leading-[1.05]">
              <span className="block">Unlock your tech career</span>
              <span className="block text-brand">with practical AI skills</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-muted mb-6 md:mb-8 leading-relaxed max-w-xl">
              Build job-ready, portfolio-backed skills with industry practitioners who teach from real projects, not just theory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/courses/prompt-engineering">
                <HoverBorderGradient
                  as="button"
                  containerClassName="rounded-full w-full sm:w-auto"
                  className="w-full sm:w-auto bg-brand text-white px-8 py-4 font-semibold shadow-lg shadow-brand/30 hover:-translate-y-0.5 transition-transform duration-200 flex items-center justify-center"
                >
                  Explore Courses
                </HoverBorderGradient>
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-slate-300/80 bg-white/80 text-slate-deep hover:border-brand/70 hover:bg-brand/5 hover:text-brand transition-colors font-medium text-base flex items-center justify-center sm:justify-start shadow-sm shadow-slate-900/5"
              >
                Learn About the Academy
              </Link>
            </div>
            <p className="mt-3 text-sm text-neutral-muted">
              Next cohort starts soon. No prior experience required.
            </p>
          </motion.div>

          {/* Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            {/* Photo-led composition inspired by reference designs */}
            <div className="relative w-full max-w-lg aspect-square">
              {/* Main Organic Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-light/10 to-coral-light/10 rounded-[4rem] rotate-3 backdrop-blur-sm border border-white/40 shadow-2xl shadow-brand/10" />

              <div className="absolute inset-6 z-10">
                {/* Primary learner image */}
                <div className="relative h-full w-full rounded-[3rem] overflow-hidden bg-white shadow-xl shadow-slate-900/5">
                  <img
                    src="/illustrations/heor.svg"
                    alt="Learner exploring AI skills"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Floating tag */}
                <div className="absolute -top-4 right-0 sm:-right-4 rounded-full bg-white/90 backdrop-blur px-4 py-2 shadow-md shadow-slate-900/10 flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-brand" />
                  <span className="text-xs font-medium text-slate-deep">Live, cohort-based learning</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={scrollToNext}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-neutral-muted hover:text-brand transition-colors duration-200 ease-in-out cursor-pointer"
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center gap-2">
          <svg className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span className="text-[0.65rem] sm:text-xs font-medium tracking-[0.3em] uppercase">
            Explore
          </span>
        </div>
      </motion.button>
    </section>
  )
}


