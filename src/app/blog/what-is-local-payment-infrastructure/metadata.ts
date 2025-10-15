import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const articlePath = '/blog/what-is-local-payment-infrastructure'
const articleUrl = `${siteUrl}${articlePath}`
const ogImage = `${siteUrl}/og-image.svg`

export const metadata: Metadata = {
  title: 'KRX Scale: What Is Local Payment Infrastructure (LPI)',
  description:
    'A deep dive into Local Payment Infrastructure (LPI), how it works, its regulatory architecture, and why it is becoming the backbone of global payments in emerging markets.',
  keywords: [
    'KRX Scale',
    'Local Payment Infrastructure',
    'LPI',
    'Pix',
    'SPEI',
    'PSE',
    'M-Pesa',
    'cross-border payments',
    'FX compliance',
    'emerging markets',
  ],
  alternates: { canonical: articlePath },
  openGraph: {
    type: 'article',
    url: articleUrl,
    siteName: 'KRX Scale',
    title: 'What Is Local Payment Infrastructure (LPI)',
    description:
      'Understand the layers of LPI (connectivity, compliance/FX, settlement) and how KRX Scale turns local rails into global liquidity with compliance by design.',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'KRX Scale — Local Payment Infrastructure (LPI) explainer',
      },
    ],
    locale: 'en-US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Local Payment Infrastructure (LPI)',
    description:
      'A deep dive into LPI and how KRX Scale connects local rails to global USD/EUR settlement with full compliance.',
    images: [ogImage],
  },
  robots: { index: true, follow: true },
  authors: [{ name: 'KRX Labs' }],
}
