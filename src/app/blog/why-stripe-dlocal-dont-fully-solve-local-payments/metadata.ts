import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const articlePath = '/blog/why-stripe-dlocal-dont-fully-solve-local-payments'
const articleUrl = `${siteUrl}${articlePath}`
const ogImage = `${siteUrl}/og-image.svg`

export const metadata: Metadata = {
  title: 'KRX Scale: Why Stripe and dLocal Do Not Fully Solve Local Payments',
  description:
    'Explore the structural limits of Stripe and dLocal in emerging markets and how KRX Scale delivers true local payment infrastructure with global settlement.',
  keywords: [
    'KRX Scale',
    'Stripe',
    'dLocal',
    'local payments',
    'Pix',
    'SPEI',
    'PSE',
    'FX compliance',
    'merchant of record',
    'payment infrastructure',
  ],
  alternates: { canonical: articlePath },
  openGraph: {
    type: 'article',
    url: articleUrl,
    siteName: 'KRX Scale',
    title: 'Why Stripe and dLocal Do Not Fully Solve Local Payments',
    description:
      'Why aggregator and gateway models fall short for true local payments — and how KRX Scale provides infrastructure-level access, FX transparency and USD settlement.',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'KRX Scale — Why Stripe and dLocal do not fully solve local payments',
      },
    ],
    locale: 'en-US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Stripe and dLocal Do Not Fully Solve Local Payments',
    description:
      'Understand the limits of Stripe/dLocal in EM and how KRX Scale delivers true local payment infrastructure with global settlement.',
    images: [ogImage],
  },
  robots: { index: true, follow: true },
  authors: [{ name: 'KRX Labs' }],
}
