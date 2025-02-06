/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Korax Labs | Transforming Influence into Equity',
  description: 'We develop white-label software that transforms your audience into high-value digital assets and recurring revenue streams.',
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
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
      { url: '/icon-dark.svg', type: 'image/svg+xml', media: '(prefers-color-scheme: dark)' },
      { url: '/icon-light.svg', type: 'image/svg+xml', media: '(prefers-color-scheme: light)' }
    ]
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://koraxlabs.com',
    title: 'Korax Labs | Transforming Influence into Equity',
    description: 'We develop white-label software that transforms your audience into high-value digital assets and recurring revenue streams.',
    siteName: 'Korax Labs',
    images: [{
      url: 'https://koraxlabs.com/android-chrome-512x512.png',
      width: 512,
      height: 512,
      alt: 'Korax Labs Logo',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary',
    title: 'Korax Labs | Transforming Influence into Equity',
    description: 'We develop white-label software that transforms your audience into high-value digital assets and recurring revenue streams.',
    images: ['https://koraxlabs.com/android-chrome-512x512.png'],
    creator: '@koraxlabs',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="icon" type="image/svg+xml" href="/icon-dark.svg" media="(prefers-color-scheme: dark)" />
        <link rel="icon" type="image/svg+xml" href="/icon-light.svg" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
