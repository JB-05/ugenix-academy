'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import HeroStatCards from './HeroStatCards'
import HeroTrustLogos, { ArrowIcon } from './HeroTrustLogos'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-bg-950">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 hero-dark-grid opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg-950 via-bg-900/50 to-bg-950" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-28 lg:pb-20 lg:pt-32">
        <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-12 xl:gap-6">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="xl:col-span-4 xl:pr-4"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-orange-500">
              BE Industry-Ready, Become a ChangeMaker
            </p>

            <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-[3.25rem]">
              Train like you&apos;re already{' '}
              <span className="text-orange-500">working.</span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary lg:text-lg">
              We train students through real-world project simulation so they become
              job-ready before they graduate.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/register" className="btn-primary-orange w-full sm:w-auto">
                Join Free Demo
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <Link href="/#programs" className="btn-text-link w-full sm:w-auto">
                Explore Programs
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>

            <div className="hidden xl:block">
              <HeroTrustLogos />
            </div>
          </motion.div>

          {/* Center — Character + Cube */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative xl:col-span-4"
          >
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[340px]">
              {/* Cube wireframe behind character */}
              <div className="absolute inset-0 flex items-center justify-center animate-glow-pulse">
                <Image
                  src="/assets/hero-cube-network.svg"
                  alt=""
                  width={320}
                  height={320}
                  className="h-auto w-[85%] opacity-80"
                  aria-hidden="true"
                  priority
                />
              </div>

              {/* Character image — replace with /assets/hero-character.webp when available */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/assets/hero-mockup-reference.png"
                  alt="Ugenix Academy learner with laptop"
                  fill
                  className="object-cover object-[48%_28%] scale-[2.8] sm:scale-[2.6]"
                  priority
                  sizes="(max-width: 768px) 280px, 340px"
                />
              </div>

              {/* Bottom fade into background */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg-950 to-transparent" />
            </div>
          </motion.div>

          {/* Right — Stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="xl:col-span-4"
          >
            <HeroStatCards />
          </motion.div>
        </div>

        {/* Trust logos — visible on mobile/tablet */}
        <div className="xl:hidden">
          <HeroTrustLogos />
        </div>
      </div>
    </section>
  )
}
