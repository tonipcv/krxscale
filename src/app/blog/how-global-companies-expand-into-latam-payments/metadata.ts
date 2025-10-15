import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const articlePath = '/blog/how-global-companies-expand-into-latam-payments'
const articleUrl = `${siteUrl}${articlePath}`
const ogImage = `${siteUrl}/og-image.svg`

export const metadata: Metadata = {
  title: 'KRX Scale: How Global Companies Expand into LATAM Payments',
  description:
    'Learn how global companies expand into Latin American payments, the regulatory and operational challenges, and how Local Payment Infrastructure (LPI) enables compliant, scalable growth.',
  keywords: [
    'KRX Scale',
    'LATAM payments',
    'Local Payment Infrastructure',
    'LPI',
    'Pix',
    'SPEI',
    'PSE',
    'cross-border payments',
    'FX compliance',
    'emerging markets',
  ],
  alternates: { canonical: articlePath },
  openGraph: {
    type: 'article',
    url: articleUrl,
    siteName: 'KRX Scale',
    title: 'How Global Companies Expand into LATAM Payments',
    description:
      'Strategy, regulation, and infrastructure: how to enter LATAM with LPI, accept local payments, and settle in USD with compliance by design.',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'KRX Scale — LATAM payments expansion via Local Payment Infrastructure',
      },
    ],
    locale: 'en-US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Global Companies Expand into LATAM Payments',
    description:
      'Enter LATAM with LPI: accept Pix/SPEI/PSE locally, settle in USD, and scale compliantly with KRX Scale.',
    images: [ogImage],
  },
  robots: { index: true, follow: true },
  authors: [{ name: 'KRX Labs' }],
}
