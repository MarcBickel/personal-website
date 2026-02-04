import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import Nav from '@/components/Nav'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marc Bickel',
  description: 'I build things. Currently CTO at Fume.',
  metadataBase: new URL('https://marcbickel.ch'),
  openGraph: {
    title: 'Marc Bickel',
    description: 'I build things. Currently CTO at Fume.',
    url: 'https://marcbickel.ch',
    siteName: 'Marc Bickel',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Marc Bickel',
    description: 'I build things. Currently CTO at Fume.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Marc Bickel',
  jobTitle: 'CTO at Fume',
  url: 'https://marcbickel.ch',
  sameAs: [
    'https://linkedin.com/in/marcbickel',
    'https://github.com/marcbickel',
  ],
  knowsAbout: ['Software Engineering', 'Web3', 'Startups'],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'EPFL',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased relative">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <AnimatedBackground />
          <Nav />
          <main className="max-w-5xl mx-auto px-6 py-12 relative z-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
