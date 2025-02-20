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
  title: 'KRX Lab',
  description: 'Building the Future',
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
    icon: '/icon.svg',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
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
    title: 'KRX Lab',
    description: 'Building the Future',
    url: 'https://krxlab.com',
    siteName: 'KRX Lab',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KRX Lab',
    description: 'Building the Future',
    images: ['/og-image.svg'],
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
