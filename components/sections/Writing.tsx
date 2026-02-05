import { ScrollTypingHeader } from '@/components/ScrollTypingHeader'
import { ScrollReveal } from '@/components/ScrollReveal'
import Link from 'next/link'

interface Publication {
  title: string
  authors: string
  venue: string
  year: string
  link?: string
}

const publications: Publication[] = [
  {
    title: 'Predicting Photographers\' Retouching Styles Using GANs',
    authors: 'M. Bickel et al.',
    venue: 'Computer Vision Conference',
    year: '2019',
    link: 'https://arxiv.org/abs/2006.02921',
  },
]

export default function Writing() {
  return (
    <section id="writing" className="py-16 border-t border-foreground/10">
      <ScrollTypingHeader sectionName="Writing" />

      {/* Newsletter */}
      <ScrollReveal>
        <div className="mb-8 p-6 rounded-lg bg-accent/5 border border-accent/20">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-semibold text-accent">Newsletter</span>
          </div>
          <p className="opacity-80 mb-4">
            Thoughts on technology, startups, and building products. Subscribe to get the latest essays delivered to your inbox.
          </p>
          <a
            href="https://mrcbckl.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all hover:scale-105"
          >
            Subscribe on Substack
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </ScrollReveal>

      {/* Publications */}
      <ScrollReveal delay={100}>
        <h3 className="text-lg font-semibold mb-4 font-mono opacity-80">
          <span className="text-accent">##</span> Publications
        </h3>
      </ScrollReveal>

      <div className="space-y-4">
        {publications.map((pub) => (
          <ScrollReveal key={pub.title}>
            <div className="p-4 rounded-lg bg-background border border-foreground/10 hover:border-accent/30 transition-all">
              <h4 className="font-medium mb-1">{pub.title}</h4>
              <p className="text-sm opacity-60 font-mono">
                {pub.authors} • {pub.venue} • {pub.year}
              </p>
              {pub.link && (
                <Link
                  href={pub.link}
                  className="inline-flex items-center gap-1 mt-3 text-sm text-accent hover:opacity-80 transition-opacity"
                >
                  Read paper
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
