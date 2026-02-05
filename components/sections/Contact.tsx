import { ScrollReveal } from '@/components/ScrollReveal'

export default function Contact() {
  const links = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/marc-bickel/' },
    { name: 'GitHub', url: 'https://github.com/marcbickel' },
  ]

  return (
    <section id="contact" className="py-16 border-t border-foreground/10">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold mb-8 font-mono">
          <span className="text-accent">#</span> Get in touch
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="rounded-lg border border-foreground/20 overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-foreground/5 border-b border-foreground/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="ml-3 text-xs opacity-40 font-mono">
              contact.md
            </div>
          </div>

          {/* Content */}
          <div className="p-4 font-mono text-sm">
            <div className="flex items-start gap-2 mb-3 opacity-60">
              <span className="text-accent">$</span>
              <span>cat contact/README.md</span>
            </div>

            <div className="pl-4 border-l-2 border-accent/20">
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <a
                href="mailto:me@marcbickel.ch"
                className="text-lg hover:text-accent transition-colors"
              >
                me@marcbickel.ch
              </a>
            </div>

            <div className="flex items-center gap-2 mt-4 opacity-40">
              <span className="text-accent">❯</span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={400}>
        <div className="flex gap-4 mt-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-foreground/20 hover:border-accent hover:text-accent transition-all hover:scale-105"
            >
              {link.name}
            </a>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
