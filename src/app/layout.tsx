/* eslint-disable @typescript-eslint/no-unused-vars */
import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google';
import { KRX_ICON_SVG, KRX_SOCIAL_IMAGE_SVG } from '@/constants/brand'
import Script from "next/script"

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'KRX Lab | IA Skills',
  description: 'Transform your influence into a scalable tech company. Build your custom app in just 48 hours and be prepared to scale. Join KRX Lab and start building the future.',
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
    'remote jobs'
  ],
  authors: [{ name: 'KRX Lab', url: 'https://krxlab.com' }],
  creator: 'KRX Lab',
  publisher: 'KRX Lab',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { 
        url: `data:image/svg+xml,${encodeURIComponent(KRX_ICON_SVG)}`,
        type: "image/svg+xml"
      }
    ],
    shortcut: `data:image/svg+xml,${encodeURIComponent(KRX_ICON_SVG)}`,
    apple: `data:image/svg+xml,${encodeURIComponent(KRX_ICON_SVG)}`
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'KRX Lab',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
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
    canonical: 'https://krxlab.com',
    languages: {
      'en-US': 'https://krxlab.com'
    }
  },
  openGraph: {
    title: 'KRX Lab | IA Skills',
    description: 'Transform your influence into a scalable tech company. Build your custom app in just 48 hours and be prepared to scale.',
    url: 'https://krxlab.com',
    siteName: 'KRX Lab',
    images: [
      {
        url: `data:image/svg+xml,${encodeURIComponent(KRX_SOCIAL_IMAGE_SVG)}`,
        width: 1200,
        height: 630,
        type: 'image/svg+xml',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KRX Lab | Build your app in 48 hours',
    description: 'Transform your influence into a scalable tech company. Build your custom app in just 48 hours and be prepared to scale.',
    images: [`data:image/svg+xml,${encodeURIComponent(KRX_SOCIAL_IMAGE_SVG)}`],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'google-site-verification': 'your-google-verification-code',
  },
  category: 'technology',
  applicationName: 'KRX Lab',
  referrer: 'origin-when-cross-origin',
  assets: ['/careers'],
  metadataBase: new URL('https://krxlab.com')
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
        <link 
          rel="icon" 
          href={`data:image/svg+xml,${encodeURIComponent(KRX_ICON_SVG)}`}
          type="image/svg+xml"
        />
        <link
          rel="apple-touch-icon"
          href={`data:image/svg+xml,${encodeURIComponent(KRX_ICON_SVG)}`}
        />
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
        {children}
      </body>
    </html>
  );
}
