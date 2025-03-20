'use client'

import { useState } from 'react'
import { ArrowRight } from "lucide-react"
import Link from 'next/link'

export default function NewsletterPage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your newsletter subscription logic here
    console.log('Email submitted:', email)
  }

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
              <Link
                href="/careers"
                className="text-sm tracking-[-0.04em] font-euclidCircularB text-zinc-400 hover:text-white transition-colors"
              >
                <span className="hidden sm:inline">CAREERS</span>
                <span className="sm:hidden text-xs">JOBS</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 relative">
        <main className="min-h-screen flex flex-col">
          {/* Hero Section */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-6 relative -mt-20">
              <div className="absolute inset-0 bg-white/[0.02] blur-3xl -z-10" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-satoshi tracking-[-0.03em] leading-[1.2] sm:leading-tight max-w-3xl mx-auto">
                <span className="text-white/90 relative inline-block group">
                  Guia Gratuito:
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white/20 group-hover:w-full transition-all duration-700" />
                </span>
                <br />
                <span className="text-white/90 relative inline-block group">
                  Implementação de AI
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white/20 group-hover:w-full transition-all duration-700" />
                </span>
                <br />
                <span className="text-white/80">para reduzir custos e</span>
                <br />
                <span className="text-white/90 relative inline-block group">
                  aumentar em até 200%
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white/20 group-hover:w-full transition-all duration-700" />
                </span>
                <br />
                <span className="text-white/80">sua produtividade</span>
              </h1>

              {/* Email Form */}
              <div className="pt-6">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail"
                    required
                    className="w-full sm:flex-[0.7] px-6 py-4 bg-white/5 border border-white/10 text-white placeholder-white/40 text-base font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-white/20"
                  />
                  <button
                    type="submit"
                    className="w-full sm:flex-[0.3] group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-euclidCircularB tracking-[-0.04em] overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
                  >
                    <span className="relative z-10 text-white/90">ASSINAR GRATUITAMENTE</span>
                    <ArrowRight size={16} strokeWidth={1.5} className="relative z-10 text-white/70 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Made by KRX */}
          <div className="pb-8 text-center">
            <p className="text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-600">
              made by <span className="text-zinc-500">krx</span>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
} 