import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const articlePath = '/blog/pix-spei-pse-mpesa-how-they-work'
const articleUrl = `${siteUrl}${articlePath}`
const ogImage = `${siteUrl}/og-image.svg`

export const metadata: Metadata = {
  title: 'KRX Scale: Pix, SPEI, PSE and M-Pesa — What They Are and How They Work',
  description:
    'Understand how Pix, SPEI, PSE, and M-Pesa shape local payment ecosystems across emerging markets — and how to connect to them through KRX Scale with USD settlement and full FX compliance.',
  keywords: [
    'KRX Scale',
    'Pix',
    'SPEI',
    'PSE',
    'M-Pesa',
    'local payment systems',
    'emerging markets',
    'cross-border payments',
    'FX compliance',
    'merchant of record',
  ],
  alternates: { canonical: articlePath },
  openGraph: {
    type: 'article',
    url: articleUrl,
    siteName: 'KRX Scale',
    title: 'Pix, SPEI, PSE and M-Pesa — What They Are and How They Work',
    description:
      'Local rails power emerging markets. Learn how to connect to Pix, SPEI, PSE and M-Pesa via KRX Scale and settle in USD with compliance by design.',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'KRX Scale — Connect to local rails (Pix, SPEI, PSE, M-Pesa) and settle in USD',
      },
    ],
    locale: 'en-US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pix, SPEI, PSE and M-Pesa — What They Are and How They Work',
    description:
      'How local payment systems work and how KRX Scale connects you with USD settlement and FX compliance.',
    images: [ogImage],
  },
  robots: { index: true, follow: true },
  authors: [{ name: 'KRX Labs' }],
}
