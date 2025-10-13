'use client'

import Link from 'next/link'
import { ArrowLeft } from "lucide-react"

export default function Success() {
  return (
    <div className="min-h-screen bg-white text-zinc-800 overflow-hidden">
      {/* Navbar */}
      <nav className="fixed w-full top-0 border-b border-zinc-200 backdrop-blur-md z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="KRX Labs Logo"
                width={48}
                height={48}
                className="w-6 h-6 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xl tracking-[-0.03em] font-satoshi">KRX</span>
            </Link>

            {/* Right Side Navigation */}
            <div className="flex items-center gap-4 sm:gap-6">
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 relative">
        <main className="min-h-screen flex flex-col">
          {/* Success Section */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-8 relative -mt-20">
              <div className="absolute inset-0 bg-zinc-100 blur-3xl -z-10" />
              <h1 className="text-7xl sm:text-8xl font-satoshi tracking-[-0.03em] leading-[1.1] sm:leading-tight">
                <span className="text-zinc-800 relative inline-block group">
                  Application Submitted
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-zinc-300 group-hover:w-full transition-all duration-700" />
                </span>
              </h1>

              {/* Back Button */}
              <div className="pt-4">
                <Link
                  href="/"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 text-sm font-euclidCircularB tracking-[-0.04em] overflow-hidden bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 transition-all duration-300"
                >
                  <ArrowLeft size={16} strokeWidth={1.5} className="relative z-10 text-zinc-600 group-hover:-translate-x-1 transition-transform" />
                  <span className="relative z-10 text-zinc-800">BACK HOME</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Made by KRX */}
          <div className="pb-8 text-center">
            <p className="text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-400">
              made by <span className="text-zinc-600">krx</span>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
} 