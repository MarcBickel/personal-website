import { ScrollReveal } from '@/components/ScrollReveal'

const languages = [
  { name: 'French', flag: '🇫🇷', level: 'Mother Tongue', proficiency: 100 },
  { name: 'Catalan', flag: '🇦🇩', level: 'Mother Tongue', proficiency: 100 },
  { name: 'English', flag: '🇬🇧', level: 'Fluent', proficiency: 95 },
  { name: 'Spanish', flag: '🇪🇸', level: 'Fluent', proficiency: 90 },
  { name: 'German', flag: '🇩🇪', level: 'Professional', proficiency: 80 },
  { name: 'Italian', flag: '🇮🇹', level: 'Learning', proficiency: 40 },
  { name: 'Russian', flag: '🇷🇺', level: 'Learning', proficiency: 20 },
]

export default function Languages() {
  return (
    <section id="languages" className="py-16 border-t border-foreground/10">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold mb-8 font-mono">
          <span className="text-accent">#</span> Languages
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {languages.map((lang, index) => (
          <ScrollReveal key={lang.name} delay={index * 100}>
            <div className="p-4 rounded-lg bg-foreground/5 border border-foreground/10 hover:border-accent/30 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold flex items-center gap-2">
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </span>
                <span className="text-sm opacity-60 font-mono">{lang.level}</span>
              </div>
              <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
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
