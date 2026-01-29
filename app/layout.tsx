import type { Metadata } from 'next'
import { Open_Sans, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ugenixacademy.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ugenix Academy | Professional Training in AI & Tech',
    template: '%s | Ugenix Academy',
  },
  description:
    'Ugenix Academy offers professional online training in prompt engineering and technology skills. Build job-ready, portfolio-backed skills with industry practitioners.',
  keywords: [
    'Ugenix Academy',
    'prompt engineering course',
    'AI training',
    'tech skills training',
    'online courses',
    'career development',
  ],
  authors: [{ name: 'Ugenix Academy', url: siteUrl }],
  creator: 'Ugenix Academy',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Ugenix Academy',
    title: 'Ugenix Academy | Professional Training in AI & Tech',
    description:
      'Build job-ready, portfolio-backed skills with industry practitioners. Prompt engineering and technology courses.',
    images: [
      {
        url: '/illustrations/Ugenix Logo Long.svg',
        width: 1200,
        height: 630,
        alt: 'Ugenix Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ugenix Academy | Professional Training in AI & Tech',
    description: 'Build job-ready skills in prompt engineering and tech with industry practitioners.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/illustrations/Ugenix Logo Short.svg',
    shortcut: '/illustrations/Ugenix Logo Short.svg',
    apple: '/illustrations/Ugenix Logo Short.svg',
  },
  alternates: { canonical: siteUrl },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Ugenix Academy',
      url: siteUrl,
      logo: `${siteUrl}/illustrations/Ugenix%20Logo%20Short.svg`,
      description: 'Professional online training academy for prompt engineering and technology skills.',
    },
    {
      '@type': 'WebSite',
      name: 'Ugenix Academy',
      url: siteUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/courses?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden">
        {/* Global fixed background layer */}
        <div className="fixed inset-0 -z-10 bg-[#F5F3F0]">
          <div className="absolute inset-0 hero-grid-pattern opacity-60" />
        </div>

        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}




