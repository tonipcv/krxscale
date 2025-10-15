'use client';

import { ArrowRight, Clock, Tag, Search } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#f5efe7] text-zinc-800">
      {/* Navbar */}
      <nav className="fixed w-full top-0 border-b border-zinc-200 backdrop-blur-md z-40 transition-all duration-300 bg-[#f5efe7]/80">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
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

            {/* Right Side Navigation */}
            <div className="flex items-center gap-6">
              <Link
                href="/blog"
                className="text-sm tracking-[-0.04em] font-euclidCircularB text-zinc-800 hover:text-zinc-600 transition-colors"
              >
                Blog
              </Link>
              <span className="hidden sm:inline text-xs tracking-[-0.03em] text-zinc-400">Articles</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 relative">
        <main className="pt-28 pb-20">
          {/* Minimal header removed for a more professional, content-first layout */}

          {/* Articles Grid */}
          <section className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-7">
              {/* Post: Global Settlement */}
              <Link href="/blog/krx-labs-local-payments-global-settlement" className="group block">
                <article className="h-full bg-zinc-900 p-6 md:p-7 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors">
                  <div className="flex items-center gap-0 mb-1">
                    <span className="text-[11px] text-zinc-400 font-euclidCircularB">9 min</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-satoshi tracking-[-0.02em] leading-snug text-zinc-200 group-hover:text-white transition-colors">
                    KRX Labs: Bridging Global Ambition with Local Payment Realities
                  </h3>
                </article>
              </Link>

              {/* Post: Accept Pix as a Foreign Company */}
              <Link href="/blog/how-to-accept-pix-as-a-foreign-company" className="group block">
                <article className="h-full bg-zinc-900 p-6 md:p-7 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors">
                  <div className="flex items-center gap-0 mb-1">
                    <span className="text-[11px] text-zinc-400 font-euclidCircularB">10 min</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-satoshi tracking-[-0.02em] leading-snug text-zinc-200 group-hover:text-white transition-colors">
                    How to Accept Pix as a Foreign Company (USD Settlement, No Local Entity)
                  </h3>
                </article>
              </Link>

              {/* Post: Sell in Brazil Without a Local Entity */}
              <Link href="/blog/how-to-sell-in-brazil-without-a-local-entity" className="group block">
                <article className="h-full bg-zinc-900 p-6 md:p-7 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors">
                  <div className="flex items-center gap-0 mb-1">
                    <span className="text-[11px] text-zinc-400 font-euclidCircularB">9 min</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-satoshi tracking-[-0.02em] leading-snug text-zinc-200 group-hover:text-white transition-colors">
                    How to Sell in Brazil Without a Local Entity (CNPJ)
                  </h3>
                </article>
              </Link>

              {/* Post: Pix, SPEI, PSE and M-Pesa */}
              <Link href="/blog/pix-spei-pse-mpesa-how-they-work" className="group block">
                <article className="h-full bg-zinc-900 p-6 md:p-7 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors">
                  <div className="flex items-center gap-0 mb-1">
                    <span className="text-[11px] text-zinc-400 font-euclidCircularB">11 min</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-satoshi tracking-[-0.02em] leading-snug text-zinc-200 group-hover:text-white transition-colors">
                    Pix, SPEI, PSE and M-Pesa: What They Are and How They Work
                  </h3>
                </article>
              </Link>

              {/* Post: What Is Local Payment Infrastructure (LPI) */}
              <Link href="/blog/what-is-local-payment-infrastructure" className="group block">
                <article className="h-full bg-zinc-900 p-6 md:p-7 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors">
                  <div className="flex items-center gap-0 mb-1">
                    <span className="text-[11px] text-zinc-400 font-euclidCircularB">12 min</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-satoshi tracking-[-0.02em] leading-snug text-zinc-200 group-hover:text-white transition-colors">
                    What Is Local Payment Infrastructure (LPI)
                  </h3>
                </article>
              </Link>

              {/* Post: How Global Companies Expand into LATAM Payments */}
              <Link href="/blog/how-global-companies-expand-into-latam-payments" className="group block">
                <article className="h-full bg-zinc-900 p-6 md:p-7 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors">
                  <div className="flex items-center gap-0 mb-1">
                    <span className="text-[11px] text-zinc-400 font-euclidCircularB">12 min</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-satoshi tracking-[-0.02em] leading-snug text-zinc-200 group-hover:text-white transition-colors">
                    How Global Companies Expand into LATAM Payments
                  </h3>
                </article>
              </Link>

              {/* Post: Cross Border Settlement and FX Compliance in Emerging Markets */}
              <Link href="/blog/cross-border-settlement-fx-compliance-emerging-markets" className="group block">
                <article className="h-full bg-zinc-900 p-6 md:p-7 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors">
                  <div className="flex items-center gap-0 mb-1">
                    <span className="text-[11px] text-zinc-400 font-euclidCircularB">12 min</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-satoshi tracking-[-0.02em] leading-snug text-zinc-200 group-hover:text-white transition-colors">
                    Cross Border Settlement and FX Compliance in Emerging Markets
                  </h3>
                </article>
              </Link>

              {/* Post: Why Stripe and dLocal Do Not Fully Solve Local Payments */}
              <Link href="/blog/why-stripe-dlocal-dont-fully-solve-local-payments" className="group block">
                <article className="h-full bg-zinc-900 p-6 md:p-7 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors">
                  <div className="flex items-center gap-0 mb-1">
                    <span className="text-[11px] text-zinc-400 font-euclidCircularB">10 min</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-satoshi tracking-[-0.02em] leading-snug text-zinc-200 group-hover:text-white transition-colors">
                    Why Stripe and dLocal Do Not Fully Solve Local Payments
                  </h3>
                </article>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
} 