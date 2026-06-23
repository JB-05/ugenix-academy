'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import HeroStatCards from '@/components/sections/HeroStatCards'
import { ACADEMY_REGISTRATION_URL } from '@/lib/constants'

function OutlinedPill({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`absolute rotate-[-38deg] rounded-full border border-orange-500/30 bg-transparent ${className}`}
    />
  )
}

export default function HeroSection() {
  const scrollToPrograms = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', '#programs')
  }

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
        <div className="grid min-h-0 items-start gap-10 py-8 sm:gap-16 sm:py-10 md:grid-cols-2 md:items-center md:gap-8 lg:min-h-[900px] lg:grid-cols-[1fr_1.1fr] lg:gap-0 lg:py-0">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-30 flex flex-col items-center justify-center pt-20 text-center sm:pt-22 sm:pb-10 md:items-start md:pb-0 md:pt-16 md:text-left lg:min-h-[900px] lg:items-center lg:justify-center lg:pb-0 lg:pt-0 lg:text-center"
          >
            <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-balance text-text-primary sm:text-5xl lg:text-[3.25rem]">
              Train like you&apos;re already{' '}
              <span className="text-orange-500">working.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[520px] text-base leading-relaxed text-zinc-400 sm:mt-8 sm:text-lg md:mx-0 lg:mx-auto lg:text-[22px]">
              We train students through real-world project simulation
              so they become job-ready before they graduate.
            </p>

            <div className="relative z-40 mt-8 flex w-full max-w-md flex-col items-center justify-center gap-4 sm:mt-10 sm:max-w-none sm:flex-row sm:gap-5 md:justify-start lg:justify-center">
              <a
                href={ACADEMY_REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-primary group w-full sm:w-auto"
              >
                <span className="relative z-10 text-white">Register now</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#programs"
                onClick={scrollToPrograms}
                className="btn-hero-secondary relative z-30 w-full sm:w-auto"
              >
                Explore Programs
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full md:mt-0 lg:min-h-[900px]"
          >
            <div className="relative mx-auto h-[360px] w-full max-w-[420px] overflow-hidden sm:h-[400px] sm:max-w-[500px] md:mx-0 md:h-[420px] md:max-w-none md:overflow-visible lg:absolute lg:inset-0 lg:h-full lg:max-w-none">
              {/* Orange grid mesh — right panel only */}
              <div className="hero-visual-grid pointer-events-none absolute inset-0" aria-hidden />

              {/* Main diagonal orange slab */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[240px] w-[210px] -translate-x-1/2 -translate-y-1/2 rotate-[-38deg] rounded-[32px] bg-gradient-to-br from-orange-400/50 via-orange-500/20 to-transparent sm:h-[300px] sm:w-[260px] sm:rounded-[40px] md:h-[380px] md:w-[340px] lg:left-auto lg:right-[52px] lg:h-[620px] lg:w-[520px] lg:translate-x-0 lg:rounded-[52px]"
              />

              {/* Soft circular glow behind character */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-[44%] h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6200]/15 blur-[60px] sm:h-[240px] sm:w-[240px] sm:blur-[70px] md:h-[300px] md:w-[300px] lg:left-auto lg:right-[72px] lg:h-[460px] lg:w-[460px] lg:translate-x-0 lg:blur-[80px]"
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
                className="pointer-events-none absolute bottom-6 left-2 h-16 w-16 opacity-10 sm:bottom-8 sm:left-4 sm:h-20 sm:w-20 lg:bottom-10 lg:left-5 lg:h-[150px] lg:w-[150px]"
              />

              {/* Character — sized per breakpoint to avoid overlapping CTAs above */}
              <div className="absolute inset-x-0 bottom-0 top-[10%] z-20 flex items-end justify-center sm:top-[8%] md:top-[6%] lg:top-0 lg:justify-end lg:pr-[110px] xl:pr-[120px]">
                <Image
                  src="/illustrations/character-hero@3x.png"
                  alt="Ugenix Student"
                  width={1400}
                  height={933}
                  sizes="(max-width: 1024px) 90vw, 680px"
                  priority
                  fetchPriority="high"
                  className="relative z-20 h-full w-auto max-w-[108%] origin-bottom scale-[1.05] object-contain object-bottom drop-shadow-[0_0_30px_rgba(255,98,0,0.18)] sm:max-w-[110%] sm:scale-[1.08] md:max-w-[105%] md:scale-[1.02] lg:h-[500px] lg:max-w-none lg:scale-[1.35] lg:translate-x-[85px] lg:-translate-y-[95px] [mask-image:linear-gradient(to_bottom,black_0%,black_84%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_84%,transparent_100%)]"
                />
              </div>
            </div>

            {/* Glass stat cards — below character on mobile/tablet, right on desktop */}
            <div className="relative z-20 mx-auto mt-5 w-full max-w-[420px] sm:mt-6 sm:max-w-[500px] md:mt-4 md:max-w-none lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:w-[210px] lg:max-w-[210px] lg:-translate-y-1/2 xl:w-[230px] xl:max-w-[230px]">
              <HeroStatCards />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}