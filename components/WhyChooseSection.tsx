'use client'

import { UserRound, Layers, Flag, Box, PenLine, Briefcase, User, Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const ACCENT = '#FF6B00'
const BODY = '#A8B0C0'

function HexOutline({ className, size = 80 }: { className?: string; size?: number }) {
  const h = size * 1.15
  return (
    <svg
      className={cn('pointer-events-none absolute', className)}
      width={size}
      height={h}
      viewBox="0 0 80 92"
      fill="none"
      aria-hidden="true"
      style={{ opacity: 0.12 }}
    >
      <polygon
        points="40,1 79,23 79,69 40,91 1,69 1,23"
        stroke={ACCENT}
        strokeWidth="1"
      />
    </svg>
  )
}

function DotGrid({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      {[
        { top: '18%', left: '72%' },
        { top: '55%', left: '85%' },
        { top: '78%', left: '62%' },
        { top: '32%', left: '90%' },
      ].map((pos, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full"
          style={{ ...pos, backgroundColor: ACCENT, opacity: 0.15 }}
        />
      ))}
    </div>
  )
}

function WireframeCube({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute', className)} aria-hidden="true">
      <div
        className="relative h-10 w-10"
        style={{
          transform: 'rotateX(55deg) rotateZ(45deg)',
          border: '1px solid rgba(255, 107, 0, 0.1)',
          opacity: 0.12,
        }}
      />
    </div>
  )
}

function BentoCard({
  children,
  className,
  hero,
}: {
  children: React.ReactNode
  className?: string
  hero?: boolean
}) {
  return (
    <article
      className={cn(
        'group relative overflow-hidden rounded-[20px] border border-white/[0.08] p-4 transition-all duration-[350ms] ease-out lg:rounded-[24px] lg:p-5',
        'bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-[10px]',
        'hover:-translate-y-1.5 hover:border-[#FF6B00] hover:shadow-[0_0_40px_rgba(255,107,0,0.15)]',
        className
      )}
    >
      {hero && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(circle at top right, rgba(255,107,0,0.15), transparent 50%)',
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </article>
  )
}

function IconContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[16px] border-2 lg:h-[80px] lg:w-[80px] lg:rounded-[18px]"
      style={{
        borderColor: ACCENT,
        boxShadow: '0 0 24px rgba(255,107,0,0.35)',
        color: ACCENT,
      }}
    >
      {children}
    </div>
  )
}

