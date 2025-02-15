'use client'

import Link from 'next/link'
import { ArrowLeft, Target, Rocket, Clock, Users, Building, ChartBar } from 'lucide-react'

export default function Success() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-blue-950 to-zinc-900 text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-indigo-600/10 blur-3xl -z-10" />
        
        <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="text-center space-y-6 mb-16">
            <div className="w-16 h-16 mx-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#93C5FD', stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: '#67E8F9', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#A5B4FC', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <path d="M50 5 L65 45 L85 45 L40 95 L45 60 L25 60 Z" fill="url(#grad)" />
              </svg>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-light tracking-tight">
              Application <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 text-transparent bg-clip-text">Received</span>
            </h1>
            
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Thank you for your interest in building with Korax Labs. Our team will review your application and contact you within 24 hours for the next steps.
            </p>
          </div>

          {/* Evaluation Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-light text-center mb-8">Evaluation Process</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-b from-transparent to-zinc-900/30 border border-zinc-800/50 rounded-lg">
                <Target size={24} className="text-blue-300 mb-4" />
                <h3 className="text-lg font-light mb-2">Initial Review</h3>
                <p className="text-sm text-zinc-400">We'll assess your audience size and engagement metrics</p>
              </div>
              
              <div className="p-6 bg-gradient-to-b from-transparent to-zinc-900/30 border border-zinc-800/50 rounded-lg">
                <ChartBar size={24} className="text-cyan-300 mb-4" />
                <h3 className="text-lg font-light mb-2">Market Analysis</h3>
                <p className="text-sm text-zinc-400">Evaluation of monetization potential and market fit</p>
              </div>
              
              <div className="p-6 bg-gradient-to-b from-transparent to-zinc-900/30 border border-zinc-800/50 rounded-lg">
                <Clock size={24} className="text-indigo-300 mb-4" />
                <h3 className="text-lg font-light mb-2">Decision</h3>
                <p className="text-sm text-zinc-400">Project approval and partnership terms</p>
              </div>
            </div>
          </div>

          {/* If Approved */}
          <div className="mb-16">
            <div className="flex items-center gap-3 justify-center mb-8">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
              <h2 className="text-2xl font-light">If Approved</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-b from-transparent to-zinc-900/30 border border-zinc-800/50 rounded-lg">
                <Users size={24} className="text-blue-300 mb-4" />
                <h3 className="text-lg font-light mb-2">Strategy Phase</h3>
                <p className="text-sm text-zinc-400">Deep dive into your market and opportunities</p>
              </div>
              
              <div className="p-6 bg-gradient-to-b from-transparent to-zinc-900/30 border border-zinc-800/50 rounded-lg">
                <Building size={24} className="text-cyan-300 mb-4" />
                <h3 className="text-lg font-light mb-2">Development</h3>
                <p className="text-sm text-zinc-400">Custom platform tailored to your brand</p>
              </div>
              
              <div className="p-6 bg-gradient-to-b from-transparent to-zinc-900/30 border border-zinc-800/50 rounded-lg">
                <Rocket size={24} className="text-indigo-300 mb-4" />
                <h3 className="text-lg font-light mb-2">Launch</h3>
                <p className="text-sm text-zinc-400">Your tech company goes live</p>
              </div>
            </div>
          </div>

          {/* What to Prepare */}
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-light">Required Information</h2>
            <p className="text-zinc-400">
              Please have these details ready for our evaluation:
            </p>
            <ul className="text-sm text-zinc-400 space-y-2">
              <li>• Current audience size and engagement metrics</li>
              <li>• Monthly revenue from sponsorships and partnerships</li>
              <li>• Content verticals and audience demographics</li>
              <li>• Growth trajectory over the last 12 months</li>
            </ul>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wider bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-indigo-500/20 hover:from-blue-500/30 hover:via-cyan-400/30 hover:to-indigo-500/30 backdrop-blur-sm border border-white/10 transition-all duration-300 mt-8"
            >
              <span className="bg-gradient-to-r from-blue-200 via-cyan-100 to-indigo-200 text-transparent bg-clip-text font-medium">
                BACK TO HOME
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 