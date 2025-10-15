import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// SEO metadata is defined in metadata.ts for this route

export default function WhyStripeDlocalNotFullLocalPaymentsPage() {
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
                <span className="text-sm text-zinc-500 font-euclidCircularB tracking-[-0.04em]">10 MIN READ</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-satoshi tracking-[-0.03em] leading-tight text-zinc-900 mb-8">
                Why Stripe and dLocal Do Not Fully Solve Local Payments
              </h1>
              <p className="text-xl text-zinc-600 font-euclidCircularB tracking-[-0.04em] leading-relaxed">
                Explore the structural limits of Stripe and dLocal in emerging markets and how KRX Scale delivers true local payment infrastructure with global settlement.
              </p>
            </header>

            {/* Removed hero cover for minimal text-only layout */}

            {/* Lead paragraph */}
            <p className="text-zinc-700 leading-[1.95] text-[20px] mb-12">
              Stripe defined developer-first payments and dLocal brought EM coverage. Yet neither provides true local payment infrastructure with transparent FX and programmable settlement. This piece explains the gap and how KRX Scale fills it.
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
                Stripe and dLocal are among the most sophisticated payment platforms in the world. Stripe defined the modern developer-first payment experience; dLocal pioneered EM coverage for global merchants. Yet both remain partial solutions for true local payments — the ability to collect via domestic rails and settle internationally with full FX compliance and liquidity control.
              </p>

              <p className="text-sm text-zinc-500 font-euclidCircularB tracking-[-0.02em] m-0">Contents</p>
              <ul className="mt-2 mb-10 list-disc pl-5 text-[16px] text-zinc-700 space-y-1">
                <li><a href="#local-meaning" className="hover:underline">1. What “local payments” actually mean</a></li>
                <li><a href="#stripe" className="hover:underline">2. How Stripe approaches emerging markets</a></li>
                <li><a href="#dlocal" className="hover:underline">3. How dLocal operates</a></li>
                <li><a href="#missing-layer" className="hover:underline">4. The missing layer: infrastructure versus aggregation</a></li>
                <li><a href="#fx-transparency" className="hover:underline">5. The importance of FX transparency and compliance</a></li>
                <li><a href="#liquidity" className="hover:underline">6. Liquidity and settlement control</a></li>
                <li><a href="#scalability" className="hover:underline">7. Scalability across markets</a></li>
                <li><a href="#overview" className="hover:underline">8. Comparative overview</a></li>
                <li><a href="#krx-scale" className="hover:underline">9. The infrastructure approach: KRX Scale</a></li>
                <li><a href="#conclusion" className="hover:underline">Conclusion</a></li>
                <li><a href="#faq" className="hover:underline">FAQ</a></li>
              </ul>

              <h2 id="local-meaning">1. What “local payments” actually mean</h2>
              <p>
                Processing cards in local currency is not the same as participating in domestic payment systems like Pix or SPEI. True local payments require direct access to national clearing, domestic settlement in local currency, local KYC/AML/FX compliance, and the ability to convert and remit value internationally with audit-ready documentation.
              </p>
              <p>
                This requires licensed presence, connectivity to central bank infrastructure, and real-time reconciliation of domestic and cross-border flows — a financial infrastructure problem, not a gateway feature.
              </p>

              <h2 id="stripe">2. How Stripe approaches emerging markets</h2>
              <p>
                Stripe optimizes for card ecosystems. In EM, it relies on local PSPs to process on its behalf. For example, “Pix support” in Brazil is mediated by a licensed acquirer. The merchant’s balance stays within Stripe’s entity and moves under its FX framework.
              </p>
              <h3>Core limitations</h3>
              <ul>
                <li>No direct access to local clearing systems</li>
                <li>No independent FX/liquidity control for merchants</li>
                <li>Opaque settlement timing and conversion rates</li>
                <li>Merchant of record tied to Stripe local entities</li>
              </ul>

              <h2 id="dlocal">3. How dLocal operates</h2>
              <p>
                dLocal offers EM methods via single API using a hybrid aggregator with licensed partners. Strong coverage, but limitations of the aggregator model persist.
              </p>
              <h3>Core limitations</h3>
              <ul>
                <li>FX routing/pricing controlled by dLocal, often spread-based</li>
                <li>Compliance reporting internal to dLocal’s entities</li>
                <li>Settlement may take several business days</li>
                <li>Limited programmability and ledger visibility</li>
              </ul>

              <h2 id="missing-layer">4. The missing layer: infrastructure versus aggregation</h2>
              <p>
                Access ≠ infrastructure. Infrastructure means direct regulatory/technical connection to domestic networks, automated FX contracts, programmable settlement, and unified reconciliation across markets.
              </p>

              <h2 id="fx-transparency">5. The importance of FX transparency and compliance</h2>
              <p>
                EMs impose strict FX/AML rules. A compliant infra provides contract-level traceability, real-time FX rates/fees, KYC/KYB visibility, and automated AML/sanctions screening.
              </p>

              <h2 id="liquidity">6. Liquidity and settlement control</h2>
              <p>
                Global companies need control over when/how to convert funds, manage exposure, and integrate treasury. Gateways abstract this; infra like KRX Scale exposes programmable settlement — real-time or delayed FX, USD/stablecoin settlement, unified reconciliation, and access to FX records.
              </p>

              <h2 id="scalability">7. Scalability across markets</h2>
              <p>
                Gateway/aggregator expansions are entity-by-entity. KRX Scale integrates domestic systems under a unified compliance/settlement framework, enabling simultaneous, multi-country rollouts.
              </p>

              <h2 id="overview">8. Comparative overview</h2>
              <div className="overflow-x-auto not-prose">
                <table className="w-full text-left text-zinc-700 text-[16px]">
                  <thead className="text-zinc-500">
                    <tr>
                      <th className="py-2 pr-4">Feature</th>
                      <th className="py-2 pr-4">Stripe</th>
                      <th className="py-2 pr-4">dLocal</th>
                      <th className="py-2 pr-4">KRX Scale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 pr-4">Access to local rails</td>
                      <td className="py-2 pr-4">Indirect via acquirers</td>
                      <td className="py-2 pr-4">Indirect via partners</td>
                      <td className="py-2 pr-4">Direct via licensed institutions</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">FX transparency</td>
                      <td className="py-2 pr-4">Limited</td>
                      <td className="py-2 pr-4">Limited</td>
                      <td className="py-2 pr-4">Contract-level visibility</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Regulatory model</td>
                      <td className="py-2 pr-4">Merchant of record</td>
                      <td className="py-2 pr-4">Aggregator</td>
                      <td className="py-2 pr-4">Infrastructure provider</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Settlement currency</td>
                      <td className="py-2 pr-4">Local only</td>
                      <td className="py-2 pr-4">Local or USD</td>
                      <td className="py-2 pr-4">USD or stablecoins</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Programmable liquidity</td>
                      <td className="py-2 pr-4">No</td>
                      <td className="py-2 pr-4">No</td>
                      <td className="py-2 pr-4">Yes</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Cross-market consistency</td>
                      <td className="py-2 pr-4">Variable</td>
                      <td className="py-2 pr-4">Variable</td>
                      <td className="py-2 pr-4">Unified compliance + API</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="krx-scale">9. The infrastructure approach: KRX Scale</h2>
              <p>
                KRX Scale connects local payment systems to global liquidity with compliance by design. Through a single API, companies accept Pix/SPEI/PSE, receive USD or stablecoin settlement, manage FX exposure with transparency, and meet AML/KYC/FX requirements automatically.
              </p>

              <h2 id="conclusion">Conclusion</h2>
              <p>
                Stripe revolutionized online payments; dLocal opened EM access. But neither offers the full stack for compliant, programmable local payment infrastructure. KRX Scale fills that gap by combining local connectivity, FX compliance, and global settlement in one platform.
              </p>

              <h2 id="faq">FAQ</h2>
              <h3>1. Why are Stripe and dLocal not considered full infrastructure?</h3>
              <p>They provide market access but rely on intermediaries for local rails and FX, limiting control and transparency.</p>
              <h3>2. Does KRX Scale replace them?</h3>
              <p>KRX Scale complements them as the infrastructure foundation beneath any PSP or platform.</p>
              <h3>3. Can merchants still use Stripe while leveraging KRX Scale for settlement?</h3>
              <p>Yes. KRX Scale can integrate alongside other processors to manage compliant FX settlement.</p>
              <h3>4. How does KRX Scale handle FX compliance?</h3>
              <p>It generates registered FX contracts per transaction and automates regulator reporting.</p>
              <h3>5. What settlement currencies are supported?</h3>
              <p>USD and regulated stablecoins, with multi-market reconciliation via one API.</p>

              {/* CTA (minimal) */}
              <div className="mt-12 border border-zinc-300/60 rounded-xl p-5 sm:p-6 not-prose bg-transparent">
                <p className="m-0 text-zinc-800 text-lg sm:text-xl">
                  Build on true local payment infrastructure.
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
