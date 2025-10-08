import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'
import { ArrowLeft, Globe, Banknote, Shield, Lock, BarChart3 } from 'lucide-react'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const articlePath = '/blog/krx-labs-local-payments-global-settlement'
const articleUrl = `${siteUrl}${articlePath}`
const ogImage = 'https://flagcdn.com/w1200/br.png'

export const metadata: Metadata = {
  title: 'KRX Labs: Bridging Global Ambition with Local Payment Realities',
  description:
    'Enable local acceptance (Pix, recurring Pix, local credit) and settle in USD with full compliance. How KRX Labs connects local rails to global liquidity with orchestration, FX, and risk-by-design.',
  keywords: [
    'KRX Labs',
    'Pix',
    'Pix Automático',
    'Open Finance',
    'Open Banking',
    'Local Payments',
    'Cross-border',
    'Merchant of Record',
    'FX',
    'Hedging',
    'Brazil payments',
    'BRL to USD',
    'Global settlement',
  ],
  alternates: {
    canonical: articlePath,
  },
  openGraph: {
    type: 'article',
    url: articleUrl,
    title: 'KRX Labs: Bridging Global Ambition with Local Payment Realities',
    description:
      'Local acceptance, global settlement: accept Pix and other local rails while receiving in USD with compliance and rapid settlement.',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Brazil flag representing local payments with global settlement',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KRX Labs: Bridging Global Ambition with Local Payment Realities',
    description:
      'Local acceptance, global settlement: accept Pix and other local rails while receiving in USD with compliance and rapid settlement.',
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'KRX Labs' }],
}

export default function KRXLabsLocalPaymentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Article Schema */}
      <Script id="ld-json-krx-labs-local-payments" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'KRX Labs: Bridging Global Ambition with Local Payment Realities',
          description:
            'Enable local acceptance (Pix, recurring Pix, local credit) and settle in USD with full compliance. How KRX Labs connects local rails to global liquidity with orchestration, FX, and risk-by-design.',
          author: {
            '@type': 'Organization',
            name: 'KRX Labs',
          },
          publisher: {
            '@type': 'Organization',
            name: 'KRX Labs',
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/apple-touch-icon.png`,
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': articleUrl,
          },
          image: [ogImage],
          datePublished: '2025-10-07',
          dateModified: '2025-10-07',
          url: articleUrl,
        })}
      </Script>
      {/* Navigation */}
      <nav className="fixed w-full top-0 border-b border-zinc-200 backdrop-blur-md z-40 transition-all duration-300 bg-white/80">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <svg
                width="40"
                height="40"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:scale-110 transition-transform duration-300"
              >
                <g stroke="#111111" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="128" y1="128" x2="256" y2="256" />
                  <line x1="256" y1="256" x2="384" y2="128" />
                  <line x1="256" y1="256" x2="128" y2="384" />
                  <line x1="256" y1="256" x2="384" y2="384" />
                  <line x1="256" y1="128" x2="256" y2="384" />
                </g>
              </svg>
              <span className="text-xl tracking-[-0.03em] font-satoshi text-zinc-900">KRX</span>
            </Link>

            <div className="flex items-center gap-6">
              <Link
                href="/blog"
                className="text-sm tracking-[-0.04em] font-euclidCircularB text-zinc-800 hover:text-zinc-600 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/careers"
                className="text-sm tracking-[-0.04em] font-euclidCircularB text-zinc-500 hover:text-zinc-800 transition-colors"
              >
                Careers
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-16">
        <article className="max-w-3xl mx-auto px-6">
          {/* Back to Blog */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 transition-colors mb-16"
          >
            <ArrowLeft size={16} />
            <span className="font-euclidCircularB">Back to Blog</span>
          </Link>

          {/* Article Header */}
          <header className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 text-sm font-euclidCircularB tracking-[-0.04em] rounded-full flex items-center gap-2">
                <Globe size={14} />
                FINTECH
              </span>
              <span className="text-sm text-zinc-500 font-euclidCircularB tracking-[-0.04em]">9 MIN READ</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-satoshi tracking-[-0.03em] leading-tight text-zinc-900 mb-8">
              KRX Labs: Bridging Global Ambition with Local Payment Realities
            </h1>

            <p className="text-xl text-zinc-600 font-euclidCircularB tracking-[-0.04em] leading-relaxed">
              Global companies are losing billions in emerging markets by failing to integrate local payment rails like Pix. KRX Labs closes this structural gap — enabling local acceptance with global USD settlement, compliance-first.
            </p>
          </header>

          {/* Article Content */}
          {/* Hero Cover */}
          <div className="relative overflow-hidden rounded-sm mb-12">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10" />
            <div className="h-[320px] sm:h-[420px] bg-emerald-600 bg-[url('https://flagcdn.com/w1280/br.png')] bg-cover bg-center" />
          </div>

          <div className="prose prose-zinc prose-lg max-w-none">
            <p className="text-zinc-600 leading-relaxed mb-16">
              This article explains the context, technical underpinnings, and strategic impact of the KRX Labs model — and why it’s poised to redefine how global enterprises reach emerging markets.
            </p>

            <h2 className="text-zinc-900 text-3xl mb-6">1. The harsh reality: why global firms fail in emerging markets</h2>
            <h3 className="text-zinc-900 text-2xl mb-4">1.1 The invisible barrier of local payment fragmentation</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Emerging markets operate through a mosaic of local payment rails — instant transfers, debit pulls, local credit installments, e-wallets, and domestic digital transfers.
              To access them, a foreign company typically needs:
            </p>
            <ul className="mb-8 list-disc pl-6 text-zinc-700">
              <li>A local legal entity</li>
              <li>Banking partnerships and local KYC/AML processes</li>
              <li>Currency conversion and remittance operations</li>
              <li>Onshore compliance and fraud monitoring</li>
            </ul>
            <p className="text-zinc-600 leading-relaxed mb-10">
              Most global firms won’t invest this complexity for a single market, defaulting to international cards or PayPal — methods that cover only a fraction of consumers and convert poorly.
            </p>

            <h3 className="text-zinc-900 text-2xl mb-4">1.2 The scale of Pix — and the cost of ignoring it</h3>
            <div className="not-prose space-y-8 mb-8">
              <div className="bg-zinc-50 p-8 rounded-lg">
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">Pix Scale & Growth</h3>
                  <ul className="list-none m-0 space-y-2">
                    <li className="text-zinc-600">Over 68.7 billion transactions in 2024, a 52% annual increase. (GFMag)</li>
                    <li className="text-zinc-600">More than 6 billion transactions per month in 2024. (BusinessWire)</li>
                    <li className="text-zinc-600">A single day in 2024 saw 250 million transfers totaling over USD 24 billion. (PaymentsCMI)</li>
                    <li className="text-zinc-600">Total 2024 volume reached BRL 26.4 trillion (≈ USD 4.6 trillion).</li>
                    <li className="text-zinc-600">Pix Automático (recurring payments) projected to move USD 30 billion in e-commerce in its first two years. (Reuters)</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-zinc-600 leading-relaxed mb-10">Pix is now Brazil’s dominant rail, surpassing cards in volume. Ignoring it excludes enterprises from a dynamic consumer market.</p>

            <h3 className="text-zinc-900 text-2xl mb-4">1.3 The size of the cross-border payments opportunity</h3>
            <div className="not-prose space-y-8 mb-8">
              <div className="bg-zinc-50 p-8 rounded-lg">
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">Cross-Border Opportunity</h3>
                  <ul className="list-none m-0 space-y-2">
                    <li className="text-zinc-600">Valued at USD 212.55B in 2024, projected to reach USD 320.73B by 2030 (≈7% CAGR). (Grand View Research)</li>
                    <li className="text-zinc-600">McKinsey: non-traditional providers handle up to 65% of cross-border P2P transfers.</li>
                    <li className="text-zinc-600">J.P. Morgan: frictionless cross-border experiences are a top priority for merchants and regulators.</li>
                    <li className="text-zinc-600">ECB: global retail cross-border flows will exceed USD 320 trillion by 2032.</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-zinc-600 leading-relaxed mb-12">The world needs infrastructures that connect local acceptance with international settlement — efficiently and securely.</p>

            <h2 className="text-zinc-900 text-3xl mb-6">2. Key concepts — a shared language for global stakeholders</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Executives outside payments often face confusing terminology. Here are definitions framing KRX Labs’ model in clear business language:
            </p>
            <div className="not-prose space-y-8 mb-12">
              <div className="bg-zinc-50 p-8 rounded-lg">
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">Key Payments Concepts</h3>
                  <ul className="list-none m-0 space-y-2">
                    <li className="text-zinc-600"><strong>Local Payment Rail:</strong> domestic network for instant or direct transfers (e.g., Pix, UPI) with near-zero fees and real-time clearing.</li>
                    <li className="text-zinc-600"><strong>Recurring Payment / Direct Debit:</strong> pre-authorized instruction for repeated charges without re-entering credentials.</li>
                    <li className="text-zinc-600"><strong>Open Finance / Open Banking:</strong> regulated framework enabling data access and payment initiation with user consent.</li>
                    <li className="text-zinc-600"><strong>Merchant of Record (MoR):</strong> entity responsible for processing, taxes, and local compliance on behalf of the merchant.</li>
                    <li className="text-zinc-600"><strong>Liquidity Pooling / Hedging:</strong> mechanisms to optimize cash flow and mitigate FX volatility.</li>
                    <li className="text-zinc-600"><strong>Cross-Border Settlement:</strong> converting funds collected locally into USD for the merchant's home jurisdiction, with full compliance.</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-zinc-900 text-3xl mb-6">3. The KRX Labs architecture: Local acceptance, global settlement</h2>
            <h3 className="text-zinc-900 text-2xl mb-4">3.1 The model</h3>
            <p className="text-zinc-600 leading-relaxed mb-6">
              KRX Labs operates a “local in, global out” architecture. Integrate once to orchestrate:
            </p>
            <div className="not-prose space-y-8 mb-8">
              <div className="bg-zinc-50 p-8 rounded-lg">
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">The KRX Labs Model</h3>
                  <ul className="list-none m-0 space-y-2">
                    <li className="text-zinc-600">Acceptance of local methods (Pix, recurring Pix, local debit, installments)</li>
                    <li className="text-zinc-600">Collection of funds in local currency via regulated partners</li>
                    <li className="text-zinc-600">Reconciliation, FX conversion, and rapid USD remittance</li>
                    <li className="text-zinc-600">Compliance and fraud protection embedded in every transaction</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-zinc-900 text-2xl mb-4">3.2 Liquidity and FX orchestration</h3>
            <div className="not-prose space-y-8 mb-8">
              <div className="bg-zinc-50 p-8 rounded-lg">
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">Local settlement accounts</h3>
                  <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                    Aggregate payments in-country with smart netting and liquidity pooling to minimize idle capital.
                  </p>
                </div>
              </div>
              <div className="bg-zinc-50 p-8 rounded-lg">
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">Dynamic FX engines</h3>
                  <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                    Convert BRL → USD with competitive spreads, optional hedging, and optimized payout cycles.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-zinc-900 text-2xl mb-4">3.3 Compliance and security by design</h3>
            <div className="not-prose space-y-8 mb-8">
              <div className="bg-zinc-50 p-8 rounded-lg">
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">KYC / AML controls</h3>
                  <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                    Applied at onboarding and per transaction, with tokenization and end-to-end encryption.
                  </p>
                </div>
              </div>
              <div className="bg-zinc-50 p-8 rounded-lg">
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">Risk & audit</h3>
                  <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                    AI-based fraud detection, ISO 27001 and PCI DSS alignment, and local central bank requirements.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-zinc-900 text-2xl mb-4">3.4 Revenue model and scalability</h3>
            <div className="not-prose space-y-8 mb-12">
              <div className="bg-zinc-50 p-8 rounded-lg">
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">Revenue & Scalability</h3>
                  <ul className="list-none m-0 space-y-2">
                    <li className="text-zinc-600">Transparent per-transaction pricing plus FX spread</li>
                    <li className="text-zinc-600">Tiered SaaS licensing for large-volume clients</li>
                    <li className="text-zinc-600">Add-ons: analytics, retention metrics, hedging, local rewards</li>
                    <li className="text-zinc-600">Scalable to Mexico, India, Southeast Asia, and Africa</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-zinc-900 text-3xl mb-6">4. Competitive edge and barriers to entry</h2>
            <div className="not-prose space-y-8 mb-12">
              <div className="bg-zinc-50 p-8 rounded-lg">
                <h3 className="text-xl font-satoshi text-zinc-900 mb-3">Competitive Advantages</h3>
                <ul className="list-disc pl-6 text-zinc-700 space-y-1">
                  <li><strong>Local experience without local presence:</strong> native checkout and UX without incorporating locally.</li>
                  <li><strong>Predictability and transparency:</strong> clear pricing and settlement timing; no hidden FX spreads.</li>
                  <li><strong>Compliance as a moat:</strong> regulatory alignment and continuous monitoring for enterprise trust.</li>
                  <li><strong>Scale economics:</strong> multi-market pooling reduces FX costs and compounds pricing advantages.</li>
                  <li><strong>Replication barriers:</strong> licenses, banking, and regulatory frameworks require capital and time.</li>
                </ul>
              </div>
            </div>

            <h2 className="text-zinc-900 text-3xl mb-6">5. The strategic narrative: the future of global expansion</h2>
            <p className="text-zinc-600 leading-relaxed mb-12">
              Ignoring local payment ecosystems is a strategic failure. Brazil’s Pix — processing 6B+ transactions monthly — is a blueprint for Global South rails. With Pix Automático, recurring models can finally reach segments excluded from cards. Meanwhile, cross-border payments expand from USD 212B to 320B+ by 2030. KRX Labs — accept locally, settle globally — aligns with this macro shift.
            </p>

            <h2 className="text-zinc-900 text-3xl mb-6">Conclusion</h2>
            <p className="text-zinc-600 leading-relaxed mb-16">
              The future belongs to those who master the intersection of local context and global liquidity. Success demands localization of trust and transaction. KRX Labs bridges regulatory, cultural, and financial gaps — granting local reach, regulatory assurance, and financial precision with one integration. Expand smarter, not just faster — and belong in the markets you serve.
            </p>

            <h2 className="text-zinc-900 text-3xl mb-8">Frequently Asked Questions (FAQ)</h2>
            <div className="not-prose space-y-12">
              <div className="border-b border-zinc-200 pb-8">
                <h3 className="text-xl font-satoshi text-zinc-900 mb-4">What is KRX Labs?</h3>
                <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                  KRX Labs is an infrastructure provider that enables global companies to accept local payment methods in emerging markets while settling in USD, with full compliance and security built-in.
                </p>
              </div>

              <div className="border-b border-zinc-200 pb-8">
                <h3 className="text-xl font-satoshi text-zinc-900 mb-4">Why is Pix important for global businesses?</h3>
                <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                  Pix has become Brazil's dominant payment rail with over 6 billion transactions monthly, surpassing credit cards. Ignoring it means excluding a significant portion of Brazilian consumers from your business.
                </p>
              </div>

              <div className="border-b border-zinc-200 pb-8">
                <h3 className="text-xl font-satoshi text-zinc-900 mb-4">What is Pix Automático?</h3>
                <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                  Pix Automático is Brazil's recurring payment system built on the Pix rails, projected to move USD 30 billion in e-commerce within its first two years, enabling subscription and recurring revenue models.
                </p>
              </div>

              <div className="pb-8">
                <h3 className="text-xl font-satoshi text-zinc-900 mb-4">How does KRX Labs handle compliance?</h3>
                <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                  KRX Labs integrates KYC/AML controls at onboarding and per transaction, with tokenization, end-to-end encryption, and alignment with ISO 27001, PCI DSS, and local central bank requirements.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
