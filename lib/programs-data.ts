import { WORKSIM_REGISTRATION_ENDED } from './constants'

export type ProgramIconId = 'box' | 'trending-up' | 'laptop' | 'flask' | 'target'

export type CatalogProgramStatus = 'active' | 'coming-soon'
export type CatalogProgramCta = 'explore' | 'coming-soon'

export interface CatalogProgram {
  id: string
  name: string
  description: string
  href: string
  icon: ProgramIconId
  status: CatalogProgramStatus
  cta: CatalogProgramCta
}

export interface PastProgram {
  id: string
  name: string
  description: string
  status: string
  meta?: string
  href: string
}

export interface UpcomingProgram {
  id: string
  name: string
  description: string
  status: 'Active' | 'Coming Soon'
  meta?: string
  href: string
  registrationOpen?: boolean
}

export const CATALOG_PROGRAMS: CatalogProgram[] = [
  {
    id: 'core',
    name: 'Ugenix Core',
    description: 'Foundation program for beginners to build strong basics.',
    href: '/contact',
    icon: 'box',
    status: 'coming-soon',
    cta: 'coming-soon',
  },
  {
    id: 'pro',
    name: 'Ugenix Pro',
    description: 'Advanced program to master in-demand technologies.',
    href: '/contact',
    icon: 'trending-up',
    status: 'coming-soon',
    cta: 'coming-soon',
  },
  {
    id: 'worksim',
    name: 'Mission Possible',
    description: '15-day full stack & AI internship — bootcamp, team sprint, and real deployment.',
    href: '/courses/worksim',
    icon: 'laptop',
    status: 'active',
    cta: 'explore',
  },
  {
    id: 'labs',
    name: 'Ugenix Labs',
    description: 'Experiment, build and innovate with guided lab projects.',
    href: '/contact',
    icon: 'flask',
    status: 'coming-soon',
    cta: 'coming-soon',
  },
  {
    id: 'placement',
    name: 'Ugenix Placement',
    description: 'Resume, interview prep and placement support to land your dream job.',
    href: '/contact',
    icon: 'target',
    status: 'coming-soon',
    cta: 'coming-soon',
  },
]

export const UPCOMING_PROGRAMS: UpcomingProgram[] = [
  {
    id: 'worksim',
    name: 'Mission Possible',
    description:
      '15-day full stack development & AI internship — offline foundation bootcamp, guided team sprint, gamified challenges, and mentor-led reviews.',
    status: 'Active',
    meta: '15 days · Offline bootcamp + guided sprint',
    href: '/courses/worksim',
    registrationOpen: !WORKSIM_REGISTRATION_ENDED,
  },
]

export const PAST_PROGRAMS: PastProgram[] = [
  {
    id: 'prompt-engineering',
    name: 'Prompt Engineering',
    description:
      'Learn to communicate effectively with AI systems and craft prompts that produce reliable, useful results.',
    status: 'Completed',
    meta: 'Live cohort-based course',
    href: '/courses/prompt-engineering',
  },
  {
    id: 'vista',
    name: 'V.I.S.T.A. Idea Pitching Competition',
    description:
      'Visionary Initiative for Student-Led Transformation And Action — an idea pitching competition hosted by E.D Club with Ugenix Academy & IEDC CEK.',
    status: 'Registrations closed',
    meta: 'Team-based, on-campus program',
    href: '/vista',
  },
]
