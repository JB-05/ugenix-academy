'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ArrowIcon } from '@/components/sections/HeroTrustLogos'

const NAV_LINKS = [
  { href: '/#programs', label: 'Programs', hasDropdown: true },
  { href: '/faq', label: 'Resources', hasDropdown: true },
  { href: '/about', label: 'About Us' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header
        className={cn(
          'pointer-events-none fixed left-0 right-0 top-0 z-50 px-4 pt-4 transition-all duration-300 sm:px-6 sm:pt-5',
          isMenuOpen && 'z-[60]'
        )}
      >
        <nav
          className={cn(
            'pointer-events-auto mx-auto flex h-[3.25rem] max-w-[1280px] items-center justify-between rounded-full border px-4 sm:h-14 sm:px-5 lg:h-[3.75rem] lg:px-8',
            'bg-white/[0.04] backdrop-blur-xl backdrop-saturate-150',
            'border-white/[0.08]',
            'shadow-[0_8px_32px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.07)]',
            'transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out',
            isScrolled &&
              'translate-y-0 border-white/[0.12] bg-bg-950/60 shadow-[0_14px_40px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.09)]',
            !isScrolled && 'translate-y-0',
            isMenuOpen &&
              'border-orange-500/20 bg-bg-950/75 shadow-[0_16px_48px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]'
          )}
        >
          <Link
            href="/"
            className="flex shrink-0 items-center"
            onClick={closeMenu}
          >
            <img
              src="/illustrations/UAlogo_short_DM.svg"
              alt="Ugenix Academy"
              className="h-[19px] w-auto sm:hidden"
            />
            <img
              src="/illustrations/CF_logo_long_horizontal_DM.svg"
              alt="Ugenix Academy"
              className="hidden h-[22px] w-auto max-w-[8.4rem] sm:block md:h-[26px] md:max-w-none lg:h-[29px] xl:h-8"
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex xl:gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:bg-white/[0.05] hover:text-text-primary xl:px-3.5"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg className="h-3.5 w-3.5 opacity-60" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/#programs"
              className="group inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/20 bg-[#FF6B00]/10 px-5 py-2.5 text-sm font-medium text-[#FF6B00] no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#FF6B00]/35 hover:bg-[#FF6B00]/15 hover:shadow-[0_8px_24px_rgba(255,98,0,0.15)] active:translate-y-0 active:scale-[0.98]"
            >
              <span className="text-inherit">View Programs</span>
              <ArrowIcon className="h-4 w-4 text-inherit transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              'relative -mr-1 flex h-9 w-9 items-center justify-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 lg:hidden',
              isMenuOpen
                ? 'bg-white/[0.08] text-text-primary focus-visible:ring-orange-500/50'
                : 'text-text-secondary hover:bg-white/[0.06] hover:text-text-primary focus-visible:ring-orange-500/50'
            )}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] bg-bg-950/80 backdrop-blur-md lg:hidden"
          >
            <div className="flex h-full flex-col px-4 pb-8 pt-24 sm:px-6">
              <div className="mx-auto w-full max-w-lg flex-1 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-2 shadow-[0_16px_48px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="space-y-1 p-2">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={closeMenu}
                      className="block rounded-2xl px-4 py-3.5 text-lg font-medium text-text-primary transition-colors hover:bg-white/[0.06] hover:text-orange-500"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="border-t border-white/[0.06] p-3">
                  <Link
                    href="/#programs"
                    onClick={closeMenu}
                    className="btn-primary-orange group flex w-full items-center justify-center gap-2 rounded-full"
                  >
                    View Programs
                    <ArrowIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
