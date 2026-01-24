'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
        <nav className="mx-auto max-w-7xl">
          <div
            className={`rounded-2xl md:rounded-full border transition-all duration-250 ease-in-out pointer-events-auto ${
              isSticky
                ? 'bg-white/60 backdrop-blur-xl border-white/40 shadow-xl shadow-black/5'
                : 'bg-white/60 backdrop-blur-xl border-white/40 shadow-lg shadow-black/5'
            }`}
          >
            <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
              <Link href="/" className="flex items-center gap-3 text-xl font-medium text-slate-deep hover:text-brand transition-colors duration-200 ease-in-out">
                <img
                  src="/illustrations/Ugenix Logo Short.svg"
                  alt="Ugenix"
                  className="h-16 w-16"
                  aria-hidden="true"
                />
                <span>Ugenix Academy</span>
              </Link>
              <div className="hidden md:flex items-center justify-center flex-1">
                <div className="flex items-center space-x-8">
                  <Link href="/" className="relative text-neutral-muted hover:text-brand transition-colors duration-250 ease-in-out group pb-0.5">
                    <span>Home</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand rounded-full group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  </Link>
                  <Link href="/about" className="relative text-neutral-muted hover:text-brand transition-colors duration-250 ease-in-out group pb-0.5">
                    <span>About</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand rounded-full group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  </Link>
                  <Link href="/#courses" className="relative text-neutral-muted hover:text-brand transition-colors duration-250 ease-in-out group pb-0.5">
                    <span>Courses</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand rounded-full group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block w-[200px]"></div>
              <div className="md:hidden">
                <button 
                  onClick={toggleMenu}
                  className={`p-2 -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded z-[60] relative ${
                    isMenuOpen ? 'text-white' : 'text-neutral-muted hover:text-slate-deep'
                  }`}
                  aria-label="Toggle menu"
                  aria-expanded={isMenuOpen}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-[#6758e0] z-[45]"
          >
            <div className="h-full flex flex-col">
              {/* Navigation Links - Centered */}
              <div className="flex-1 flex flex-col items-center justify-center space-y-0">
                <Link 
                  href="/" 
                  className="text-white text-2xl font-medium transition-colors duration-200 hover:opacity-80 w-full text-center py-6 border-b border-white/30"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link 
                  href="/#courses" 
                  className="text-white text-2xl font-medium transition-colors duration-200 hover:opacity-80 w-full text-center py-6 border-b border-white/30"
                  onClick={closeMenu}
                >
                  Courses
                </Link>
                <Link 
                  href="/about" 
                  className="text-white text-2xl font-medium transition-colors duration-200 hover:opacity-80 w-full text-center py-6 border-b border-white/30"
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="text-white text-2xl font-medium transition-colors duration-200 hover:opacity-80 w-full text-center py-6"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </div>

              {/* Social Media Icons - Bottom */}
              <div className="pb-12 flex items-center justify-center space-x-6">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-80 transition-opacity duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-80 transition-opacity duration-200"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-80 transition-opacity duration-200"
                  aria-label="YouTube"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-80 transition-opacity duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

