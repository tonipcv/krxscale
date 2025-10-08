/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Globe } from "lucide-react"
import Link from 'next/link'
import ContactForm from './components/ContactForm'
import { useLanguage } from './components/LanguageProvider'
// no useSearchParams to avoid Suspense requirement during prerender

export default function Home() {
  const [showForm, setShowForm] = useState(false)
  const { t, language, setLanguage } = useLanguage();
  // reading querystring via window in client only

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      if (params.get('contact') === 'open') {
        setShowForm(true)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-zinc-800 overflow-hidden">
      {/* Navbar */}
      <nav className="fixed w-full top-0 border-b border-zinc-200 backdrop-blur-md z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Logo - Apenas o símbolo, sem o texto "KRX" */}
            <div className="flex items-center group">
              <svg
                width="36"
                height="36"
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
            </div>

            {/* Right Side Navigation */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-xs tracking-[-0.04em] font-euclidCircularB text-zinc-500 hover:text-zinc-800 transition-colors"
              >
                <Globe size={14} />
                <span className="hidden sm:inline">{language === 'pt' ? 'PT' : 'EN'}</span>
              </button>
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
                <span className="hidden sm:inline">CAREERS</span>
                <span className="sm:hidden text-xs">JOBS</span>
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
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-satoshi tracking-[-0.03em] leading-[1.1] sm:leading-tight">
                  <span className="bg-gradient-to-r from-zinc-800/95 to-zinc-600/80 text-transparent bg-clip-text">
                    {t('home.building')}
                  </span>
                </h1>
                <p className="mt-6 sm:mt-8 text-zinc-600 text-sm sm:text-base md:text-lg font-euclidCircularB tracking-[-0.04em] max-w-3xl mx-auto px-2">
                  {t('home.description')}
                </p>
              </div>

              {/* Apply Now Button */}
              <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-euclidCircularB tracking-[-0.04em] overflow-hidden bg-zinc-800 hover:bg-zinc-900 border border-zinc-900 transition-all duration-300"
                >
                  <span className="relative z-10 text-white/90">{t('home.applyNow')}</span>
                  <ArrowRight size={14} strokeWidth={1.5} className="relative z-10 text-white/70 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <Link
                  href="/66"
                  className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-euclidCircularB tracking-[-0.04em] overflow-hidden border border-zinc-300 hover:bg-zinc-100 transition-all duration-300"
                >
                  <span className="relative z-10 text-zinc-800">Explore KRXProtect</span>
                  <ArrowRight size={14} strokeWidth={1.5} className="relative z-10 text-zinc-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

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

            <div className="grid md:grid-cols-4 gap-4">
              {/* KRX Labs Local Payments Article */}
              <Link href="/blog/krx-labs-local-payments-global-settlement" className="block group">
                <article className="h-full space-y-2 bg-zinc-50 p-4 border border-zinc-200 transition-all duration-300 hover:bg-zinc-100 relative overflow-hidden rounded-sm">
                  <div className="h-32 mb-2 bg-emerald-600 bg-[url('https://flagcdn.com/w640/br.png')] bg-cover bg-center rounded-sm group-hover:scale-105 transition-transform duration-500" />
                  
                  <div className="flex items-center gap-2 text-xs">
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 font-euclidCircularB tracking-[-0.04em] text-xs rounded-full">FINTECH</span>
                    <span className="font-euclidCircularB tracking-[-0.04em] text-zinc-500">9 MIN</span>
                  </div>
                  
                  <h3 className="text-sm font-satoshi tracking-[-0.03em] leading-tight">
                    <span className="text-zinc-800 relative inline-block group-hover:text-zinc-900 transition-colors">
                      KRX Labs: Bridging Global Ambition with Local Payment Realities
                    </span>
                  </h3>
                </article>
              </Link>
              {/* Google Pixel Article */}
              <Link href="/blog/google-pixel-zero-day-vulnerability" className="block group">
                <article className="h-full space-y-2 bg-zinc-50 p-4 border border-zinc-200 transition-all duration-300 hover:bg-zinc-100 relative overflow-hidden rounded-sm">
                  <div className="h-32 mb-2 bg-[url('https://images.unsplash.com/photo-1598327105666-5b89351aff97')] bg-cover bg-center rounded-sm group-hover:scale-105 transition-transform duration-500" />
                  
                  <div className="flex items-center gap-2 text-xs">
                    <span className="bg-red-100 text-red-800 px-2 py-0.5 font-euclidCircularB tracking-[-0.04em] text-xs rounded-full">SECURITY</span>
                    <span className="font-euclidCircularB tracking-[-0.04em] text-zinc-500">8 MIN</span>
                  </div>
                  
                  <h3 className="text-sm font-satoshi tracking-[-0.03em] leading-tight">
                    <span className="text-zinc-800 relative inline-block group-hover:text-zinc-900 transition-colors">
                      Google Pixel Zero-Day Vulnerability: What You Need to Know
                    </span>
                  </h3>
                </article>
              </Link>

              {/* Git Vulnerability Article */}
              <Link href="/blog/git-malicious-project-vulnerability" className="block group">
                <article className="h-full space-y-2 bg-zinc-50 p-4 border border-zinc-200 transition-all duration-300 hover:bg-zinc-100 relative overflow-hidden rounded-sm">
                  <div className="h-32 mb-2 bg-[url('https://images.unsplash.com/photo-1618401471353-b98afee0b2eb')] bg-cover bg-center rounded-sm group-hover:scale-105 transition-transform duration-500" />
                  
                  <div className="flex items-center gap-2 text-xs">
                    <span className="bg-red-100 text-red-800 px-2 py-0.5 font-euclidCircularB tracking-[-0.04em] text-xs rounded-full">SECURITY</span>
                    <span className="font-euclidCircularB tracking-[-0.04em] text-zinc-500">10 MIN</span>
                  </div>
                  
                  <h3 className="text-sm font-satoshi tracking-[-0.03em] leading-tight">
                    <span className="text-zinc-800 relative inline-block group-hover:text-zinc-900 transition-colors">
                      Git Malicious Project Vulnerability: How IDEs Executed Hackers' Code
                    </span>
                  </h3>
                </article>
              </Link>

              {/* NDR Article */}
              <Link href="/blog/ndr" className="block group">
                <article className="h-full space-y-2 bg-zinc-50 p-4 border border-zinc-200 transition-all duration-300 hover:bg-zinc-100 relative overflow-hidden rounded-sm">
                  <div className="h-32 mb-2 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31')] bg-cover bg-center rounded-sm group-hover:scale-105 transition-transform duration-500" />
                  
                  <div className="flex items-center gap-2 text-xs">
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 font-euclidCircularB tracking-[-0.04em] text-xs rounded-full">SECURITY</span>
                    <span className="font-euclidCircularB tracking-[-0.04em] text-zinc-500">10 MIN</span>
                  </div>
                  
                  <h3 className="text-sm font-satoshi tracking-[-0.03em] leading-tight">
                    <span className="text-zinc-800 relative inline-block group-hover:text-zinc-900 transition-colors">
                      Why Your Enterprise Needs Network Detection and Response (NDR)
                    </span>
                  </h3>
                </article>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-zinc-800 hover:text-zinc-600 transition-colors"
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
