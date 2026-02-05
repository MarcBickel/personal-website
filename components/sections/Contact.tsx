import { ScrollTypingHeader } from '@/components/ScrollTypingHeader'
import { ScrollReveal } from '@/components/ScrollReveal'

export default function Contact() {
  const links = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/marc-bickel/' },
    { name: 'GitHub', url: 'https://github.com/marcbickel' },
  ]

  return (
    <section id="contact" className="py-16 border-t border-foreground/10">
      <ScrollTypingHeader sectionName="Contact" />

      <ScrollReveal>
        <div className="p-6 rounded-lg bg-foreground/5 border border-foreground/10 font-mono">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-accent">$</span>
            <span className="opacity-80">email</span>
          </div>
          
          <a
            href="mailto:me@marcbickel.ch"
            className="block text-lg hover:text-accent transition-colors ml-6"
          >
            me@marcbickel.ch
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
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
