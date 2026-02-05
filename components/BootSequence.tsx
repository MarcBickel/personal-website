'use client'

import { useState, useEffect } from 'react'

const bootLines = [
  { text: '[OK] Initializing kernel...', delay: 100 },
  { text: '[OK] Loading system modules...', delay: 200 },
  { text: '[OK] Mounting virtual filesystem...', delay: 150 },
  { text: '[OK] Starting network services...', delay: 100 },
  { text: '[OK] Loading user profile: marc-bickel...', delay: 200 },
  { text: '[OK] Mounting experiences...', delay: 150 },
  { text: '[OK] Loading projects...', delay: 100 },
  { text: '[OK] Initializing contact module...', delay: 150 },
  { text: '[OK] Starting GUI...', delay: 200 },
  { text: '', delay: 100 },
  { text: 'Welcome to marc-bickel.ch', delay: 0, highlight: true },
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
    <div className="font-mono text-sm space-y-1">
      {visibleLines.map((lineIndex) => {
        const line = bootLines[lineIndex]
        return (
          <div
            key={lineIndex}
            className={`${
              line.highlight
                ? 'text-accent font-semibold'
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
        <div className="flex items-center gap-2">
          <span className={showCursor ? 'opacity-100' : 'opacity-0'}>❯</span>
          <span className="animate-pulse">_</span>
        </div>
      )}
    </div>
  )
}
