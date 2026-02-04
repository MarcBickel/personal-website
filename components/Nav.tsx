'use client'

import ThemeToggle from './ThemeToggle'

const navItems = [
  { label: 'Now', href: '#now' },
  { label: 'Writing', href: '#writing' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-foreground/10">
      <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-medium hover:opacity-70 transition-opacity">
          MB
        </a>
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:opacity-70 transition-opacity"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
