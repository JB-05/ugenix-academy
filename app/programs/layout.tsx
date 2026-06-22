import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'Explore Ugenix Academy programs — from foundational training to WorkSim project simulation, labs, placement support, and our archive of past cohorts.',
  openGraph: {
    title: 'Programs | Ugenix Academy',
    description: 'Choose your path. Build your future with Ugenix Academy programs.',
    url: '/programs',
  },
}

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return children
}
