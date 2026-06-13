'use client'

import { motion } from 'framer-motion'

const SKILLS = [
  'Web3 Develop',
  'Data Visualization',
  'API Integration',
  'DevOps & Deployment',
]

function CheckIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-orange-500" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8.5L6.5 12L13 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Sparkline() {
  return (
    <svg className="h-10 w-full" viewBox="0 0 120 40" fill="none" aria-hidden="true">
      <path
        d="M0 32 L20 28 L40 30 L60 18 L80 22 L100 8 L120 4"
        stroke="#E4572E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M0 32 L20 28 L40 30 L60 18 L80 22 L100 8 L120 4 L120 40 L0 40 Z"
        fill="url(#sparkGradient)"
        opacity="0.15"
      />
      <defs>
        <linearGradient id="sparkGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E4572E" />
          <stop offset="100%" stopColor="#E4572E" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function FigmaIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 3H12C14.2 3 16 4.8 16 7C16 9.2 14.2 11 12 11H8V3Z" fill="#F24E1E" />
      <path d="M8 11H12C14.2 11 16 12.8 16 15C16 17.2 14.2 19 12 19H8V11Z" fill="#A259FF" />
      <path d="M8 19H12C13.1 19 14 18.1 14 17C14 15.9 13.1 15 12 15H8V19Z" fill="#1ABCFE" />
      <path d="M4 7C4 4.8 5.8 3 8 3V11C5.8 11 4 9.2 4 7Z" fill="#FF7262" />
      <path d="M4 15C4 12.8 5.8 11 8 11V19C5.8 19 4 17.2 4 15Z" fill="#0ACF83" />
    </svg>
  )
}

function VSCodeIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 3L20 12L3 21V3Z" fill="#007ACC" opacity="0.3" />
      <path d="M3 3L14 12L3 21V3Z" fill="#007ACC" />
      <path d="M14 12L20 8V16L14 12Z" fill="#1F9CF0" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function FramerIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 4H20V8H12L4 4Z" fill="#E4572E" />
      <path d="M4 8H12V16H4V8Z" fill="#C6A75E" />
      <path d="M4 16H12L20 20V16H12V8H20V4H12L4 8V16Z" fill="#E4572E" opacity="0.6" />
    </svg>
  )
}

const cardVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.3 + i * 0.1 },
  }),
}

export default function HeroStatCards() {
  return (
    <div className="flex flex-col gap-4">
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        className="hero-stat-card"
      >
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-text-muted">
          Project Success
        </p>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-heading text-4xl font-bold text-orange-500">92%</p>
            <p className="text-xs text-text-muted">Completed</p>
          </div>
          <div className="flex-1 max-w-[120px]">
            <Sparkline />
          </div>
        </div>
      </motion.div>

      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        className="hero-stat-card"
      >
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-text-muted">
          Skills You Build
        </p>
        <ul className="space-y-2">
          {SKILLS.map((skill) => (
            <li key={skill} className="flex items-center gap-2.5 text-sm text-text-secondary">
              <CheckIcon />
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        custom={2}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        className="hero-stat-card"
      >
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-text-muted">
          Tools You&apos;ll Master
        </p>
        <div className="flex items-center gap-4">
          <FigmaIcon />
          <VSCodeIcon />
          <GitHubIcon />
          <FramerIcon />
        </div>
      </motion.div>
    </div>
  )
}