function AnalyticsPanel() {
  return (
    <div
      className="relative flex h-[140px] w-full shrink-0 flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 sm:max-w-[160px] lg:h-full lg:max-h-none lg:w-[160px] lg:p-4"
      aria-hidden="true"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,107,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.4) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      <div>
        <p className="text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: BODY }}>
          Project Completion Rate
        </p>
        <p className="mt-0.5 text-2xl font-bold text-white lg:text-3xl">92%</p>
      </div>
      <svg viewBox="0 0 180 80" className="h-12 w-full lg:h-14" fill="none">
        <polyline
          points="0,65 30,58 55,48 80,42 105,30 130,22 155,12 180,8"
          stroke={ACCENT}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="220"
          strokeDashoffset="220"
          className="why-us-chart-line"
        />
        {[
          [0, 65],
          [30, 58],
          [55, 48],
          [80, 42],
          [105, 30],
          [130, 22],
          [155, 12],
          [180, 8],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            fill={ACCENT}
            style={{ filter: 'drop-shadow(0 0 4px rgba(255,107,0,0.8))' }}
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
    <div className="flex h-full min-h-0 w-full flex-col justify-between gap-0.5 lg:max-w-[175px] lg:shrink-0">
      {ROADMAP_STEPS.map((step, i) => (
        <div key={step.title} className="flex min-h-0 flex-1 flex-col">
          <div className="flex min-h-0 flex-1 items-center rounded-[10px] border border-white/[0.08] bg-white/[0.03] px-2 py-1.5 lg:rounded-[12px] lg:px-2.5 lg:py-2">
            <div className="flex min-w-0 items-start gap-1.5">
              <step.icon className="mt-px h-3 w-3 shrink-0 lg:h-3.5 lg:w-3.5" style={{ color: ACCENT }} strokeWidth={1.75} />
              <div className="min-w-0">
                <p className="text-[10px] font-semibold leading-tight text-white lg:text-[11px]">
                  {step.num}. {step.title}
                </p>
                <p className="mt-px text-[9px] leading-tight lg:text-[10px]" style={{ color: BODY }}>
                  {step.desc}
                </p>
              </div>
            </div>
          </div>
          {i < ROADMAP_STEPS.length - 1 && (
            <div className="flex shrink-0 items-center justify-center py-px lg:py-0.5">
              <span className="text-[8px] leading-none lg:text-[9px]" style={{ color: ACCENT, opacity: 0.45 }}>
                ↓
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function WireframeBuilding() {
  return (
    <div className="relative mx-auto h-[140px] w-full max-w-[180px] shrink-0 lg:mx-0 lg:h-full lg:max-h-none lg:w-[150px]" aria-hidden="true">
      <div className="why-us-building-pulse absolute bottom-0 right-0 h-[130px] w-[120px] lg:h-[150px] lg:w-[130px]">
        {/* Tower base */}
        <div
          className="absolute bottom-0 left-1/2 h-[110px] w-[70px] -translate-x-1/2 border lg:h-[130px] lg:w-[80px]"
          style={{ borderColor: 'rgba(255,107,0,0.25)' }}
        />
        {/* Left wing */}
        <div
          className="absolute bottom-0 left-0 h-[75px] w-[35px] border lg:h-[90px] lg:w-[40px]"
          style={{ borderColor: 'rgba(255,107,0,0.2)' }}
        />
        {/* Right wing */}
        <div
          className="absolute bottom-0 right-0 h-[85px] w-[38px] border lg:h-[100px] lg:w-[42px]"
          style={{ borderColor: 'rgba(255,107,0,0.2)' }}
        />
        {/* Top section */}
        <div
          className="absolute left-1/2 top-0 h-[28px] w-[50px] -translate-x-1/2 border lg:h-[32px] lg:w-[55px]"
          style={{ borderColor: 'rgba(255,107,0,0.3)' }}
        />
        {/* Horizontal grid lines */}
        {[28, 55, 82, 110].map((bottom) => (
          <div
            key={bottom}
            className="absolute left-1/2 h-px w-[70px] -translate-x-1/2 lg:w-[80px]"
            style={{ bottom, backgroundColor: 'rgba(255,107,0,0.12)' }}
          />
        ))}
        {/* Vertical grid lines */}
        {[14, 35, 56].map((left) => (
          <div
            key={left}
            className="absolute bottom-0 top-[28px] w-px lg:top-[32px]"
            style={{ left: `calc(50% - 35px + ${left}px)`, backgroundColor: 'rgba(255,107,0,0.1)' }}
          />
        ))}
        {/* U logo */}
        <div
          className="absolute left-1/2 top-[38px] flex h-7 w-7 -translate-x-1/2 items-center justify-center text-sm font-bold lg:top-[44px] lg:h-8 lg:w-8 lg:text-base"
          style={{ color: ACCENT, textShadow: '0 0 12px rgba(255,107,0,0.6)' }}
        >
          U
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute bottom-2 right-0 max-w-[140px] rounded-lg border border-white/[0.08] bg-[#0A0D12]/90 p-2 backdrop-blur-sm lg:max-w-[150px] lg:p-2.5">
        <div className="mb-1 flex items-center gap-1.5">
          <Building2 className="h-3 w-3" style={{ color: ACCENT }} strokeWidth={1.75} />
          <span className="text-[10px] font-semibold text-white">Real Client Projects</span>
        </div>
        <p className="text-[9px] leading-snug lg:text-[10px]" style={{ color: BODY }}>
          Work on projects that solve real business problems.
        </p>
      </div>
    </div>
  )
}

export default function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="relative scroll-mt-24 overflow-hidden lg:min-h-screen lg:max-h-screen"
      style={{ background: '#05070A' }}
    >
      {/* Animated grid overlay */}
      <div
        className="why-us-grid-drift pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,107,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex h-full max-w-[1440px] flex-col px-8 py-16 lg:min-h-screen lg:max-h-screen lg:justify-center lg:py-10">
        {/* Header */}
        <header className="mx-auto mb-8 max-w-[900px] shrink-0 text-center lg:mb-6">
          <p
            className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[4px] lg:mb-2"
            style={{ color: ACCENT }}
          >
             Why Ugenix Academy  
          </p>
          <h2
            className="font-sans text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-[1.15] text-white"
          >
            Become{' '}
            <span style={{ color: ACCENT }}>job-ready</span>{' '}
            through real-world learning, industry mentorship, and project-driven training.
          </h2>
        </header>

        {/* Bento Grid */}
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-2 lg:gap-4">
          {/* Card 1: Industry-Experienced Instructors */}
          <BentoCard className="flex min-h-0 flex-col lg:h-full">
            <HexOutline className="right-6 top-4" size={60} />
            <DotGrid />
            <div className="relative z-10 flex h-full flex-col gap-3 sm:flex-row sm:items-center">
              <IconContainer>
                <UserRound className="h-7 w-7 lg:h-8 lg:w-8" strokeWidth={1.5} />
              </IconContainer>
              <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
                <div>
                  <h3 className="font-sans text-base font-semibold leading-tight text-white lg:text-lg">
                    Industry-Experienced Instructors
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed lg:text-sm" style={{ color: BODY }}>
                    Learn from professionals who are actively building products and solving
                    real-world problems every day.
                  </p>
                </div>
                
              </div>
            </div>
          </BentoCard>

          {/* Card 2: Practical, Outcome-Oriented Learning */}
          <BentoCard className="flex min-h-0 flex-col lg:h-full">
            <WireframeCube className="right-8 top-6" />
            <HexOutline className="left-4 bottom-4" size={50} />
            <div className="relative z-10 flex h-full flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
              <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center">
                <IconContainer>
                  <Layers className="h-7 w-7 lg:h-8 lg:w-8" strokeWidth={1.5} />
                </IconContainer>
                <div className="min-w-0">
                  <h3 className="font-sans text-base font-semibold leading-tight text-white lg:text-lg">
                    Practical, Outcome-Oriented Learning
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed lg:text-sm" style={{ color: BODY }}>
                    We focus on application over theory. Every course is designed around what
                    you&apos;ll actually build and deliver.
                  </p>
                </div>
              </div>
              <AnalyticsPanel />
            </div>
          </BentoCard>

          {/* Card 3: Structured Learning Path */}
          <BentoCard className="flex min-h-0 flex-col lg:h-full">
            <DotGrid className="opacity-60" />
            <div className="relative z-10 flex h-full min-h-0 flex-col gap-3 lg:flex-row lg:items-stretch lg:justify-between lg:gap-4">
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 sm:flex-row sm:items-center lg:min-h-0">
                <IconContainer>
                  <Flag className="h-7 w-7 lg:h-8 lg:w-8" strokeWidth={1.5} />
                </IconContainer>
                <div className="min-w-0">
                  <h3 className="font-sans text-base font-semibold leading-tight text-white lg:text-lg">
                    Structured Learning Path
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed lg:text-sm" style={{ color: BODY }}>
                    A step-by-step journey that takes you from fundamentals to job-ready
                    professional.
                  </p>
                </div>
              </div>
              <div className="min-h-[200px] shrink-0 lg:min-h-0 lg:h-full lg:w-[175px]">
                <RoadmapPanel />
              </div>
            </div>
          </BentoCard>

          {/* Card 4: Built by a Real Technology Company */}
          <BentoCard hero className="flex min-h-0 flex-col lg:h-full">
            <HexOutline className="right-[40%] top-2 opacity-[0.08]" size={50} />
            <WireframeCube className="left-6 bottom-8" />
            <div className="relative z-10 flex h-full flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
              <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
                <div>
                  <p
                    className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: ACCENT }}
                  >
                    Our Edge
                  </p>
                  <h3 className="font-sans text-lg font-semibold leading-tight text-white lg:text-xl">
                    Built by a Real Technology Company
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed lg:text-sm" style={{ color: BODY }}>
                    Not an education company teaching technology. A technology company teaching how technology is{' '}
                    <span className="font-medium" style={{ color: ACCENT }}>
                      actually built.
                    </span>
                  </p>
                </div>
                
              </div>
              <WireframeBuilding />
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}
