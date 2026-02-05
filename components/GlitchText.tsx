'use client'

import { useState } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
  isGlitching?: boolean
}

export function GlitchText({ text, className = '', isGlitching: externalGlitching }: GlitchTextProps) {
  const [internalGlitching, setInternalGlitching] = useState(false)
  const [displayText, setDisplayText] = useState(text)

  const isGlitching = externalGlitching !== undefined ? externalGlitching : internalGlitching

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

  const triggerGlitch = () => {
    if (isGlitching) return
    setInternalGlitching(true)

    let iteration = 0
    const originalText = text

    const interval = setInterval(() => {
      setDisplayText(
        originalText
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return originalText[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )

      if (iteration >= originalText.length) {
        clearInterval(interval)
        setInternalGlitching(false)
        setDisplayText(originalText)
      }

      iteration += 1 / 2
    }, 30)
  }

  return (
    <span
      className={`relative inline-block ${className}`}
      onMouseEnter={externalGlitching === undefined ? triggerGlitch : undefined}
    >
      <span className="relative z-10">{displayText}</span>
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 -z-10 text-red-500 opacity-70"
            style={{ transform: 'translate(-2px, -1px)' }}
          >
            {displayText}
          </span>
          <span
            className="absolute top-0 left-0 -z-10 text-cyan-500 opacity-70"
            style={{ transform: 'translate(2px, 1px)' }}
          >
            {displayText}
          </span>
        </>
      )}
    </span>
  )
}
