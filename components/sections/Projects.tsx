import { TerminalCard } from '@/components/TerminalCard'
import { ScrollReveal } from '@/components/ScrollReveal'

const projects = [
  {
    title: 'Fume',
    period: '2022–Present',
    description: 'CTO. Building the company and leading the technical vision.',
    tags: ['TypeScript', 'React', 'Node.js'],
    link: 'https://fume.finance',
  },
  {
    title: 'GAN Photography Research',
    description: 'Published paper on predicting photographers\' retouching styles using GANs.',
    tags: ['Python', 'PyTorch', 'Computer Vision'],
  },
  {
    title: 'Lauzhack 2018',
    description: '2nd place in the Crédit Suisse Challenge.',
    tags: ['Hackathon', 'FinTech'],
  },
  {
    title: 'Earlier work',
    description: 'Cryptoro · 5w155 · Nothing AG',
    tags: ['Web3', 'Consulting'],
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
