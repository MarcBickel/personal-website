import { ScrollTypingHeader } from '@/components/ScrollTypingHeader'
import { ScrollReveal } from '@/components/ScrollReveal'

const languages = [
  { name: 'French', flag: '🇫🇷', level: 'Native', proficiency: 100 },
  { name: 'Catalan', flag: '🇦🇩', level: 'Native', proficiency: 100 },
  { name: 'English', flag: '🇬🇧', level: 'Fluent', proficiency: 95 },
  { name: 'Spanish', flag: '🇪🇸', level: 'Fluent', proficiency: 90 },
  { name: 'German', flag: '🇩🇪', level: 'Professional', proficiency: 80 },
  { name: 'Italian', flag: '🇮🇹', level: 'Learning', proficiency: 40 },
  { name: 'Russian', flag: '🇷🇺', level: 'Learning', proficiency: 20 },
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
      <div className="flex items-center justify-between mb-4">
        <ScrollTypingHeader sectionName="Now" />
        <ScrollReveal>
          <span className="text-xs opacity-50 font-mono">
            Updated: February 2026
          </span>
        </ScrollReveal>
      </div>

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
      <ScrollReveal>
        <h3 className="text-lg font-semibold mb-4 font-mono opacity-80">
          <span className="text-accent">##</span> Languages
        </h3>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {languages.map((lang, index) => (
          <ScrollReveal key={lang.name} delay={index * 50}>
            <div className="p-3 rounded-lg bg-background border border-foreground/10 hover:border-accent/30 transition-colors">
              <div className="flex justify-between items-center mb-1.5">
                <span className="font-medium flex items-center gap-2 text-sm">
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </span>
                <span className="text-xs opacity-60 font-mono">{lang.level}</span>
              </div>
              <div className="w-full h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${lang.proficiency}%` }}
                />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
