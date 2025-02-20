'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotQualified() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-blue-950 to-zinc-900 text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-indigo-600/10 blur-3xl -z-10" />
        
        <div className="max-w-3xl mx-auto px-6 pt-32 pb-16 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
            Not Ready <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 text-transparent bg-clip-text">Yet</span>
          </h1>
          
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-12">
            Based on your answers, it seems like you need to grow your audience and revenue a bit more before we can help you build a successful tech company.
          </p>

          <div className="space-y-8 max-w-xl mx-auto text-left">
            <h2 className="text-xl font-light">We recommend:</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-2" />
                <p className="text-zinc-400">Grow your audience to at least 100k followers</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-2" />
                <p className="text-zinc-400">Achieve consistent monthly revenue of $10k+</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-2" />
                <p className="text-zinc-400">Develop multiple revenue streams</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 