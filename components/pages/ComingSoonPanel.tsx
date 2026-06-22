'use client'

import { motion } from 'framer-motion'
import { programViewport } from '@/components/programs/ProgramCards'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const

export function ComingSoonPanel({
  title,
  description,
  className,
}: {
  title: string
  description: string
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={programViewport}
      transition={{ duration: 0.85, ease: EASE }}
      className={cn(
        'flex flex-col items-center justify-center rounded-[18px] border border-white/[0.08] bg-[#0a0a0a] px-6 py-16 text-center sm:px-10 sm:py-20',
        className
      )}
    >
      <span className="inline-flex items-center rounded-full border border-white/[0.08] bg-[#111111] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
        Coming Soon
      </span>
      <h2 className="mt-6 font-heading text-xl font-semibold text-white sm:text-2xl">{title}</h2>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">{description}</p>
    </motion.div>
  )
}
