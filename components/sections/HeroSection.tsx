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
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10 bg-neutral-offwhite">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-brand-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-coral-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-violet-soft rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
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
            <h1 className="mb-6 md:mb-8 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-deep leading-[1.1]">
              Master practical skills from industry practitioners
            </h1>
            <p className="text-lg md:text-xl text-neutral-muted mb-8 md:mb-10 leading-relaxed max-w-xl">
              Learn technologies that matter in real work environments from active practitioners bridging theory and application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/courses/prompt-engineering">
                <HoverBorderGradient
                  as="button"
                  containerClassName="rounded-full"
                  className="bg-white text-slate-900 px-8 py-4 font-medium transition-transform duration-200"
                >
                  Explore Courses
                </HoverBorderGradient>
              </Link>
              <Link
                href="/about"
                className="btn-secondary-baseline px-6 py-4 text-slate-deep hover:text-brand transition-colors font-medium text-lg flex items-center justify-center sm:justify-start"
              >
                Learn About the Academy
              </Link>
            </div>
          </motion.div>

          {/* Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            {/* Abstract Composition replacing the static image */}
            <div className="relative w-full max-w-lg aspect-square">
              {/* Main Organic Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-light/10 to-coral-light/10 rounded-[4rem] rotate-3 backdrop-blur-sm border border-white/40 shadow-2xl shadow-brand/10" />

              {/* Floating Elements removed as per request */}

              {/* Central Illustration (reusing existing SVG but styled differently) */}
              <div className="absolute inset-4 z-10 flex items-center justify-center">
                <img
                  src="/illustrations/heor.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain drop-shadow-2xl opacity-90 hover:scale-105 transition-transform duration-500"
                />
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-neutral-muted hover:text-brand transition-colors duration-200 ease-in-out cursor-pointer"
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium tracking-widest uppercase">Explore</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.button>
    </section>
  )
}


