'use client'

import Link from 'next/link'
import { Handshake, MessageSquare, Mail, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const ACCENT = '#FF6B00'
const BODY = '#A8B0C0'

function WireframeCubeVisual() {
  const cells = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
  ]

  return (
    <div className="relative mx-auto h-[160px] w-[160px] shrink-0" aria-hidden="true">
      <div
        className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,0,0.4), transparent)',
          opacity: 0.12,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,107,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.15) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.12,
        }}
      />
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3 p-2">
        {cells.flatMap((row, ri) =>
          row.map((active, ci) => (
            <div
              key={`${ri}-${ci}`}
              className={cn(
                'relative border',
                active ? 'border-[rgba(255,107,0,0.35)]' : 'border-[rgba(255,107,0,0.08)]'
              )}
              style={{
                transform: 'rotateX(55deg) rotateZ(45deg)',
                opacity: active ? 0.25 : 0.08,
              }}
            >
              {active && (
                <div
                  className="absolute -right-1 -top-1 h-full w-full border border-[rgba(255,107,0,0.2)]"
                  style={{ transform: 'translate(4px, -4px)' }}
                />
              )}
            </div>
          ))
        )}
      </div>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 160 160"
        fill="none"
        style={{ opacity: 0.15 }}
      >
        <path d="M80 20 L130 50 L130 110 L80 140 L30 110 L30 50 Z" stroke={ACCENT} strokeWidth="1" />
        <path d="M80 20 L80 80 L130 110" stroke={ACCENT} strokeWidth="1" />
        <path d="M80 80 L30 110" stroke={ACCENT} strokeWidth="1" />
        <path d="M80 80 L80 140" stroke={ACCENT} strokeWidth="1" />
      </svg>
    </div>
  )
}

const CONTACT_POINTS = [
  {
    icon: Handshake,
    title: 'Partnership Inquiries',
    subtitle: 'Explore collaboration opportunities with Ugenix Academy',
  },
  {
    icon: MessageSquare,
    title: 'General Queries',
    subtitle: 'Questions about programs, admissions, or support',
  },
  {
    icon: Mail,
    title: 'Direct Contact',
    subtitle: 'Reach our team for tailored guidance and next steps',
  },
]

function ContactPoints() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-4 xl:gap-6">
      {CONTACT_POINTS.map((point, i) => (
        <div key={point.title} className="flex items-start gap-4 lg:gap-3 xl:gap-4">
          <div className="flex min-w-0 flex-1 items-start gap-3">
            <div
              className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full"
              style={{ border: '1px solid rgba(255,107,0,0.25)', color: ACCENT }}
            >
              <point.icon className="h-4 w-4" strokeWidth={1.75} />
            </div>
            <div className="min-w-0 pt-0.5">
              <p className="text-sm font-semibold text-white">{point.title}</p>
              <p className="mt-0.5 text-xs leading-snug" style={{ color: BODY }}>
                {point.subtitle}
              </p>
            </div>
          </div>
          {i < CONTACT_POINTS.length - 1 && (
            <ArrowRight
              className="mt-2 hidden h-4 w-4 shrink-0 lg:block"
              style={{ color: ACCENT }}
              strokeWidth={2}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default function CTASection() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#05070A' }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,107,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.04,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-8 pb-12 pt-16 lg:pb-0 lg:pt-20">
        <div className="glass-card-warm relative min-h-[220px] p-8 transition-[border-color,box-shadow] duration-300 ease-out hover:border-white/[0.12] hover:shadow-[0_12px_40px_rgba(0,0,0,0.35),0_0_48px_rgba(255,107,0,0.07)] lg:p-12">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,107,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.04) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                opacity: 0.04,
              }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[220px_1fr_auto] lg:gap-12">
            <WireframeCubeVisual />

            <div className="flex flex-col gap-8">
              <div>
                <p
                  className="mb-4 font-sans text-xs font-medium uppercase tracking-[2px]"
                  style={{ color: ACCENT }}
                >
                  Get in Touch
                </p>
                <h2 className="font-sans text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.1] text-white">
                  Contact us regarding{' '}
                  <span style={{ color: ACCENT }}>partnering</span> or for any queries.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed lg:text-base" style={{ color: BODY }}>
                  Whether you&apos;re an institution exploring partnership or have questions about
                  our programs, our team is ready to help.
                </p>
              </div>
              <ContactPoints />
            </div>

            <div className="flex shrink-0 items-center justify-center lg:justify-end">
              <Link
                href="/contact"
                className="
group relative inline-flex h-12 items-center justify-center gap-2
overflow-hidden rounded-xl
bg-[#FF6B00]
px-6

text-sm font-semibold tracking-[0.01em]
text-white hover:text-white active:text-white visited:text-white

border border-white/10

shadow-[0_2px_8px_rgba(255,107,0,0.18),0_8px_24px_rgba(255,107,0,0.12)]

transition-all duration-300 ease-out

before:absolute before:inset-0
before:bg-gradient-to-b
before:from-white/20
before:to-transparent
before:pointer-events-none

hover:bg-[#F76500]
hover:-translate-y-0.5
hover:shadow-[0_4px_12px_rgba(255,107,0,0.22),0_12px_32px_rgba(255,107,0,0.18)]

active:bg-[#E85F00]
active:translate-y-0
active:scale-[0.98]

focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-[#FF6B00]/35
focus-visible:ring-offset-2
focus-visible:ring-offset-[#05070A]
"
              >
                <span className="relative z-10">Contact Us</span>
                <ArrowRight
                  className="relative z-10 h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
