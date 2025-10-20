/** @type {import('next').NextConfig} */
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
    return [
      {
        source: '/api/transcript',
        destination: 'http://localhost:8000/api/transcript',
      },
    ]
  },
}

module.exports = nextConfig