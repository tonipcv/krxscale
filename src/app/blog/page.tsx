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

      <div className="max-w-7xl mx-auto px-6 relative">
        <main className="pt-32 pb-16">
          {/* Blog Header */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-5xl sm:text-6xl font-satoshi tracking-[-0.03em] leading-tight text-zinc-800">
              Software Infrastructure & Cybersecurity
            </h1>
            <p className="text-lg text-zinc-600 font-euclidCircularB tracking-[-0.04em] max-w-xl mx-auto">
              Expert insights on building secure, scalable, and resilient software infrastructure
            </p>
          </div>

          {/* Minimal single article card */}
          <div className="mb-16">
            <div className="flex justify-center">
              <Link href="/blog/krx-labs-local-payments-global-settlement" className="block group max-w-2xl w-full">
                <article className="bg-zinc-900 p-5 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors">
                  <div className="h-56 mb-3 bg-emerald-600 bg-[url('https://flagcdn.com/w1280/br.png')] bg-cover bg-center rounded-lg" />
                  <h3 className="text-lg sm:text-xl font-satoshi tracking-[-0.03em] leading-tight text-zinc-200 group-hover:text-white transition-colors">
                    KRX Labs: Bridging Global Ambition with Local Payment Realities
                  </h3>
                </article>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 