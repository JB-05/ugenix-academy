'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

function OutlinedPill({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        'absolute rotate-[-38deg] rounded-full border border-orange-500/25 bg-transparent',
        className
      )}
    />
  )
}

function GradientSlab({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        'absolute rotate-[-38deg] rounded-[28px] bg-gradient-to-br from-orange-400/35 via-orange-500/14 to-transparent',
        className
      )}
    />
  )
}

function StrokeShape({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        'absolute border border-zinc-400/20 bg-transparent',
        className
      )}
    />
  )
}

/** Mini hero-panel: grid mesh, diagonal slab, pills, wireframe cube */
function HeroStyleDiagram({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute', className)} aria-hidden>
      <div className="hero-visual-grid absolute inset-0 rounded-2xl" />
      <GradientSlab className="left-1/2 top-1/2 h-[7.5rem] w-[6.5rem] -translate-x-1/2 -translate-y-1/2 opacity-90" />
      <OutlinedPill className="left-[10%] top-[16%] h-2 w-[7rem] opacity-40" />
      <OutlinedPill className="right-[8%] top-[48%] h-2.5 w-[8rem] border-orange-500/20 opacity-30" />
      <OutlinedPill className="bottom-[18%] left-[14%] h-2 w-[6rem] border-orange-500/30 opacity-35" />
      <div className="absolute left-1/2 top-[42%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6200]/10 blur-2xl" />
      <Image
        src="/assets/hero-cube-network.svg"
        alt=""
        width={96}
        height={96}
        className="absolute bottom-2 right-3 h-14 w-14 opacity-[0.14]"
      />
    </div>
  )
}

export function MissionPossibleBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 min-h-full overflow-hidden" aria-hidden>
      <div className="absolute inset-0 hero-dark-grid opacity-[0.22]" />

      {/* Ambient gradient washes */}
      <div className="absolute -left-28 top-[6%] h-80 w-80 rounded-full bg-gradient-to-br from-orange-500/[0.08] to-transparent blur-[100px]" />
      <div className="absolute -right-20 top-[30%] h-72 w-72 rounded-full bg-gradient-to-bl from-zinc-400/[0.06] to-transparent blur-[90px]" />
      <div className="absolute left-[18%] top-[58%] h-96 w-96 rounded-full bg-gradient-to-tr from-orange-600/[0.07] via-orange-500/[0.03] to-transparent blur-[120px]" />
      <div className="absolute -right-16 bottom-[8%] h-64 w-64 rounded-full bg-gradient-to-tl from-zinc-500/[0.06] to-transparent blur-[80px]" />
      <div className="absolute left-[40%] top-[82%] h-56 w-56 rounded-full bg-gradient-to-r from-orange-500/[0.05] to-zinc-500/[0.04] blur-[100px]" />

      {/* Stroke shapes & gradient slabs — page margins */}
      <GradientSlab className="right-[6%] top-[4%] hidden h-52 w-44 opacity-35 md:block" />
      <div
        aria-hidden
        className="absolute left-[-1%] top-[22%] hidden h-40 w-36 rotate-[-52deg] rounded-[28px] bg-gradient-to-br from-zinc-400/20 via-zinc-500/10 to-transparent opacity-30 sm:block"
      />
      <StrokeShape className="left-[3%] top-[44%] h-44 w-60 rotate-6 rounded-2xl border-orange-500/15 opacity-25" />
      <OutlinedPill className="right-[10%] top-[40%] h-3 w-44 opacity-25" />
      <StrokeShape className="right-[5%] top-[56%] h-36 w-36 -rotate-12 rounded-full border-zinc-400/18 opacity-20" />
      <div
        aria-hidden
        className="absolute bottom-[24%] left-[8%] h-48 w-40 rotate-[-28deg] rounded-[32px] bg-gradient-to-tl from-orange-400/25 via-transparent to-zinc-500/10 opacity-30"
      />
      <StrokeShape className="bottom-[14%] right-[12%] h-28 w-52 -rotate-3 rounded-xl border-orange-500/18 opacity-[0.22]" />

      {/* Hero-style diagrams in open margin zones between sections */}
      <HeroStyleDiagram className="right-[1%] top-[10%] h-48 w-56 opacity-[0.55] max-lg:hidden" />
      <HeroStyleDiagram className="left-[0%] top-[26%] h-44 w-52 opacity-[0.5] max-md:hidden" />
      <HeroStyleDiagram className="right-[0%] top-[41%] h-48 w-56 opacity-[0.5]" />
      <HeroStyleDiagram className="left-[1%] top-[56%] h-44 w-52 opacity-[0.45] max-lg:hidden" />
      <HeroStyleDiagram className="right-[1%] top-[70%] h-48 w-56 opacity-[0.5]" />
      <HeroStyleDiagram className="left-[0%] top-[84%] h-44 w-52 opacity-[0.45] max-md:hidden" />
    </div>
  )
}
