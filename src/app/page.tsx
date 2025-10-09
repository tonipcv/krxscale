/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from "lucide-react"
import Link from 'next/link'
import ContactForm from './components/ContactForm'
import { useLanguage } from './components/LanguageProvider'
// no useSearchParams to avoid Suspense requirement during prerender

export default function Home() {
  const [showForm, setShowForm] = useState(false)
  const { t } = useLanguage();
  // reading querystring via window in client only

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      if (params.get('contact') === 'open') {
        setShowForm(true)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#f5efe7] text-zinc-800 overflow-hidden">
      {/* Navbar */}
      <nav className="fixed w-full top-0 backdrop-blur-md bg-[#f5efe7]/80 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-5">
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
            <div className="flex items-center gap-4 sm:gap-6">
              <Link
                href="/blog"
                className="text-sm tracking-[-0.04em] font-euclidCircularB text-zinc-500 hover:text-zinc-800 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/careers"
                className="text-sm tracking-[-0.04em] font-euclidCircularB text-zinc-500 hover:text-zinc-800 transition-colors"
              >
                <span className="hidden sm:inline">Careers</span>
                <span className="sm:hidden text-xs">Jobs</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-5 relative">
        <main className="pt-24 min-h-screen flex flex-col">
          {/* Hero Section */}
          <div className="flex-1 flex items-center justify-center pt-12 sm:pt-16">
            <div className="text-center space-y-6 sm:space-y-8 relative">
              <div className="absolute inset-0 bg-zinc-100 blur-3xl -z-10" />
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-satoshi tracking-[-0.03em] leading-[1.1] sm:leading-tight">
                  <span className="bg-gradient-to-r from-zinc-800/95 to-zinc-600/80 text-transparent bg-clip-text">
                    Local payments, global precision
                  </span>
                </h1>
                <p className="mt-6 sm:mt-8 text-zinc-600 text-sm sm:text-base md:text-lg font-euclidCircularB tracking-[-0.04em] max-w-3xl mx-auto px-2">
                  KRX Labs enables global companies to accept Pix and local payment methods across emerging markets — without opening local entities or managing complex operations. Boost revenue, reduce overhead, and connect to global liquidity through one compliant and scalable infrastructure.
                </p>
              </div>

              {/* Apply Now Button */}
              <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-euclidCircularB tracking-[-0.04em] overflow-hidden bg-zinc-800 hover:bg-zinc-900 border border-zinc-900 transition-all duration-300 rounded-full"
                >
                  <span className="relative z-10 text-white/90">{t('home.applyNow')}</span>
                  <ArrowRight size={14} strokeWidth={1.5} className="relative z-10 text-white/70 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <Link
                  href="/scale"
                  className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-euclidCircularB tracking-[-0.04em] overflow-hidden border border-zinc-300 hover:bg-zinc-100 transition-all duration-300 rounded-full"
                >
                  <span className="relative z-10 text-zinc-800">Explore KRX Scale</span>
                  <ArrowRight size={14} strokeWidth={1.5} className="relative z-10 text-zinc-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* How it works (inline, light theme) */}
          <section className="py-16 sm:py-20">
            <div className="max-w-5xl mx-auto px-5">
              <div className="text-center space-y-3 mb-10">
                <h2 className="text-2xl sm:text-3xl font-satoshi tracking-[-0.03em] text-zinc-800">How it works</h2>
                <p className="text-sm sm:text-base text-zinc-600 font-euclidCircularB tracking-[-0.04em] max-w-2xl mx-auto">
                  Expanding into new markets is complex. KRX Scale turns local acceptance into global liquidity through one flow.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <article className="rounded-xl bg-white border border-zinc-200 p-5 sm:p-6">
                  <h3 className="text-lg font-satoshi tracking-[-0.03em] text-zinc-800">Integrate</h3>
                  <p className="text-sm text-zinc-600 font-euclidCircularB tracking-[-0.04em] mt-1.5">
                    Connect once to KRX Scale with modern APIs and dashboards.
                  </p>
                </article>
                <article className="rounded-xl bg-white border border-zinc-200 p-5 sm:p-6">
                  <h3 className="text-lg font-satoshi tracking-[-0.03em] text-zinc-800">Collect</h3>
                  <p className="text-sm text-zinc-600 font-euclidCircularB tracking-[-0.04em] mt-1.5">
                    Accept Pix and local methods with instant confirmation.
                  </p>
                </article>
                <article className="rounded-xl bg-white border border-zinc-200 p-5 sm:p-6">
                  <h3 className="text-lg font-satoshi tracking-[-0.03em] text-zinc-800">Settle</h3>
                  <p className="text-sm text-zinc-600 font-euclidCircularB tracking-[-0.04em] mt-1.5">
                    Convert local currencies and settle in USD with compliance.
                  </p>
                </article>
                <article className="rounded-xl bg-white border border-zinc-200 p-5 sm:p-6">
                  <h3 className="text-lg font-satoshi tracking-[-0.03em] text-zinc-800">Scale</h3>
                  <p className="text-sm text-zinc-600 font-euclidCircularB tracking-[-0.04em] mt-1.5">
                    Expand to new markets and optimize payouts programmatically.
                  </p>
                </article>
              </div>

              <div className="flex justify-center mt-8">
                <Link
                  href="/scale"
                  className="inline-flex items-center gap-2 text-sm text-zinc-800 hover:text-zinc-600 transition-colors px-4 py-2 rounded-full border border-zinc-300 hover:bg-zinc-100"
                >
                  <span className="font-euclidCircularB tracking-[-0.04em]">Explore KRX Scale</span>
                  <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </section>

          {/* Blog Section */}
          <div className="py-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-satoshi tracking-[-0.03em] leading-tight text-zinc-800 mb-2">
                Latest Articles
              </h2>
              <p className="text-sm text-zinc-600 font-euclidCircularB tracking-[-0.04em]">
                Expert insights on cybersecurity and software infrastructure
              </p>
            </div>

            {/* Minimal single article card */}
            <div className="flex justify-center">
              <Link href="/blog/krx-labs-local-payments-global-settlement" className="block group max-w-xl w-full">
                <article className="bg-zinc-900 p-4 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors">
                  <div className="h-44 sm:h-56 mb-3 bg-emerald-600 bg-[url('https://flagcdn.com/w640/br.png')] bg-cover bg-center rounded-lg" />
                  <h3 className="text-base sm:text-lg font-satoshi tracking-[-0.03em] leading-tight text-zinc-200 group-hover:text-white transition-colors">
                    KRX Labs: Bridging Global Ambition with Local Payment Realities
                  </h3>
                </article>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-zinc-800 hover:text-zinc-600 transition-colors px-4 py-2 rounded-full border border-zinc-300 hover:bg-zinc-100"
              >
                <span className="font-euclidCircularB tracking-[-0.04em]">View all articles</span>
                <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Made by KRX */}
          <div className="pb-6 text-center">
            <p className="text-xs font-euclidCircularB tracking-[-0.04em] text-zinc-400">
              {t('home.madeBy')} <span className="text-zinc-600">krx</span>
            </p>
          </div>
        </main>
      </div>

      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </div>
  )
}
