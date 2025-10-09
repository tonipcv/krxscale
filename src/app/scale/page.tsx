import Link from 'next/link'
import { ArrowLeft, Globe } from 'lucide-react'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'KRX Scale — Local Payments, Global Settlement | KRX Labs',
  description:
    'Enable local acceptance (Pix, recurring Pix, local debit and installments) and settle in USD with full compliance and security built in. One integration to orchestrate local rails with global liquidity.',
  keywords: [
    'KRX Scale',
    'Local Payments',
    'Pix',
    'Pix Automático',
    'Open Finance',
    'Cross-border',
    'FX',
    'Hedging',
    'USD Settlement',
    'Brazil payments',
  ],
  alternates: {
    canonical: '/scale',
  },
  openGraph: {
    url: '/scale',
    title: 'KRX Scale — Local Payments, Global Settlement',
    description:
      'Accept local payment rails like Pix and settle in USD with compliance-first orchestration, FX, and risk-by-design.',
    siteName: 'KRX Labs',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        type: 'image/svg+xml',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KRX Scale — Local Payments, Global Settlement',
    description:
      'Enable local acceptance and settle in USD with KRX Scale. Compliance-first, risk-by-design.',
    images: ['/og-image.svg'],
  },
  robots: { index: true, follow: true },
  authors: [{ name: 'KRX Labs', url: 'https://krxlab.com' }],
}

export default function KRXScalePage() {
  return (
    <div className="min-h-screen bg-[#f5efe7]">
      <Script id="ld-json-krx-scale" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'KRX Scale',
          serviceType: 'Local Payments with Global Settlement',
          description:
            'Enable local acceptance (Pix, recurring Pix, local debit and installments) and settle in USD with full compliance and security built in.',
          provider: {
            '@type': 'Organization',
            name: 'KRX Labs',
            url: 'https://krxlab.com',
            logo: '/logo.png',
          },
          areaServed: ['Brazil', 'Mexico', 'India', 'Global'],
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: 'https://krxlab.com/scale',
            description: 'Contact sales for pricing. Transparent per-transaction pricing + optional FX.',
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://krxlab.com/scale',
          },
        })}
      </Script>
      {/* Navigation */}
      <nav className="fixed w-full top-0 border-b border-zinc-200 backdrop-blur-md z-40 transition-all duration-300 bg-[#f5efe7]/80">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="KRX Labs Logo"
                width={48}
                height={48}
                className="w-6 h-6 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-300 invert"
              />
              <span className="text-base sm:text-xl tracking-[-0.03em] font-satoshi text-zinc-900">KRX</span>
            </Link>

            <div className="flex items-center gap-6">
              <Link
                href="/blog"
                className="text-sm tracking-[-0.04em] font-euclidCircularB text-zinc-800 hover:text-zinc-600 transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-32 pb-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="bg-emerald-100 text-emerald-800 px-3 py-1 text-sm font-euclidCircularB tracking-[-0.04em] rounded-full inline-flex items-center gap-2">
            <Globe size={14} />
            GLOBAL PAYMENTS
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl font-satoshi tracking-[-0.03em] leading-tight text-zinc-900">
            KRX Scale: Local Payments, Global Settlement
          </h1>
          <p className="mt-4 text-xl text-zinc-700 font-euclidCircularB tracking-[-0.04em] leading-relaxed">
            Enable local acceptance (Pix, recurring Pix, local debit and installments) and settle in USD with full compliance and security built in.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/?contact=open"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-euclidCircularB tracking-[-0.04em] bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-900 transition-colors rounded-full"
            >
              Talk to KRX Labs
            </Link>
            <Link
              href="/blog/krx-labs-local-payments-global-settlement"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-euclidCircularB tracking-[-0.04em] border border-zinc-300 text-zinc-800 hover:bg-zinc-100 transition-colors rounded-full"
            >
              Learn more
            </Link>
          </div>
        </div>
      </header>

      {/* Value Props */}
      <main className="pb-20">
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-emerald-500 transition-all duration-300">
              <h3 className="text-xl font-satoshi mb-3 text-white">Local Payment Rails</h3>
              <p className="text-zinc-300 text-sm mb-4">
                Accept Pix, recurring Pix, local debit, and installments without setting up a local entity.
              </p>
              <ul className="text-zinc-400 text-sm space-y-2 list-disc pl-4">
                <li>6+ billion monthly Pix transactions</li>
                <li>Near-zero fees, real-time clearing</li>
                <li>Native checkout experience</li>
              </ul>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-emerald-500 transition-all duration-300">
              <h3 className="text-xl font-satoshi mb-3 text-white">FX & Liquidity</h3>
              <p className="text-zinc-300 text-sm mb-4">
                Smart BRL → USD conversion with competitive spreads and optimized settlement cycles.
              </p>
              <ul className="text-zinc-400 text-sm space-y-2 list-disc pl-4">
                <li>Transparent pricing, no hidden spreads</li>
                <li>Optional hedging strategies</li>
                <li>Liquidity pooling to minimize idle capital</li>
              </ul>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-emerald-500 transition-all duration-300">
              <h3 className="text-xl font-satoshi mb-3 text-white">Compliance & Security</h3>
              <p className="text-zinc-300 text-sm mb-4">
                End-to-end regulatory coverage with embedded fraud protection.
              </p>
              <ul className="text-zinc-400 text-sm space-y-2 list-disc pl-4">
                <li>KYC/AML at onboarding and per-transaction</li>
                <li>ISO 27001, PCI DSS alignment</li>
                <li>AI-based risk and audit tooling</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Proof/Data */}
        <section className="max-w-7xl mx-auto px-6 mt-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <h3 className="text-2xl font-satoshi mb-3 text-white">The Cross-Border Opportunity</h3>
              <p className="text-zinc-300 text-sm mb-6">
                Global retail cross-border flows will exceed USD 320T by 2032. Capture emerging markets without adding payment friction.
              </p>
              <ul className="text-zinc-400 text-sm space-y-2 list-disc pl-4">
                <li>Brazil Pix volume reached ≈ USD 4.6T in 2024</li>
                <li>Cross-border payments market to USD 320B+ by 2030</li>
                <li>Pix Automático projected to move USD 30B in first two years</li>
              </ul>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <h3 className="text-2xl font-satoshi mb-3 text-white">How It Works</h3>
              <ul className="text-zinc-400 text-sm space-y-3 list-disc pl-4">
                <li>Integrate once to orchestrate local acceptance rails</li>
                <li>Collect funds locally via regulated partners</li>
                <li>Reconcile, convert BRL → USD, and remit rapidly</li>
                <li>Compliance and fraud controls embedded end-to-end</li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/?contact=open"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-euclidCircularB tracking-[-0.04em] bg-emerald-500 text-white hover:bg-emerald-600 transition-colors rounded-full"
                >
                  Get a walkthrough
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
