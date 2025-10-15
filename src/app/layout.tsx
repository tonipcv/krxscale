/* eslint-disable @typescript-eslint/no-unused-vars */
import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk } from 'next/font/google';
import { KRX_ICON_SVG, KRX_SOCIAL_IMAGE_SVG } from '@/constants/brand'
import Script from "next/script"
import { LanguageProvider } from './components/LanguageProvider'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'KRX Scale | Local payments, global precision',
  description: 'KRX Scale enables global companies to accept Pix and local payment methods across emerging markets — without opening local entities or managing complex operations. Boost revenue, reduce overhead, and connect to global liquidity through one compliant and scalable infrastructure.',
  keywords: [
    'custom app development',
    'rapid app deployment',
    'tech startup',
    'influencer platform',
    'scalable solutions',
    'white label software',
    'audience monetization',
    'digital assets',
    'creator economy',
    'tech careers',
    'software development',
    'Abu Dhabi tech jobs',
    'remote tech jobs',
    'developer positions',
    'tech opportunities',
    'Abu Dhabi jobs',
    'remote jobs',
    'cybersecurity',
    'infrastructure security',
    'software architecture',
    'cloud solutions',
    'enterprise software',
    'secure development',
    'tech consulting'
  ],
  authors: [{ name: 'KRX Scale', url: 'https://krxscale.com' }],
  creator: 'KRX Scale',
  publisher: 'KRX Scale',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/favicon-32x32.png' }
    ]
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'KRX Labs | Local payments, global precision',
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
    canonical: 'https://krxscale.com',
    languages: {
      'en-US': 'https://krxscale.com'
    }
  },
  openGraph: {
    title: 'KRX Scale | Local payments, global precision',
    description: 'Accept Pix and local payment methods across emerging markets without opening local entities. Connect to global liquidity through one compliant, scalable infrastructure.',
    url: 'https://krxscale.com',
    siteName: 'KRX Scale',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        type: 'image/svg+xml',
      }
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KRX Scale | Local payments, global precision',
    description: 'Accept Pix and local payment methods across emerging markets without opening local entities. Connect to global liquidity through one compliant, scalable infrastructure.',
    images: ['/og-image.svg'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
  other: {
    'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
  category: 'technology',
  applicationName: 'KRX Scale',
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://krxscale.com')
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="icon" href="/favicon-32x32.png" />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WXMRT2BN');
          `}
        </Script>
        {/* End Google Tag Manager */}
        {/* JSON-LD: WebSite & SiteNavigationElement for sitelinks */}
        <Script id="ld-json-website" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'KRX Scale',
            url: 'https://krxscale.com',
          })}
        </Script>
        <Script id="ld-json-sitenav" type="application/ld+json">
          {JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'SiteNavigationElement',
              name: 'Grow without local operations',
              url: 'https://krxscale.com/scale',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'SiteNavigationElement',
              name: 'Talk to the team',
              url: 'https://krxscale.com/?contact=open',
            },
          ])}
        </Script>
      </head>
      <body className={`${spaceGrotesk.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WXMRT2BN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
