'use client'

import { useState } from 'react'
import { GlitchText } from './GlitchText'

interface TerminalCardProps {
  title: string
  period?: string
  description: string
  tags?: string[]
  link?: string
}

export function TerminalCard({ title, period, description, tags = [], link }: TerminalCardProps) {
  const [isGlitching, setIsGlitching] = useState(false)
  const CardWrapper = link ? 'a' : 'div'
  
  const filename = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  
  return (
    <CardWrapper
      href={link}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      className={`block group rounded-lg border border-foreground/20 overflow-hidden hover:border-accent/50 transition-colors ${link ? 'cursor-pointer' : ''}`}
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
    >
      {/* Terminal header with dots */}
      <div className="flex items-center gap-2 px-4 py-3 bg-foreground/5 border-b border-foreground/10">
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
      <div className="p-4 font-mono text-sm">
        <div className="flex items-start gap-2 mb-3 opacity-60">
          <span className="text-accent">$</span>
          <span>cat {filename}/README.md</span>
        </div>
        
        <div className="pl-4 border-l-2 border-accent/20">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
            <GlitchText text={title} isGlitching={isGlitching} />
            {period && (
              <span className="font-normal opacity-50 ml-2 text-sm">
                // {period}
              </span>
            )}
          </h3>
          <p className="opacity-80 leading-relaxed mb-3">{description}</p>
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
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
        
        <div className="flex items-center gap-2 mt-4 opacity-40">
          <span className="text-accent">❯</span>
          <span className="animate-pulse">_</span>
        </div>
      </div>
    </CardWrapper>
  )
}
