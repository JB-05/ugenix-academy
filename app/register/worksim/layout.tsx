import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register for WorkSim',
  description:
    'Register for Ugenix WorkSim — real-world project simulation training with secure online payment.',
  openGraph: {
    title: 'Register for WorkSim | Ugenix Academy',
    description: 'Enroll in Ugenix WorkSim with secure Razorpay payment.',
    url: '/register/worksim',
  },
}

export default function WorkSimRegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
