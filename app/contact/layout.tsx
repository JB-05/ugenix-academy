import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Ugenix Academy for course inquiries, partnerships, or support. Get in touch with our team.',
  openGraph: {
    title: 'Contact Ugenix Academy',
    description: 'Get in touch for course inquiries, partnerships, or support.',
    url: '/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
