import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Ugenix Academy: our mission, approach, and how we teach practical technology and prompt engineering skills through real-world thinking.',
  openGraph: {
    title: 'About Ugenix Academy',
    description: 'Our mission, approach, and how we teach practical tech and prompt engineering skills.',
    url: '/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
