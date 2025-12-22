'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Hero section is approximately 600-800px tall, so we'll use 400px as threshold
      const scrollThreshold = 400
      setIsSticky(window.scrollY > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-250 ease-in-out ${
        isSticky
          ? 'border-neutral-border bg-white/90 backdrop-blur-sm shadow-sm'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-xl font-medium text-slate-deep hover:text-brand transition-colors duration-200 ease-in-out">
            <img
              src="/illustrations/Ugenix Logo Short.svg"
              alt="UgeniX"
              className="h-16 w-16"
              aria-hidden="true"
            />
            <span>Ugenix Academy</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-neutral-muted hover:text-slate-deep transition-colors duration-200 ease-in-out">
              Home
            </Link>
            <Link href="/about" className="text-neutral-muted hover:text-slate-deep transition-colors duration-200 ease-in-out">
              About
            </Link>
            <Link href="/#courses" className="text-neutral-muted hover:text-slate-deep transition-colors duration-200 ease-in-out">
              Courses
            </Link>
            
          </div>
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-neutral-muted hover:text-slate-deep p-2 -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden border-t ${isSticky ? 'border-neutral-border bg-white' : 'border-neutral-border bg-white/95 backdrop-blur-sm'}`}>
            <div className="px-4 py-4 space-y-3">
              <Link 
                href="/" 
                className="block text-neutral-muted hover:text-slate-deep transition-colors duration-200 ease-in-out py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block text-neutral-muted hover:text-slate-deep transition-colors duration-200 ease-in-out py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/#courses" 
                className="block text-neutral-muted hover:text-slate-deep transition-colors duration-200 ease-in-out py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

