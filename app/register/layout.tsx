import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register',
  description:
    'Register for Ugenix Academy courses. Enroll in the Prompt Engineering course or other tech training programs.',
  openGraph: {
    title: 'Register | Ugenix Academy',
    description: 'Enroll in Ugenix Academy courses including Prompt Engineering.',
    url: '/register',
  },
}

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
