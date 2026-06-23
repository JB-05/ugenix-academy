import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mission Possible',
  description:
    'Mission Possible is a 15-day full stack development & AI internship — offline bootcamp, guided team sprint, gamified challenges, and mentor-led reviews.',
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
      '15-day full stack development & AI internship with offline bootcamp and guided project sprint.',
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
