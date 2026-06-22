'use client'

import { motion } from 'framer-motion'
import { ComingSoonPanel } from '@/components/pages/ComingSoonPanel'
import { InnerPageHero } from '@/components/pages/InnerPageHero'
import { programViewport } from '@/components/programs/ProgramCards'
import { CAREER_PERKS } from '@/lib/careers-data'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const
const HOVER_TRANSITION = { duration: 0.75, ease: EASE }

const hoverVariants = { rest: {}, hover: {} } as const

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

function PerkCard({ perk, index }: { perk: (typeof CAREER_PERKS)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={programViewport}
      transition={{ duration: 0.85, delay: 0.08 + index * 0.08, ease: EASE }}
    >
      <motion.article
        initial="rest"
        whileHover="hover"
        variants={hoverVariants}
        className="relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#0a0a0a] p-5 sm:p-6"
      >
        <motion.div
          variants={ambientVariants}
          className="pointer-events-none absolute inset-0 rounded-[18px]"
          style={{
            background:
              'radial-gradient(ellipse 90% 80% at 20% 15%, rgba(228,87,46,0.1) 0%, transparent 58%)',
          }}
          aria-hidden="true"
        />
        <motion.div variants={contentFloatVariants} className="relative z-10">
          <h3 className="font-heading text-base font-semibold text-white sm:text-lg">{perk.title}</h3>
          <motion.p variants={descriptionVariants} className="mt-2 text-sm leading-relaxed text-zinc-400">
            {perk.description}
          </motion.p>
        </motion.div>
      </motion.article>
    </motion.div>
  )
}

export default function CareersPage() {
  return (
    <div className="bg-[#050505]">
      <InnerPageHero
        label="Careers"
        title="Help us build careers that last."
        highlight="careers"
        description="Ugenix Academy is a technology company teaching how technology is actually built. Join us as a mentor, instructor, or contributor — and shape how the next generation enters the industry."
      />

      <section className="pb-10 sm:pb-14">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={programViewport}
            transition={{ duration: 0.85, ease: EASE }}
            className="mb-6 font-heading text-xl font-semibold text-white sm:text-2xl"
          >
            Why work with us
          </motion.h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CAREER_PERKS.map((perk, index) => (
              <PerkCard key={perk.id} perk={perk} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className={cn('border-t border-white/[0.06] py-10 sm:py-14 lg:pb-16')}>
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={programViewport}
            transition={{ duration: 0.85, ease: EASE }}
            className="mb-6 font-heading text-xl font-semibold text-white sm:text-2xl"
          >
            Open roles
          </motion.h2>
          <ComingSoonPanel
            title="Positions opening soon"
            description="We're preparing new opportunities to join the Ugenix team. Check back soon for open roles, or reach out through our contact page if you'd like to connect early."
          />
        </div>
      </section>
    </div>
  )
}
