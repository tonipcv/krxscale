import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// SEO metadata is defined in metadata.ts for this route

export default function LocalRailsExplainerPage() {
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
                <span className="text-sm text-zinc-500 font-euclidCircularB tracking-[-0.04em]">11 MIN READ</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-satoshi tracking-[-0.03em] leading-tight text-zinc-900 mb-8">
                Pix, SPEI, PSE and M-Pesa: What They Are and How They Work
              </h1>
              <p className="text-xl text-zinc-600 font-euclidCircularB tracking-[-0.04em] leading-relaxed">
                Understand how Pix, SPEI, PSE, and M-Pesa shape local payment ecosystems across emerging markets — and how to connect to them through global infrastructure.
              </p>
            </header>

            {/* Removed hero cover for minimal text-only layout */}

            {/* Lead paragraph */}
            <p className="text-zinc-700 leading-[1.95] text-[20px] mb-12">
              Emerging markets run on local rails — instant, low-cost systems that move money at scale. This guide explains how Pix, SPEI, PSE, and M‑Pesa work and how KRX Scale connects you to them with USD settlement and full FX compliance.
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
                Emerging markets have built some of the most advanced and inclusive payment infrastructures in the world. While card networks dominate mature economies, regions like Latin America and Africa rely on local payment systems designed for instant, low‑cost transfers.
              </p>
              <p>
                Names like Pix, SPEI, PSE, and M‑Pesa represent more than national payment methods — they are entire ecosystems that define how consumers and businesses transact. For global companies expanding into these markets, understanding how each system works is essential to build efficient and compliant payment operations.
              </p>

              <p className="text-sm text-zinc-500 font-euclidCircularB tracking-[-0.02em] m-0">Contents</p>
              <ul className="mt-2 mb-10 list-disc pl-5 text-[16px] text-zinc-700 space-y-1">
                <li><a href="#pix" className="hover:underline">1. Pix (Brazil)</a></li>
                <li><a href="#spei" className="hover:underline">2. SPEI (Mexico)</a></li>
                <li><a href="#pse" className="hover:underline">3. PSE (Colombia)</a></li>
                <li><a href="#mpesa" className="hover:underline">4. M‑Pesa (Kenya and Sub‑Saharan Africa)</a></li>
                <li><a href="#overview" className="hover:underline">5. Comparative Overview</a></li>
                <li><a href="#why-matter" className="hover:underline">6. Why these systems matter for global companies</a></li>
                <li><a href="#conclusion" className="hover:underline">Conclusion</a></li>
                <li><a href="#faq" className="hover:underline">FAQ</a></li>
              </ul>

              <h2 id="pix">1. Pix (Brazil)</h2>
              <p>
                Pix is Brazil’s instant payment system, launched in 2020 by the Central Bank of Brazil (BACEN). It enables 24/7 transfers between individuals, businesses, and government entities — all completed within seconds.
              </p>
              <h3>Key features</h3>
              <ul>
                <li>Real‑time transfers settled directly through the Instant Payment System (SPI).</li>
                <li>No card intermediaries; users pay via QR codes or “Pix keys” (email, phone, or ID).</li>
                <li>Free for consumers and widely adopted by businesses.</li>
                <li>Over 160 million active users and billions of monthly transactions.</li>
              </ul>
              <h3>Strategic impact</h3>
              <p>
                Pix has become the default payment method in Brazil, surpassing credit cards and boletos. For international merchants, it’s a must‑have — yet it operates exclusively through institutions licensed by BACEN.
              </p>
              <h3>Integration model</h3>
              <p>Foreign companies typically integrate through licensed intermediaries or infrastructure providers like KRX Scale, which handle:</p>
              <ul>
                <li>local processing of Pix payments;</li>
                <li>automated FX conversion;</li>
                <li>USD or stablecoin settlement abroad.</li>
              </ul>

              <h2 id="spei">2. SPEI (Mexico)</h2>
              <p>
                SPEI (Sistema de Pagos Electrónicos Interbancarios) is Mexico’s interbank electronic payment system, managed by the Bank of Mexico (Banxico) since 2004.
              </p>
              <h3>Key features</h3>
              <ul>
                <li>Instant transfers between any bank accounts in Mexico.</li>
                <li>Available to both individuals and businesses.</li>
                <li>Real‑time confirmation and 24/7 operation.</li>
                <li>Base layer for new fintech and QR initiatives.</li>
              </ul>
              <h3>Strategic impact</h3>
              <p>
                SPEI is the core digital payment rail in Mexico, used by banks, wallets, and payment processors; essential for real‑time e‑commerce payments and merchant disbursements.
              </p>
              <h3>Integration model</h3>
              <p>
                Foreign companies cannot access SPEI directly. To operate compliantly, they must partner with local PSPs or infrastructure providers connected to Banxico’s network. Through KRX Scale, companies can accept SPEI payments locally and receive global settlement in USD without opening a Mexican entity.
              </p>

              <h2 id="pse">3. PSE (Colombia)</h2>
              <p>
                PSE (Pagos Seguros en Línea) is Colombia’s online banking payment platform, managed by ACH Colombia. It facilitates direct account‑to‑account (A2A) payments for e‑commerce and service platforms.
              </p>
              <h3>Key features</h3>
              <ul>
                <li>Integration with all major Colombian banks.</li>
                <li>Authorization via online banking credentials (no card needed).</li>
                <li>Widely used for subscriptions, utilities, and e‑commerce.</li>
                <li>Operates within local banking regulations under ACH Colombia.</li>
              </ul>
              <h3>Strategic impact</h3>
              <p>
                PSE acts as Colombia’s version of open banking payments, giving users an alternative to cards while ensuring secure authentication; it represents over 60% of online transactions in the country.
              </p>
              <h3>Integration model</h3>
              <p>
                Foreign merchants rely on local acquirers or global payment infrastructures to support PSE payments. With KRX Scale, companies can process PSE transactions locally and settle globally in USD or stablecoins through a compliant FX pipeline.
              </p>

              <h2 id="mpesa">4. M‑Pesa (Kenya and Sub‑Saharan Africa)</h2>
              <p>
                M‑Pesa is the mobile money system that revolutionized digital finance in Africa. Launched by Safaricom in Kenya in 2007, it allows users to deposit, send, and withdraw money using their mobile phones — without a bank account.
              </p>
              <h3>Key features</h3>
              <ul>
                <li>Operates through mobile network operators, not banks.</li>
                <li>Accessible via feature phones and smartphones.</li>
                <li>Supports peer‑to‑peer transfers, merchant payments, and remittances.</li>
                <li>Expanded to Tanzania, Ghana, Mozambique, and other African markets.</li>
              </ul>
              <h3>Strategic impact</h3>
              <p>
                M‑Pesa became the financial backbone of East Africa, driving inclusion for millions and remaining a blueprint for mobile‑first economies worldwide.
              </p>
              <h3>Integration model</h3>
              <p>
                Accessing M‑Pesa as a foreign business requires licensed aggregation through local partners. Solutions like KRX Scale integrate these mobile money systems into a unified global settlement layer, allowing companies to operate across markets with one API and consistent compliance standards.
              </p>

              <h2 id="overview">5. Comparative Overview</h2>
              <div className="overflow-x-auto not-prose">
                <table className="w-full text-left text-zinc-700 text-[16px]">
                  <thead className="text-zinc-500">
                    <tr>
                      <th className="py-2 pr-4">System</th>
                      <th className="py-2 pr-4">Country</th>
                      <th className="py-2 pr-4">Operator</th>
                      <th className="py-2 pr-4">Type</th>
                      <th className="py-2 pr-4">Access Model</th>
                      <th className="py-2 pr-4">Key Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 pr-4">Pix</td>
                      <td className="py-2 pr-4">Brazil</td>
                      <td className="py-2 pr-4">Central Bank of Brazil</td>
                      <td className="py-2 pr-4">Instant A2A</td>
                      <td className="py-2 pr-4">Licensed institutions</td>
                      <td className="py-2 pr-4">Universal adoption, instant settlement</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">SPEI</td>
                      <td className="py-2 pr-4">Mexico</td>
                      <td className="py-2 pr-4">Bank of Mexico</td>
                      <td className="py-2 pr-4">Instant interbank</td>
                      <td className="py-2 pr-4">Licensed PSPs</td>
                      <td className="py-2 pr-4">High liquidity, 24/7 infrastructure</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">PSE</td>
                      <td className="py-2 pr-4">Colombia</td>
                      <td className="py-2 pr-4">ACH Colombia</td>
                      <td className="py-2 pr-4">Online banking A2A</td>
                      <td className="py-2 pr-4">Local processors</td>
                      <td className="py-2 pr-4">Secure e‑commerce integration</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">M‑Pesa</td>
                      <td className="py-2 pr-4">Kenya (Africa)</td>
                      <td className="py-2 pr-4">Safaricom / Vodafone</td>
                      <td className="py-2 pr-4">Mobile money</td>
                      <td className="py-2 pr-4">Telco aggregation</td>
                      <td className="py-2 pr-4">Financial inclusion, low barriers</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="why-matter">6. Why these systems matter for global companies</h2>
              <p>
                Local payment systems define how people pay in emerging markets. Ignoring them means losing access to most consumers. But integrating them directly is complex due to regulation, currency controls, and settlement limitations.
              </p>
              <p>
                That’s where global infrastructure platforms like KRX Scale create value: they aggregate local payment methods under one compliant, API‑driven framework, allowing global companies to operate in Brazil, Mexico, Colombia, Africa, and beyond — with USD or stablecoin settlement and full FX compliance.
              </p>

              <h2 id="conclusion">Conclusion</h2>
              <p>
                Pix, SPEI, PSE, and M‑Pesa are the financial backbones of emerging economies and the foundation of digital commerce across the Global South. For companies aiming to expand efficiently into these markets, integration with these local rails is strategic infrastructure.
              </p>
              <p>
                KRX Scale enables global companies to connect to these systems through a single, compliant platform, turning local payments into global liquidity. Accept Pix, SPEI, PSE, and M‑Pesa, settle in USD, and scale across emerging markets without local entities or regulatory friction.
              </p>

              <h2 id="faq">FAQ</h2>
              <h3>1. Why do local payment systems matter for global companies?</h3>
              <p>They represent the dominant payment methods in emerging markets, where card penetration is low and instant transfers drive growth.</p>
              <h3>2. Can foreign companies connect directly to Pix, SPEI, or PSE?</h3>
              <p>No. Direct access requires local licensing. Platforms like KRX Scale provide compliant access via regulated intermediaries.</p>
              <h3>3. Is M‑Pesa available for international merchants?</h3>
              <p>Yes, through licensed mobile money aggregators and infrastructure providers that handle compliance and settlement.</p>
              <h3>4. How does settlement in USD or stablecoins work?</h3>
              <p>The local payment is received in domestic currency and converted through a regulated FX process, settling internationally via KRX Scale.</p>
              <h3>5. What is the advantage of using one API for multiple local systems?</h3>
              <p>Unified integration reduces compliance risk, simplifies operations, and provides consistent liquidity across markets.</p>

              {/* CTA (minimal) */}
              <div className="mt-12 border border-zinc-300/60 rounded-xl p-5 sm:p-6 not-prose bg-transparent">
                <p className="m-0 text-zinc-800 text-lg sm:text-xl">
                  Connect to Pix, SPEI, PSE and M‑Pesa. Settle in USD.
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
