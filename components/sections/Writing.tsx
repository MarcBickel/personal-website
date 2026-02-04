import { getWritingPosts } from '@/lib/mdx'
import Link from 'next/link'

export default async function Writing() {
  const posts = await getWritingPosts()

  return (
    <section id="writing" className="py-16 border-t border-foreground/10">
      <h2 className="text-2xl font-semibold mb-6">Writing</h2>

      {posts.length === 0 ? (
        <p className="opacity-60">Essays coming soon.</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/writing/${post.slug}`}
                className="block group"
              >
                <h3 className="font-medium group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm opacity-60 mt-1">
                  {post.date} — {post.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
