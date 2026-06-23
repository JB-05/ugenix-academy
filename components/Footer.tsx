import Link from 'next/link'
import Image from 'next/image'

const ACCENT = '#FF6B00'
const BODY = '#A8B0C0'
const MUTED = '#8A94A6'

const RESOURCES = [
  { label: 'Blogs', href: '/blogs' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Guides', href: '/guides' },
  { label: 'Webinars', href: '/webinars' },
  { label: 'Community', href: '/community' },
]

const COMPANY = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Mentors', href: '/mentors' },
  { label: 'Success Stories', href: '/success-stories' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
]

const LEGAL = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Refund Policy', href: '/refund-policy' },
]

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4
        className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.18em]"
        style={{ color: ACCENT }}
      >
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-sans text-sm text-white/90 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#05070A' }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,107,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.04,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-8 pb-10 pt-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/illustrations/UAlogo_short_DM.svg"
                alt="Ugenix Academy"
                width={40}
                height={28}
                className="h-9 w-auto"
              />
              <div className="font-sans leading-tight">
                <span className="block text-base font-semibold text-white">Ugenix</span>
                <span className="block text-sm font-medium" style={{ color: ACCENT }}>
                  Academy
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed" style={{ color: BODY }}>
              We don&apos;t just teach.
              <br />
              We build careers.
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed" style={{ color: BODY }}>
              Industry-aligned programs designed to get you hired and help you grow.
            </p>
            <p className="mt-6 font-sans text-sm leading-relaxed" style={{ color: BODY }}>
              Build. Apply.{' '}
              <span style={{ color: ACCENT }}>Succeed.</span>
              <br />
              The Future is Built by{' '}
              <span style={{ color: ACCENT }}>doers.</span>
            </p>
          </div>

          <FooterColumn title="Resources" links={RESOURCES} />
          <FooterColumn title="Company" links={COMPANY} />
        </div>

        <div className="my-10 h-px bg-white/[0.08]" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-sans text-sm" style={{ color: MUTED }}>
            &copy; {new Date().getFullYear()} Ugenix Academy. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {LEGAL.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-sm transition-colors duration-200 hover:text-white"
                style={{ color: MUTED }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
