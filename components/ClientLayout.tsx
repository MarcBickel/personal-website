'use client'

import { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import Nav from '@/components/Nav'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { BootSequence } from '@/components/BootSequence'
import { BootProvider, useBoot } from '@/components/BootContext'

function BootAwareLayout({ children }: { children: React.ReactNode }) {
  const { isBooting, setIsBooting } = useBoot()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleBootComplete = () => {
    setIsBooting(false)
  }

  return (
    <>
      {isClient && isBooting && (
        <BootSequence onComplete={handleBootComplete} />
      )}
      <AnimatedBackground />
      <Nav />
      <main className="max-w-2xl mx-auto px-6 py-12 relative z-10">
        {children}
      </main>
    </>
  )
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <BootProvider>
        <BootAwareLayout>
          {children}
        </BootAwareLayout>
      </BootProvider>
    </ThemeProvider>
  )
}
