import type { Metadata } from 'next'
import { faqItems } from '@/lib/faq-data'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'FAQs about Ugenix Academy: who our courses are for, how they work, certificates, enrollment, and how we differ from typical online tutorials.',
  openGraph: {
    title: 'FAQ | Ugenix Academy',
    description: 'Common questions about Ugenix Academy courses, enrollment, and approach.',
    url: '/faq',
  },
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ugenixacademy.com'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
