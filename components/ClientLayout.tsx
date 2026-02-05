'use client'

import { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import Nav from '@/components/Nav'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { BootSequence } from '@/components/BootSequence'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showBootSequence, setShowBootSequence] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleBootComplete = () => {
    setShowBootSequence(false)
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {isClient && showBootSequence && (
        <BootSequence onComplete={handleBootComplete} />
      )}
      <AnimatedBackground />
      <Nav />
      <main className="max-w-2xl mx-auto px-6 py-12 relative z-10">
        {children}
      </main>
    </ThemeProvider>
  )
}
