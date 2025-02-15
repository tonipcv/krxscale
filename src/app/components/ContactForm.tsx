/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { X, Send, User, Mail, Phone, Users, DollarSign } from 'lucide-react'

export default function ContactForm({ onClose }: { onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      whatsapp: formData.get('whatsapp'),
      audienceSize: formData.get('audienceSize'),
      currentRevenue: formData.get('currentRevenue'),
    }

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        router.push('/success')
      } else {
        throw new Error('Erro ao enviar')
      }
    } catch (error) {
      toast.error('Erro ao enviar. Tente novamente.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-zinc-900/98 via-blue-950/98 to-zinc-900/98 flex items-center justify-center p-4 z-50 backdrop-blur-sm animate-fadeIn">
      <Toaster position="top-center" />
      
      <div className="bg-gradient-to-br from-zinc-900/50 via-blue-950/30 to-zinc-900/50 backdrop-blur-md p-8 sm:p-12 rounded-lg w-full max-w-xl border border-zinc-800/50 relative animate-slideUp">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
        >
          <X size={20} className="stroke-[1.5]" />
        </button>
        
        <div className="space-y-3 mb-8">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wide">
            Let's <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 text-transparent bg-clip-text">Talk</span>
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base">Tell us a bit about you and your project</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2 group">
              <label className="text-sm text-zinc-400 font-light flex items-center gap-2">
                <User size={16} className="text-zinc-500 group-hover:text-blue-300 transition-colors" />
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-zinc-900/50 border border-zinc-800/50 p-3 sm:p-4 rounded-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-800/50 focus:ring-1 focus:ring-blue-800/50 transition-all"
              />
            </div>
            <div className="space-y-2 group">
              <label className="text-sm text-zinc-400 font-light flex items-center gap-2">
                <Mail size={16} className="text-zinc-500 group-hover:text-blue-300 transition-colors" />
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-zinc-900/50 border border-zinc-800/50 p-3 sm:p-4 rounded-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-800/50 focus:ring-1 focus:ring-blue-800/50 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2 group">
            <label className="text-sm text-zinc-400 font-light flex items-center gap-2">
              <Phone size={16} className="text-zinc-500 group-hover:text-blue-300 transition-colors" />
              WhatsApp
            </label>
            <input
              type="tel"
              name="whatsapp"
              required
              className="w-full bg-zinc-900/50 border border-zinc-800/50 p-3 sm:p-4 rounded-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-800/50 focus:ring-1 focus:ring-blue-800/50 transition-all"
            />
          </div>

          <div className="space-y-2 group">
            <label className="text-sm text-zinc-400 font-light flex items-center gap-2">
              <Users size={16} className="text-zinc-500 group-hover:text-blue-300 transition-colors" />
              Audience Size
            </label>
            <select
              name="audienceSize"
              required
              className="w-full bg-zinc-900/50 border border-zinc-800/50 p-3 sm:p-4 rounded-sm text-white focus:outline-none focus:border-blue-800/50 focus:ring-1 focus:ring-blue-800/50 transition-all appearance-none"
            >
              <option value="">Select</option>
              <option value="0-10k">0 - 10k followers</option>
              <option value="10k-50k">10k - 50k followers</option>
              <option value="50k-100k">50k - 100k followers</option>
              <option value="100k+">More than 100k followers</option>
            </select>
          </div>

          <div className="space-y-2 group">
            <label className="text-sm text-zinc-400 font-light flex items-center gap-2">
              <DollarSign size={16} className="text-zinc-500 group-hover:text-blue-300 transition-colors" />
              Monthly Revenue
            </label>
            <select
              name="currentRevenue"
              required
              className="w-full bg-zinc-900/50 border border-zinc-800/50 p-3 sm:p-4 rounded-sm text-white focus:outline-none focus:border-blue-800/50 focus:ring-1 focus:ring-blue-800/50 transition-all appearance-none"
            >
              <option value="">Select</option>
              <option value="0-10k">$0 - $10k/month</option>
              <option value="10k-50k">$10k - $50k/month</option>
              <option value="50k-100k">$50k - $100k/month</option>
              <option value="100k+">More than $100k/month</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 mt-4 bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-indigo-500/20 hover:from-blue-500/30 hover:via-cyan-400/30 hover:to-indigo-500/30 text-white font-light tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm group relative overflow-hidden border border-zinc-800/50"
          >
            <span className="relative z-10 bg-gradient-to-r from-blue-200 via-cyan-100 to-indigo-200 text-transparent bg-clip-text font-medium inline-flex items-center gap-2">
              {isSubmitting ? 'SENDING...' : 'CONTINUE'}
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </form>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  )
} 