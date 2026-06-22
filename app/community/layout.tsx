import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community Resources',
  description:
    'Access curated files, templates, and learning resources shared by the Ugenix Academy community.',
  openGraph: {
    title: 'Community Resources | Ugenix Academy',
    description: 'Files, guides, and resources to support your learning journey.',
    url: '/community',
  },
}

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children
}
