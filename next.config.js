/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.krxscale.com',
          },
        ],
        destination: 'https://krxscale.com/:path*',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    if (isProd) {
      // No rewrite to localhost in production
      return []
    }
    return [
      {
        source: '/api/transcript',
        destination: 'http://localhost:8000/api/transcript',
      },
    ]
  },
}

module.exports = nextConfig