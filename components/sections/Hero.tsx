import { HackerText } from '@/components/HackerText'
import { ScrollReveal } from '@/components/ScrollReveal'

export default function Hero() {
  return (
    <section id="top" className="py-24 relative">
      <ScrollReveal>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          <HackerText text="Marc Bickel" delay={200} />
        </h1>
      </ScrollReveal>
      
      <ScrollReveal delay={400}>
        <p className="text-xl opacity-80 leading-relaxed max-w-xl">
          I build things. Co-founder and CTO at{' '}
          <a href="https://fume.finance" target="_blank" rel="noopener noreferrer" className="text-accent hover:opacity-80 transition-opacity">
            Fume
          </a>.
        </p>
      </ScrollReveal>
      
      <ScrollReveal delay={600}>
        <div className="mt-6 space-y-2 opacity-60 font-mono text-sm">
          <div className="flex items-center gap-2">
            <span className="text-accent">❯</span>
            <span>Previously: consulting, Web3 research, EPFL</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent">❯</span>
            <span>Based in Switzerland</span>
          </div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal delay={800}>
        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all hover:scale-105 active:scale-95"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 border border-foreground/20 rounded-lg hover:border-accent hover:text-accent transition-all"
          >
            Get in Touch
          </a>
        </div>
      </ScrollReveal>
    </section>
  )
}
