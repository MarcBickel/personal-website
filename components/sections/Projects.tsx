import { TerminalCard } from '@/components/TerminalCard'
import { ScrollReveal } from '@/components/ScrollReveal'

const projects = [
  {
    title: 'Fume',
    period: '2022–Present',
    description: 'Co-founder & CTO. Building investment funds without intermediaries. Leading technical vision and company building.',
    tags: ['TypeScript', 'React', 'Node.js', 'Blockchain'],
    link: 'https://fume.finance',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-foreground/10">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold mb-8 font-mono">
          <span className="text-accent">#</span> Projects
        </h2>
      </ScrollReveal>

      <div className="grid gap-4">
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 100}>
            <TerminalCard
              title={project.title}
              period={project.period}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
