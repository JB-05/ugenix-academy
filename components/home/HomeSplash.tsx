'use client'

import { useLayoutEffect, useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const SPLASH_KEY = 'uga-splash-seen'
const SPLASH_DURATION_MS = 3000

export default function HomeSplash({ onComplete }: { onComplete: () => void }) {
  const [showSplash, setShowSplash] = useState(true)

  useLayoutEffect(() => {
    if (sessionStorage.getItem(SPLASH_KEY) === '1') {
      setShowSplash(false)
      onComplete()
    }
  }, [onComplete])

  useEffect(() => {
    if (sessionStorage.getItem(SPLASH_KEY) === '1') {
      return
    }

    const timer = window.setTimeout(() => {
      sessionStorage.setItem(SPLASH_KEY, '1')
      setShowSplash(false)
      onComplete()
    }, SPLASH_DURATION_MS)

    return () => window.clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key="splash"
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-bg-950"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-3xl px-8 py-6">
              <div className="flex flex-col items-center gap-3">
                <Image
                  src="/illustrations/UAlogo_short_DM.svg"
                  alt="Ugenix Academy"
                  width={120}
                  height={86}
                  priority
                />
                <span className="font-heading text-xl font-semibold">
                  <span className="text-text-primary">Ugenix </span>
                  <span className="text-orange-500">Academy</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
