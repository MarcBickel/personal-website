import type { Metadata } from 'next'
import ClientLayout from '@/components/ClientLayout'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marc Bickel',
  description: 'I like building things and solving hard problems. Co-founder and CTO at Fume.',
  metadataBase: new URL('https://marcbickel.ch'),
  openGraph: {
    title: 'Marc Bickel',
    description: 'I like building things and solving hard problems. Co-founder and CTO at Fume.',
    url: 'https://marcbickel.ch',
    siteName: 'Marc Bickel',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Marc Bickel',
    description: 'I like building things and solving hard problems. Co-founder and CTO at Fume.',
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
  jobTitle: 'Co-founder & CTO at Fume',
  url: 'https://marcbickel.ch',
  sameAs: [
    'https://www.linkedin.com/in/marc-bickel/',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased relative">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
