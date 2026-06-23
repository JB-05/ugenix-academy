'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react'
import { InnerPageHero } from '@/components/pages/InnerPageHero'
import { programViewport } from '@/components/programs/ProgramCards'
import { ACADEMY_REGISTRATION_URL } from '@/lib/constants'
import {
  GAMIFICATION,
  MISSION_POSSIBLE_GOAL,
  MISSION_POSSIBLE_MOTTO,
  MISSION_POSSIBLE_SUMMARY,
  MISSION_POSSIBLE_TAGLINE,
  PHASE_ONE,
  PHASE_TWO,
} from '@/lib/mission-possible-data'
import { UPCOMING_PROGRAMS } from '@/lib/programs-data'
import { cn } from '@/lib/utils'

const PROGRAM = UPCOMING_PROGRAMS.find((p) => p.id === 'worksim')!
const EASE = [0.22, 1, 0.36, 1] as const

const CARD_CLASS = 'rounded-[18px] border border-white/[0.08] bg-[#0a0a0a]'

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-xl font-semibold text-white sm:text-2xl">{children}</h2>
  )
}

function InfoPill({ icon: Icon, label }: { icon: typeof Calendar; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#0a0a0a] px-4 py-2 text-xs font-medium text-zinc-300">
      <Icon size={14} className="text-orange-500" strokeWidth={2} />
      {label}
    </span>
  )
}

function TopicList({ topics }: { topics: string[] }) {
  return (
    <ul className="mt-3 space-y-1.5">
      {topics.map((topic) => (
        <li key={topic} className="flex items-start gap-2 text-sm leading-relaxed text-zinc-400">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-500" />
          {topic}
        </li>
      ))}
    </ul>
  )
}

