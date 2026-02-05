import { TerminalCard } from '@/components/TerminalCard'
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
        <TerminalCard
          title="Contact"
          description="me@marcbickel.ch"
          tags={[]}
          link="mailto:me@marcbickel.ch"
        />
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
