export interface CareerPerk {
  id: string
  title: string
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
