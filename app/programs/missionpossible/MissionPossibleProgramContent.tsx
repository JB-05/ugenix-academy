'use client'

import { motion } from 'framer-motion'
import {
  Award,
  ClipboardCheck,
  Users,
  type LucideIcon,
} from 'lucide-react'
import {
  CORE_OUTCOMES,
  GAMIFICATION,
  MISSION_POSSIBLE_TAGLINE,
  PHASE_HACKATHON,
  PHASE_ONE,
  PHASE_THREE,
  PROGRAM_DURATION,
  PROGRAM_MODE,
  PROGRAM_MODE_DETAIL,
  PROGRAM_PHASES,
} from '@/lib/mission-possible-data'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const
const VIEWPORT = { once: true, amount: 0.15 as const }

const CONTAINER = 'relative mx-auto max-w-[1440px] px-[clamp(20px,4vw,64px)]'
const SECTION_PY = 'py-20 sm:py-28'

const SURFACE = cn(
  'rounded-[24px] border border-white/[0.06]',
  'bg-gradient-to-b from-white/[0.028] to-white/[0.012]',
  'shadow-[0_10px_40px_rgba(0,0,0,0.28)]',
  'transition-[transform,box-shadow,border-color] duration-300 ease-out',
  'hover:border-orange-500/[0.12]'
)

const INNER_CARD = cn(
  'rounded-2xl border border-white/[0.06]',
  'bg-gradient-to-b from-white/[0.028] to-white/[0.012]',
  'shadow-[0_10px_40px_rgba(0,0,0,0.22)]',
  'transition-[transform,box-shadow,border-color] duration-300 ease-out',
  'hover:-translate-y-[3px] hover:border-orange-500/[0.22]',
  'hover:shadow-[0_10px_40px_rgba(0,0,0,0.28),0_0_24px_rgba(255,98,0,0.06)]'
)

const DAY_CARD = cn(
  'rounded-xl border border-zinc-400/[0.08]',
  'bg-gradient-to-b from-zinc-400/[0.07] via-zinc-500/[0.025] to-transparent',
  'p-4 sm:p-5'
)

function sectionReveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT,
    transition: { duration: 0.85, delay, ease: EASE },
  }
}

function cardReveal(index: number, baseDelay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT,
    transition: { duration: 0.85, delay: baseDelay + index * 0.06, ease: EASE },
  }
}

export function SectionSeparator() {
  return (
    <div className="relative px-[clamp(20px,4vw,64px)]" aria-hidden>
      <div className="mx-auto max-w-[1440px]">
        <div className="relative h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/[0.12] to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-10 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.05] blur-2xl" />
        </div>
        <div
          className="mt-3 h-6 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,98,0,0.9) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />
      </div>
    </div>
  )
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-heading text-[11px] font-medium uppercase tracking-[0.28em] text-orange-500">
      {children}
    </p>
  )
}

function SectionShell({
  children,
  lead = false,
  tightTop = false,
  compactBottom = false,
}: {
  children: React.ReactNode
  /** Tighter top spacing — use for the first content block after the hero */
  lead?: boolean
  /** Less space above — use when following a related section */
  tightTop?: boolean
  /** Less space below — pairs well before a tightTop sibling */
  compactBottom?: boolean
}) {
  return (
    <section
      className={cn(
        'relative',
        lead && 'pb-16 pt-2 sm:pb-20 sm:pt-4',
        !lead && tightTop && 'pb-20 pt-2 sm:pb-28 sm:pt-4',
        !lead && !tightTop && SECTION_PY,
        compactBottom && '!pb-8 sm:!pb-10'
      )}
    >
      {!lead && !tightTop && <SectionSeparator />}
      <div className={CONTAINER}>{children}</div>
    </section>
  )
}

