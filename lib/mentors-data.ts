export interface Mentor {
  id: string
  name: string
  role: string
  expertise: string
  focus: string
  avatarColor: string
}

export const MENTORS: Mentor[] = [
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    role: 'Product Design Lead',
    expertise: 'Design systems, UX research, product critique',
    focus: 'WorkSim · Product Redesign',
    avatarColor: '#E4572E',
  },
  {
    id: 'arjun-patel',
    name: 'Arjun Patel',
    role: 'Senior Software Engineer',
    expertise: 'API architecture, backend systems, code review',
    focus: 'WorkSim · API Integration',
    avatarColor: '#C6A75E',
  },
  {
    id: 'maya-kumar',
    name: 'Maya Kumar',
    role: 'Engineering Manager',
    expertise: 'Team delivery, agile workflows, technical leadership',
    focus: 'WorkSim · Sprint Planning',
    avatarColor: '#6B7280',
  },
  {
    id: 'david-osei',
    name: 'David Osei',
    role: 'Full-Stack Developer',
    expertise: 'React, Node.js, deployment pipelines',
    focus: 'WorkSim · Deployment & QA',
    avatarColor: '#9CA3AF',
  },
  {
    id: 'priya-nair',
    name: 'Priya Nair',
    role: 'Career Coach',
    expertise: 'Resume reviews, interview prep, portfolio feedback',
    focus: 'Placement · Career Support',
    avatarColor: '#E4572E',
  },
  {
    id: 'james-wilson',
    name: 'James Wilson',
    role: 'DevOps Engineer',
    expertise: 'CI/CD, cloud infrastructure, production readiness',
    focus: 'WorkSim · Infrastructure',
    avatarColor: '#C6A75E',
  },
]
