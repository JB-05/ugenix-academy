'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Box, Briefcase, Building2, Flag, Layers, PenLine, User, UserRound } from 'lucide-react'
import { cn } from '@/lib/utils'

const CARD_CLASS =
  'relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#0a0a0a]'

const EASE = [0.22, 1, 0.36, 1] as const
const HOVER_TRANSITION = { duration: 0.75, ease: EASE }

const viewport = { once: true, margin: '-60px' as const }

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

const CHART_POINTS: [number, number][] = [
  [0, 65],
  [30, 58],
  [55, 48],
  [80, 42],
  [105, 30],
  [130, 22],
  [155, 12],
  [180, 8],
]

const chartLineVariants = {
  rest: { strokeDashoffset: 0 },
  hover: {
    strokeDashoffset: [220, 0],
    transition: { duration: 1.6, ease: EASE, delay: 0.12 },
  },
}

const chartDotVariants = {
  rest: { opacity: 1, scale: 1 },
  hover: (i: number) => ({
    opacity: [0.4, 1],
    scale: [0.75, 1],
    transition: { duration: 0.5, delay: 0.28 + i * 0.12, ease: EASE },
  }),
}

const roadmapStepVariants = {
  rest: {
    backgroundColor: 'rgba(10,10,10,1)',
    borderColor: 'rgba(255,255,255,0.07)',
  },
  hover: (i: number) => ({
    backgroundColor: 'rgba(228,87,46,0.1)',
    borderColor: 'rgba(228,87,46,0.38)',
    transition: { duration: 0.65, delay: 0.2 + i * 0.35, ease: EASE },
  }),
}

const roadmapDescVariants = {
  rest: { opacity: 0.85, color: 'rgb(113,113,122)' },
  hover: (i: number) => ({
    opacity: 1,
    color: 'rgb(212,212,216)',
    transition: { duration: 0.55, delay: 0.28 + i * 0.35, ease: EASE },
  }),
}

const roadmapArrowVariants = {
  rest: { opacity: 0.35, y: 0 },
  hover: (i: number) => ({
    opacity: 1,
    y: [0, 2, 0],
    transition: { duration: 0.7, delay: 0.4 + i * 0.35, ease: EASE },
  }),
}

function CardAmbientLayer({ warm = false }: { warm?: boolean }) {
  return (
    <motion.div
      variants={ambientVariants}
      className="pointer-events-none absolute inset-0 rounded-[18px]"
      style={{
        background: warm
          ? 'radial-gradient(ellipse 100% 90% at 10% 0%, rgba(255,107,0,0.16) 0%, transparent 55%)'
          : 'radial-gradient(ellipse 90% 80% at 20% 15%, rgba(228,87,46,0.1) 0%, transparent 58%)',
      }}
      aria-hidden="true"
    />
  )
}

function BentoCard({
  children,
  className,
  hero,
  index,
}: {
  children: ReactNode
  className?: string
  hero?: boolean
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.95, delay: 0.15 + index * 0.12, ease: EASE }}
      className={cn('min-h-0', className)}
    >
      <motion.article
        initial="rest"
        whileHover="hover"
        variants={hoverVariants}
        className={cn(CARD_CLASS, 'flex h-full flex-col p-5 sm:p-6')}
      >
        {hero && (
          <div
            className="pointer-events-none absolute inset-0 rounded-[18px]"
            style={{
              background:
                'radial-gradient(ellipse 130% 90% at -8% -12%, rgba(228,87,46,0.35) 0%, rgba(228,87,46,0.12) 32%, transparent 62%)',
            }}
            aria-hidden="true"
          />
        )}
        <CardAmbientLayer warm={hero} />
        <motion.div variants={contentFloatVariants} className="relative z-10 flex h-full flex-col">
          {children}
        </motion.div>
      </motion.article>
    </motion.div>
  )
}

