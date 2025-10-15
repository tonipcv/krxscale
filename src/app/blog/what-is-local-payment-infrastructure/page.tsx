import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// SEO metadata is defined in metadata.ts for this route

export default function WhatIsLPIPage() {
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
                <span className="text-sm text-zinc-500 font-euclidCircularB tracking-[-0.04em]">12 MIN READ</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-satoshi tracking-[-0.03em] leading-tight text-zinc-900 mb-8">
                What Is Local Payment Infrastructure (LPI)
              </h1>
              <p className="text-xl text-zinc-600 font-euclidCircularB tracking-[-0.04em] leading-relaxed">
                A deep dive into Local Payment Infrastructure (LPI), how it works, its regulatory architecture, and why it is becoming the backbone of global payments in emerging markets.
              </p>
            </header>

            {/* Removed hero cover for minimal text-only layout */}

            {/* Lead paragraph */}
            <p className="text-zinc-700 leading-[1.95] text-[20px] mb-12">
              Real-time local rails are now the default in emerging markets. This article explains the definition, architecture, regulation, and value of LPI — and how KRX Scale turns local payments into global USD/EUR liquidity with compliance by design.
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
                In the last five years, the global payments landscape has undergone a structural transformation. While card networks and PSPs dominate in developed economies, most of the world’s consumers now transact through local, real-time payment systems.
              </p>
              <p>
                Pix in Brazil, SPEI in Mexico, PSE in Colombia, and M-Pesa in Africa are not just payment methods. They are national infrastructures that move trillions of dollars each year and define how money flows within their economies.
              </p>
              <p>
                For global companies, this evolution created a new challenge. How can a company sell in these markets and receive local payments without opening entities, setting up bank accounts, or dealing with complex FX regulations in every country? The answer is the emergence of Local Payment Infrastructure (LPI), a programmable and compliance-ready layer that connects local payment systems to global liquidity.
              </p>

              <p className="text-sm text-zinc-500 font-euclidCircularB tracking-[-0.02em] m-0">Contents</p>
              <ul className="mt-2 mb-10 list-disc pl-5 text-[16px] text-zinc-700 space-y-1">
                <li><a href="#definition" className="hover:underline">1. Definition of Local Payment Infrastructure</a></li>
                <li><a href="#why-exists" className="hover:underline">2. Why Local Payment Infrastructure Exists</a></li>
                <li><a href="#architecture" className="hover:underline">3. The Core Architecture of an LPI</a></li>
                <li><a href="#regulatory" className="hover:underline">4. Regulatory Foundation</a></li>
                <li><a href="#comparison" className="hover:underline">5. Comparison: LPI versus PSP and Gateways</a></li>
                <li><a href="#value" className="hover:underline">6. The Economic Value of LPI</a></li>
                <li><a href="#krx-scale" className="hover:underline">7. LPI in Action: The Case of KRX Scale</a></li>
                <li><a href="#future" className="hover:underline">8. The Broader Context: The Future of Financial Infrastructure</a></li>
                <li><a href="#conclusion" className="hover:underline">Conclusion</a></li>
                <li><a href="#faq" className="hover:underline">FAQ</a></li>
              </ul>

              <h2 id="definition">1. Definition of Local Payment Infrastructure</h2>
              <p>
                Local Payment Infrastructure is a regulated, API-based framework that connects domestic payment networks to global settlement systems. It allows companies to accept local payments in local currencies and receive settlements internationally in convertible currencies such as USD, EUR, or stablecoins.
              </p>
              <p>
                An LPI operates as the connective tissue between three domains:
              </p>
              <ul>
                <li>Local payment rails like Pix, SPEI, or PSE</li>
                <li>Licensed financial institutions regulated by central banks</li>
                <li>Global liquidity and settlement networks</li>
              </ul>
              <p>
                In practice, LPI enables a company based in London, New York, or Singapore to receive a Pix payment in Brazil and settle that value in USD within twenty-four hours, without any local incorporation.
              </p>

              <h2 id="why-exists">2. Why Local Payment Infrastructure Exists</h2>
              <p>
                Emerging markets represent more than fifty percent of global digital commerce growth, but each operates under its own regulatory framework, banking system, and currency regime.
              </p>
              <p>
                Traditional PSPs cannot scale effectively across these markets because they rely on card-based models that fail in regions where:
              </p>
              <ul>
                <li>Card penetration remains under forty percent</li>
                <li>Instant bank transfer systems dominate consumer payments</li>
                <li>FX restrictions limit direct cross-border flows</li>
                <li>Compliance rules vary widely between jurisdictions</li>
              </ul>
              <p>
                Local Payment Infrastructure solves these structural gaps. It integrates local rails, manages compliance and FX requirements, and transforms each market’s complexity into a unified, programmable interface.
              </p>

              <h2 id="architecture">3. The Core Architecture of an LPI</h2>
              <p>A robust LPI contains three core layers that work together seamlessly.</p>
              <h3>Local Connectivity Layer</h3>
              <p>
                This layer provides access to national payment systems. It handles the collection of funds, generation of QR codes, and compliance with domestic clearing and settlement rules. In Brazil, this means connecting to Pix through a licensed participant of the Central Bank’s Instant Payment System (SPI). In Mexico, it means connecting to Banxico’s SPEI network.
              </p>
              <h3>Compliance and FX Layer</h3>
              <p>
                Every transaction must comply with local AML and KYC requirements and must be paired with a valid foreign exchange contract. This layer automates regulatory reporting, merchant onboarding, and currency conversion, ensuring each transfer is auditable and legally valid.
              </p>
              <h3>Global Settlement Layer</h3>
              <p>
                Once compliance and conversion are complete, the system aggregates transactions and settles them internationally in USD, EUR, or stablecoins. This layer includes reconciliation, API integrations for treasury systems, and transparent fee and FX management.
              </p>
              <p>
                Together, these layers allow global companies to process local payments with the same simplicity as charging a credit card online.
              </p>

              <h2 id="regulatory">4. Regulatory Foundation</h2>
              <p>Each LPI must operate under the financial regulations of the markets it connects to. Examples include:</p>
              <ul>
                <li>Brazil: BACEN Circular 3,978 and Resolution 4,593 define AML and FX reporting obligations.</li>
                <li>Mexico: Banxico’s SPEI rules and CNBV’s fintech framework set requirements for payment institutions.</li>
                <li>Colombia: ACH Colombia and the Financial Superintendence oversee PSE operations.</li>
                <li>Kenya and Sub-Saharan Africa: Central Banks regulate mobile money systems like M-Pesa.</li>
              </ul>
              <p>
                An effective LPI abstracts these complexities, ensuring that all transactions comply with local regulation while being standardized globally. The regulatory rigor is not optional; it is the foundation that distinguishes true infrastructure from surface-level payment gateways.
              </p>

              <h2 id="comparison">5. Comparison: LPI versus PSP and Gateways</h2>
              <div className="overflow-x-auto not-prose">
                <table className="w-full text-left text-zinc-700 text-[16px]">
                  <thead className="text-zinc-500">
                    <tr>
                      <th className="py-2 pr-4">Aspect</th>
                      <th className="py-2 pr-4">PSP or Gateway</th>
                      <th className="py-2 pr-4">Local Payment Infrastructure</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 pr-4">Market Scope</td>
                      <td className="py-2 pr-4">Domestic or regional</td>
                      <td className="py-2 pr-4">Multi-market and cross-border</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Licensing</td>
                      <td className="py-2 pr-4">Local per country</td>
                      <td className="py-2 pr-4">Aggregates licensed entities under unified governance</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Settlement</td>
                      <td className="py-2 pr-4">Local only</td>
                      <td className="py-2 pr-4">Global in USD, EUR, or stablecoins</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Compliance</td>
                      <td className="py-2 pr-4">Merchant-level</td>
                      <td className="py-2 pr-4">Infrastructure-level, automated AML and FX</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Integration</td>
                      <td className="py-2 pr-4">Separate for each country</td>
                      <td className="py-2 pr-4">Single API for multiple markets</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Use Case</td>
                      <td className="py-2 pr-4">Card and retail payments</td>
                      <td className="py-2 pr-4">Platform-scale and B2B payments</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                LPI does for payments what cloud computing did for data infrastructure. It turns a fragmented and heavily regulated system into a standardized, globally accessible layer of connectivity.
              </p>

              <h2 id="value">6. The Economic Value of LPI</h2>
              <ul>
                <li><strong>Speed:</strong> Market entry in days instead of months</li>
                <li><strong>Cost reduction:</strong> No need for local entities or banking operations</li>
                <li><strong>Liquidity:</strong> Centralized settlement in USD or stablecoins</li>
                <li><strong>Conversion rates:</strong> Access to local methods increases checkout success by up to thirty percent</li>
                <li><strong>Compliance:</strong> Automated FX and AML reporting removes legal uncertainty</li>
                <li><strong>Scalability:</strong> Operate across Brazil, Mexico, Colombia, Africa, and Asia through a single API</li>
              </ul>
              <p>
                For global SaaS platforms, fintechs, and marketplaces, this combination of compliance and liquidity unlocks growth in previously inaccessible regions.
              </p>

              <h2 id="krx-scale">7. LPI in Action: The Case of KRX Scale</h2>
              <p>
                KRX Scale is an applied implementation of Local Payment Infrastructure. It was designed for global companies that need to operate in emerging markets without local incorporation. Through KRX Scale, a company can:
              </p>
              <ul>
                <li>Accept Pix, SPEI, and PSE payments from customers in local currencies</li>
                <li>Process these payments through licensed institutions in each market</li>
                <li>Automate FX conversion and compliance in real time</li>
                <li>Receive settlement in USD or stablecoins directly to global accounts</li>
                <li>Expand across LATAM and Africa without legal or banking friction</li>
              </ul>
              <p>
                From a technical perspective, KRX Scale integrates the connectivity, compliance, and FX layers into a unified programmable API. From a strategic perspective, it becomes the operating system for cross-border payments in emerging markets.
              </p>

              <h2 id="future">8. The Broader Context: The Future of Financial Infrastructure</h2>
              <p>
                The emergence of LPI aligns with global trends toward real-time systems, open finance, and programmable money. Central Banks worldwide are converging toward instant payments, while stablecoins and tokenized deposits introduce new settlement mechanisms.
              </p>
              <p>
                In this environment, Local Payment Infrastructure serves as the bridge between state-level financial systems and borderless liquidity networks. It enables legal, auditable, and near-instant value transfer across jurisdictions, positioning itself as the backbone of the next-generation global economy.
              </p>

              <h2 id="conclusion">Conclusion</h2>
              <p>
                Local Payment Infrastructure is not a fintech buzzword. It is a structural transformation in how global payments are executed, regulated, and settled. By merging the precision of local compliance with the scale of global liquidity, LPI redefines the concept of market entry for digital businesses. It makes emerging markets truly accessible for global companies.
              </p>
              <p>
                KRX Scale embodies this evolution. It is the practical realization of LPI, connecting local payment systems like Pix, SPEI, PSE, and M-Pesa to international settlement networks, enabling global companies to operate anywhere with speed, compliance, and control.
              </p>

              <h2 id="faq">FAQ</h2>
              <h3>What is Local Payment Infrastructure?</h3>
              <p>A regulatory and technological framework that connects domestic payment systems to global settlement networks, allowing companies to operate without local entities.</p>
              <h3>How is LPI different from a payment gateway?</h3>
              <p>Gateways process transactions; LPI manages connectivity, compliance, FX, and settlement at the infrastructure level.</p>
              <h3>Is LPI compliant with central bank regulations?</h3>
              <p>Yes. Each transaction is processed through licensed institutions and paired with a valid FX contract or remittance agreement.</p>
              <h3>Which markets are currently covered by LPI solutions like KRX Scale?</h3>
              <p>Brazil through Pix, Mexico through SPEI, Colombia through PSE, and several African markets through M-Pesa.</p>
              <h3>Who benefits most from LPI?</h3>
              <p>SaaS platforms, fintechs, and global marketplaces that need to collect local payments and settle internationally.</p>

              {/* CTA (minimal) */}
              <div className="mt-12 border border-zinc-300/60 rounded-xl p-5 sm:p-6 not-prose bg-transparent">
                <p className="m-0 text-zinc-800 text-lg sm:text-xl">
                  Build on Local Payment Infrastructure. Accept locally, settle globally.
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
