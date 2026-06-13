'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ArrowIcon } from '@/components/sections/HeroTrustLogos'

const NAV_LINKS = [
  { href: '/#programs', label: 'Programs', hasDropdown: true },
  { href: '/#programs', label: 'WorkSim' },
  { href: '/#programs', label: 'Success Stories' },
  { href: '/faq', label: 'Resources', hasDropdown: true },
  { href: '/about', label: 'About Us' },
]

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
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
          'fixed top-0 left-0 right-0 transition-all duration-300',
          isMenuOpen ? 'z-50' : 'z-30',
          isHome
            ? isScrolled
              ? 'bg-bg-950/90 backdrop-blur-xl border-b border-border-primary'
              : 'bg-transparent'
            : isScrolled
              ? 'bg-white/90 backdrop-blur-xl border-b border-neutral-border shadow-sm'
              : 'bg-transparent'
        )}
      >
        <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0"
            onClick={closeMenu}
          >
            <img
              src="/illustrations/CF_logo_long_horizontal_DM.svg"
              alt="Ugenix Academy"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200',
                  isHome
                    ? 'text-text-secondary hover:text-text-primary'
                    : 'text-neutral-muted hover:text-brand'
                )}
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

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/register"
              className={cn(
                isHome
                  ? 'btn-ghost-orange text-sm'
                  : 'inline-flex items-center gap-2 rounded-btn border border-brand px-5 py-2.5 text-sm font-medium text-brand transition-colors hover:bg-brand/5'
              )}
            >
              Join Free Demo
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              'lg:hidden relative p-2 -mr-2 rounded focus:outline-none focus-visible:ring-2',
              isMenuOpen
                ? 'text-text-primary focus-visible:ring-orange-500/50'
                : isHome
                  ? 'text-text-secondary hover:text-text-primary focus-visible:ring-orange-500/50'
                  : 'text-neutral-muted hover:text-slate-deep focus-visible:ring-brand/30'
            )}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={cn(
              'lg:hidden fixed inset-0 z-[45]',
              isHome ? 'bg-bg-950' : 'bg-brand'
            )}
          >
            <div className="flex h-full flex-col pt-24 px-6">
              <div className="flex-1 space-y-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      'block py-4 text-xl font-medium border-b transition-colors',
                      isHome
                        ? 'text-text-primary border-border-primary hover:text-orange-500'
                        : 'text-white border-white/20 hover:opacity-80'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="pb-10">
                <Link
                  href="/register"
                  onClick={closeMenu}
                  className={cn(
                    'flex w-full items-center justify-center gap-2',
                    isHome ? 'btn-primary-orange' : 'rounded-btn bg-white px-6 py-3.5 font-medium text-brand'
                  )}
                >
                  Join Free Demo
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
