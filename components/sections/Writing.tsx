import { getWritingPosts } from '@/lib/mdx'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ScrollReveal'

export default async function Writing() {
  const posts = await getWritingPosts()

  return (
    <section id="writing" className="py-16 border-t border-foreground/10">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold mb-8 font-mono">
          <span className="text-accent">#</span> Writing
        </h2>
      </ScrollReveal>

      {posts.length === 0 ? (
        <ScrollReveal delay={200}>
          <div className="p-6 rounded-lg bg-foreground/5 border border-foreground/10 font-mono text-sm">
            <div className="flex items-center gap-2 opacity-60">
              <span className="text-accent">❯</span>
              <span>Essays coming soon...</span>
            </div>
            <div className="mt-2 text-xs opacity-40">
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </ScrollReveal>
      ) : (
        <ul className="space-y-4">
          {posts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 100}>
              <li>
                <Link
                  href={`/writing/${post.slug}`}
                  className="block group p-4 rounded-lg hover:bg-foreground/5 transition-all hover:translate-x-1"
                >
                  <h3 className="font-medium group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm opacity-60 mt-1 font-mono">
                    <span className="text-accent/60">//</span> {post.date} — {post.description}
                  </p>
                </Link>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      )}
    </section>
  )
}
