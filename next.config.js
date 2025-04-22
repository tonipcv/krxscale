/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
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