/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Montserrat } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Korax Labs | Transformando Influência em Equity',
  description: 'Desenvolvemos softwares white label que transformam sua audiência em ativos digitais de alto valor e fluxos de receita recorrente.',
  keywords: ['white label', 'software', 'influenciadores', 'equity', 'desenvolvimento', 'monetização', 'audiência'],
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
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#000000'
      }
    ]
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://koraxlabs.com',
    title: 'Korax Labs | Transformando Influência em Equity',
    description: 'Desenvolvemos softwares white label que transformam sua audiência em ativos digitais de alto valor e fluxos de receita recorrente.',
    siteName: 'Korax Labs',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Korax Labs',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Korax Labs | Transformando Influência em Equity',
    description: 'Desenvolvemos softwares white label que transformam sua audiência em ativos digitais de alto valor e fluxos de receita recorrente.',
    images: ['/twitter-image.jpg'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
