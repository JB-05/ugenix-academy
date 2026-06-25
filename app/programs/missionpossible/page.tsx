'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react'
import { InnerPageHero } from '@/components/pages/InnerPageHero'
import { programViewport } from '@/components/programs/ProgramCards'
import { MissionPossibleProgramContent, SectionSeparator } from './MissionPossibleProgramContent'
import { MissionPossibleBackdrop } from './MissionPossibleBackdrop'
import { ACADEMY_REGISTRATION_URL } from '@/lib/constants'
import {
  MISSION_POSSIBLE_MOTTO,
  MISSION_POSSIBLE_SUMMARY,
  PHASE_ONE,
  PROGRAM_DURATION,
  PROGRAM_MODE,
  PROGRAM_MODE_DETAIL,
} from '@/lib/mission-possible-data'
import { UPCOMING_PROGRAMS } from '@/lib/programs-data'
import { cn } from '@/lib/utils'

const PROGRAM = UPCOMING_PROGRAMS.find((p) => p.id === 'worksim')!
const EASE = [0.22, 1, 0.36, 1] as const
const CONTAINER = 'relative mx-auto max-w-[1440px] px-[clamp(20px,4vw,64px)]'
const SURFACE = cn(
  'rounded-[24px] border border-white/[0.06]',
  'bg-gradient-to-b from-white/[0.028] to-white/[0.012]',
  'shadow-[0_10px_40px_rgba(0,0,0,0.28)]',
  'transition-[transform,box-shadow,border-color] duration-300 ease-out'
)

function InfoPill({ icon: Icon, label }: { icon: typeof Calendar; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-xs font-medium text-zinc-300">
      <Icon size={14} className="text-orange-500" strokeWidth={2} />
      {label}
    </span>
  )
}

export default function MissionPossiblePage() {
  return (
    <div className="relative isolate overflow-hidden bg-[#05070A]">
      <MissionPossibleBackdrop />
      <div className="relative z-10">
      <InnerPageHero
        label=" "
        title="Mission Possible — full stack & AI internship."
        highlight="Mission Possible"
        description={MISSION_POSSIBLE_SUMMARY}
        compact
      />

      <section className="pb-2 sm:pb-4">
        <div className={CONTAINER}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-green-500/40 bg-green-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-green-400">
              Active
            </span>
            <InfoPill icon={Calendar} label={PROGRAM_DURATION + ' · 3 phases'} />
            <InfoPill icon={MapPin} label={PROGRAM_MODE} />
            <InfoPill icon={Users} label={PHASE_ONE.audience} />
          </div>
          <p className="mt-3 font-heading text-sm font-medium tracking-wide text-orange-500 sm:text-base">
            {MISSION_POSSIBLE_MOTTO}
          </p>
        </div>
      </section>

      <MissionPossibleProgramContent />

      <section className="relative py-20 sm:pb-28 lg:pb-32">
        <SectionSeparator />
        <div className={CONTAINER}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={programViewport}
            transition={{ duration: 0.85, ease: EASE }}
            className={cn(
              SURFACE,
              'relative overflow-hidden p-8 text-center sm:p-10',
              'hover:-translate-y-[2px] hover:shadow-[0_10px_40px_rgba(0,0,0,0.28),0_0_24px_rgba(255,98,0,0.06)]'
            )}
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
    </div>
  )
}