function AnalyticsPanel() {
  return (
    <div
      className="relative flex h-[130px] w-full shrink-0 flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 ring-1 ring-white/[0.04] sm:max-w-[160px] lg:h-full lg:max-h-none lg:w-[160px] lg:p-4"
      aria-hidden="true"
    >
      <motion.div
        variants={{
          rest: { opacity: 0.04 },
          hover: { opacity: 0.08, transition: HOVER_TRANSITION },
        }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(228,87,46,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(228,87,46,0.5) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      <div>
        <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-500">
          Project Completion Rate
        </p>
        <p className="mt-0.5 text-2xl font-bold text-white lg:text-3xl">100%</p>
      </div>
      <svg viewBox="0 0 180 80" className="h-12 w-full lg:h-14" fill="none">
        <motion.polyline
          points="0,65 30,58 55,48 80,42 105,30 130,22 155,12 180,8"
          stroke="#E4572E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="220"
          variants={chartLineVariants}
          fill="none"
        />
        {CHART_POINTS.map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            fill="#E4572E"
            custom={i}
            variants={chartDotVariants}
          />
        ))}
      </svg>
    </div>
  )
}

const ROADMAP_STEPS = [
  { num: 1, title: 'Foundation', desc: 'Learn the fundamentals', icon: Box },
  { num: 2, title: 'Projects', desc: 'Build real-world projects', icon: PenLine },
  { num: 3, title: 'Internship', desc: 'Gain practical experience', icon: Briefcase },
  { num: 4, title: 'Placement', desc: 'Land your dream job', icon: User },
]

