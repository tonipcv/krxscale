import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const articlePath = '/blog/how-to-sell-in-brazil-without-a-local-entity'
const articleUrl = `${siteUrl}${articlePath}`
const ogImage = `${siteUrl}/og-image.svg`

export const metadata: Metadata = {
  title: 'KRX Scale: How to Sell in Brazil Without Opening a Local Entity (CNPJ)',
  description:
    'Learn how global companies can sell in Brazil legally and efficiently without opening a local entity, using compliant infrastructure for payments and FX. KRX Scale handles local acceptance, FX and compliance end-to-end.',
  keywords: [
    'KRX Scale',
    'Sell in Brazil',
    'Brazil market entry',
    'CNPJ',
    'no local entity',
    'merchant of record',
    'Pix',
    'boleto',
    'local payment infrastructure',
    'cross-border payments',
    'FX compliance',
    'BACEN regulations',
  ],
  alternates: {
    canonical: articlePath,
  },
  openGraph: {
    type: 'article',
    url: articleUrl,
    siteName: 'KRX Scale',
    title: 'KRX Scale: Sell in Brazil Without a Local Entity',
    description:
      'Sell in Brazil without opening a CNPJ. Accept local payments and settle in USD with KRX Scale — local rails, FX, and compliance by design.',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'KRX Scale — Sell in Brazil without a local entity (CNPJ)',
      },
    ],
    locale: 'en-US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KRX Scale: Sell in Brazil Without a Local Entity',
    description:
      'Use KRX Scale to sell in Brazil without opening a CNPJ. Local acceptance, FX, and compliance handled end-to-end.',
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'KRX Labs' }],
}
