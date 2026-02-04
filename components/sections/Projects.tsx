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
  {
    title: 'Eranos (formerly AWK Group)',
    period: '2021–2022',
    description: 'Consultant working on projects in Cybersecurity, Banking, Business Analysis, IT Advisory and Project Management for clients in Banking, Construction, Public administration, and IT services.',
    tags: ['Consulting', 'Cybersecurity', 'Banking'],
  },
  {
    title: 'Cryptoro',
    period: '2021–2023',
    description: 'Protocol and token Researcher in the Web3 and crypto space.',
    tags: ['Web3', 'Crypto', 'Research'],
  },
  {
    title: '5w155',
    period: '2021–2023',
    description: 'Technical team lead and project lead.',
    tags: ['Leadership', 'Project Management'],
  },
  {
    title: 'Nothing AG',
    period: '2020–2021',
    description: 'Master Thesis Student (Mar–Aug 2021): 6-month Master Thesis under supervision of Pr. Wegmann from EPFL. Developer Intern (Sep 2020–Feb 2021).',
    tags: ['Master Thesis', 'EPFL', 'Development'],
  },
  {
    title: 'GAN Photography Research',
    period: '2019',
    description: 'Published paper on predicting photographers\' retouching styles using GANs.',
    tags: ['Python', 'PyTorch', 'Computer Vision'],
    link: 'https://arxiv.org/abs/2006.02921',
  },
  {
    title: 'Lauzhack 2018',
    period: '2018',
    description: '2nd place in the Crédit Suisse Challenge.',
    tags: ['Hackathon', 'FinTech'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-foreground/10">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold mb-8 font-mono">
          <span className="text-accent">#</span> Experience
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
