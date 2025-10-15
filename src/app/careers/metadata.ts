import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security Careers at KRX Lab | Join Our Team',
  description: 'Join KRX Lab\'s security team. We\'re hiring Security Engineers, Mobile Security Developers, Cloud Security Architects, and Compliance Specialists. Remote positions available.',
  keywords: [
    'security jobs',
    'remote security jobs',
    'security engineer',
    'cloud security',
    'mobile security',
    'security compliance',
    'KRXProtect careers',
    'cybersecurity jobs',
    'remote work',
    'tech careers',
    'security architect',
    'security operations'
  ],
  openGraph: {
    title: 'Security Careers at KRX Lab | Join Our Team',
    description: 'Join KRX Lab\'s security team. We\'re hiring Security Engineers, Mobile Security Developers, Cloud Security Architects, and Compliance Specialists. Remote positions available.',
    url: 'https://krxscale.com/careers',
    siteName: 'KRX Lab',
    images: [
      {
        url: 'https://krxscale.com/logo.ico',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security Careers at KRX Lab | Join Our Team',
    description: 'Join KRX Lab\'s security team. We\'re hiring Security Engineers, Mobile Security Developers, Cloud Security Architects, and Compliance Specialists. Remote positions available.',
    images: ['https://krxscale.com/logo.ico'],
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
    canonical: 'https://krxscale.com/careers'
  }
} 