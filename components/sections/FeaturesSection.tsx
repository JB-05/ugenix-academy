'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  BriefcaseBusiness,
  Laptop,
  UserSearch,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const CARD_CLASS =
  'relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#0a0a0a]'

const EASE = [0.22, 1, 0.36, 1] as const
const HOVER_TRANSITION = { duration: 0.55, ease: EASE }

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

const FEATURES = [
  {
    icon: BriefcaseBusiness,
    title: 'Industry Projects',
    description: 'Work on real projects scoped by industry experts.',
    column: 2,
    row: 1,
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work in teams, just like real companies.',
    column: 2,
    row: 2,
  },
  {
    icon: Laptop,
    title: 'Expert Code Reviews',
    description: 'Get feedback from practicing professionals, not just teachers.',
    column: 3,
    row: 1,
  },
  {
    icon: UserSearch,
    title: 'Career Support',
    description: 'Resume, interview prep & placement guidance.',
    column: 3,
    row: 2,
  },
] as const

const PORTFOLIO_LINES = ['Your work.', 'Your portfolio.', 'Your future.'] as const

function CardAmbientLayer() {
  return (
    <motion.div
      variants={ambientVariants}
      className="pointer-events-none absolute inset-0 rounded-[18px]"
      style={{
        background:
          'radial-gradient(ellipse 90% 80% at 20% 15%, rgba(228,87,46,0.1) 0%, transparent 58%)',
      }}
      aria-hidden="true"
    />
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: typeof BriefcaseBusiness
  title: string
  description: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.95, delay: 0.25 + index * 0.16, ease: EASE }}
      className="h-full"
    >
      <motion.article
        initial="rest"
        whileHover="hover"
        variants={hoverVariants}
        className={cn(CARD_CLASS, 'flex h-full flex-col p-5 sm:p-6')}
      >
      <CardAmbientLayer />
      <motion.div variants={contentFloatVariants} className="relative z-10 flex h-full flex-col">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 0.75, delay: 0.35 + index * 0.16, ease: EASE }}
        >
          <Icon className="h-[18px] w-[18px] shrink-0 text-orange-500" strokeWidth={1.75} />
        </motion.div>
        <h3 className="mt-3 font-heading text-base font-semibold leading-tight text-white sm:text-[17px]">
          {title}
        </h3>
        <motion.p
          variants={descriptionVariants}
          className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400"
        >
          {description}
        </motion.p>
      </motion.div>
      </motion.article>
    </motion.div>
  )
}

function PortfolioDevicesVisual() {
  return (
    <div
      className="relative mt-auto min-h-[240px] w-full flex-1 overflow-visible sm:min-h-[280px] lg:min-h-[320px]"
      aria-hidden="true"
    >
      <motion.div
        initial={{ opacity: 0, y: 56, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={viewport}
        transition={{ duration: 1.2, delay: 0.55, ease: EASE }}
        className="relative h-full w-full"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 1.4, delay: 0.65, ease: EASE }}
          className="pointer-events-none absolute bottom-10 left-1/2 z-0 h-36 w-56 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl"
        />
        <div className="absolute inset-x-0 bottom-0 flex h-full items-end justify-center pb-0">
          <Image
            src="/assets/features-portfolio-phone-tablet.png"
            alt=""
            width={720}
            height={520}
            className="relative z-10 w-full max-w-[480px] object-contain object-bottom drop-shadow-[0_20px_48px_rgba(0,0,0,0.55)] sm:max-w-[540px] lg:max-w-[620px]"
          />
        </div>
      </motion.div>
    </div>
  )
}

function RightCardGlow() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 1.6, delay: 0.25, ease: EASE }}
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[18px]"
        style={{
          background: `
            radial-gradient(ellipse 130% 90% at -8% -12%, rgba(228,87,46,0.55) 0%, rgba(228,87,46,0.22) 32%, transparent 62%),
            radial-gradient(ellipse 70% 55% at 18% 0%, rgba(255,107,0,0.28) 0%, transparent 52%)
          `,
        }}
        aria-hidden="true"
      />
      <motion.div
        variants={ambientVariants}
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[18px]"
        style={{
          background:
            'radial-gradient(ellipse 100% 90% at 10% 0%, rgba(255,107,0,0.18) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />
    </>
  )
}

export default function FeaturesSection() {
  return (
    <section id="features" className="relative scroll-mt-24 overflow-hidden bg-[#050505] py-10 sm:py-14 lg:py-20">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.35fr] lg:grid-rows-2 lg:gap-4">
          <motion.div
            initial={{ opacity: 0, x: -40, y: 24 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={viewport}
            transition={{ duration: 1, ease: EASE }}
            className="h-full sm:col-span-2 lg:col-span-1 lg:col-start-1 lg:row-span-2 lg:row-start-1"
          >
            <motion.article
              initial="rest"
              whileHover="hover"
              variants={hoverVariants}
              className={cn(
                CARD_CLASS,
                'flex h-full min-h-[300px] items-center justify-center p-5 text-center sm:min-h-[340px] sm:p-6 lg:min-h-0 lg:p-8'
              )}
            >
            <CardAmbientLayer />
            <motion.h2
              variants={contentFloatVariants}
              className="relative z-10 font-heading text-[1.65rem] font-bold leading-[1.15] text-white sm:text-[1.85rem] lg:text-[2rem] xl:text-[2.15rem]"
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
              >
                Everything you need
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.85, delay: 0.35, ease: EASE }}
              >
                to become
              </motion.span>
              <motion.span
                className="block text-orange-500"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.85, delay: 0.5, ease: EASE }}
              >
                job-ready.
              </motion.span>
            </motion.h2>
            </motion.article>
          </motion.div>

          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                'min-h-[168px] sm:min-h-[180px] lg:min-h-0',
                feature.column === 2 && feature.row === 1 && 'lg:col-start-2 lg:row-start-1',
                feature.column === 2 && feature.row === 2 && 'lg:col-start-2 lg:row-start-2',
                feature.column === 3 && feature.row === 1 && 'lg:col-start-3 lg:row-start-1',
                feature.column === 3 && feature.row === 2 && 'lg:col-start-3 lg:row-start-2'
              )}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: 40, y: 24 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={viewport}
            transition={{ duration: 1, ease: EASE }}
            className="h-full sm:col-span-2 lg:col-span-1 lg:col-start-4 lg:row-span-2 lg:row-start-1"
          >
            <motion.article
              initial="rest"
              whileHover="hover"
              variants={hoverVariants}
              className={cn(
                CARD_CLASS,
                'flex h-full min-h-[320px] flex-col overflow-visible p-5 sm:min-h-[360px] sm:p-6 lg:min-h-0 lg:p-8'
              )}
            >
            <RightCardGlow />
            <motion.div
              variants={contentFloatVariants}
              className="relative z-10 flex min-h-0 flex-1 flex-col"
            >
              <div className="shrink-0">
                {PORTFOLIO_LINES.map((line, index) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.85, delay: 0.2 + index * 0.15, ease: EASE }}
                    className="font-heading text-[1.65rem] font-bold leading-[1.15] text-white sm:text-[1.85rem] lg:text-[2rem] xl:text-[2.15rem]"
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
              <PortfolioDevicesVisual />
            </motion.div>
            </motion.article>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
