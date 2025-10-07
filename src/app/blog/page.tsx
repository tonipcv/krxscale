'use client';

import { ArrowRight, Clock, Tag, Search } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-800">
      {/* Navbar */}
      <nav className="fixed w-full top-0 border-b border-zinc-200 backdrop-blur-md z-40 transition-all duration-300 bg-white/80">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <svg
                width="40"
                height="40"
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
              <span className="text-xl tracking-[-0.03em] font-satoshi">KRX</span>
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
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mt-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-zinc-500" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-zinc-200 text-zinc-800 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-300 transition-all"
              />
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-16 group">
            <Link href="/blog/krx-labs-local-payments-global-settlement" className="block">
              <article className="relative overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
                <div className="h-[450px] bg-emerald-700 bg-[url('https://flagcdn.com/w1280/br.png')] bg-cover bg-center" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="space-y-4 max-w-3xl">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="bg-white/80 text-zinc-900 px-3 py-1 font-euclidCircularB tracking-[-0.04em]">FINTECH</span>
                      <div className="flex items-center gap-1 text-white/90">
                        <Clock size={14} />
                        <span className="font-euclidCircularB tracking-[-0.04em]">9 MIN</span>
                      </div>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl font-satoshi tracking-[-0.03em] leading-tight text-white group-hover:scale-[1.01] transition-transform duration-500">
                      KRX Labs: Bridging Global Ambition with Local Payment Realities
                    </h2>
                    
                    <p className="text-white/90 font-euclidCircularB tracking-[-0.04em] max-w-2xl">
                      Accept local payments like Pix and settle in USD with full compliance. How KRX Labs connects local rails to global liquidity.
                    </p>

                    <div className="inline-flex items-center gap-2 text-white font-euclidCircularB tracking-[-0.04em] mt-4 group-hover:translate-x-1 transition-transform duration-300">
                      READ MORE
                      <ArrowRight size={16} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>

          {/* Recent Articles */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-satoshi tracking-[-0.03em] text-zinc-800">Recent Articles</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/blog/krx-labs-local-payments-global-settlement" className="block group">
                <article className="h-full space-y-4 bg-zinc-50 p-6 border border-zinc-200 transition-all duration-300 hover:bg-zinc-100 relative overflow-hidden rounded-sm">
                  <div className="h-48 mb-4 bg-emerald-600 bg-[url('https://flagcdn.com/w640/br.png')] bg-cover bg-center rounded-sm group-hover:scale-105 transition-transform duration-500" />
                  
                  <div className="flex items-center gap-2 text-sm">
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 font-euclidCircularB tracking-[-0.04em] text-xs rounded-full">FINTECH</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-400" />
                    <span className="font-euclidCircularB tracking-[-0.04em] text-zinc-500">9 MIN</span>
                  </div>
                  
                  <h3 className="text-xl font-satoshi tracking-[-0.03em] leading-tight">
                    <span className="text-zinc-800 relative inline-block group-hover:text-zinc-900 transition-colors">
                      KRX Labs: Bridging Global Ambition with Local Payment Realities
                    </span>
                  </h3>
                  
                  <p className="text-zinc-600 font-euclidCircularB tracking-[-0.04em] line-clamp-3">
                    Enable local payment acceptance like Pix and settle in USD with full compliance. How KRX Labs connects local rails to global liquidity.
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm text-zinc-600 group-hover:text-zinc-800 transition-colors">
                    <span className="font-euclidCircularB tracking-[-0.04em]">READ MORE</span>
                    <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>

              <Link href="/blog/blind-eagle-south-america-attacks" className="block group">
                <article className="h-full space-y-4 bg-zinc-50 p-6 border border-zinc-200 transition-all duration-300 hover:bg-zinc-100 relative overflow-hidden rounded-sm">
                  <div className="h-48 mb-4 bg-[url('https://images.unsplash.com/photo-1614064641938-3bbee52942c7')] bg-cover bg-center rounded-sm group-hover:scale-105 transition-transform duration-500" />
                  
                  <div className="flex items-center gap-2 text-sm">
                    <span className="bg-red-100 text-red-800 px-2 py-0.5 font-euclidCircularB tracking-[-0.04em] text-xs rounded-full">SECURITY</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-400" />
                    <span className="font-euclidCircularB tracking-[-0.04em] text-zinc-500">10 MIN</span>
                  </div>
                  
                  <h3 className="text-xl font-satoshi tracking-[-0.03em] leading-tight">
                    <span className="text-zinc-800 relative inline-block group-hover:text-zinc-900 transition-colors">
                      Blind Eagle: How a Persistent Hacker Group Targets South America's Financial Sector
                    </span>
                  </h3>
                  
                  <p className="text-zinc-600 font-euclidCircularB tracking-[-0.04em] line-clamp-3">
                    Discover how the Blind Eagle hackers attack banks in South America and stay online using bulletproof hosting services like Proton66.
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm text-zinc-600 group-hover:text-zinc-800 transition-colors">
                    <span className="font-euclidCircularB tracking-[-0.04em]">READ MORE</span>
                    <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>

              <Link href="/blog/google-pixel-zero-day-vulnerability" className="block group">
                <article className="h-full space-y-4 bg-zinc-50 p-6 border border-zinc-200 transition-all duration-300 hover:bg-zinc-100 relative overflow-hidden rounded-sm">
                  <div className="h-48 mb-4 bg-[url('https://images.unsplash.com/photo-1598327105666-5b89351aff97')] bg-cover bg-center rounded-sm group-hover:scale-105 transition-transform duration-500" />
                  
                  <div className="flex items-center gap-2 text-sm">
                    <span className="bg-red-100 text-red-800 px-2 py-0.5 font-euclidCircularB tracking-[-0.04em] text-xs rounded-full">SECURITY</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-400" />
                    <span className="font-euclidCircularB tracking-[-0.04em] text-zinc-500">8 MIN</span>
                  </div>
                  
                  <h3 className="text-xl font-satoshi tracking-[-0.03em] leading-tight">
                    <span className="text-zinc-800 relative inline-block group-hover:text-zinc-900 transition-colors">
                      Google Pixel Zero-Day Vulnerability: What You Need to Know and How to Stay Safe
                    </span>
                  </h3>
                  
                  <p className="text-zinc-600 font-euclidCircularB tracking-[-0.04em] line-clamp-3">
                    A critical zero-day vulnerability has been discovered in Google Pixel smartphones — and it's already being actively exploited. Learn what it means and how to protect yourself.
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm text-zinc-600 group-hover:text-zinc-800 transition-colors">
                    <span className="font-euclidCircularB tracking-[-0.04em]">READ MORE</span>
                    <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>

              <Link href="/blog/git-malicious-project-vulnerability" className="block group">
                <article className="h-full space-y-4 bg-zinc-50 p-6 border border-zinc-200 transition-all duration-300 hover:bg-zinc-100 relative overflow-hidden rounded-sm">
                  <div className="h-48 mb-4 bg-[url('https://images.unsplash.com/photo-1618401471353-b98afee0b2eb')] bg-cover bg-center rounded-sm group-hover:scale-105 transition-transform duration-500" />
                  
                  <div className="flex items-center gap-2 text-sm">
                    <span className="bg-red-100 text-red-800 px-2 py-0.5 font-euclidCircularB tracking-[-0.04em] text-xs rounded-full">SECURITY</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-400" />
                    <span className="font-euclidCircularB tracking-[-0.04em] text-zinc-500">10 MIN</span>
                  </div>
                  
                  <h3 className="text-xl font-satoshi tracking-[-0.03em] leading-tight">
                    <span className="text-zinc-800 relative inline-block group-hover:text-zinc-900 transition-colors">
                      Git Malicious Project Vulnerability: How IDEs Executed Hackers' Code
                    </span>
                  </h3>
                  
                  <p className="text-zinc-600 font-euclidCircularB tracking-[-0.04em] line-clamp-3">
                    Learn how malicious Git projects exploit IDEs to execute code on developers' machines. Update your IDE now to stay secure.
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm text-zinc-600 group-hover:text-zinc-800 transition-colors">
                    <span className="font-euclidCircularB tracking-[-0.04em]">READ MORE</span>
                    <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>

              <Link href="/blog/ndr" className="block group">
                <article className="h-full space-y-4 bg-zinc-50 p-6 border border-zinc-200 transition-all duration-300 hover:bg-zinc-100 relative overflow-hidden rounded-sm">
                  <div className="h-48 mb-4 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31')] bg-cover bg-center rounded-sm group-hover:scale-105 transition-transform duration-500" />
                  
                  <div className="flex items-center gap-2 text-sm">
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 font-euclidCircularB tracking-[-0.04em] text-xs rounded-full">SECURITY</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-400" />
                    <span className="font-euclidCircularB tracking-[-0.04em] text-zinc-500">10 MIN</span>
                  </div>
                  
                  <h3 className="text-xl font-satoshi tracking-[-0.03em] leading-tight">
                    <span className="text-zinc-800 relative inline-block group-hover:text-zinc-900 transition-colors">
                      Why Your Enterprise Needs Network Detection and Response (NDR)
                    </span>
                  </h3>
                  
                  <p className="text-zinc-600 font-euclidCircularB tracking-[-0.04em] line-clamp-3">
                    Learn how Network Detection and Response detects advanced attacks and stops intruders hiding in your network. A comprehensive guide to modern enterprise security.
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm text-zinc-600 group-hover:text-zinc-800 transition-colors">
                    <span className="font-euclidCircularB tracking-[-0.04em]">READ MORE</span>
                    <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 