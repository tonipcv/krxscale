import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const articlePath = '/blog/cross-border-settlement-fx-compliance-emerging-markets'
const articleUrl = `${siteUrl}${articlePath}`
const ogImage = `${siteUrl}/og-image.svg`

export const metadata: Metadata = {
  title: 'KRX Scale: Cross-Border Settlement and FX Compliance in Emerging Markets',
  description:
    'A deep analysis of cross-border settlement and FX compliance in emerging markets, and how KRX Scale enables compliant global liquidity at scale.',
  keywords: [
    'KRX Scale',
    'cross border settlement',
    'FX compliance',
    'emerging markets',
    'global liquidity',
    'Pix',
    'SPEI',
    'PSE',
    'AML',
    'KYC',
    'foreign exchange contract',
  ],
  alternates: { canonical: articlePath },
  openGraph: {
    type: 'article',
    url: articleUrl,
    siteName: 'KRX Scale',
    title: 'Cross-Border Settlement and FX Compliance in Emerging Markets',
    description:
      'How compliant settlement flows connect local rails to global USD/stablecoin liquidity — and how KRX Scale embeds FX and AML into infrastructure.',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'KRX Scale — Cross-border settlement and FX compliance in emerging markets',
      },
    ],
    locale: 'en-US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cross-Border Settlement and FX Compliance in Emerging Markets',
    description:
      'A deep analysis of compliant cross-border settlement and FX in EM — with KRX Scale as the infrastructure layer.',
    images: [ogImage],
  },
  robots: { index: true, follow: true },
  authors: [{ name: 'KRX Labs' }],
}
