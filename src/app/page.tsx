/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from 'react'
import { ArrowRight, Globe } from "lucide-react"
import Link from 'next/link'
import ContactForm from './components/ContactForm'
import { useLanguage } from './components/LanguageProvider'

export default function Home() {
  const [showForm, setShowForm] = useState(false)
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed w-full top-0 border-b border-white/5 backdrop-blur-md z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 group">
              <svg
                width="40"
                height="40"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:scale-110 transition-transform duration-300"
              >
                <g stroke="white" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="128" y1="128" x2="256" y2="256" />
                  <line x1="256" y1="256" x2="384" y2="128" />
                  <line x1="256" y1="256" x2="128" y2="384" />
                  <line x1="256" y1="256" x2="384" y2="384" />
                  <line x1="256" y1="128" x2="256" y2="384" />
                </g>
              </svg>
              <span className="text-xl tracking-[-0.03em] font-satoshi">KRX</span>
            </div>

            {/* Right Side Navigation */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-sm tracking-[-0.04em] font-euclidCircularB text-zinc-400 hover:text-white transition-colors"
              >
                <Globe size={16} />
                <span className="hidden sm:inline">{language === 'pt' ? 'PT' : 'EN'}</span>
              </button>
              <Link
                href="/blog"
                className="text-sm tracking-[-0.04em] font-euclidCircularB text-zinc-400 hover:text-white transition-colors"
              >
                <span className="hidden sm:inline">{t('nav.blog')}</span>
                <span className="sm:hidden text-xs">{t('nav.blog')}</span>
              </Link>
              <Link
                href="/careers"
                className="text-sm tracking-[-0.04em] font-euclidCircularB text-zinc-400 hover:text-white transition-colors"
              >
                <span className="hidden sm:inline">{t('nav.careers')}</span>
                <span className="sm:hidden text-xs">{t('nav.jobs')}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 relative">
        <main className="pt-24 min-h-screen flex flex-col">
          {/* Hero Section */}
          <div className="flex-1 flex items-center justify-center pt-16">
            <div className="text-center space-y-8 relative">
              <div className="absolute inset-0 bg-white/[0.02] blur-3xl -z-10" />
              <h1 className="text-7xl sm:text-8xl font-satoshi tracking-[-0.03em] leading-[1.1] sm:leading-tight">
                <span className="bg-gradient-to-r from-white/95 to-white/60 text-transparent bg-clip-text">
                  {t('home.building')}
                </span>
                <br />
                <span className="bg-gradient-to-r from-white/95 to-white/60 text-transparent bg-clip-text">
                  {t('home.theFuture')}
                </span>
              </h1>

              {/* Apply Now Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 text-sm font-euclidCircularB tracking-[-0.04em] overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
                >
                  <span className="relative z-10 text-white/90">{t('home.applyNow')}</span>
                  <ArrowRight size={16} strokeWidth={1.5} className="relative z-10 text-white/70 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <Link
                  href="/blog"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 text-sm font-euclidCircularB tracking-[-0.04em] overflow-hidden border border-white/10 hover:bg-white/5 transition-all duration-300"
                >
                  <span className="relative z-10 text-white/90">{t('home.exploreBlog')}</span>
                  <ArrowRight size={16} strokeWidth={1.5} className="relative z-10 text-white/70 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Featured Blog Section */}
          <div className="mb-20 mt-20">
            <div className="py-16 relative">
              <div className="absolute inset-0 bg-white/[0.01] -z-10"></div>
              
              <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Left Side - Text */}
                <div className="lg:w-1/2 space-y-6">
                  <h2 className="text-3xl sm:text-4xl font-satoshi tracking-[-0.03em] leading-tight">
                    <span className="text-white/90">{t('home.ourBlog')}</span>
                    <span className="bg-gradient-to-r from-white/90 to-white/40 bg-clip-text text-transparent">{t('home.blog')}</span>
                  </h2>
                  
                  <p className="text-zinc-400 font-euclidCircularB tracking-[-0.04em] max-w-xl">
                    {t('home.blogDescription')}
                  </p>
                  
                  <div className="pt-4">
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-2 text-white/80 hover:text-white font-euclidCircularB tracking-[-0.04em] group transition-colors"
                    >
                      <span>{t('home.exploreArticles')}</span>
                      <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
                
                {/* Right Side - Blog Previews */}
                <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Blog Post Preview 1 */}
                  <Link href="/66" className="group">
                    <div className="bg-white/5 border border-white/10 p-5 h-full hover:bg-white/10 transition-all duration-300">
                      <div className="h-32 mb-4 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485')] bg-cover bg-center rounded-sm"></div>
                      <h3 className="text-lg font-satoshi tracking-[-0.03em] leading-tight text-white/90 group-hover:text-white transition-colors mb-2">
                        {t('home.tools')}
                      </h3>
                      <p className="text-sm text-zinc-400 line-clamp-2">
                        {t('home.toolsDescription')}
                      </p>
                    </div>
                  </Link>
                  
                  {/* Blog Post Preview 2 */}
                  <Link href="/blog" className="group">
                    <div className="bg-white/5 border border-white/10 p-5 h-full hover:bg-white/10 transition-all duration-300">
                      <div className="h-32 mb-4 bg-[url('https://images.unsplash.com/photo-1677442135143-302f17c0c3c1')] bg-cover bg-center rounded-sm"></div>
                      <h3 className="text-lg font-satoshi tracking-[-0.03em] leading-tight text-white/90 group-hover:text-white transition-colors mb-2">
                        {t('home.apps')}
                      </h3>
                      <p className="text-sm text-zinc-400 line-clamp-2">
                        {t('home.appsDescription')}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Made by KRX */}
          <div className="pb-8 text-center">
            <p className="text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-600">
              {t('home.madeBy')} <span className="text-zinc-500">krx</span>
            </p>
          </div>
        </main>
      </div>

      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </div>
  )
}