function OverviewSection() {
  return (
    <SectionShell lead compactBottom>
      <motion.div {...sectionReveal()} className={cn(SURFACE, 'relative overflow-hidden p-5 sm:p-6 lg:p-8')}>
        <div
          aria-hidden
          className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-orange-500/[0.08] blur-3xl"
        />

        <SectionEyebrow>Program Overview</SectionEyebrow>

        <h2 className="mt-3 font-heading text-lg font-semibold text-white sm:text-xl">
          {MISSION_POSSIBLE_TAGLINE}
        </h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {[PROGRAM_DURATION, PROGRAM_MODE, `${PROGRAM_PHASES.length} Phases`, PROGRAM_MODE_DETAIL].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {PROGRAM_PHASES.map((phase, index) => (
            <motion.div
              key={phase.name}
              {...cardReveal(index)}
              className={cn(INNER_CARD, 'px-4 py-3.5')}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-orange-500">
                  {phase.duration}
                </p>
                <span
                  className={cn(
                    'shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em]',
                    phase.mode === 'Offline'
                      ? 'border border-orange-500/30 bg-orange-500/10 text-orange-400'
                      : 'border border-sky-500/30 bg-sky-500/10 text-sky-400'
                  )}
                >
                  {phase.mode}
                </span>
              </div>
              <p className="mt-2 text-sm font-medium leading-snug text-white">{phase.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 border-t border-white/[0.06] pt-5">
          <SectionEyebrow>Core Program Outcomes</SectionEyebrow>
          <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {CORE_OUTCOMES.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2 text-sm leading-snug text-zinc-400">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-500" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </SectionShell>
  )
}

const PHASE_ONE_SPANS = [
  'md:col-span-3', // Day 01 — prominent
  'md:col-span-1', // Day 02
  'md:col-span-1', // Day 03
  'md:col-span-1', // Day 04
] as const

function PhaseOneDayCard({
  day,
  index,
  spanClass,
}: {
  day: (typeof PHASE_ONE.days)[number]
  index: number
  spanClass: string
}) {
  const multiSession = day.sessions.length > 1
  const featured = index === 0

  return (
    <motion.article
      {...cardReveal(index)}
      className={cn(DAY_CARD, spanClass, 'h-full min-w-0', featured && 'p-5 md:p-6')}
    >
      <div className="mb-3 flex min-w-0 items-start gap-2.5 sm:items-center sm:gap-3">
        <span
          className={cn(
            'flex shrink-0 items-center justify-center border border-orange-500/25 bg-orange-500/[0.08] font-heading font-semibold text-orange-400',
            featured
              ? 'h-10 w-10 rounded-lg text-sm sm:h-11 sm:w-11 sm:text-base md:h-12 md:w-12 md:text-lg'
              : 'h-8 w-8 rounded-md text-xs sm:h-9 sm:w-9 sm:text-sm md:h-10 md:w-10'
          )}
        >
          {String(day.day).padStart(2, '0')}
        </span>
        <h3
          className={cn(
            'min-w-0 flex-1 font-heading font-semibold leading-snug text-white',
            featured ? 'text-sm sm:text-base md:text-lg' : 'text-sm'
          )}
        >
          {day.title}
        </h3>
      </div>

      <div
        className={cn(
          'space-y-3',
          featured && multiSession && 'md:grid md:grid-cols-2 md:gap-4 md:space-y-0 lg:grid-cols-3'
        )}
      >
        {day.sessions.map((session) => (
            <div key={session.title} className="min-w-0">
              {multiSession && (
                <p className="mb-1.5 text-xs font-medium uppercase tracking-[0.12em] text-zinc-400">
                  {session.title}
                </p>
              )}
              <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm">
                {session.topics.join(' · ')}
              </p>
            </div>
          ))}
      </div>
    </motion.article>
  )
}

function PhaseOneGrid() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:auto-rows-fr">
      {PHASE_ONE.days.map((day, index) => (
        <PhaseOneDayCard
          key={day.day}
          day={day}
          index={index}
          spanClass={PHASE_ONE_SPANS[index] ?? 'md:col-span-1'}
        />
      ))}
    </div>
  )
}

function PhaseOneSection() {
  return (
    <SectionShell tightTop compactBottom>
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <div>
          <SectionEyebrow>{PHASE_ONE.title}</SectionEyebrow>
          <h2 className="mt-2 font-heading text-lg font-semibold text-white sm:text-xl">
            {PHASE_ONE.subtitle}
          </h2>
        </div>
        <span className="shrink-0 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 text-xs font-medium text-orange-400">
          {PHASE_ONE.duration} · {PHASE_ONE.mode}
        </span>
      </div>

      <motion.div {...sectionReveal()}>
        <PhaseOneGrid />
      </motion.div>
    </SectionShell>
  )
}

function HackathonTopicFlow() {
  return (
    <motion.div
      {...cardReveal(0, 0.04)}
      className="mt-1 grid overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.015] sm:grid-cols-3"
    >
      {PHASE_HACKATHON.sessions.map((session, index) => (
        <div
          key={session.title}
          className={cn(
            'p-4',
            index !== 0 && 'border-t border-white/[0.06] sm:border-l sm:border-t-0',
          )}
        >
          <div className="flex flex-wrap gap-1.5">
            {session.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-white/[0.06] bg-[#05070A]/40 px-2.5 py-1 text-[11px] leading-snug text-zinc-500 sm:text-xs"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  )
}

function HackathonSection() {
  return (
    <SectionShell tightTop compactBottom>
      <motion.div
        {...sectionReveal()}
        className={cn(SURFACE, 'relative overflow-hidden px-5 py-5 sm:px-6 sm:py-6')}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(circle at top right, rgba(255,98,0,0.12), transparent 50%)',
          }}
        />

        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/[0.06] pb-4">
            <div>
              <SectionEyebrow>{PHASE_HACKATHON.title}</SectionEyebrow>
              <h2 className="mt-2 font-heading text-lg font-semibold text-white sm:text-xl">
                {PHASE_HACKATHON.subtitle}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-500">
                {PHASE_HACKATHON.description}
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-400">
              Day {String(PHASE_HACKATHON.day).padStart(2, '0')} · {PHASE_HACKATHON.mode}
            </span>
          </div>

          <HackathonTopicFlow />

          <p className="mt-4 border-t border-white/[0.06] pt-3 text-xs font-medium text-orange-400/90">
            {PHASE_HACKATHON.closingNote}
          </p>
        </div>
      </motion.div>
    </SectionShell>
  )
}

const SDLC_TAG_STYLES: Record<string, string> = {
  Analyze: 'border-zinc-500/25 bg-zinc-500/10 text-zinc-400',
  Plan: 'border-sky-500/25 bg-sky-500/10 text-sky-400',
  Build: 'border-orange-500/25 bg-orange-500/10 text-orange-400',
  Test: 'border-amber-500/25 bg-amber-500/10 text-amber-400',
  Deploy: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-400',
  Review: 'border-violet-500/25 bg-violet-500/10 text-violet-400',
}

/** Bento spans: 1-col mobile, 2-col sm, 3-col md */
const BENTO_SPANS = [
  'sm:col-span-2 md:col-span-2', // Day 06 — Planning kickoff
  'col-span-1',                  // Day 07
  'col-span-1',                  // Day 08
  'sm:col-span-2 md:col-span-2', // Day 09 — Building kickoff
  'col-span-1',                  // Day 10
  'col-span-1',                  // Day 11
  'col-span-1',                  // Day 12
  'sm:col-span-2 md:col-span-2', // Day 13 — Testing
  'col-span-1',                  // Day 14
  'sm:col-span-2 md:col-span-3', // Day 15 — Finale
] as const

function PhaseThreeDayCard({
  day,
  index,
  spanClass,
}: {
  day: (typeof PHASE_THREE.days)[number]
  index: number
  spanClass: string
}) {
  const featured = spanClass.includes('col-span-2') || spanClass.includes('col-span-3')

  return (
    <motion.article
      {...cardReveal(index)}
      className={cn(DAY_CARD, spanClass, 'h-full min-w-0', featured && 'p-4 sm:p-5')}
    >
      <div className="mb-2 flex min-w-0 flex-col gap-2 sm:mb-2.5 sm:flex-row sm:items-center sm:gap-3">
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <span
            className={cn(
              'flex shrink-0 items-center justify-center border border-orange-500/25 bg-orange-500/[0.08] font-heading font-semibold text-orange-400',
              featured
                ? 'h-10 w-10 rounded-lg text-sm sm:h-11 sm:w-11 sm:text-base md:h-12 md:w-12 md:text-lg'
                : 'h-8 w-8 rounded-md text-xs sm:h-9 sm:w-9 sm:text-sm md:h-10 md:w-10'
            )}
          >
            {String(day.day).padStart(2, '0')}
          </span>
          <h3
            className={cn(
              'min-w-0 flex-1 font-heading font-semibold leading-snug text-white',
              featured ? 'text-sm sm:text-base md:text-lg' : 'text-sm'
            )}
          >
            {day.title}
          </h3>
        </div>
        <span
          className={cn(
            'w-fit shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] sm:ml-auto',
            SDLC_TAG_STYLES[day.sdlcTag] ?? 'border-white/[0.08] bg-white/[0.03] text-zinc-500'
          )}
        >
          {day.sdlcTag}
        </span>
      </div>
      <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm">
        {day.activities.join(' · ')}
      </p>
    </motion.article>
  )
}

function PhaseThreeBentoGrid() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:auto-rows-fr md:grid-cols-3">
      {PHASE_THREE.days.map((day, index) => (
        <PhaseThreeDayCard
          key={day.day}
          day={day}
          index={index}
          spanClass={BENTO_SPANS[index] ?? 'col-span-1'}
        />
      ))}
    </div>
  )
}

function PhaseThreeSection() {
  return (
    <SectionShell tightTop compactBottom>
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <div>
          <SectionEyebrow>{PHASE_THREE.title}</SectionEyebrow>
          <h2 className="mt-2 font-heading text-lg font-semibold text-white sm:text-xl">
            {PHASE_THREE.subtitle}
          </h2>
        </div>
        <span className="shrink-0 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1.5 text-xs font-medium text-sky-400">
          {PHASE_THREE.duration} · {PHASE_THREE.mode}
        </span>
      </div>

      <motion.div {...sectionReveal()}>
        <PhaseThreeBentoGrid />
      </motion.div>
    </SectionShell>
  )
}

const GAMIFICATION_CARD = cn(
  'rounded-xl border border-white/[0.06]',
  'bg-gradient-to-b from-white/[0.022] to-transparent',
  'p-4 sm:p-5'
)

const GAMIFICATION_BLOCKS: {
  id: string
  title: string
  icon: LucideIcon
  items: string[]
  hint?: string
}[] = [
  {
    id: 'challenges',
    title: 'Daily challenges',
    icon: ClipboardCheck,
    items: GAMIFICATION.dailyChallenges,
  },
  {
    id: 'recognition',
    title: 'Special recognition',
    icon: Award,
    items: GAMIFICATION.recognition,
  },
  {
    id: 'mentor-reviews',
    title: 'Daily mentor reviews',
    icon: Users,
    items: GAMIFICATION.mentorReviews,
  },
]

function GamificationChip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/[0.06] bg-[#05070A]/40 px-2.5 py-1 text-[11px] leading-snug text-zinc-500 sm:text-xs">
      {label}
    </span>
  )
}

function GamificationBlock({
  block,
  index,
}: {
  block: (typeof GAMIFICATION_BLOCKS)[number]
  index: number
}) {
  const Icon = block.icon

  return (
    <motion.article {...cardReveal(index)} className={GAMIFICATION_CARD}>
      <div className="mb-3 flex items-center gap-2">
        <Icon className="h-3.5 w-3.5 shrink-0 text-orange-500" strokeWidth={2} />
        <h3 className="font-heading text-sm font-semibold text-white">{block.title}</h3>
      </div>
      {block.hint && (
        <p className="mb-2 text-xs text-zinc-600">{block.hint}</p>
      )}
      <div className="flex flex-wrap gap-1.5">
        {block.items.map((item) => (
          <GamificationChip key={item} label={item} />
        ))}
      </div>
    </motion.article>
  )
}

function GamificationSection() {
  return (
    <SectionShell tightTop>
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <div>
          <SectionEyebrow>{GAMIFICATION.title}</SectionEyebrow>
          <h2 className="mt-2 font-heading text-lg font-semibold text-white sm:text-xl">
            Stay engaged throughout the program
          </h2>
        </div>
        <span className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-400">
          {GAMIFICATION.subtitle}
        </span>
      </div>

      <motion.div {...sectionReveal()} className="grid gap-3 sm:grid-cols-2">
        {GAMIFICATION_BLOCKS.map((block, index) => (
          <GamificationBlock key={block.id} block={block} index={index} />
        ))}
      </motion.div>
    </SectionShell>
  )
}

export function MissionPossibleProgramContent() {
  return (
    <div className="relative">
      <OverviewSection />
      <PhaseOneSection />
      <HackathonSection />
      <PhaseThreeSection />
      <GamificationSection />
    </div>
  )
}
