'use client'

import { BriefcaseBusiness, Code2, Users, BadgeCheck, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const ACCENT = '#FF6B00'
const CARD_BG = '#0B0F14'
const TEXT_SECONDARY = '#A3A9B7'

const CARD_CLASS = cn(
  'group relative overflow-hidden rounded-[20px] border border-white/[0.08]',
  'shadow-[0_10px_30px_rgba(0,0,0,0.25)]',
  'transition-all duration-300 ease-out',
  'hover:-translate-y-1 hover:border-[#FF6B00] hover:shadow-[0_0_25px_rgba(255,107,0,0.08)]'
)

const FEATURES = [
  {
    icon: BriefcaseBusiness,
    title: 'Industry Projects',
    description: 'Work on real projects scoped by industry experts.',
  },
  {
    icon: Code2,
    title: 'Expert Code Reviews',
    description: 'Get feedback from practicing professionals, not just teachers.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work in teams, just like real companies.',
  },
  {
    icon: BadgeCheck,
    title: 'Career Support',
    description: 'Resume, interview prep & placement guidance.',
  },
]

function WireframeCubes() {
  return (
    <div className="relative mt-auto flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden py-4" aria-hidden="true">
      <div className="relative h-full w-full max-h-[200px] max-w-[220px]">
        {/* Center glow */}
        <div
          className="absolute left-1/2 top-[55%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,0,0.25), transparent 70%)',
            opacity: 0.15,
          }}
        />
        
      </div>
    </div>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof BriefcaseBusiness
  title: string
  description: string
}) {
  return (
    <article className={cn(CARD_CLASS, 'flex h-full flex-col p-6')} style={{ background: CARD_BG }}>
      <div className="flex items-center gap-2.5">
        <Icon className="h-[18px] w-[18px] shrink-0" style={{ color: ACCENT }} strokeWidth={2} />
        <h3 className="font-sans text-base font-semibold leading-tight text-white">{title}</h3>
      </div>
      <p className="mt-3 flex-1 text-sm leading-[1.6]" style={{ color: TEXT_SECONDARY }}>
        {description}
      </p>
      <ArrowRight
        className="mt-3 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
        style={{ color: ACCENT }}
        strokeWidth={2}
      />
    </article>
  )
}

function ProfileCard({ accent = false }: { accent?: boolean }) {
  return (
    <div className="rounded border border-white/[0.06] p-1" style={{ background: '#0B0F14' }}>
      <div
        className="mx-auto mb-0.5 h-3 w-3 rounded-full"
        style={{ background: accent ? `${ACCENT}55` : 'rgba(255,255,255,0.12)' }}
      />
      <div className="mx-auto h-0.5 w-[70%] rounded-sm bg-white/[0.1]" />
      <div className="mx-auto mt-0.5 h-0.5 w-[50%] rounded-sm bg-white/[0.06]" />
    </div>
  )
}

function DashboardMockup() {
  return (
    <div className="relative mt-auto min-h-0 w-full flex-1 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-x-0 bottom-0 flex h-full max-h-[200px] items-end justify-center overflow-hidden pb-1">
        {/* Tablet */}
        <div
          className="relative z-10 w-[72%] shrink-0 rounded-lg border border-white/[0.08] p-1"
          style={{ background: '#0E1218' }}
        >
          <div className="rounded-md border border-white/[0.06] p-2" style={{ background: '#080B10' }}>
            <div className="mb-2 flex items-center gap-1">
              <div className="h-1 w-1 rounded-full" style={{ background: ACCENT, opacity: 0.5 }} />
              <div className="h-0.5 w-10 rounded-sm bg-white/[0.08]" />
            </div>
            <div className="grid grid-cols-3 gap-1">
              {[true, false, true, false, true, false].map((accent, i) => (
                <ProfileCard key={i} accent={accent} />
              ))}
            </div>
          </div>
        </div>

        {/* Phone — kept inside card bounds */}
        <div
          className="relative z-20 -ml-3 w-[28%] shrink-0 rounded-[10px] border border-white/[0.08] p-0.5"
          style={{ background: '#0E1218' }}
        >
          <div className="rounded-[8px] border border-white/[0.06] p-1.5" style={{ background: '#080B10' }}>
            <div className="mx-auto mb-1.5 h-0.5 w-4 rounded-full bg-white/[0.1]" />
            <div className="grid grid-cols-2 gap-0.5">
              {[true, false, false, true].map((accent, i) => (
                <ProfileCard key={i} accent={accent} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative scroll-mt-24 overflow-hidden py-16 md:py-20"
      style={{ background: '#05070A' }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,107,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-8">
        <div
          className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1.2fr_2fr_1.2fr]"
          style={{ gap: '16px' }}
        >
          {/* Left card — column 1 */}
          <article
            className={cn(CARD_CLASS, 'flex min-h-[316px] flex-col p-6 lg:h-full lg:p-8')}
            style={{ background: CARD_BG }}
          >
            <h2 className="shrink-0 font-sans text-[32px] font-bold leading-[1.2] text-white">
              Everything you need
              <br />
              to become <br /> job-ready.
            </h2>
            <WireframeCubes />
          </article>

          {/* Middle 2×2 — column 2 */}
          <div
            className="grid min-h-[316px] grid-cols-1 gap-4 sm:grid-cols-2 lg:h-full lg:grid-rows-2"
            style={{ gap: '16px' }}
          >
            {FEATURES.map((feature) => (
              <div key={feature.title} className="min-h-[150px] overflow-hidden lg:min-h-0 lg:h-full">
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>

          {/* Right card — column 3 */}
          <article
            className={cn(CARD_CLASS, 'flex min-h-[316px] flex-col p-6 lg:h-full lg:p-8')}
            style={{ background: CARD_BG }}
          >
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden"
              style={{
                background:
                  'radial-gradient(circle at top left, rgba(255,107,0,0.204), transparent 55%)',
              }}
              aria-hidden="true"
            />
            <div className="relative shrink-0">
              <p className="font-sans text-[34px] font-bold leading-[1.25] text-white">Your work.</p>
              <p className="font-sans text-[34px] font-bold leading-[1.25] text-white">Your portfolio.</p>
              <p className="font-sans text-[34px] font-bold leading-[1.25] text-white">Your future.</p>
            </div>
            <DashboardMockup />
          </article>
        </div>
      </div>
    </section>
  )
}
