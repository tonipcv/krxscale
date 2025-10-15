import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const articlePath = '/blog/how-to-accept-pix-as-a-foreign-company'
const articleUrl = `${siteUrl}${articlePath}`
const ogImage = `${siteUrl}/og-image.svg`

export const metadata: Metadata = {
  title: 'KRX Scale: Accept Pix as a Foreign Company (USD Settlement, No Local Entity)',
  description:
    'KRX Scale enables foreign companies to accept Pix in Brazil and settle in USD — no local entity required. Local acceptance, FX, and compliance handled end-to-end.',
  keywords: [
    'Pix',
    'Brazil payments',
    'Local Payment Infrastructure',
    'LPI',
    'FX compliance',
    'cross-border payments',
    'USD settlement',
    'stablecoin settlement',
    'Central Bank of Brazil',
    'Bacen',
    'AML',
    'KYC',
    'KYB',
    'FX contract',
    'global settlement',
    'KRX Scale',
    'foreign company',
    'accept Pix without CNPJ',
  ],
  alternates: {
    canonical: articlePath,
  },
  openGraph: {
    type: 'article',
    url: articleUrl,
    siteName: 'KRX Scale',
    title: 'KRX Scale: Accept Pix as a Foreign Company (USD Settlement, No Local Entity)',
    description:
      'Accept Pix locally and settle in USD with KRX Scale. Local rails, FX, and compliance by design — integrate in days, no Brazilian entity required.',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'KRX Scale — Accept Pix locally and settle in USD (no local entity)',
      },
    ],
    locale: 'en-US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KRX Scale: Accept Pix in Brazil, Settle in USD',
    description:
      'Accept Pix locally and settle in USD. KRX Scale handles FX and compliance end-to-end — no local entity required.',
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'KRX Labs' }],
}
