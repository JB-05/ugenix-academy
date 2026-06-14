'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function FloatingPill({
  className,
  delay = 0,
}: {
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.6, 1, 0.6],
        y: [0, -12, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className={`absolute rounded-full bg-gradient-to-r from-orange-500 to-orange-400 ${className}`}
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
        <div className="grid min-h-[760px] items-center lg:grid-cols-[1fr_1.1fr]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-30 pt-20 lg:pt-0"
          >
            <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-[3.25rem]"> Train like you&apos;re already{' '} <span className="text-orange-500">working.</span> </h1>

            <p
              className="
              mt-8
              max-w-[520px]
              text-lg
              leading-relaxed
              text-zinc-400
              lg:text-[22px]
              "
            >
              We train students through real-world project simulation
              so they become job-ready before they graduate.
            </p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Link
                href="/register"
                className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-[#ff6200]
                px-8
                py-4
                text-base
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-orange-500
                "
              >
                Join Free Demo
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/#programs"
                className="
                inline-flex
                items-center
                gap-3
                text-lg
                font-medium
                text-white
                transition-colors
                hover:text-orange-400
                "
              >
                Explore Programs
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.9,
    delay: 0.15,
  }}
  className="
  relative
  flex
  min-h-[760px]
  items-center
  justify-center
  lg:justify-end
  "
>
  {/* Large Orange Diagonal Shape */}
  <div
    className="
    absolute
    right-[60px]
    top-1/2
    h-[650px]
    w-[520px]
    -translate-y-1/2
    rotate-[-35deg]
    rounded-[90px]
    bg-gradient-to-br
    from-orange-500/40
    via-orange-500/15
    to-transparent
    blur-sm
    "
  />

  {/* Secondary Glow */}
  <div
    className="
    absolute
    right-[100px]
    top-1/2
    h-[500px]
    w-[500px]
    -translate-y-1/2
    rounded-full
    bg-orange-500/20
    blur-[120px]
    "
  />

  {/* Floating Pills */}
  <FloatingPill
    delay={0}
    className="right-[180px] top-[12px] h-[16px] w-[160px]"
  />

  <FloatingPill
    delay={0.5}
    className="right-[40px] top-[180px] h-[22px] w-[180px]"
  />

  <FloatingPill
    delay={1}
    className="right-[140px] bottom-[180px] h-[20px] w-[150px]"
  />

  <FloatingPill
    delay={1.5}
    className="right-[10px] bottom-[60px] h-[24px] w-[160px]"
  />

  {/* Outline Elements */}
  <div
    className="
    absolute
    right-[140px]
    top-[120px]
    h-[22px]
    w-[220px]
    rotate-45
    rounded-full
    border
    border-orange-500/25
    "
  />

  <div
    className="
    absolute
    right-[240px]
    bottom-[130px]
    h-[22px]
    w-[240px]
    rotate-45
    rounded-full
    border
    border-orange-500/25
    "
  />

  {/* Dot Matrix */}
  <div className="absolute right-[40px] top-[6px] z-20 grid grid-cols-5 gap-3">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="h-1.5 w-1.5 rounded-full bg-orange-500"
      />
    ))}
  </div>

  {/* Triangle Right */}
  <div
    className="
    absolute
    bottom-[92px]
    right-[42px]
    h-0
    w-0
    border-l-[11px]
    border-r-[11px]
    border-b-[20px]
    border-l-transparent
    border-r-transparent
    border-b-orange-500/40
    "
  />

  {/* Triangle Near Cube */}
  <div
    className="
    absolute
    bottom-[112px]
    left-[48%]
    h-0
    w-0
    border-l-[8px]
    border-r-[8px]
    border-b-[14px]
    border-l-transparent
    border-r-transparent
    border-b-orange-500/30
    "
  />

  {/* Cube */}
  <Image
    src="/assets/hero-cube-network.svg"
    alt=""
    width={170}
    height={170}
    aria-hidden
    className="
    absolute
    bottom-[15px]
    left-[45%]
    w-[140px]
    opacity-20
    "
  />

  {/* Character Container */}
  <div
    className="
    relative
    z-20
    flex
    items-end
    justify-center
    overflow-hidden
    "
  >
    {/* Ground Shadow */}
    <div
      className="
      absolute
      bottom-[20px]
      left-1/2
      h-[40px]
      w-[280px]
      -translate-x-1/2
      rounded-full
      bg-black/50
      blur-[30px]
      "
    />

<Image
  src="/illustrations/character-hero@3x.png"
  alt="Ugenix Student"
  width={900}
  height={1100}
  priority
  className="
  relative
  z-20
  h-auto
  w-[900px]
  max-w-none
  translate-y-[40px]
  drop-shadow-[0_0_50px_rgba(255,102,0,0.25)]
  [mask-image:linear-gradient(to_bottom,black_0%,black_78%,transparent_100%)]
  [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_78%,transparent_100%)]
  "
/>

  </div>
</motion.div>
        </div>
      </div>
    </section>
  )
}