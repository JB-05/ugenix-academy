import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Ugenix Academy — mentor students, teach programs, and help build careers through real-world learning.',
  openGraph: {
    title: 'Careers | Ugenix Academy',
    description: 'Work with us to shape the next generation of job-ready tech talent.',
    url: '/careers',
  },
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children
}
