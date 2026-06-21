'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const SKILLS = [
  'UI/UX Design',
  'Web Development',
  'API Integration',
  'Testing & Deployment',
]

const SPARKLINE_LINE =
  'M2 38 C18 37, 32 33, 48 28 C64 23, 82 16, 100 11 C114 7, 128 4, 138 2'
const SPARKLINE_FILL = `${SPARKLINE_LINE} L138 42 L2 42 Z`

function Sparkline({ isHovered }: { isHovered: boolean }) {
  return (
    <svg className="h-12 w-full" viewBox="0 0 140 44" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="heroSparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF6200" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#E4572E" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="heroSparkStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E4572E" stopOpacity="0.75" />
          <stop offset="55%" stopColor="#FF6200" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#FF8534" />
        </linearGradient>
        <filter id="heroSparkGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Subtle grid */}
      <line x1="0" y1="12" x2="140" y2="12" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      <line x1="0" y1="22" x2="140" y2="22" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      <line x1="0" y1="32" x2="140" y2="32" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

      {/* Area fill — brightens on hover */}
      <motion.path
        d={SPARKLINE_FILL}
        fill="url(#heroSparkFill)"
        animate={{ opacity: isHovered ? 0.55 : 0.2 }}
        transition={{ duration: 0.45 }}
      />

      {/* Soft glow stroke on hover */}
      <motion.path
        d={SPARKLINE_LINE}
        stroke="#FF6200"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#heroSparkGlow)"
        animate={{ opacity: isHovered ? 0.55 : 0 }}
        transition={{ duration: 0.35 }}
      />

      {/* Main line — always full */}
      <path
        d={SPARKLINE_LINE}
        stroke="url(#heroSparkStroke)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Peak marker */}
      <motion.circle
        cx="138"
        cy="2"
        r="2.5"
        fill="#FF6200"
        animate={{
          r: isHovered ? 3.5 : 2.5,
          opacity: isHovered ? 1 : 0.9,
        }}
        transition={{ duration: 0.35 }}
      />
      <motion.circle
        cx="138"
        cy="2"
        r="6"
        fill="#FF6200"
        animate={{
          opacity: isHovered ? 0.35 : 0,
          r: isHovered ? 8 : 6,
        }}
        transition={{ duration: 0.35 }}
      />
    </svg>
  )
}

function CheckIcon({ active }: { active?: boolean }) {
  return (
    <motion.span
      animate={active ? { scale: 1.15 } : { scale: 1 }}
      transition={{ duration: 0.25 }}
      className={active ? 'text-orange-400' : 'text-orange-500'}
    >
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M3 8.5L6.5 12L13 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.span>
  )
}

function FigmaIcon() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/icons/tools/figma.svg" alt="Figma" className="h-7 w-auto" width={28} height={42} />
  )
}

function VSCodeIcon() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/icons/tools/vscode.svg" alt="Visual Studio Code" className="h-7 w-7" width={28} height={28} />
  )
}

function GitHubIcon() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/icons/tools/github.svg" alt="GitHub" className="h-7 w-7" width={28} height={28} />
  )
}

function GitIcon() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/icons/tools/git.svg" alt="Git" className="h-7 w-7" width={28} height={28} />
  )
}

const TOOLS = [
  { id: 'figma', label: 'Figma', Icon: FigmaIcon },
  { id: 'vscode', label: 'VS Code', Icon: VSCodeIcon },
  { id: 'github', label: 'GitHub', Icon: GitHubIcon },
  { id: 'git', label: 'Git', Icon: GitIcon },
]

const cardVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.3 + i * 0.1 },
  }),
}

function useCycleOnHover(length: number, intervalMs = 650) {
  const [hovered, setHovered] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    if (!hovered || length === 0) {
      setActiveIndex(-1)
      return
    }

    setActiveIndex(0)
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % length)
    }, intervalMs)

    return () => clearInterval(interval)
  }, [hovered, length, intervalMs])

  return {
    hovered,
    activeIndex,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  }
}

export default function HeroStatCards() {
  const [statusHovered, setStatusHovered] = useState(false)
  const skillsHover = useCycleOnHover(SKILLS.length, 700)
  const toolsHover = useCycleOnHover(TOOLS.length, 750)

  return (
    <div className="flex flex-col gap-3">
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        className="hero-stat-card transition-[border-color,box-shadow] duration-300 hover:border-orange-500/25 hover:shadow-[0_8px_32px_rgba(228,87,46,0.12)]"
        onMouseEnter={() => setStatusHovered(true)}
        onMouseLeave={() => setStatusHovered(false)}
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-zinc-200">
          Project Status
        </p>
        <div className="flex items-end justify-between gap-4">
          <div>
            <motion.p
              className="font-heading text-4xl font-bold text-orange-500"
              animate={{ scale: statusHovered ? 1.04 : 1 }}
              transition={{ duration: 0.35 }}
            >
              92%
            </motion.p>
            <p className="text-xs text-text-muted">Completed</p>
          </div>
          <div className="max-w-[136px] flex-1">
            <Sparkline isHovered={statusHovered} />
          </div>
        </div>
      </motion.div>

      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        className="hero-stat-card transition-[border-color,box-shadow] duration-300 hover:border-orange-500/25 hover:shadow-[0_8px_32px_rgba(228,87,46,0.12)]"
        onMouseEnter={skillsHover.onMouseEnter}
        onMouseLeave={skillsHover.onMouseLeave}
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-zinc-200">
          Skills You Build
        </p>
        <ul className="space-y-2.5">
          {SKILLS.map((skill, index) => {
            const isActive = skillsHover.hovered && skillsHover.activeIndex === index

            return (
              <motion.li
                key={skill}
                animate={{
                  x: isActive ? 4 : 0,
                  opacity: skillsHover.hovered && !isActive ? 0.45 : 1,
                }}
                transition={{ duration: 0.3 }}
                className={`flex items-center justify-between gap-3 rounded-md px-1 py-0.5 text-sm transition-colors duration-300 ${
                  isActive
                    ? 'bg-orange-500/10 text-orange-300'
                    : 'text-text-secondary'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <motion.span
                    aria-hidden="true"
                    animate={{
                      scaleY: isActive ? 1.35 : 1,
                      opacity: isActive ? 1 : 0.7,
                    }}
                    className="h-3 w-0.5 shrink-0 rounded-full bg-orange-500"
                  />
                  {skill}
                </span>
                <CheckIcon active={isActive} />
              </motion.li>
            )
          })}
        </ul>
      </motion.div>

      <motion.div
        custom={2}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        className="hero-stat-card transition-[border-color,box-shadow] duration-300 hover:border-orange-500/25 hover:shadow-[0_8px_32px_rgba(228,87,46,0.12)]"
        onMouseEnter={toolsHover.onMouseEnter}
        onMouseLeave={toolsHover.onMouseLeave}
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-zinc-200">
          Tools You&apos;ll Master
        </p>
        <div className="flex items-center gap-4">
          {TOOLS.map(({ id, label, Icon }, index) => {
            const isActive = toolsHover.hovered && toolsHover.activeIndex === index

            return (
              <motion.span
                key={id}
                title={label}
                animate={{
                  scale: isActive ? 1.2 : 1,
                  opacity: toolsHover.hovered && !isActive ? 0.35 : 1,
                  y: isActive ? -2 : 0,
                }}
                transition={{ duration: 0.3 }}
                className={`rounded-lg p-0.5 ${
                  isActive ? 'shadow-[0_0_16px_rgba(228,87,46,0.45)]' : ''
                }`}
              >
                <Icon />
              </motion.span>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
