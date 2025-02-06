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
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    shortcut: [
      { url: '/favicon.ico' }
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://koraxlabs.com',
    title: 'Korax Labs | Transforming Influence into Equity',
    description: 'We develop white-label software that transforms your audience into high-value digital assets and recurring revenue streams.',
    siteName: 'Korax Labs',
    images: [{
      url: '/android-chrome-512x512.png',
      width: 512,
      height: 512,
      alt: 'Korax Labs - White Label Software Solutions',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Korax Labs | Transforming Influence into Equity',
    description: 'We develop white-label software that transforms your audience into high-value digital assets and recurring revenue streams.',
    images: ['/android-chrome-512x512.png'],
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" hrefLang="en-US" href="https://koraxlabs.com" />
        <meta httpEquiv="content-language" content="en-US" />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
