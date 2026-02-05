import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'

// Lazy load sections below the fold
const Now = dynamic(() => import('@/components/sections/Now'), {
  loading: () => <SectionSkeleton />,
})

const Experience = dynamic(() => import('@/components/sections/Experience'), {
  loading: () => <SectionSkeleton />,
})

const Projects = dynamic(() => import('@/components/sections/Projects'), {
  loading: () => <SectionSkeleton />,
})

const Writing = dynamic(() => import('@/components/sections/Writing'), {
  loading: () => <SectionSkeleton />,
})

const Education = dynamic(() => import('@/components/sections/Education'), {
  loading: () => <SectionSkeleton />,
})

const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <SectionSkeleton />,
})

function SectionSkeleton() {
  return (
    <div className="py-16 border-t border-foreground/10 animate-pulse">
      <div className="h-8 w-48 bg-foreground/10 rounded mb-8" />
      <div className="space-y-4">
        <div className="h-32 bg-foreground/5 rounded-lg border border-foreground/10" />
        <div className="h-32 bg-foreground/5 rounded-lg border border-foreground/10" />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Now />
      <Experience />
      <Projects />
      <Writing />
      <Education />
      <Contact />
    </>
  )
}
