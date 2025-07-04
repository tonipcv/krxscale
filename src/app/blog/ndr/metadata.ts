import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Your Enterprise Needs Network Detection and Response | KRX',
  description: 'Learn how Network Detection and Response detects advanced attacks and stops intruders hiding in your network. Comprehensive guide to NDR security.',
  keywords: [
    'Network Detection and Response',
    'NDR',
    'Firewall',
    'Endpoint Detection and Response',
    'EDR',
    'network security',
    'threat detection',
    'anomalous behavior',
    'credential theft',
    'lateral movement',
    'cybersecurity',
    'enterprise security',
    'network monitoring',
    'security architecture'
  ],
  openGraph: {
    title: 'Why Your Enterprise Needs Network Detection and Response | KRX',
    description: 'Learn how Network Detection and Response detects advanced attacks and stops intruders hiding in your network. Comprehensive guide to NDR security.',
    url: 'https://krxlab.com/blog/ndr',
    siteName: 'KRX Lab',
    images: [
      {
        url: 'https://krxlab.com/logo.ico',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'article',
    publishedTime: new Date().toISOString(),
    authors: ['KRX Lab'],
    tags: ['NDR', 'Network Security', 'Cybersecurity', 'Enterprise Security']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Your Enterprise Needs Network Detection and Response | KRX',
    description: 'Learn how Network Detection and Response detects advanced attacks and stops intruders hiding in your network. Comprehensive guide to NDR security.',
    images: ['https://krxlab.com/logo.ico'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://krxlab.com/blog/ndr'
  }
} 