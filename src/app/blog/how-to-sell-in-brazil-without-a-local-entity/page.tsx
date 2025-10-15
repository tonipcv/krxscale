import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// SEO metadata is defined in metadata.ts for this route

export default function SellInBrazilNoEntityPage() {
  return (
    <div className="min-h-screen bg-[#f5efe7] text-zinc-800 overflow-hidden">
      {/* Navigation (aligned with homepage) */}
      <nav className="fixed w-full top-0 backdrop-blur-md bg-[#f5efe7]/80 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="KRX Labs Logo"
                width={48}
                height={48}
                className="w-6 h-6 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-300 invert"
              />
              <span className="text-base sm:text-xl tracking-[-0.03em] font-satoshi">KRX</span>
            </Link>

            <div className="flex items-center gap-4 sm:gap-6">
              <Link
                href="/blog"
                className="text-sm tracking-[-0.04em] font-euclidCircularB text-zinc-500 hover:text-zinc-800 transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-5 relative">
        <main className="pt-28 pb-24">
          <article className="max-w-2xl mx-auto px-4 sm:px-6">
            {/* Back to Blog */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 transition-colors mb-12"
            >
              <ArrowLeft size={16} />
              <span className="font-euclidCircularB">Back to Blog</span>
            </Link>

            {/* Header */}
            <header className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 text-sm font-euclidCircularB tracking-[-0.04em] rounded-full">
                  FINTECH
                </span>
                <span className="text-sm text-zinc-500 font-euclidCircularB tracking-[-0.04em]">9 MIN READ</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-satoshi tracking-[-0.03em] leading-tight text-zinc-900 mb-8">
                How to Sell in Brazil Without Opening a Local Entity (CNPJ)
              </h1>
              <p className="text-xl text-zinc-600 font-euclidCircularB tracking-[-0.04em] leading-relaxed">
                Learn how global companies can sell in Brazil legally and efficiently without opening a local entity, using compliant infrastructure for payments and FX.
              </p>
            </header>

            {/* Hero Cover */}
            <div className="relative overflow-hidden rounded-sm mb-12">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10" />
              <div
                className="h-[280px] sm:h-[380px] bg-emerald-600 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=1600&q=80')",
                }}
              />
            </div>

            {/* Lead paragraph */}
            <p className="text-zinc-700 leading-[1.95] text-[20px] mb-12">
              This article explains how to sell in Brazil without creating a local entity — from regulatory basis to the operational flow — and how KRX Scale enables compliant, fast go‑live with USD settlement.
            </p>

            {/* Article Content (explicit utilities) */}
            <div
              className="max-w-prose text-zinc-700 text-[20px] leading-[1.95]
              [&_p]:mb-6
              [&_ul]:mb-8 [&_ol]:mb-8
              [&_ul]:list-disc [&_ol]:list-decimal
              [&_ul]:pl-6 [&_ol]:pl-6
              [&_ul>li]:text-[20px] [&_ul>li]:leading-[1.95]
              [&_ol>li]:text-[20px] [&_ol>li]:leading-[1.95]
              [&_h2]:text-4xl [&_h2]:text-zinc-900 [&_h2]:font-satoshi [&_h2]:mb-6
              [&_h3]:text-2xl [&_h3]:text-zinc-900 [&_h3]:font-satoshi [&_h3]:mb-4
              [&_a]:underline [&_a]:decoration-zinc-300 hover:[&_a]:decoration-zinc-700"
            >
              <h2 className="!mt-0">Introduction</h2>
              <p>
                Brazil is the largest digital economy in Latin America and one of the fastest-growing consumer markets globally.
              </p>
              <p>
                However, expanding into the country traditionally requires incorporating a local entity, obtaining a CNPJ (corporate tax ID), and navigating a complex regulatory environment. For most SaaS companies, marketplaces, and fintechs, that structure is too slow and capital‑intensive.
              </p>
              <p>
                A new model now enables companies to sell in Brazil, collect local payments, and settle globally — without creating a local legal entity. This article explains how that works from a regulatory, technical, and operational perspective.
              </p>

              <p className="text-sm text-zinc-500 font-euclidCircularB tracking-[-0.02em] m-0">Contents</p>
              <ul className="mt-2 mb-10 list-disc pl-5 text-[16px] text-zinc-700 space-y-1">
                <li><a href="#traditional-model" className="hover:underline">1. The traditional model: incorporation and local licensing</a></li>
                <li><a href="#new-alternative" className="hover:underline">2. The new alternative: selling via compliant payment infrastructure</a></li>
                <li><a href="#legal-regulatory" className="hover:underline">3. Legal and regulatory basis</a></li>
                <li><a href="#operational-flow" className="hover:underline">4. Operational flow</a></li>
                <li><a href="#compliance-taxation" className="hover:underline">5. Compliance and taxation considerations</a></li>
                <li><a href="#benefits" className="hover:underline">6. Benefits of operating without a local entity</a></li>
                <li><a href="#use-case" className="hover:underline">7. Use case: scaling a SaaS platform in Brazil</a></li>
                <li><a href="#krx-scale" className="hover:underline">8. How KRX Scale enables global operations</a></li>
                <li><a href="#conclusion" className="hover:underline">Conclusion</a></li>
                <li><a href="#faq" className="hover:underline">FAQ</a></li>
              </ul>

              <h2 id="traditional-model">1. The traditional model: incorporation and local licensing</h2>
              <p>
                Historically, entering Brazil meant establishing a local subsidiary. This involved:
              </p>
              <ul>
                <li>Registering a CNPJ with the Federal Revenue Service.</li>
                <li>Opening a corporate bank account.</li>
                <li>Complying with tax, accounting, and labor obligations.</li>
                <li>Contracting local directors and legal representation.</li>
              </ul>
              <p>
                While this route provides full local control, it requires months of legal setup, recurring tax filings, and permanent exposure to local regulation. For digital‑first companies seeking to validate market demand, this approach is inefficient and costly.
              </p>

              <h2 id="new-alternative">2. The new alternative: selling via compliant payment infrastructure</h2>
              <p>
                A more efficient model has emerged: operating through licensed local payment infrastructure that enables global companies to sell in Brazil without incorporating. In this framework, the local infrastructure provider acts as the merchant of record for local transactions.
              </p>
              <p>
                It collects payments in BRL, performs all compliance checks (AML, KYC, FX), and settles the net amount to the foreign company in USD or stablecoins. The result is full compliance with Brazilian regulations, without the overhead of a local entity.
              </p>
              <p>
                This is the foundation of KRX Scale, which allows companies to:
              </p>
              <ul>
                <li>Accept local payment methods such as Pix and boleto bancário.</li>
                <li>Settle funds internationally in USD or stablecoins.</li>
                <li>Maintain compliance with FX, AML, and tax regulations.</li>
                <li>Integrate through a single API without needing a CNPJ.</li>
              </ul>

              <h2 id="legal-regulatory">3. Legal and regulatory basis</h2>
              <p>
                Operating without a CNPJ is legal as long as the local financial counterpart is licensed and acts within the framework defined by the Central Bank of Brazil (BACEN). Under this structure:
              </p>
              <ul>
                <li>The local payment institution handles payment processing and FX conversion.</li>
                <li>The foreign company is defined as a non‑resident service provider.</li>
                <li>Each cross‑border remittance is documented via a foreign exchange contract.</li>
              </ul>
              <p>
                This aligns with BACEN Resolutions 4,593/2017 and 3,691/2013, which regulate foreign exchange operations related to services and digital commerce. In essence, the compliance burden shifts from the foreign company to the licensed local intermediary, while maintaining full transparency and reporting.
              </p>

              <h2 id="operational-flow">4. Operational flow</h2>
              <p>A simplified transaction looks like this:</p>
              <ol>
                <li>A Brazilian customer pays for a product or subscription using Pix.</li>
                <li>KRX Scale processes the payment through a licensed local entity.</li>
                <li>The transaction is matched with an FX contract under the “service payment to non‑resident” category.</li>
                <li>The amount is converted and settled in USD or stablecoins to the foreign company’s global account.</li>
                <li>All KYC and AML requirements are fulfilled automatically.</li>
              </ol>
              <p>
                This model allows full operational control and data visibility for the foreign company while remaining outside the Brazilian corporate perimeter.
              </p>

              <h2 id="compliance-taxation">5. Compliance and taxation considerations</h2>
              <p>
                While the company does not hold a CNPJ, all operations must comply with FX registration and documentation requirements; AML/CFT controls; and the tax treatment of remittances under Brazilian and international law.
              </p>
              <p>
                Because the merchant of record is the local licensed institution, it assumes responsibility for collecting, reconciling, and reporting transactions to local authorities. The foreign company receives the corresponding settlement net of applicable local taxes and fees.
              </p>
              <p>
                This ensures that every transaction remains legally valid, auditable, and compliant with Central Bank standards.
              </p>

              <h2 id="benefits">6. Benefits of operating without a local entity</h2>
              <ul>
                <li><strong>Speed:</strong> Go live in days, not months.</li>
                <li><strong>Cost:</strong> Avoid incorporation, accounting, and payroll overhead.</li>
                <li><strong>Compliance:</strong> Operate under a fully licensed local partner.</li>
                <li><strong>Currency:</strong> Settle directly in USD or stablecoins.</li>
                <li><strong>Scalability:</strong> Expand to multiple LATAM markets via unified infrastructure.</li>
                <li><strong>Integration:</strong> API‑first model, fully auditable operations.</li>
              </ul>

              <h2 id="use-case">7. Use case: scaling a SaaS platform in Brazil</h2>
              <p>
                A European SaaS company wants to sell subscriptions to Brazilian users in local currency. Instead of opening a CNPJ, it integrates KRX Scale.
              </p>
              <ul>
                <li>Customers pay in BRL via Pix.</li>
                <li>Payments are processed locally by a licensed partner.</li>
                <li>The company receives USD settlements in its global account.</li>
                <li>All KYC, FX, and tax compliance are handled automatically.</li>
              </ul>
              <p>
                The company gains immediate access to one of the largest digital economies in the world — without any of the overhead of local incorporation.
              </p>

              <h2 id="krx-scale">8. How KRX Scale enables global operations</h2>
              <p>
                KRX Scale provides a regulatory and technological bridge between local payment systems and global liquidity. It combines the three layers necessary to operate in Brazil without a CNPJ:
              </p>
              <ul>
                <li><strong>Local payment processing:</strong> through licensed institutions connected to the Pix network.</li>
                <li><strong>FX and settlement infrastructure:</strong> ensuring compliance with cross‑border regulations.</li>
                <li><strong>Automated compliance:</strong> covering AML, KYB, and contract reconciliation.</li>
              </ul>
              <p>
                This structure transforms what used to be a six‑month setup into a 72‑hour onboarding and a single API integration.
              </p>

              <h2 id="conclusion">Conclusion: entering Brazil without barriers</h2>
              <p>
                Selling in Brazil without a CNPJ is no longer a legal gray area; it is a compliant and scalable model built on regulated infrastructure. For global companies, it unlocks immediate access to a high‑growth market without the friction of local incorporation.
              </p>
              <p>
                KRX Scale enables this expansion safely, combining regulatory precision with global liquidity. It allows companies to accept Pix and other local payments, settle in USD, and operate across multiple markets through one infrastructure.
              </p>

              <h2 id="faq">FAQ</h2>
              <h3>1. Is it legal to sell in Brazil without a CNPJ?</h3>
              <p>Yes. When payments are processed by a licensed local institution and reported under FX regulations, it is fully compliant.</p>
              <h3>2. Do I need to register with the Central Bank?</h3>
              <p>No. The local partner manages all regulatory obligations and reports the transactions.</p>
              <h3>3. Can I receive settlements in USD or stablecoins?</h3>
              <p>Yes. Settlement options include USD and stablecoins, depending on contract terms.</p>
              <h3>4. What payment methods are supported?</h3>
              <p>Pix, boleto bancário, and other local methods through the same API.</p>
              <h3>5. How long does integration take?</h3>
              <p>Most companies can go live within 72 hours of KYC approval.</p>

              {/* CTA (minimal) */}
              <div className="mt-12 border border-zinc-300/60 rounded-xl p-5 sm:p-6 not-prose bg-transparent">
                <p className="m-0 text-zinc-800 text-lg sm:text-xl">
                  Sell in Brazil without a CNPJ. Accept locally, settle in USD.
                </p>
                <div className="mt-3">
                  <a href="/?contact=open" className="text-sm sm:text-base text-zinc-700 underline decoration-zinc-400 underline-offset-4 hover:decoration-zinc-800">
                    Request early access →
                  </a>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}