export default function WorkSimPage() {
  return (
    <div className="bg-[#050505]">
      <InnerPageHero
        label="Active Program"
        title="Mission Possible — full stack & AI internship."
        highlight="Mission Possible"
        description={MISSION_POSSIBLE_SUMMARY}
      />

      <section className="pb-8 sm:pb-10">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-green-500/40 bg-green-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-green-400">
              Active
            </span>
            <InfoPill icon={Calendar} label={PHASE_ONE.duration + ' bootcamp + ' + PHASE_TWO.duration + ' sprint'} />
            <InfoPill icon={MapPin} label={PHASE_ONE.mode} />
            <InfoPill icon={Users} label={PHASE_ONE.audience} />
          </div>
          <p className="mt-5 font-heading text-sm font-medium tracking-wide text-orange-500 sm:text-base">
            {MISSION_POSSIBLE_MOTTO}
          </p>
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-10 sm:py-14">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={programViewport}
            transition={{ duration: 0.85, ease: EASE }}
            className={cn(CARD_CLASS, 'p-6 sm:p-8')}
          >
            <p className="font-heading text-[11px] font-medium uppercase tracking-[0.28em] text-orange-500">
              Program Overview
            </p>
            <h2 className="mt-3 font-heading text-lg font-semibold text-white sm:text-xl">
              {MISSION_POSSIBLE_TAGLINE}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">{MISSION_POSSIBLE_GOAL}</p>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-10 sm:py-14">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={programViewport}
            transition={{ duration: 0.85, ease: EASE }}
            className="mb-8"
          >
            <p className="mb-2 font-heading text-[11px] font-medium uppercase tracking-[0.28em] text-orange-500">
              {PHASE_ONE.title}
            </p>
            <SectionTitle>{PHASE_ONE.subtitle}</SectionTitle>
            <p className="mt-3 text-sm text-zinc-400">
              {PHASE_ONE.duration} · {PHASE_ONE.mode} · {PHASE_ONE.audience}
            </p>
          </motion.div>

          <div className="space-y-4">
            {PHASE_ONE.days.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={programViewport}
                transition={{ duration: 0.85, delay: 0.06 + index * 0.04, ease: EASE }}
                className={cn(CARD_CLASS, 'overflow-hidden')}
              >
                <div className="border-b border-white/[0.06] bg-[#050505] px-5 py-4 sm:px-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
                    Day {day.day}
                  </p>
                  <h3 className="mt-1 font-heading text-base font-semibold text-white sm:text-lg">
                    {day.title}
                  </h3>
                </div>
                <div className="space-y-5 p-5 sm:p-6">
                  {day.sessions.map((session) => (
                    <div key={session.title} className="border-b border-white/[0.06] pb-5 last:border-0 last:pb-0">
                      <p className="text-xs font-medium text-zinc-500">{session.time}</p>
                      <h4 className="mt-1 font-heading text-sm font-semibold text-white sm:text-base">
                        {session.title}
                      </h4>
                      <TopicList topics={session.topics} />
                      {'activity' in session && session.activity && (
                        <p className="mt-3 text-sm font-medium text-orange-400/90">
                          Activity: {session.activity}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-10 sm:py-14">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={programViewport}
            transition={{ duration: 0.85, ease: EASE }}
            className="mb-8"
          >
            <p className="mb-2 font-heading text-[11px] font-medium uppercase tracking-[0.28em] text-orange-500">
              {PHASE_TWO.title}
            </p>
            <SectionTitle>Guided team project sprint</SectionTitle>
            <p className="mt-3 text-sm text-zinc-400">
              {PHASE_TWO.duration} · {PHASE_TWO.description}
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PHASE_TWO.days.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={programViewport}
                transition={{ duration: 0.85, delay: 0.05 + index * 0.04, ease: EASE }}
                className={cn(CARD_CLASS, 'p-4 sm:p-5')}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
                  Day {day.day}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{day.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-10 sm:py-14">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={programViewport}
            transition={{ duration: 0.85, ease: EASE }}
            className="mb-8"
          >
            <p className="mb-2 font-heading text-[11px] font-medium uppercase tracking-[0.28em] text-orange-500">
              {GAMIFICATION.title}
            </p>
            <SectionTitle>Stay engaged throughout the program</SectionTitle>
            <p className="mt-3 text-sm text-zinc-400">{GAMIFICATION.subtitle}</p>
          </motion.div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className={cn(CARD_CLASS, 'p-5 sm:p-6')}>
              <h3 className="font-heading text-base font-semibold text-white">Daily challenges</h3>
              <TopicList topics={GAMIFICATION.dailyChallenges} />
            </div>
            <div className={cn(CARD_CLASS, 'p-5 sm:p-6')}>
              <h3 className="font-heading text-base font-semibold text-white">Points-based leaderboard</h3>
              <p className="mt-2 text-sm text-zinc-500">Students earn points for:</p>
              <TopicList topics={GAMIFICATION.leaderboardPoints} />
            </div>
            <div className={cn(CARD_CLASS, 'p-5 sm:p-6')}>
              <h3 className="font-heading text-base font-semibold text-white">Special recognition</h3>
              <TopicList topics={GAMIFICATION.recognition} />
            </div>
            <div className={cn(CARD_CLASS, 'p-5 sm:p-6')}>
              <h3 className="font-heading text-base font-semibold text-white">Daily mentor reviews</h3>
              <TopicList topics={GAMIFICATION.mentorReviews} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-10 sm:pb-14 lg:pb-16">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={programViewport}
            transition={{ duration: 0.85, ease: EASE }}
            className={cn(CARD_CLASS, 'overflow-hidden p-8 text-center sm:p-10')}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(228,87,46,0.12) 0%, transparent 62%)',
              }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <p className="font-heading text-sm font-medium text-orange-500">{MISSION_POSSIBLE_MOTTO}</p>
              <h2 className="mt-4 font-heading text-xl font-semibold text-white sm:text-2xl">
                Ready to join Mission Possible?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-400 sm:text-base">
                {PROGRAM.meta}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                {PROGRAM.registrationOpen ? (
                  <Link
                    href={ACADEMY_REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hero-primary group w-full sm:w-auto"
                  >
                    <span className="relative z-10 text-white">Register for Mission Possible</span>
                    <ArrowRight
                      size={18}
                      className="relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex cursor-not-allowed items-center justify-center rounded-2xl border border-white/[0.08] bg-[#111111] px-8 py-4 text-base font-semibold text-zinc-500"
                  >
                    Registration closed
                  </button>
                )}
                <Link href="/programs" className="btn-hero-secondary w-full sm:w-auto">
                  View all programs
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
