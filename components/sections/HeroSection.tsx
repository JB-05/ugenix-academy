'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function GlowingPill({
  className = '',
  delayClass = '',
  durationClass = '',
}: {
  className?: string
  delayClass?: string
  durationClass?: string
}) {
  return (
    <div
      aria-hidden
      className={`hero-pill-glow hero-pill-float-rotated absolute rounded-full bg-gradient-to-r from-orange-400 to-orange-500 ${delayClass} ${durationClass} ${className}`}
    />
  )
}

function OutlinedPill({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`absolute rotate-[-38deg] rounded-full border border-orange-500/30 bg-transparent ${className}`}
    />
  )
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505]">
      {/* Background Grid */}
      <div className="absolute inset-0 hero-grid opacity-50" />

      {/* Noise */}
      <div className="absolute inset-0 hero-noise opacity-[0.03]" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-[160px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid min-h-0 items-center gap-10 py-10 sm:gap-12 sm:py-14 lg:min-h-[760px] lg:grid-cols-[1fr_1.1fr] lg:gap-0 lg:py-0">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-30 pt-12 sm:pt-16 lg:pt-0"
          >
            <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-[3.25rem]">
              Train like you&apos;re already{' '}
              <span className="text-orange-500">working.</span>
            </h1>

            <p className="mt-6 max-w-[520px] text-base leading-relaxed text-zinc-400 sm:mt-8 sm:text-lg lg:text-[22px]">
              We train students through real-world project simulation
              so they become job-ready before they graduate.
            </p>

            <div className="mt-8 flex w-full max-w-md flex-col gap-4 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:gap-5">
              <Link href="/register" className="btn-hero-primary group w-full sm:w-auto">
                <span className="relative z-10 text-white">Join Free Demo</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link href="/#programs" className="btn-hero-secondary w-full sm:w-auto">
                Explore Programs
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex w-full justify-center overflow-hidden lg:min-h-[720px] lg:justify-end"
          >
            <div className="relative h-[420px] w-full max-w-[420px] sm:h-[520px] sm:max-w-[520px] md:h-[560px] md:max-w-[600px] lg:h-[720px] lg:max-w-none">
              {/* Orange grid mesh — right panel only */}
              <div className="hero-visual-grid pointer-events-none absolute inset-0" aria-hidden />

              {/* Main diagonal orange slab */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[240px] -translate-x-1/2 -translate-y-1/2 rotate-[-38deg] rounded-[32px] bg-gradient-to-br from-orange-400/50 via-orange-500/20 to-transparent sm:h-[380px] sm:w-[320px] sm:rounded-[40px] md:h-[480px] md:w-[400px] lg:left-auto lg:right-[52px] lg:h-[620px] lg:w-[520px] lg:translate-x-0 lg:rounded-[52px]"
              />

              {/* Soft circular glow behind character */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-[44%] h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6200]/15 blur-[60px] sm:h-[300px] sm:w-[300px] sm:blur-[70px] lg:left-auto lg:right-[72px] lg:h-[460px] lg:w-[460px] lg:translate-x-0 lg:blur-[80px]"
              />

              {/* Glowing pills — aligned to diagonal flow */}
              <GlowingPill className="left-[18%] top-[18%] h-2.5 w-[100px] sm:left-[20%] sm:top-[16%] sm:h-3 sm:w-[120px] lg:right-[26%] lg:left-auto lg:top-[14%] lg:h-3.5 lg:w-[148px]" durationClass="[animation-duration:6s]" />
              <GlowingPill
                className="right-[10%] top-[32%] h-2 w-[88px] sm:h-2.5 sm:w-[108px] lg:right-[6%] lg:top-[30%] lg:h-3 lg:w-[128px]"
                delayClass="hero-pill-float-delay-1"
                durationClass="[animation-duration:6.4s]"
              />
              <GlowingPill
                className="left-[22%] top-[52%] h-2.5 w-[112px] sm:h-3 sm:w-[132px] lg:right-[22%] lg:left-auto lg:top-[50%] lg:h-4 lg:w-[168px]"
                delayClass="hero-pill-float-delay-2"
                durationClass="[animation-duration:7s]"
              />
              <GlowingPill
                className="right-[12%] bottom-[28%] h-2.5 w-[96px] sm:h-3 sm:w-[116px] lg:right-[8%] lg:bottom-[26%] lg:h-3.5 lg:w-[136px]"
                delayClass="hero-pill-float-delay-3"
                durationClass="[animation-duration:6.8s]"
              />

              {/* Outlined pills */}
              <OutlinedPill className="left-[14%] top-[28%] h-3 w-[140px] border-orange-500/30 opacity-30 sm:left-[16%] sm:h-[14px] sm:w-[170px] lg:right-[30%] lg:left-auto lg:top-[24%] lg:h-[18px] lg:w-[212px]" />
              <OutlinedPill className="right-[14%] top-[44%] h-3 w-[150px] border-orange-500/25 opacity-25 sm:h-[14px] sm:w-[180px] lg:right-[14%] lg:top-[42%] lg:h-[18px] lg:w-[228px]" />
              <OutlinedPill className="left-[20%] bottom-[36%] h-3 w-[128px] border-orange-500/35 opacity-35 sm:h-3.5 sm:w-[150px] lg:right-[26%] lg:left-auto lg:bottom-[34%] lg:h-4 lg:w-[188px]" />

              {/* Wireframe cube — bottom-left, subtle */}
              <Image
                src="/assets/hero-cube-network.svg"
                alt=""
                width={150}
                height={150}
                aria-hidden
                className="pointer-events-none absolute bottom-6 left-2 h-20 w-20 opacity-10 sm:bottom-8 sm:left-4 sm:h-24 sm:w-24 lg:bottom-10 lg:left-5 lg:h-[150px] lg:w-[150px]"
              />

              {/* Character — ~75% of rotated slab visual height on smaller screens */}
              <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-center lg:justify-end">
                <Image
                  src="/illustrations/character-hero@3x.png"
                  alt="Ugenix Student"
                  width={720}
                  height={880}
                  priority
                  className="relative z-20 w-auto object-contain object-bottom drop-shadow-[0_0_30px_rgba(255,98,0,0.18)] h-[276px] sm:h-[373px] md:h-[468px] lg:h-auto lg:w-[720px] lg:max-w-none lg:translate-x-[40px] lg:translate-y-[30px] [mask-image:linear-gradient(to_bottom,black_0%,black_84%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_84%,transparent_100%)]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}