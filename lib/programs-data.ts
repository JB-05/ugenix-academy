export interface PastProgram {
  id: string
  name: string
  description: string
  status: string
  meta?: string
  href: string
}

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
