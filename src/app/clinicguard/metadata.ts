import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ClinicGuard™ - Healthcare Cybersecurity & Automated Backup | KRX',
  description: 'Secure your medical practice with ClinicGuard™. GDPR & HIPAA compliant cybersecurity, automated backup, and ransomware protection for healthcare providers in the UK and Europe.',
  openGraph: {
    title: 'ClinicGuard™ - Healthcare Cybersecurity & Automated Backup | KRX',
    description: 'Secure your medical practice with ClinicGuard™. GDPR & HIPAA compliant cybersecurity, automated backup, and ransomware protection for healthcare providers in the UK and Europe.',
    url: 'https://koraxlabs.com/clinicguard',
    siteName: 'KRX',
    images: [
      {
        url: 'https://koraxlabs.com/logo.ico',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClinicGuard™ - Healthcare Cybersecurity & Automated Backup | KRX',
    description: 'Secure your medical practice with ClinicGuard™. GDPR & HIPAA compliant cybersecurity, automated backup, and ransomware protection for healthcare providers in the UK and Europe.',
    images: ['https://koraxlabs.com/logo.ico'],
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
  verification: {
    google: 'your-google-verification-code',
  },
} 