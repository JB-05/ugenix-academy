import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mission Possible',
  description:
    'Mission Possible is a 15-day hybrid full stack development & AI internship — offline bootcamp and hackathon, then an online capstone sprint with mentor-led reviews.',
  keywords: [
    'Mission Possible',
    'full stack internship',
    'AI internship',
    'Ugenix Academy',
    'CSE internship',
  ],
  openGraph: {
    title: 'Mission Possible | Ugenix Academy',
    description:
      '15-day hybrid full stack development & AI internship — offline bootcamp and hackathon, then online capstone sprint.',
    url: '/programs/missionpossible',
  },
  alternates: {
    canonical: '/programs/missionpossible',
  },
}

export default function MissionPossibleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
