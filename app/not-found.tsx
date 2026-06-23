import Link from 'next/link'
import { ArrowLeft, ArrowRight, Compass, Home } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Programs', href: '/programs' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
]

export default function NotFound() {
  return (
    <div className="bg-[#050505]">
      <section className="relative overflow-hidden pt-28 pb-10 sm:pt-32 sm:pb-14 lg:pb-16">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} strokeWidth={2} />
            Back to home
          </Link>

          <p className="mb-3 font-heading text-[11px] font-medium uppercase tracking-[0.28em] text-orange-500">
            404
          </p>
          <h1 className="max-w-[720px] font-heading text-[1.85rem] font-bold leading-[1.12] text-white sm:text-[2.15rem] lg:text-[2.5rem]">
            This page doesn&apos;t exist{' '}
            <span className="text-orange-500">yet.</span>
          </h1>
          <p className="mt-4 max-w-[640px] text-sm leading-relaxed text-zinc-400 sm:text-base">
            The link may be broken, outdated, or the page is still being prepared. Head back home
            or explore what&apos;s available on Ugenix Academy.
          </p>
        </div>
      </section>

      <section className="border-t border-white/[0.06] pb-10 sm:pb-14 lg:pb-16">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[18px] border border-white/[0.08] bg-[#0a0a0a] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-[#111111] text-orange-500">
                  <Compass size={18} strokeWidth={2} />
                </div>
                <h2 className="font-heading text-lg font-semibold text-white sm:text-xl">
                  Let&apos;s get you back on track
                </h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
                You might have followed a footer link to a section we&apos;re still building. In the
                meantime, these pages are live and ready to explore.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/" className="btn-hero-primary group w-full sm:w-auto">
                  <Home size={18} className="relative z-10 text-white" strokeWidth={2} />
                  <span className="relative z-10 text-white">Go back home</span>
                </Link>
                <Link href="/programs" className="btn-hero-secondary w-full sm:w-auto">
                  Browse programs
                  <ArrowRight size={18} strokeWidth={2.5} />
                </Link>
              </div>
            </div>

            <div className="rounded-[18px] border border-white/[0.08] bg-[#0a0a0a] p-6 sm:p-8">
              <p className="font-heading text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                Popular pages
              </p>
              <ul className="mt-5 space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between rounded-xl border border-transparent px-3 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-white/[0.08] hover:bg-[#111111] hover:text-white"
                    >
                      {link.label}
                      <ArrowRight
                        size={16}
                        className="text-orange-500 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                        strokeWidth={2}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
