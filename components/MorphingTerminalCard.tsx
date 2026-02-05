'use client'

import { useState, useEffect, useRef } from 'react'
import { useBoot } from './BootContext'
import { GlitchText } from './GlitchText'

interface MorphingTerminalCardProps {
  title: string
  period?: string
  description: string
  tags?: string[]
  link?: string
}

export function MorphingTerminalCard({ title, period, description, tags = [], link }: MorphingTerminalCardProps) {
  const [isGlitching, setIsGlitching] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const { isBooting } = useBoot()
  const ref = useRef<HTMLDivElement>(null)
  
  const filename = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  const CardWrapper = link ? 'a' : 'div'
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  // Trigger morph animation when boot is done and element is intersected
  useEffect(() => {
    if (!isBooting && hasIntersected) {
      const timeout = setTimeout(() => {
        setIsAnimating(true)
        setIsVisible(true)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [isBooting, hasIntersected])

  return (
    <div ref={ref} className="perspective-1000">
      <CardWrapper
        href={link}
        target={link ? "_blank" : undefined}
        rel={link ? "noopener noreferrer" : undefined}
        className={`block group rounded-lg border overflow-hidden hover:border-accent/50 transition-all duration-1000 bg-background ${link ? 'cursor-pointer' : ''}`}
        style={{
          transform: isVisible ? 'scale(1) rotateX(0deg)' : 'scale(0.8) rotateX(-15deg)',
          transformOrigin: 'center top',
          opacity: isVisible ? 1 : 0,
          boxShadow: isAnimating 
            ? '0 0 30px rgba(37, 99, 235, 0.3), 0 0 60px rgba(37, 99, 235, 0.1)' 
            : 'none',
          borderColor: isAnimating 
            ? 'rgba(37, 99, 235, 0.5)' 
            : 'rgba(255, 255, 255, 0.1)',
        }}
        onMouseEnter={() => setIsGlitching(true)}
        onMouseLeave={() => setIsGlitching(false)}
      >
        {/* Glitch flash overlay */}
        <div 
          className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-200"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.1), transparent)',
            opacity: isAnimating ? 1 : 0,
          }}
        />

        {/* Terminal header with dots */}
        <div className="relative flex items-center gap-2 px-4 py-3 bg-foreground/5 border-b border-foreground/10 z-10"
        >
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="ml-3 text-xs opacity-40 font-mono">
            {filename}.md
          </div>
          {link && (
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          )}
        </div>
        
        {/* Terminal content */}
        <div className="relative p-4 font-mono text-sm z-10"
        >
          <div className="flex items-start gap-2 mb-3 opacity-60"
          >
            <span className="text-accent">$</span>
            <span>cat {filename}/README.md</span>
          </div>
          
          <div className="pl-4 border-l-2 border-accent/20"
          >
            <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors"
            >
              <GlitchText text={title} isGlitching={isGlitching} />
              {period && (
                <span className="font-normal opacity-50 ml-2 text-sm"
                >
                  // {period}
                </span>
              )}
            </h3>
            <p className="opacity-80 leading-relaxed mb-3">{description}</p>
            
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2"
              >
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded bg-accent/10 text-accent/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2 mt-4 opacity-40"
          >
            <span className="text-accent">❯</span>
            <span className="animate-pulse">_</span>
          </div>
        </div>
      </CardWrapper>
    </div>
  )
}
