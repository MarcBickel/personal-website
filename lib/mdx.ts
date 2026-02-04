import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const writingDirectory = path.join(process.cwd(), 'content/writing')

export interface WritingPost {
  slug: string
  title: string
  date: string
  description: string
  content: string
}

export async function getWritingPosts(): Promise<WritingPost[]> {
  if (!fs.existsSync(writingDirectory)) {
    return []
  }

  const files = fs.readdirSync(writingDirectory)
  const mdxFiles = files.filter((file) => file.endsWith('.mdx'))

  const posts = mdxFiles.map((file) => {
    const slug = file.replace(/\.mdx$/, '')
    const fullPath = path.join(writingDirectory, file)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      description: data.description || '',
      content,
    }
  })

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getWritingPost(slug: string): Promise<WritingPost | null> {
  const fullPath = path.join(writingDirectory, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    description: data.description || '',
    content,
  }
}

export async function getAllWritingSlugs(): Promise<string[]> {
  if (!fs.existsSync(writingDirectory)) {
    return []
  }

  const files = fs.readdirSync(writingDirectory)
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}
