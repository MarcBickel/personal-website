'use client'

import { useEffect, useState, useRef } from 'react'
import { useBoot } from './BootContext'

interface ScrollTypingHeaderProps {
  sectionName: string
  command?: string
}

export function ScrollTypingHeader({ sectionName, command }: ScrollTypingHeaderProps) {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [hasStarted, setHasStarted] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const { isBooting } = useBoot()
  const ref = useRef<HTMLDivElement>(null)

  const fullCommand = command || `cat ${sectionName.toLowerCase().replace(/\s+/g, '-')}.md`

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  // Start typing when boot is done and element is in view
  useEffect(() => {
    if (!isBooting && hasIntersected && !hasStarted) {
      setHasStarted(true)
    }
  }, [isBooting, hasIntersected, hasStarted])

  // Type out the command
  useEffect(() => {
    if (!hasStarted) return

    let index = 0
    const interval = setInterval(() => {
      if (index <= fullCommand.length) {
        setDisplayText(fullCommand.slice(0, index))
        index++
      } else {
        clearInterval(interval)
        // Keep cursor blinking for a bit then hide
        setTimeout(() => setShowCursor(false), 1000)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [hasStarted, fullCommand])

  // Blink cursor
  useEffect(() => {
    if (!hasStarted || !showCursor) return
    
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => clearInterval(interval)
  }, [hasStarted, showCursor])

  return (
    <div ref={ref} className="mb-8">
      <div className="font-mono text-sm md:text-base text-accent/80">
        <span className="text-accent mr-2">$</span>
        <span>{displayText}</span>
        <span className={`ml-0.5 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
      </div>
    </div>
  )
}
