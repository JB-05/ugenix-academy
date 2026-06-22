import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Mentors',
  description:
    'Meet the industry practitioners who mentor Ugenix Academy students — design leads, engineers, and career coaches who review real project work.',
  openGraph: {
    title: 'Our Mentors | Ugenix Academy',
    description: 'Learn from professionals who build products and ship software every day.',
    url: '/mentors',
  },
}

export default function MentorsLayout({ children }: { children: React.ReactNode }) {
  return children
}
