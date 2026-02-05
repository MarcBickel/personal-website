import { ScrollReveal } from '@/components/ScrollReveal'

const languages = [
  { name: 'French', flag: '🇫🇷', level: 'Native' },
  { name: 'Catalan', flag: '🇦🇩', level: 'Native' },
  { name: 'English', flag: '🇬🇧', level: 'Fluent' },
  { name: 'Spanish', flag: '🇪🇸', level: 'Fluent' },
  { name: 'German', flag: '🇩🇪', level: 'Professional' },
  { name: 'Italian', flag: '🇮🇹', level: 'Learning' },
  { name: 'Russian', flag: '🇷🇺', level: 'Learning' },
]

export default function Now() {
  const items = [
    { label: 'Building', value: 'Fume — helping companies navigate their digital transformation.' },
    { label: 'Learning', value: 'Italian, systems thinking' },
    { label: 'Reading', value: 'Currently working through my backlog' },
    { label: 'Thinking about', value: 'How AI changes the way we build software' },
  ]

  return (
    <section id="now" className="py-16 border-t border-foreground/10">
      <ScrollReveal>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold font-mono">
            <span className="text-accent">#</span> Now
          </h2>
          <span className="text-xs opacity-50 font-mono">
            Updated: February 2026
          </span>
        </div>
      </ScrollReveal>

      <div className="space-y-4 mb-8">
        {items.map((item, index) => (
          <ScrollReveal key={item.label} delay={index * 100}>
            <div className="group flex items-start gap-4 p-4 rounded-lg hover:bg-foreground/5 transition-colors cursor-default">
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-accent/60 group-hover:bg-accent group-hover:scale-125 transition-all" />
              <div>
                <span className="font-semibold text-accent">{item.label}:</span>{' '}
                <span className="opacity-80">{item.value}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Languages subsection */}
      <ScrollReveal delay={500}>
        <div className="pt-6 border-t border-foreground/10">
          <h3 className="text-sm font-semibold mb-3 opacity-60 font-mono">Languages</h3>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-1.5 px-2 py-1 rounded bg-foreground/5 text-sm"
                title={`${lang.name} — ${lang.level}`}
              >
                <span>{lang.flag}</span>
                <span className="opacity-80">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
