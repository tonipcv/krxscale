/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useEffect } from 'react'
import Image from "next/image";
import { Target, Code, Rocket, Trophy, ArrowRight, MousePointer2, Sparkles } from "lucide-react";
import ContactForm from './components/ContactForm'
import Link from 'next/link'

export default function Home() {
  const [showForm, setShowForm] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / maxScroll) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-blue-950 to-zinc-900 text-white overflow-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-zinc-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* SVG Gradients - Movido para o topo para garantir que seja carregado primeiro */}
      <svg width="0" height="0" className="fixed">
        <defs>
          <linearGradient id="korax-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#67E8F9" />
            <stop offset="100%" stopColor="#818CF8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Navbar - Removido o botão Apply Now */}
      <nav className="fixed w-full top-0 border-b border-zinc-800/50 backdrop-blur-md z-40 transition-all duration-300">
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
                <g stroke="url(#korax-gradient)" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="128" y1="128" x2="256" y2="256" />
                  <line x1="256" y1="256" x2="384" y2="128" />
                  <line x1="256" y1="256" x2="128" y2="384" />
                  <line x1="256" y1="256" x2="384" y2="384" />
                  <line x1="256" y1="128" x2="256" y2="384" />
                </g>
              </svg>
              <span className="text-xl tracking-wider">KORAX</span>
            </div>

            {/* Right Side Navigation - Sem o botão Apply */}
            <div className="flex items-center gap-4 sm:gap-6">

              <Link
                href="/careers"
                className="text-sm tracking-wide text-zinc-400 hover:text-white transition-colors"
              >
                <span className="hidden sm:inline">CAREERS</span>
                <span className="sm:hidden text-xs">JOBS</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 relative">
        <main className="space-y-32 py-32 mt-16">
          {/* Hero Section */}
          <div className="text-center space-y-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-indigo-600/10 blur-3xl -z-10" />
            <h1 className="text-5xl sm:text-7xl font-light tracking-tight leading-tight">
              Transforming<br />
              <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 text-transparent bg-clip-text relative inline-block group">
                Influence
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 group-hover:w-full transition-all duration-700" />
              </span> into <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 text-transparent bg-clip-text relative inline-block group">
                Equity
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 group-hover:w-full transition-all duration-700" />
              </span>
            </h1>
            <p className="text-lg text-zinc-400 tracking-wide leading-relaxed max-w-2xl mx-auto">
              We develop <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 text-transparent bg-clip-text">white-label software</span> that transforms your audience into high-value digital assets and recurring revenue streams.
            </p>

            {/* Apply Now Button */}
            <div className="pt-4">
              <button
                onClick={() => setShowForm(true)}
                className="group relative inline-flex items-center gap-3 px-8 py-4 text-sm tracking-wider overflow-hidden bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-indigo-500/20 hover:from-blue-500/30 hover:via-cyan-400/30 hover:to-indigo-500/30 backdrop-blur-sm border border-white/10 transition-all duration-300"
              >
                <span className="relative z-10 bg-gradient-to-r from-blue-200 via-cyan-100 to-indigo-200 text-transparent bg-clip-text font-medium">APPLY NOW!</span>
                <ArrowRight size={16} strokeWidth={1.5} className="relative z-10 text-blue-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Abordagem Section */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Target,
                title: "Define",
                description: "We identify the perfect target for your digital product"
              },
              {
                icon: Code,
                title: "Develop",
                description: "We create tailored technological solutions"
              },
              {
                icon: Rocket,
                title: "Accelerate",
                description: "We boost your business growth"
              }
            ].map((item, index) => (
              <div 
                key={item.title}
                className="group p-10 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 relative bg-gradient-to-b from-transparent to-zinc-900/30"
                style={{
                  transform: `translateY(${index * 20}px)`,
                  opacity: 0,
                  animation: `slideUp 0.5s ease-out ${index * 0.2}s forwards`
                }}
              >
                <div className="relative w-fit">
                  <item.icon 
                    size={28} 
                    className="mb-6 group-hover:scale-110 transition-all duration-300 absolute" 
                    strokeWidth={1.5}
                    style={{
                      stroke: 'white',
                      opacity: 0.2
                    }}
                  />
                  <item.icon 
                    size={28} 
                    className="mb-6 group-hover:scale-110 transition-all duration-300" 
                    strokeWidth={1.5}
                    style={{
                      stroke: 'url(#korax-gradient)'
                    }}
                  />
                </div>
                <h3 className="text-xl tracking-wide font-light mb-4 group-hover:text-white transition-colors duration-300">
                  <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 text-transparent bg-clip-text">
                    {item.title}
                  </span>
                </h3>
                <p className="text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">{item.description}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-400/5 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* Value Transformation Section */}
          <div className="relative mt-32 mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-indigo-600/10 blur-3xl -z-10" />
            
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light tracking-wide mb-4">
                Stop Depending on <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 text-transparent bg-clip-text">Sponsorships</span>
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Transform temporary brand deals into your own tech empire
              </p>
            </div>

            {/* Comparison Cards */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="p-8 border border-zinc-800/50 rounded-lg bg-gradient-to-b from-transparent to-zinc-900/30">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 rounded-full bg-rose-500/30" />
                  <h3 className="text-xl tracking-wide font-light">Sponsorship Model</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg">
                    <span className="text-zinc-400">Revenue Control</span>
                    <span className="text-rose-300/80">Brands Decide</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg">
                    <span className="text-zinc-400">Long-term Value</span>
                    <span className="text-rose-300/80">Zero</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg">
                    <span className="text-zinc-400">Future Growth</span>
                    <span className="text-rose-300/80">Limited</span>
                  </div>

                  <div className="p-4 bg-zinc-900/50 rounded-lg">
                    <div className="text-sm text-zinc-400 mb-2">Your Audience Benefits</div>
                    <div className="text-2xl font-light text-rose-300/80">Only Brands</div>
                  </div>
                </div>
              </div>

              <div className="p-8 border border-zinc-800/50 rounded-lg bg-gradient-to-b from-transparent to-zinc-900/30">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 rounded-full bg-teal-500/30" />
                  <h3 className="text-xl tracking-wide font-light">Your Tech Platform</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg">
                    <span className="text-zinc-400">Revenue Control</span>
                    <span className="text-teal-300/90">Full Control</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg">
                    <span className="text-zinc-400">Long-term Value</span>
                    <span className="text-teal-300/90">Growing Asset</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg">
                    <span className="text-zinc-400">Future Growth</span>
                    <span className="text-teal-300/90">Unlimited</span>
                  </div>

                  <div className="p-4 bg-zinc-900/50 rounded-lg">
                    <div className="text-sm text-zinc-400 mb-2">Your Audience Benefits</div>
                    <div className="text-2xl font-light text-teal-300/90">Real Value</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lost Potential Alert */}
            <div className="p-8 border border-zinc-800/50 rounded-lg bg-gradient-to-b from-transparent to-zinc-900/30">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                <h3 className="text-xl tracking-wide font-light">What You're Missing Right Now</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-zinc-900/50 rounded-lg">
                  <div className="text-4xl font-light text-rose-300/80 mb-4">90%</div>
                  <div className="text-white mb-2">Audience Value</div>
                  <p className="text-sm text-zinc-400">Of your audience's potential value is being captured by other platforms</p>
                </div>

                <div className="p-6 bg-zinc-900/50 rounded-lg">
                  <div className="text-4xl font-light text-rose-300/80 mb-4">24/7</div>
                  <div className="text-white mb-2">Revenue Loss</div>
                  <p className="text-sm text-zinc-400">Missing out on automated revenue while you sleep</p>
                </div>

                <div className="p-6 bg-zinc-900/50 rounded-lg">
                  <div className="text-4xl font-light text-rose-300/80 mb-4">0%</div>
                  <div className="text-white mb-2">Equity Built</div>
                  <p className="text-sm text-zinc-400">No long-term value being created from your influence</p>
                </div>
              </div>
            </div>

            {/* With KORAX Section */}
            <div className="mt-12 p-8 border border-zinc-800/50 rounded-lg bg-gradient-to-b from-transparent to-zinc-900/30">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                <h3 className="text-xl tracking-wide font-light">Your Future with KORAX</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-zinc-900/50 rounded-lg">
                  <div className="text-4xl font-light text-teal-300/90 mb-4">100%</div>
                  <div className="text-white mb-2">Value Captured</div>
                  <p className="text-sm text-zinc-400">Own your platform, own your audience's value</p>
                </div>

                <div className="p-6 bg-zinc-900/50 rounded-lg">
                  <div className="text-4xl font-light text-teal-300/90 mb-4">24/7</div>
                  <div className="text-white mb-2">Revenue Machine</div>
                  <p className="text-sm text-zinc-400">Automated income while you create content</p>
                </div>

                <div className="p-6 bg-zinc-900/50 rounded-lg">
                  <div className="text-4xl font-light text-teal-300/90 mb-4">∞</div>
                  <div className="text-white mb-2">Growth Potential</div>
                  <p className="text-sm text-zinc-400">Building real equity in your own tech company</p>
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-indigo-500/10 rounded-lg">
                  <h4 className="text-lg font-light mb-4">Your Tech Empire Includes:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                      <span className="text-zinc-400">Custom-branded platform</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                      <span className="text-zinc-400">Full technical team & support</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                      <span className="text-zinc-400">Multiple revenue streams</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                      <span className="text-zinc-400">Automated operations</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-indigo-500/10 rounded-lg">
                  <h4 className="text-lg font-light mb-4">You Focus On:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                      <span className="text-zinc-400">Creating great content</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                      <span className="text-zinc-400">Growing your audience</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                      <span className="text-zinc-400">Building your brand</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                      <span className="text-zinc-400">Enjoying passive income</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="mt-16 sm:mt-24 relative px-4">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-indigo-600/10 blur-3xl -z-10" />
            
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight mb-6 sm:mb-8 leading-tight">
                Ready to build your{' '}
                <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 text-transparent bg-clip-text">
                  tech company?
                </span>
              </h2>

              <button
                onClick={() => setShowForm(true)}
                className="group relative inline-flex items-center gap-2 px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg tracking-wider overflow-hidden bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-indigo-500/20 hover:from-blue-500/30 hover:via-cyan-400/30 hover:to-indigo-500/30 backdrop-blur-sm border border-white/10 transition-all duration-300"
              >
                <span className="relative z-10 bg-gradient-to-r from-blue-200 via-cyan-100 to-indigo-200 text-transparent bg-clip-text font-medium">START NOW</span>
                <ArrowRight size={18} strokeWidth={1.5} className="relative z-10 text-blue-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </main>

        {showForm && <ContactForm onClose={() => setShowForm(false)} />}

        <footer className="py-8 text-center space-y-4">
          {/* Mobile Links - Visible only on mobile */}
          <div className="flex justify-center gap-4 sm:hidden">
            <Link
              href="/careers"
              className="text-sm font-light text-zinc-500 hover:text-white transition-colors"
            >
              CAREERS
            </Link>
          </div>
          
          {/* Copyright */}
          <p className="text-zinc-500 font-light text-sm tracking-wide">
            © {new Date().getFullYear()} KORAX LABS. ALL RIGHTS RESERVED.
          </p>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
