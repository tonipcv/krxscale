/* eslint-disable @typescript-eslint/no-unused-vars */
import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'KORAX',
  description: 'Transform your influence into equity',
  keywords: [
    'white label software',
    'audience monetization',
    'digital assets',
    'creator economy',
    'influencer platform',
    'revenue streams',
    'audience engagement',
    'digital transformation',
    'software development',
    'tech solutions'
  ],
  authors: [{ name: 'Korax Labs' }],
  creator: 'Korax Labs',
  publisher: 'Korax Labs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2393C5FD;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%2367E8F9;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23A5B4FC;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M50 5 L65 45 L85 45 L40 95 L45 60 L25 60 Z' fill='url(%23grad)' /%3E%3C/svg%3E",
        sizes: 'any',
        type: 'image/svg+xml'
      }
    ],
    shortcut: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2393C5FD;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%2367E8F9;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23A5B4FC;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M50 5 L65 45 L85 45 L40 95 L45 60 L25 60 Z' fill='url(%23grad)' /%3E%3C/svg%3E",
        type: 'image/svg+xml'
      }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 5 L65 45 L85 45 L40 95 L45 60 L25 60 Z' fill='%23000000' /%3E%3C/svg%3E",
      }
    ]
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Korax Labs',
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
    canonical: 'https://koraxlabs.com',
    languages: {
      'en-US': 'https://koraxlabs.com'
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://koraxlabs.com',
    siteName: 'Korax Labs',
    title: 'Korax Labs',
    description: 'Transform your influence into equity',
    images: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2393C5FD;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%2367E8F9;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23A5B4FC;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M50 5 L65 45 L85 45 L40 95 L45 60 L25 60 Z' fill='url(%23grad)' /%3E%3C/svg%3E",
        width: 100,
        height: 100,
        alt: 'Korax Labs Logo'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Korax Labs',
    description: 'Transform your influence into equity',
    images: ['/og-image.jpg'],
  },
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
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>"
          type="image/svg+xml"
        />
        {/* Favicon com gradiente e raio */}
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2393C5FD;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%2367E8F9;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23A5B4FC;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M50 5 L65 45 L85 45 L40 95 L45 60 L25 60 Z' fill='url(%23grad)' /%3E%3C/svg%3E"
        />
      </head>
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
