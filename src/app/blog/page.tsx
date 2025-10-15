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
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 relative">
        <main className="pt-32 pb-20">
          {/* Blog Header */}
          <div className="text-center space-y-4 mb-14">
            <h1 className="text-4xl sm:text-5xl font-satoshi tracking-[-0.03em] leading-tight text-zinc-900">
              KRX Labs Blog
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 font-euclidCircularB tracking-[-0.03em] max-w-2xl mx-auto">
              Local payments, global settlement, compliance by design.
            </p>
          </div>

          {/* Articles Grid */}
          <section className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Post: Global Settlement */}
              <Link href="/blog/krx-labs-local-payments-global-settlement" className="group block">
                <article className="h-full bg-zinc-900 p-5 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors">
                  <div className="aspect-[16/9] w-full mb-3 bg-emerald-600 bg-[url('https://flagcdn.com/w1280/br.png')] bg-cover bg-center rounded-lg" />
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-euclidCircularB tracking-[-0.03em]">FINTECH</span>
                    <span className="text-[11px] text-zinc-400 font-euclidCircularB">9 min</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-satoshi tracking-[-0.02em] leading-snug text-zinc-200 group-hover:text-white transition-colors">
                    KRX Labs: Bridging Global Ambition with Local Payment Realities
                  </h3>
                </article>
              </Link>

              {/* Post: Accept Pix as a Foreign Company */}
              <Link href="/blog/how-to-accept-pix-as-a-foreign-company" className="group block">
                <article className="h-full bg-zinc-900 p-5 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors">
                  <div className="aspect-[16/9] w-full mb-3 bg-emerald-600 rounded-lg bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556741533-f6acd647a785?auto=format&fit=crop&w=1200&q=70')"}} />
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-euclidCircularB tracking-[-0.03em]">FINTECH</span>
                    <span className="text-[11px] text-zinc-400 font-euclidCircularB">10 min</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-satoshi tracking-[-0.02em] leading-snug text-zinc-200 group-hover:text-white transition-colors">
                    How to Accept Pix as a Foreign Company (USD Settlement, No Local Entity)
                  </h3>
                </article>
              </Link>

              {/* Post: Sell in Brazil Without a Local Entity */}
              <Link href="/blog/how-to-sell-in-brazil-without-a-local-entity" className="group block">
                <article className="h-full bg-zinc-900 p-5 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors">
                  <div className="aspect-[16/9] w-full mb-3 bg-emerald-600 rounded-lg bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=1200&q=70')"}} />
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-euclidCircularB tracking-[-0.03em]">FINTECH</span>
                    <span className="text-[11px] text-zinc-400 font-euclidCircularB">9 min</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-satoshi tracking-[-0.02em] leading-snug text-zinc-200 group-hover:text-white transition-colors">
                    How to Sell in Brazil Without a Local Entity (CNPJ)
                  </h3>
                </article>
              </Link>

              {/* Post: Pix, SPEI, PSE and M-Pesa */}
              <Link href="/blog/pix-spei-pse-mpesa-how-they-work" className="group block">
                <article className="h-full bg-zinc-900 p-5 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors">
                  <div className="aspect-[16/9] w-full mb-3 bg-emerald-600 rounded-lg bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=70')"}} />
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-euclidCircularB tracking-[-0.03em]">FINTECH</span>
                    <span className="text-[11px] text-zinc-400 font-euclidCircularB">11 min</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-satoshi tracking-[-0.02em] leading-snug text-zinc-200 group-hover:text-white transition-colors">
                    Pix, SPEI, PSE and M-Pesa: What They Are and How They Work
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