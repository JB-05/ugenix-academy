import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ugenix WorkSim',
  description:
    'Ugenix WorkSim trains students through real-world project simulation — industry-style deliverables, mentor reviews, and job-ready portfolio work.',
  keywords: ['WorkSim', 'project simulation', 'internship training', 'team projects', 'Ugenix Academy'],
  openGraph: {
    title: 'Ugenix WorkSim | Ugenix Academy',
    description: 'Real-world project simulation for students. Build job-ready experience before you graduate.',
    url: '/courses/worksim',
  },
}

export default function WorkSimLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
