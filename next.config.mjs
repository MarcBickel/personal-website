import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  output: 'export',
  // Optimize for static export
  images: {
    unoptimized: true,
  },
  // Enable gzip compression
  compress: true,
  // Disable source maps in production for smaller bundles
  productionBrowserSourceMaps: false,
  // Optimize package imports for faster builds
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
