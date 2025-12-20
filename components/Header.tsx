import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-neutral-border bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-xl font-medium text-slate-deep hover:text-brand transition-colors">
            UgeniX Academy
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-neutral-muted hover:text-slate-deep transition-colors">
              Home
            </Link>
            <Link href="/courses/prompt-engineering" className="text-neutral-muted hover:text-slate-deep transition-colors">
              Courses
            </Link>
            <Link href="/register" className="text-neutral-muted hover:text-slate-deep transition-colors">
              Register
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-neutral-muted hover:text-slate-deep">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

