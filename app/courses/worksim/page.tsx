'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { UPCOMING_PROGRAMS } from '@/lib/programs-data'

const PROGRAM = UPCOMING_PROGRAMS.find((p) => p.id === 'worksim')!

const PHASES = [
  {
    step: '01',
    title: 'Discovery & scoping',
    description:
      'Read a real brief, clarify requirements, and break work into tasks — the way product teams kick off a sprint.',
  },
  {
    step: '02',
    title: 'Build & collaborate',
    description:
      'Work with assigned roles, sync on progress, and ship incremental deliverables with mentor checkpoints.',
  },
  {
    step: '03',
    title: 'Review & iterate',
    description:
      'Receive structured feedback on quality, trade-offs, and communication — then refine like you would in production.',
  },
  {
    step: '04',
    title: 'Ship & showcase',
    description:
      'Present outcomes you can add to your portfolio, with clear evidence of how you contributed to the project.',
  },
]

const OUTCOMES = [
  'Portfolio projects scoped like real industry work',
  'Experience with team workflows, deadlines, and handoffs',
  'Mentor feedback on deliverables and professional habits',
  'Stronger communication, ownership, and problem-solving skills',
  'Confidence talking about your work in interviews',
]

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <div className="mt-1 flex-shrink-0">
        <svg className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="leading-relaxed text-text-secondary">{children}</p>
    </li>
  )
}

function InfoCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`dark-card p-6 sm:p-8 ${className}`}>{children}</div>
}

export default function WorkSimPage() {
  const router = useRouter()

  return (
    <div className="dark-page">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <button onClick={() => router.back()} className="dark-back-link">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <span className="mb-3 inline-flex items-center rounded-full border border-green-500/40 bg-green-500/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-green-400">
            Active
          </span>
          <h1 className="mb-6 text-text-primary">{PROGRAM.name}</h1>
          <p className="text-xl leading-relaxed text-text-secondary">
            WorkSim mirrors how real teams ship software — scoped projects, collaboration, reviews,
            and deliverables you can show employers. Train like you&apos;re already working, not just
            watching lectures.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-semibold text-text-primary">About the program</h2>
          <InfoCard>
            <p className="mb-4 leading-relaxed text-text-secondary">
              Ugenix WorkSim is a project-simulation program built for students who want job-ready
              experience before they graduate. Instead of isolated assignments, you work through
              guided phases that reflect how modern tech teams plan, build, review, and ship.
            </p>
            <p className="leading-relaxed text-text-secondary">
              Mentors who work in industry set the bar for quality and help you understand what
              matters in real delivery — communication, ownership, and thoughtful execution.
            </p>
          </InfoCard>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-semibold text-text-primary">What you&apos;ll experience</h2>
          <ul className="space-y-4">
            <CheckItem>Industry-style project briefs scoped by practitioners</CheckItem>
            <CheckItem>Collaboration with roles, deadlines, and real handoffs</CheckItem>
            <CheckItem>Code and deliverable reviews from mentors who build in production</CheckItem>
            <CheckItem>Portfolio-ready outcomes — not toy assignments</CheckItem>
            <CheckItem>Structured reflection on trade-offs, quality, and delivery</CheckItem>
            <CheckItem>Career-aligned skills: communication, ownership, and problem-solving</CheckItem>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-semibold text-text-primary">How it works</h2>
          <div className="space-y-4">
            {PHASES.map((phase) => (
              <InfoCard key={phase.step} className="border-l-2 border-l-orange-500/60">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-500">
                  Phase {phase.step}
                </p>
                <h3 className="mb-2 text-lg font-semibold text-text-primary">{phase.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
                  {phase.description}
                </p>
              </InfoCard>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-semibold text-text-primary">Program format</h2>
          <InfoCard>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-text-primary">Simulation-first learning</h3>
                <p className="leading-relaxed text-text-secondary">
                  Each cohort moves through discovery, build, review, and ship with mentor checkpoints
                  along the way. You practice workplace rhythms in a supported environment designed for
                  learning — not pressure without guidance.
                </p>
              </div>
            </div>
          </InfoCard>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-semibold text-text-primary">What you&apos;ll walk away with</h2>
          <InfoCard className="border-dashed border-orange-500/30">
            <ul className="space-y-3">
              {OUTCOMES.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                  {outcome}
                </li>
              ))}
            </ul>
          </InfoCard>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-semibold text-text-primary">Who it&apos;s for</h2>
          <InfoCard>
            <p className="leading-relaxed text-text-secondary">
              Students and early-career builders who want hands-on proof of skill — not just certificates.
              Ideal if you learn best by doing, collaborating, and shipping work that belongs in a portfolio.
            </p>
          </InfoCard>
        </section>

        <section className="mb-8 mt-16 text-center">
          {PROGRAM.registrationOpen ? (
            <Link href="/register/worksim" className="btn-hero-primary group">
              <span className="relative z-10 text-white">Register for WorkSim</span>
              <ArrowRight
                size={18}
                className="relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed items-center justify-center rounded-2xl border border-border-primary bg-bg-850 px-8 py-4 text-base font-semibold text-text-muted opacity-80"
            >
              Registration closed
            </button>
          )}
        </section>
      </section>
    </div>
  )
}
