'use client'

import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { label: 'Now', href: '#now' },
  { label: 'Languages', href: '#languages' },
  { label: 'Writing', href: '#writing' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10">
      <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
        <a 
          href="#top" 
          className="font-mono font-bold text-lg hover:text-accent transition-colors"
        >
          <span className="text-accent">~</span>/mb
        </a>
        
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6 text-sm font-mono hidden sm:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`relative transition-all hover:text-accent ${
                      isActive ? 'text-accent' : 'opacity-70'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full" />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
