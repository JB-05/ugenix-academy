import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register',
  description:
    'Register for Ugenix Academy programs and internships at register.academy.ugenix.in.',
  openGraph: {
    title: 'Register | Ugenix Academy',
    description: 'Register for Ugenix Academy programs and internships.',
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
