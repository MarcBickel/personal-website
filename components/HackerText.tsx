'use client'

import { useEffect, useState } from 'react'

interface HackerTextProps {
  text: string
  className?: string
  delay?: number
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&'

export function HackerText({ text, className = '', delay = 0 }: HackerTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasStarted(true)
    }, delay)

    return () => clearTimeout(timeout)
  }, [delay])

  useEffect(() => {
    if (!hasStarted) return

    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration) return text[index]
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )

      iteration += 1 / 3

      if (iteration >= text.length) {
        clearInterval(interval)
        setDisplayText(text)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [hasStarted, text])

  return <span className={className}>{displayText}</span>
}
