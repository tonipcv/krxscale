'use client'

import { useRouter } from 'next/navigation'
import { CheckCircle, ArrowLeft } from 'lucide-react'

export default function Success() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="fixed w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl pointer-events-none" />
      
      <div className="max-w-md w-full text-center space-y-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent blur-3xl -z-10" />
        
        <CheckCircle className="w-16 h-16 mx-auto text-green-500/80" strokeWidth={1} />
        
        <div className="space-y-4">
          <h1 className="text-3xl font-light tracking-wide">Message Sent!</h1>
          <p className="text-zinc-400 font-light leading-relaxed">
            Thank you for your interest. Our team will contact you soon to discuss your project.
          </p>
        </div>

        <button
          onClick={() => router.push('/')}
          className="group relative inline-flex items-center gap-3 px-8 py-4 text-sm font-light overflow-hidden bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300"
        >
          <ArrowLeft size={16} strokeWidth={1} className="relative z-10 text-white/90 group-hover:-translate-x-1 transition-transform" />
          <span className="relative z-10 text-white/90 group-hover:text-white">BACK TO HOME</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-blue-500/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </button>
      </div>
    </div>
  )
} 