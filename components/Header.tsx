'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ArrowIcon } from '@/components/sections/HeroTrustLogos'

import { CATALOG_PROGRAMS } from '@/lib/programs-data'

type DropdownItem = { href: string; label: string }

type NavLink =
  | { href: string; label: string; hasDropdown?: boolean }
  | { label: string; hasDropdown: true; dropdownItems: DropdownItem[] }

const ACTIVE_PROGRAM_ITEMS: DropdownItem[] = CATALOG_PROGRAMS.filter(
  (program) => program.status === 'active'
).map((program) => ({
  href: program.href,
  label: program.name,
}))

const NAV_LINKS: NavLink[] = [
  {
    label: 'Programs',
    hasDropdown: true,
    dropdownItems: ACTIVE_PROGRAM_ITEMS,
  },
  {
    label: 'Resources',
    hasDropdown: true,
    dropdownItems: [
      { href: '/community', label: 'Community' },
      { href: '/faq', label: 'FAQ' },
    ],
  },
  { href: '/about', label: 'About Us' },
]

function ChevronIcon({ open }: { open?: boolean }) {
  return (
    <svg
      className={cn('h-3.5 w-3.5 opacity-60 transition-transform duration-200', open && 'rotate-180')}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function NavDropdown({ label, items }: { label: string; items: DropdownItem[] }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:bg-white/[0.05] hover:text-text-primary xl:px-3.5"
      >
        {label}
        <ChevronIcon open={open} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-50 mt-2 min-w-[11rem] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/[0.08] bg-bg-950/95 p-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-white/[0.06] hover:text-text-primary"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null)

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

  const closeMenu = () => {
    setIsMenuOpen(false)
    setMobileOpenDropdown(null)
  }

  const toggleMobileDropdown = (label: string) => {
    setMobileOpenDropdown((prev) => (prev === label ? null : label))
  }

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
          <Link href="/" className="flex shrink-0 items-center" onClick={closeMenu}>
            <Image
              src="/illustrations/UAlogo_short_DM.svg"
              alt="Ugenix Academy"
              width={40}
              height={29}
              className="h-[19px] w-auto sm:hidden"
              priority
            />
            <Image
              src="/illustrations/CF_logo_long_horizontal_DM.svg"
              alt="Ugenix Academy"
              width={180}
              height={32}
              className="hidden h-[22px] w-auto max-w-[8.4rem] sm:block md:h-[26px] md:max-w-none lg:h-[29px] xl:h-8"
              priority
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex xl:gap-2">
            {NAV_LINKS.map((link) =>
              'dropdownItems' in link ? (
                <NavDropdown key={link.label} label={link.label} items={link.dropdownItems} />
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:bg-white/[0.05] hover:text-text-primary xl:px-3.5"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronIcon />}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/programs"
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
                  {NAV_LINKS.map((link) =>
                    'dropdownItems' in link ? (
                      <div key={link.label}>
                        <button
                          type="button"
                          onClick={() => toggleMobileDropdown(link.label)}
                          className="flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium text-text-primary transition-colors hover:bg-white/[0.06]"
                          aria-expanded={mobileOpenDropdown === link.label}
                        >
                          {link.label}
                          <ChevronIcon open={mobileOpenDropdown === link.label} />
                        </button>
                        <AnimatePresence>
                          {mobileOpenDropdown === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-1 pb-1 pl-4">
                                {link.dropdownItems.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="block rounded-2xl px-4 py-3 text-base font-medium text-text-secondary transition-colors hover:bg-white/[0.06] hover:text-orange-500"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={closeMenu}
                        className="block rounded-2xl px-4 py-3.5 text-lg font-medium text-text-primary transition-colors hover:bg-white/[0.06] hover:text-orange-500"
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </div>

                <div className="border-t border-white/[0.06] p-3">
                  <Link
                    href="/programs"
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
