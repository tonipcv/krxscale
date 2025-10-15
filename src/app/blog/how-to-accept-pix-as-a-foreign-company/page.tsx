import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// SEO metadata is defined in metadata.ts for this route

export default function AcceptPixForeignCompanyPage() {
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

      {/* Page container */}
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
              {/* Badge + read time (match reference style) */}
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 text-sm font-euclidCircularB tracking-[-0.04em] rounded-full">
                  FINTECH
                </span>
                <span className="text-sm text-zinc-500 font-euclidCircularB tracking-[-0.04em]">9 MIN READ</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-satoshi tracking-[-0.03em] leading-tight text-zinc-900 mb-8">
                How to Accept Pix as a Foreign Company: Infrastructure, Compliance, and Global Settlement
              </h1>
              <p className="text-xl text-zinc-600 font-euclidCircularB tracking-[-0.04em] leading-relaxed">
                Learn how foreign companies can accept Pix payments in Brazil, settle in USD, and stay fully compliant — without opening a local entity.
              </p>
            </header>

            {/* Removed hero cover for minimal text-only layout */}

            {/* Lead paragraph (outside prose for extra spacing) */}
            <p className="text-zinc-700 leading-[1.95] text-[20px] mb-12">
              This guide explains the infrastructure, compliance, and operational flow for accepting Pix as a foreign company — and how to settle in USD with full regulatory alignment using a modern local-in, global-out architecture.
            </p>

            {/* Article Content (explicit utilities, prose-free) */}
            <div className="max-w-prose text-zinc-700 text-[20px] leading-[1.95]
              [&_p]:mb-6
              [&_ul]:mb-8 [&_ol]:mb-8
              [&_ul]:list-disc [&_ol]:list-decimal
              [&_ul]:pl-6 [&_ol]:pl-6
              [&_ul>li]:text-[20px] [&_ul>li]:leading-[1.95]
              [&_ol>li]:text-[20px] [&_ol>li]:leading-[1.95]
              [&_h2]:text-4xl [&_h2]:text-zinc-900 [&_h2]:font-satoshi [&_h2]:mb-6
              [&_h3]:text-2xl [&_h3]:text-zinc-900 [&_h3]:font-satoshi [&_h3]:mb-4
              [&_a]:underline [&_a]:decoration-zinc-300 hover:[&_a]:decoration-zinc-700">
              <h2 className="!mt-0">Introduction</h2>
              <p>
                Pix is Brazil’s dominant payment rail. It’s fast, low-cost, and regulated by the Central Bank. For a company outside Brazil, the core question is simple: how do you accept Pix without opening a local entity or taking FX/compliance risk?
              </p>
              <p>
                The path is to operate on top of a Local Payment Infrastructure (LPI): accept funds domestically, settle abroad, and keep every step compliant by design. This guide shows the model, the flow, and how KRX Scale abstracts the heavy lifting.
              </p>

              {/* Table of Contents */}
              <p className="text-sm text-zinc-500 font-euclidCircularB tracking-[-0.02em] m-0">Contents</p>
              <ul className="mt-2 mb-10 list-disc pl-5 text-[16px] text-zinc-700 space-y-1">
                <li><a href="#understanding-pix" className="hover:underline">1. Understanding the nature of Pix</a></li>
                <li><a href="#challenges" className="hover:underline">2. The structural challenges for foreign companies</a></li>
                <li><a href="#solution-lpi" className="hover:underline">3. The modern solution: local payments with global settlement</a></li>
                <li><a href="#flow" className="hover:underline">4. Technical and operational flow</a></li>
                <li><a href="#compliance" className="hover:underline">5. Compliance and regulatory integrity</a></li>
                <li><a href="#advantages" className="hover:underline">6. Advantages of operating through KRX Scale</a></li>
                <li><a href="#use-case" className="hover:underline">7. Use case: a global SaaS company entering Brazil</a></li>
                <li><a href="#conclusion" className="hover:underline">Conclusion</a></li>
                <li><a href="#faq" className="hover:underline">FAQ</a></li>
              </ul>

              <h2 id="understanding-pix" className="scroll-mt-28">1. Understanding the nature of Pix</h2>
              
              <p>
                Pix runs on Brazil’s Instant Payment System (SPI). Only licensed financial institutions can plug in directly.
              </p>
              <p>
                Foreign companies therefore connect via a regulated local intermediary that receives Pix onshore and executes compliant settlement offshore.
              </p>

              <h2 id="challenges" className="scroll-mt-28">2. The structural challenges for foreign companies</h2>
              
              <p>The barriers fall into three main categories:</p>

              <ul>
                <li><strong>Regulatory:</strong> every SPI participant must have a local corporate registration (CNPJ) and Central Bank authorization.</li>
                <li><strong>Foreign exchange:</strong> all BRL inflows destined for overseas settlement require a formal FX contract.</li>
                <li><strong>Taxation:</strong> operating through a Brazilian entity triggers ongoing tax and reporting obligations.</li>
              </ul>
              
              <p>
                Setting up this structure takes months, requires significant local expertise, and introduces operational complexity — often impractical for companies simply seeking to test or scale efficiently into the Brazilian market.
              </p>

              <h2 id="solution-lpi" className="scroll-mt-28">3. The modern solution: local payments with global settlement</h2>
              
              <p>
                The scalable model is “local in, global out.” A licensed Brazilian provider processes Pix, performs KYC/AML, and settles internationally in USD (or stablecoins) under a formal FX contract.
              </p>
              <p>
                The merchant receives net proceeds abroad without creating a Brazilian entity or running local banking.
              </p>
              <p>This is exactly what <strong>KRX Scale</strong> abstracts for you:</p>
              
              <ul>
                <li>Local acceptance via Pix, SPEI, PSE, and other regional methods.</li>
                <li>Automated USD or stablecoin settlement.</li>
                <li>Integrated compliance (AML, KYB, FX contracts, reconciliation).</li>
                <li>A single API that removes the need for local banking or incorporation.</li>
              </ul>

              <h2 id="flow" className="scroll-mt-28">4. Technical and operational flow</h2>
              
              <p>In practice, a transaction looks like this:</p>

              <ol>
                <li>The customer in Brazil selects Pix at checkout.</li>
                <li>KRX Scale generates the QR code and validates the payment in real time.</li>
                <li>The payment is received by a licensed financial institution in Brazil.</li>
                <li>The platform executes the foreign exchange contract and settles in USD to the merchant's global account.</li>
                <li>The API confirms the transaction and reconciles the merchant's balance.</li>
              </ol>
              
              <p>
                Result: no local entity, no onshore banking. Companies typically see faster go‑live and lower operating costs versus a subsidiary-led approach.
              </p>

              <h2 id="compliance" className="scroll-mt-28">5. Compliance and regulatory integrity</h2>
              
              <p>
                All transactions follow the Central Bank’s Circular 3,978/2020 and Resolution 4,593/2017 (AML/KYC/FX). Key elements include:
              </p>

              <p>Compliance elements include:</p>

              <ul>
                <li>Ultimate Beneficial Owner (UBO) and KYB verification.</li>
                <li>Registration of transaction nature (cross-border service revenue).</li>
                <li>Automated AML and volume reporting.</li>
                <li>Data retention and audit readiness for five years.</li>
              </ul>
              
              <p>
                KRX Scale automates these procedures within its API, ensuring full regulatory conformity without compromising user experience.
              </p>

              <h2 id="advantages" className="scroll-mt-28">6. Advantages of operating through KRX Scale</h2>
              <ul>
                <li><strong>Regulatory</strong> — Fully compliant with Central Bank and FX regulations.</li>
                <li><strong>Settlement</strong> — Receive in USD or stablecoins with automated reconciliation.</li>
                <li><strong>Speed</strong> — Settlement in T+1 after Pix confirmation.</li>
                <li><strong>Scalability</strong> — Supports Brazil, Mexico, Colombia, Chile, and other markets.</li>
                <li><strong>Integration</strong> — Single API, technical documentation, and digital onboarding.</li>
                <li><strong>Cost</strong> — No need for local entity or banking infrastructure.</li>
              </ul>

              <h2 id="use-case" className="scroll-mt-28">7. Use case: a global SaaS company entering Brazil</h2>
              
              <p>
                A U.S.-based SaaS wants to bill Brazilian users in BRL. With KRX Scale, it can:
              </p>
              <ul>
                <li>Offer Pix as a native payment method via API integration.</li>
                <li>Receive USD settlements directly into its global account.</li>
                <li>Stay compliant with all FX and AML regulations.</li>
                <li>Maintain full auditability and reporting across regions.</li>
              </ul>
              <p>
                Outcome: higher conversion from local methods and lower total cost of settlement — without incorporating locally.
              </p>

              <h2 id="conclusion" className="scroll-mt-28">Conclusion: Pix as the gateway to Latin America</h2>
              
              <p>
                Accepting Pix as a foreign company is a strategic choice — not a technical hurdle. Done right, it accelerates market entry and keeps risk low.
              </p>
              <p>
                With KRX Scale, you accept locally and settle globally — integrating in days, operating compliantly, and avoiding onshore overhead.
              </p>
              <p>
                Accept Pix, SPEI, and other local methods with USD settlement — no local entity, no regulatory friction, compliance by design.
              </p>

              <h2 id="faq" className="scroll-mt-28">FAQ</h2>
              <h3>1. Is it legal for a foreign company to accept Pix without a CNPJ?</h3>
              <p>Yes. As long as the transaction is processed by a licensed local institution and formalized through an FX contract, it is fully compliant.</p>
              <h3>2. How long does onboarding with KRX Scale take?</h3>
              <p>Merchant onboarding and API integration can typically be completed within 72 hours after KYC approval.</p>
              <h3>3. Can settlement occur in USD or stablecoins?</h3>
              <p>Yes. Settlement can be configured in USD or stablecoins, depending on contract terms and jurisdiction.</p>
              <h3>4. Does KRX Scale support other countries besides Brazil?</h3>
              <p>Yes. The infrastructure is compatible with SPEI (Mexico), PSE (Colombia), QRIS (Indonesia), and other local systems.</p>
              <h3>5. Is there a minimum transaction volume required?</h3>
              <p>No minimum applies during the initial phase. Settlement limits are defined according to the merchant's regulatory profile.</p>
              
              {/* CTA Section (minimal) */}
              <div className="mt-12 border border-zinc-300/60 rounded-xl p-5 sm:p-6 not-prose bg-transparent">
                <p className="m-0 text-zinc-800 text-lg sm:text-xl">
                  Accept Pix without a local entity. Settle in USD.
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
