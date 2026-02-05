import { ScrollTypingHeader } from '@/components/ScrollTypingHeader'
import { ScrollReveal } from '@/components/ScrollReveal'

const education = [
  {
    school: 'EPFL',
    location: 'Lausanne, Switzerland',
    degree: 'Computer Science Master',
    period: '2018–2021',
    specialization: 'Signal, Images and Interfaces',
    courses: [
      'Decentralised Systems Engineering',
      'Decentralised Algorithms',
      'Enterprise and System-Oriented Architecture',
      'Information Security and Privacy',
      'Business Design for IT services',
      'Virtual Reality',
      'Experience Design',
      'Machine Learning',
      'Computational Photography',
    ],
    highlights: [
      '1st place in Experience Design project, awarded by Prof. Jeffrey Huang',
      '2nd place in the Crédit Suisse Challenge in Lauzhack 2018',
      'Student project with the RGL Lab at EPFL: Fitting of wavelength-dependent parametric material models to spectral measurements (Spring 2020)',
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-16 border-t border-foreground/10">
      <ScrollTypingHeader sectionName="Education" />

      <div className="space-y-8">
        {education.map((edu) => (
          <ScrollReveal key={edu.school}>
            <div className="rounded-lg border border-foreground/20 overflow-hidden bg-background">
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-foreground/5 border-b border-foreground/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-3 text-xs opacity-40 font-mono">
                  education.md
                </div>
              </div>

              {/* Content */}
              <div className="p-4 font-mono text-sm">
                <div className="flex items-start gap-2 mb-4 opacity-60">
                  <span className="text-accent">$</span>
                  <span>cat education/epfl.md</span>
                </div>

                <div className="pl-4 border-l-2 border-accent/20 space-y-4">
                  {/* School info */}
                  <div>
                    <h3 className="text-lg font-semibold">
                      {edu.school}
                      <span className="font-normal opacity-50 ml-2 text-sm">// {edu.period}</span>
                    </h3>
                    <p className="opacity-80">{edu.degree} — {edu.location}</p>
                    <p className="text-accent/80 text-sm mt-1">Specialisation: {edu.specialization}</p>
                  </div>

                  {/* Courses */}
                  <div>
                    <h4 className="font-semibold mb-2 opacity-90">Relevant Classes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="text-xs px-2 py-1 rounded bg-accent/10 text-accent/80"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold mb-2 opacity-90">Highlights:</h4>
                    <ul className="space-y-2 opacity-80">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent">❯</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 opacity-40">
                  <span className="text-accent">❯</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
