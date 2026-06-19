'use client'

import Image from 'next/image'
import { BriefcaseBusiness, Code2, Users, BadgeCheck, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const ACCENT = '#FF6B00'
const CARD_BG = '#0B0F14'
const TEXT_SECONDARY = '#A3A9B7'

const NEUMORPHIC_CARD = cn(
  'group relative overflow-hidden rounded-[20px]',
  'border border-white/[0.03]',
  'shadow-[-6px_-6px_16px_rgba(255,255,255,0.04),10px_12px_28px_rgba(0,0,0,0.7),inset_1px_1px_1px_rgba(255,255,255,0.06)]',
  'transition-all duration-300 ease-out',
  'hover:-translate-y-0.5',
  'hover:shadow-[-6px_-6px_18px_rgba(255,107,0,0.07),12px_14px_32px_rgba(0,0,0,0.75),inset_1px_1px_2px_rgba(255,255,255,0.08)]'
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
    <article className={cn(NEUMORPHIC_CARD, 'flex h-full flex-col p-6')} style={{ background: CARD_BG }}>
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

function PortfolioDevicesVisual() {
  return (
    <div className="relative mt-auto min-h-0 w-full flex-1 overflow-hidden" aria-hidden="true">
      <div
        className="pointer-events-none absolute bottom-6 left-1/2 z-0 h-28 w-40 -translate-x-1/2 rounded-full blur-2xl"
        style={{ background: 'radial-gradient(circle, rgba(255,107,0,0.35), transparent 70%)' }}
      />
      <div className="absolute inset-x-0 bottom-0 flex h-full max-h-[230px] items-end justify-center overflow-hidden pb-0">
        <Image
          src="/assets/features-portfolio-laptop.png"
          alt=""
          width={520}
          height={360}
          className="relative z-10 w-[74%] max-w-[300px] shrink-0 object-contain object-bottom drop-shadow-[0_16px_40px_rgba(0,0,0,0.55)]"
          priority={false}
        />
        <Image
          src="/assets/features-portfolio-phone.png"
          alt=""
          width={200}
          height={320}
          className="relative z-20 -ml-8 mb-1 w-[32%] max-w-[130px] shrink-0 object-contain object-bottom drop-shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
          priority={false}
        />
      </div>
    </div>
  )
}

function RightCardGlow() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]"
        style={{
          background: `
            radial-gradient(ellipse 150% 110% at -5% -10%, rgba(255,107,0,0.62) 0%, rgba(255,107,0,0.28) 28%, transparent 58%),
            radial-gradient(ellipse 90% 70% at 20% 0%, rgba(255,140,60,0.4) 0%, transparent 48%),
            radial-gradient(ellipse 60% 50% at 0% 40%, rgba(198,167,94,0.12) 0%, transparent 55%)
          `,
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 rounded-full blur-3xl"
        style={{ background: 'rgba(255,107,0,0.22)' }}
        aria-hidden="true"
      />
    </>
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
          <article
            className={cn(NEUMORPHIC_CARD, 'flex min-h-[316px] flex-col p-6 lg:h-full lg:p-8')}
            style={{ background: CARD_BG }}
          >
            <h2 className="shrink-0 font-sans text-[32px] font-bold leading-[1.2] text-white">
              Everything you need
              <br />
              to become <br /> job-ready.
            </h2>
            <WireframeCubes />
          </article>

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

          <article
            className={cn(NEUMORPHIC_CARD, 'flex min-h-[316px] flex-col p-6 lg:h-full lg:p-8')}
            style={{ background: CARD_BG }}
          >
            <RightCardGlow />
            <div className="relative z-10 shrink-0">
              <p className="font-sans text-[34px] font-bold leading-[1.25] text-white">Your work.</p>
              <p className="font-sans text-[34px] font-bold leading-[1.25] text-white">Your portfolio.</p>
              <p className="font-sans text-[34px] font-bold leading-[1.25] text-white">Your future.</p>
            </div>
            <div className="relative z-10">
              <PortfolioDevicesVisual />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
