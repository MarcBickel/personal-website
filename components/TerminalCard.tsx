'use client'

interface TerminalCardProps {
  title: string
  period?: string
  description: string
  tags?: string[]
}

export function TerminalCard({ title, period, description, tags = [] }: TerminalCardProps) {
  return (
    <div className="group relative bg-foreground/5 rounded-lg overflow-hidden border border-foreground/10 hover:border-accent/50 transition-colors duration-300">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-foreground/5 border-b border-foreground/10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="ml-4 text-xs opacity-50 font-mono">
          {title.toLowerCase().replace(/\s+/g, '-')}.md
        </div>
      </div>
      
      {/* Terminal content */}
      <div className="p-4 font-mono text-sm">
        <div className="flex items-start gap-2 mb-3">
          <span className="text-accent opacity-60">$</span>
          <span className="opacity-80">cat {title.toLowerCase().replace(/\s+/g, '-')}/README.md</span>
        </div>
        
        <div className="pl-4 border-l-2 border-accent/20">
          <h3 className="text-lg font-semibold mb-1 group-hover:text-accent transition-colors">
            {title}
            {period && (
              <span className="font-normal opacity-50 ml-2 text-sm">
                // {period}
              </span>
            )}
          </h3>
          <p className="opacity-70 leading-relaxed">{description}</p>
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded bg-accent/10 text-accent/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2 mt-4 opacity-40">
          <span className="text-accent">❯</span>
          <span className="animate-pulse">_</span>
        </div>
      </div>
    </div>
  )
}
