import { TerminalCard } from '@/components/TerminalCard'
import { ScrollReveal } from '@/components/ScrollReveal'

const experiences = [
  {
    title: 'Eranos (formerly AWK Group)',
    period: '2021–2022',
    description: 'Consultant working on projects in Cybersecurity, Banking, Business Analysis, IT Advisory and Project Management. Learned stakeholder management, business modelling and IT architecture.',
    tags: ['Consulting', 'Cybersecurity', 'Banking'],
  },
  {
    title: '5w155',
    period: '2021–2023',
    description: 'Technical team lead and project lead. Team management and decentralized way of working.',
    tags: ['Leadership', 'Project Management'],
  },
  {
    title: 'Cryptoro',
    period: '2021–2023',
    description: 'Protocol and token Researcher in the Web3 and crypto space. Explored the DeFi market to find new tokens and trends. Learned tokenomics.',
    tags: ['Web3', 'Crypto', 'Research'],
  },
  {
    title: 'Nothing AG',
    period: '2020–2021',
    description: 'Intern developer (6 months) and Master Thesis student (6 months). Master thesis: Modeling company restructuration through visual analysis and data-driven insights under the supervision of Pr. Wegmann from EPFL.',
    tags: ['Master Thesis', 'EPFL', 'Development'],
  },
  {
    title: 'EPFL',
    period: '2016–2020',
    description: 'Teaching Assistant. Assistant for various coding classes including algorithms, data structures, and software engineering.',
    tags: ['Teaching', 'Computer Science', 'Algorithms'],
  },
  {
    title: 'Swiss Special Forces',
    period: 'Winter 2018',
    description: 'Panzer Grenadier. Swiss Army service in the Special Forces.',
    tags: ['Military', 'Leadership', 'Discipline'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 border-t border-foreground/10">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold mb-8 font-mono">
          <span className="text-accent">#</span> Experience
        </h2>
      </ScrollReveal>

      <div className="grid gap-4">
        {experiences.map((exp, index) => (
          <ScrollReveal key={exp.title} delay={index * 100}>
            <TerminalCard
              title={exp.title}
              period={exp.period}
              description={exp.description}
              tags={exp.tags}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
