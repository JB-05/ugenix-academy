import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'V.I.S.T.A. Idea Pitching Competition',
  description:
    'Register for V.I.S.T.A. (Visionary Initiative for Student-Led Transformation And Action), an idea pitching competition hosted by E.D Club, conducted in collaboration with Ugenix Academy & IEDC CEK.',
  openGraph: {
    title: 'V.I.S.T.A. Idea Pitching Competition | Ugenix Academy',
    description:
      'Submit your team\'s idea for V.I.S.T.A., hosted by E.D Club in collaboration with Ugenix Academy & IEDC CEK.',
    url: '/vista',
  },
}

export default function VistaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

