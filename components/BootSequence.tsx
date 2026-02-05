'use client'

import { useState, useEffect } from 'react'

const bootLines = [
  { text: '[OK] BIOS date 02/05/26 10:15:32...', delay: 50 },
  { text: '[OK] CPU: ARM64 @ 3.2GHz', delay: 50 },
  { text: '[OK] Memory Test: 32768MB OK', delay: 50 },
  { text: '[OK] Initializing kernel...', delay: 40 },
  { text: '[OK] Loading system modules...', delay: 40 },
  { text: '[OK] Mounting virtual filesystem...', delay: 40 },
  { text: '[OK] Detecting primary display...', delay: 40 },
  { text: '[OK] Starting network services...', delay: 40 },
  { text: '[OK] Establishing secure connection...', delay: 50 },
  { text: '[OK] Loading user profile: marc-bickel...', delay: 40 },
  { text: '[OK] Mounting /experiences...', delay: 30 },
  { text: '[OK] Loading /projects...', delay: 30 },
  { text: '[OK] Loading /writing...', delay: 30 },
  { text: '[OK] Loading /education...', delay: 30 },
  { text: '[OK] Initializing contact module...', delay: 30 },
  { text: '[OK] Compiling assets...', delay: 40 },
  { text: '[OK] Starting GUI...', delay: 50 },
  { text: '', delay: 50 },
  { text: 'Welcome to marc-bickel.ch v2.0', delay: 0, highlight: true },
  { text: 'Type "help" for available commands', delay: 0, dim: true },
]

export function BootSequence({ onComplete }: { onComplete?: () => void }) {
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let currentLine = 0
    let totalDelay = 0

    const timeouts: NodeJS.Timeout[] = []

    bootLines.forEach((line, index) => {
      totalDelay += line.delay
      const timeout = setTimeout(() => {
        setVisibleLines(prev => [...prev, index])
        currentLine++
        
        if (currentLine === bootLines.length && onComplete) {
          setTimeout(onComplete, 500)
        }
      }, totalDelay)
      timeouts.push(timeout)
    })

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => {
      timeouts.forEach(clearTimeout)
      clearInterval(cursorInterval)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="font-mono text-base md:text-lg space-y-2 w-full max-w-3xl px-6">
        {visibleLines.map((lineIndex) => {
          const line = bootLines[lineIndex]
          return (
            <div
              key={lineIndex}
              className={`${
                line.highlight
                  ? 'text-accent font-bold text-lg md:text-xl'
                  : line.dim
                  ? 'opacity-50'
                  : ''
              }`}
            >
              {line.text}
            </div>
          )
        })}
        {visibleLines.length < bootLines.length && (
          <div className="flex items-center gap-2 mt-4">
            <span className={showCursor ? 'opacity-100' : 'opacity-0'}>❯</span>
            <span className="animate-pulse">_</span>
          </div>
        )}
      </div>
    </div>
  )
}
