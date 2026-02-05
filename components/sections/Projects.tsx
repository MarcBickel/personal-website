import { MorphingTerminalCard } from '@/components/MorphingTerminalCard'
import { ScrollTypingHeader } from '@/components/ScrollTypingHeader'

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
      <ScrollTypingHeader sectionName="Projects" />

      <div className="grid gap-4">
        {projects.map((project) => (
          <MorphingTerminalCard
            key={project.title}
            title={project.title}
            period={project.period}
            description={project.description}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </div>
    </section>
  )
}
