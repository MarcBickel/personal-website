const projects = [
  {
    title: 'Fume',
    period: '2022–Present',
    description: 'CTO. Building the company and leading the technical vision.',
  },
  {
    title: 'GAN Photography Research',
    description: 'Published paper on predicting photographers\' retouching styles using GANs.',
  },
  {
    title: 'Lauzhack 2018',
    description: '2nd place in the Crédit Suisse Challenge.',
  },
  {
    title: 'Earlier work',
    description: 'Cryptoro · 5w155 · Nothing AG',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-foreground/10">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>

      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project.title}>
            <h3 className="font-medium">
              {project.title}
              {project.period && (
                <span className="font-normal opacity-60 ml-2">
                  ({project.period})
                </span>
              )}
            </h3>
            <p className="opacity-80 mt-1">{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
