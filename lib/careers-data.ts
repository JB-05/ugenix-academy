export interface CareerPerk {
  id: string
  title: string
  description: string
}

export interface OpenRole {
  id: string
  title: string
  type: string
  location: string
  description: string
}

export const CAREER_PERKS: CareerPerk[] = [
  {
    id: 'impact',
    title: 'Shape real careers',
    description:
      'Help students move from learning to doing — your work directly impacts how people enter the industry.',
  },
  {
    id: 'practitioners',
    title: 'Built by practitioners',
    description:
      'Join a team that ships technology and teaches from lived experience, not outdated textbooks.',
  },
  {
    id: 'flexible',
    title: 'Flexible collaboration',
    description:
      'Many roles support remote or part-time engagement alongside your primary professional work.',
  },
  {
    id: 'growth',
    title: 'Grow with us',
    description:
      'As Ugenix expands programs and partnerships, early team members help define how we scale.',
  },
]

export const OPEN_ROLES: OpenRole[] = [
  {
    id: 'industry-mentor',
    title: 'Industry Mentor',
    type: 'Part-time',
    location: 'Remote',
    description:
      'Review student deliverables, run feedback sessions, and share how real teams ship software and design work.',
  },
  {
    id: 'program-instructor',
    title: 'Program Instructor',
    type: 'Contract',
    location: 'Hybrid',
    description:
      'Lead cohort sessions, facilitate project workflows, and guide students through structured learning paths.',
  },
  {
    id: 'content-contributor',
    title: 'Content Contributor',
    type: 'Freelance',
    location: 'Remote',
    description:
      'Create practical learning materials, project briefs, and documentation aligned with industry standards.',
  },
]
