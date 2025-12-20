import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium text-slate-deep mb-4">UgeniX Academy</h3>
            <p className="text-neutral-muted text-sm">
              Professional training for the modern workforce.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-slate-deep mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-neutral-muted hover:text-slate-deep transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses/prompt-engineering" className="text-neutral-muted hover:text-slate-deep transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-neutral-muted hover:text-slate-deep transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-slate-deep mb-4">Contact</h4>
            <p className="text-neutral-muted text-sm">
              An initiative by <a href="https://ugenix.in" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark">ugenix.in</a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-neutral-border text-center text-sm text-neutral-muted">
          <p>&copy; {new Date().getFullYear()} UgeniX Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

