import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Ensure trailing slash consistency
  trailingSlash: false,
  // Power prefetching
  experimental: {
    optimizeCss: false,
  },
}

export default nextConfig
