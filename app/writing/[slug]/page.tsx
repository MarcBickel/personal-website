import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getWritingPost, getAllWritingSlugs } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const slugs = await getAllWritingSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getWritingPost(params.slug)

  if (!post) {
    return { title: 'Not Found' }
  }

  return {
    title: `${post.title} — Marc Bickel`,
    description: post.description,
  }
}

export default async function WritingPage({ params }: { params: { slug: string } }) {
  const post = await getWritingPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="py-8">
      <Link
        href="/#writing"
        className="text-sm opacity-60 hover:opacity-100 transition-opacity mb-8 inline-block"
      >
        ← Back to writing
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-sm opacity-60">{post.date}</p>
      </header>

      <div className="prose">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}