function RoadmapPanel() {
  return (
    <div className="flex h-full min-h-0 w-full flex-col justify-between gap-0.5 rounded-xl bg-white/[0.02] p-1.5 ring-1 ring-white/[0.05] lg:max-w-[175px] lg:shrink-0">
      {ROADMAP_STEPS.map((step, i) => (
        <div key={step.title} className="flex min-h-0 flex-1 flex-col">
          <motion.div
            custom={i}
            variants={roadmapStepVariants}
            className="flex min-h-0 flex-1 items-center rounded-lg border bg-[#0a0a0a] px-2 py-1.5 lg:px-2.5 lg:py-2"
          >
            <div className="flex min-w-0 items-start gap-1.5">
              <step.icon className="mt-px h-3 w-3 shrink-0 text-orange-500 lg:h-3.5 lg:w-3.5" strokeWidth={1.75} />
              <div className="min-w-0">
                <p className="text-[10px] font-semibold leading-tight text-white lg:text-[11px]">
                  {step.num}. {step.title}
                </p>
                <motion.p
                  custom={i}
                  variants={roadmapDescVariants}
                  className="mt-px text-[9px] leading-tight lg:text-[10px]"
                >
                  {step.desc}
                </motion.p>
              </div>
            </div>
          </motion.div>
          {i < ROADMAP_STEPS.length - 1 && (
            <div className="flex shrink-0 items-center justify-center py-px lg:py-0.5">
              <motion.span
                custom={i}
                variants={roadmapArrowVariants}
                className="text-[8px] leading-none text-orange-500 lg:text-[9px]"
              >
                ↓
              </motion.span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function WireframeBuilding() {
  return (
    <div
      className="relative mx-auto h-[140px] w-full max-w-[180px] shrink-0 lg:mx-0 lg:h-full lg:max-h-none lg:w-[150px]"
      aria-hidden="true"
    >
      <div className="absolute bottom-0 right-0 h-[130px] w-[120px] lg:h-[150px] lg:w-[130px]">
        <div className="absolute bottom-0 left-1/2 h-[110px] w-[70px] -translate-x-1/2 border border-orange-500/25 lg:h-[130px] lg:w-[80px]" />
        <div className="absolute bottom-0 left-0 h-[75px] w-[35px] border border-orange-500/20 lg:h-[90px] lg:w-[40px]" />
        <div className="absolute bottom-0 right-0 h-[85px] w-[38px] border border-orange-500/20 lg:h-[100px] lg:w-[42px]" />
        <div className="absolute left-1/2 top-0 h-[28px] w-[50px] -translate-x-1/2 border border-orange-500/30 lg:h-[32px] lg:w-[55px]" />
        {[28, 55, 82, 110].map((bottom) => (
          <div
            key={bottom}
            className="absolute left-1/2 h-px w-[70px] -translate-x-1/2 bg-orange-500/12 lg:w-[80px]"
            style={{ bottom }}
          />
        ))}
        {[14, 35, 56].map((left) => (
          <div
            key={left}
            className="absolute bottom-0 top-[28px] w-px bg-orange-500/10 lg:top-[32px]"
            style={{ left: `calc(50% - 35px + ${left}px)` }}
          />
        ))}
        <div className="absolute left-1/2 top-[38px] flex h-7 w-7 -translate-x-1/2 items-center justify-center text-sm font-bold text-orange-500 lg:top-[44px] lg:h-8 lg:w-8 lg:text-base">
          U
        </div>
      </div>

      <div className="absolute bottom-2 right-0 max-w-[140px] rounded-lg border border-white/[0.08] bg-[#0a0a0a] p-2 lg:max-w-[150px] lg:p-2.5">
        <div className="mb-1 flex items-center gap-1.5">
          <Building2 className="h-3 w-3 text-orange-500" strokeWidth={1.75} />
          <span className="text-[10px] font-semibold text-white">Real Impact Projects</span>
        </div>
        <p className="text-[9px] leading-snug text-zinc-500 lg:text-[10px]">
          Work on projects that solve real world problems.
        </p>
      </div>
    </div>
  )
}

function CardCopy({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof UserRound
  title: string
  description: string
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-start">
      <Icon className="h-[18px] w-[18px] shrink-0 text-orange-500" strokeWidth={1.75} />
      <div className="min-w-0">
        <h3 className="font-heading text-base font-semibold leading-tight text-white sm:text-[17px]">
          {title}
        </h3>
        <motion.p
          variants={descriptionVariants}
          className="mt-2 text-sm leading-relaxed text-zinc-400"
        >
          {description}
        </motion.p>
      </div>
    </div>
  )
}

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="relative scroll-mt-24 overflow-hidden bg-[#050505] py-10 sm:py-14 lg:py-20">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 1, ease: EASE }}
          className="mx-auto mb-8 max-w-[900px] text-center lg:mb-10"
        >
          <p className="mb-3 font-heading text-[11px] font-medium uppercase tracking-[0.28em] text-orange-500">
            Why Ugenix Academy
          </p>
          <h2 className="font-heading text-[1.65rem] font-bold leading-[1.15] text-white sm:text-[1.85rem] lg:text-[2rem] xl:text-[2.15rem]">
            Become <span className="text-orange-500">job-ready</span> through real-world learning,
            industry mentorship, and project-driven training.
          </h2>
        </motion.header>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-2 lg:gap-4">
          <BentoCard index={0} className="lg:h-full">
            <CardCopy
              icon={UserRound}
              title="Industry-Experienced Instructors"
              description="Learn from professionals who are actively building products and solving real-world problems every day."
            />
          </BentoCard>

          <BentoCard index={1} className="lg:h-full">
            <div className="flex h-full flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <CardCopy
                icon={Layers}
                title="Practical, Outcome-Oriented Learning"
                description="We focus on application over theory. Every course is designed around what you'll actually build and deliver."
              />
              <AnalyticsPanel />
            </div>
          </BentoCard>

          <BentoCard index={2} className="lg:h-full">
            <div className="flex h-full min-h-0 flex-col gap-4 lg:flex-row lg:items-stretch lg:justify-between">
              <CardCopy
                icon={Flag}
                title="Structured Learning Path"
                description="A step-by-step journey that takes you from fundamentals to job-ready professional."
              />
              <div className="min-h-[200px] shrink-0 lg:min-h-0 lg:h-full lg:w-[175px]">
                <RoadmapPanel />
              </div>
            </div>
          </BentoCard>

          <BentoCard index={3} hero className="lg:h-full">
            <div className="flex h-full flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex min-w-0 flex-1 flex-col gap-3">
                <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-500">
                  Our Edge
                </p>
                <h3 className="font-heading text-lg font-semibold leading-tight text-white lg:text-xl">
                  Built by a Real Technology Company
                </h3>
                <motion.p
                  variants={descriptionVariants}
                  className="text-sm leading-relaxed text-zinc-400"
                >
                  Not an education company teaching technology. A technology company teaching how
                  technology is <span className="font-medium text-orange-500">actually built.</span>
                </motion.p>
              </div>
              <WireframeBuilding />
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}
