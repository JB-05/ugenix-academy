'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Box,
  FlaskConical,
  Laptop,
  Target,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'
import type { CatalogProgram, PastProgram, ProgramIconId } from '@/lib/programs-data'
import { cn } from '@/lib/utils'

const CARD_CLASS =
  'relative flex h-full flex-col overflow-hidden rounded-[18px] border bg-[#0a0a0a] p-5 sm:p-6'

const EASE = [0.22, 1, 0.36, 1] as const
const HOVER_TRANSITION = { duration: 0.75, ease: EASE }

export const programViewport = { once: true, margin: '-60px' as const }

const hoverVariants = {
  rest: {},
  hover: {},
} as const

const ambientVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: HOVER_TRANSITION },
}

const contentFloatVariants = {
  rest: { y: 0 },
  hover: { y: -4, transition: HOVER_TRANSITION },
}

const descriptionVariants = {
  rest: { opacity: 0.85 },
  hover: { opacity: 1, transition: HOVER_TRANSITION },
}

const ICON_MAP: Record<ProgramIconId, LucideIcon> = {
  box: Box,
  'trending-up': TrendingUp,
  laptop: Laptop,
  flask: FlaskConical,
  target: Target,
}

function CardAmbientLayer({ warm = false }: { warm?: boolean }) {
  return (
    <motion.div
      variants={ambientVariants}
      className="pointer-events-none absolute inset-0 rounded-[18px]"
      style={{
        background: warm
          ? 'radial-gradient(ellipse 100% 90% at 50% 0%, rgba(255,107,0,0.14) 0%, transparent 58%)'
          : 'radial-gradient(ellipse 90% 80% at 20% 15%, rgba(228,87,46,0.1) 0%, transparent 58%)',
      }}
      aria-hidden="true"
    />
  )
}

export function ProgramCatalogCard({
  program,
  index,
  className,
}: {
  program: CatalogProgram
  index: number
  className?: string
}) {
  const Icon = ICON_MAP[program.icon]
  const isActive = program.status === 'active'

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={programViewport}
      transition={{ duration: 0.95, delay: 0.1 + index * 0.1, ease: EASE }}
      className={cn('h-full', className)}
    >
      <motion.article
        initial="rest"
        whileHover={isActive ? 'hover' : undefined}
        variants={hoverVariants}
        className={cn(
          CARD_CLASS,
          isActive ? 'border-orange-500/45' : 'border-white/[0.06] opacity-80'
        )}
      >
        {isActive && (
          <div
            className="pointer-events-none absolute inset-0 rounded-[18px]"
            style={{
              background:
                'radial-gradient(ellipse 120% 80% at 50% -10%, rgba(228,87,46,0.2) 0%, transparent 55%)',
            }}
            aria-hidden="true"
          />
        )}
        <CardAmbientLayer warm={isActive} />

        <div className="relative z-10 mb-4 flex justify-center">
          {isActive ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/40 bg-green-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" aria-hidden />
              Active
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full border border-white/[0.08] bg-[#111111] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Coming Soon
            </span>
          )}
        </div>

        <motion.div variants={isActive ? contentFloatVariants : undefined} className="relative z-10 flex flex-1 flex-col">
          <Icon
            className={cn('h-7 w-7', isActive ? 'text-orange-500' : 'text-zinc-600')}
            strokeWidth={1.5}
          />
          <h3
            className={cn(
              'mt-4 font-heading text-lg font-semibold leading-tight',
              isActive ? 'text-white' : 'text-zinc-300'
            )}
          >
            {program.name}
          </h3>
          <motion.p
            variants={isActive ? descriptionVariants : undefined}
            className={cn(
              'mt-2 flex-1 text-sm leading-relaxed',
              isActive ? 'text-zinc-400' : 'text-zinc-600'
            )}
          >
            {program.description}
          </motion.p>

          <div className="mt-6">
            {program.cta === 'explore' ? (
              <Link
                href={program.href}
                className="btn-hero-primary-sm group inline-flex w-full items-center justify-center gap-2"
              >
                <span className="relative z-10 text-white">Explore Now</span>
                <ArrowRight size={16} className="relative z-10 text-white" strokeWidth={2} />
              </Link>
            ) : (
              <span className="inline-flex cursor-default items-center gap-1.5 text-sm font-medium text-zinc-600">
                Coming Soon
              </span>
            )}
          </div>
        </motion.div>
      </motion.article>
    </motion.div>
  )
}

export function PastProgramCard({ program, index }: { program: PastProgram; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={programViewport}
      transition={{ duration: 0.95, delay: 0.1 + index * 0.12, ease: EASE }}
      className="h-full"
    >
      <motion.article
        initial="rest"
        whileHover="hover"
        variants={hoverVariants}
        className={cn(CARD_CLASS, 'border-white/[0.08]')}
      >
        <CardAmbientLayer />
        <Link href={program.href} className="relative z-10 flex h-full flex-col">
          <motion.div variants={contentFloatVariants} className="flex h-full flex-col">
            <span className="inline-flex w-fit rounded-full border border-white/[0.1] bg-[#111111] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
              {program.status}
            </span>
            <h3 className="mt-4 font-heading text-lg font-semibold leading-tight text-white">
              {program.name}
            </h3>
            <motion.p
              variants={descriptionVariants}
              className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400"
            >
              {program.description}
            </motion.p>
            {program.meta && (
              <p className="mt-3 text-xs text-zinc-500">{program.meta}</p>
            )}
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white">
              View details
              <ArrowRight size={14} strokeWidth={2} className="text-orange-500" />
            </span>
          </motion.div>
        </Link>
      </motion.article>
    </motion.div>
  )
}
