/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { X, Send, User, Mail, Phone, Users, DollarSign } from 'lucide-react'

interface ContactFormProps {
  onClose: () => void
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    audienceSize: '',
    currentRevenue: '',
    message: ''
  })

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
      message: formData.get('message')
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
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50 backdrop-blur-sm animate-fadeIn">
      <Toaster position="top-center" />
      
      <div className="bg-[#030303] p-8 sm:p-12 w-full max-w-xl border border-white/5 relative animate-slideUp">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
        >
          <X size={20} className="stroke-[1.5]" />
        </button>
        
        <div className="space-y-3 mb-8">
          <h2 className="text-2xl sm:text-3xl font-satoshi tracking-[-0.03em]">
            Let's Talk
          </h2>
          <p className="text-zinc-400 font-euclidCircularB tracking-[-0.04em]">Tell us a bit about you and your project</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-zinc-400 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                <User size={16} className="text-zinc-500" />
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-white/5 border border-white/10 p-3 sm:p-4 text-white font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-white/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-zinc-400 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                <Mail size={16} className="text-zinc-500" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-white/5 border border-white/10 p-3 sm:p-4 text-white font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-white/20"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-zinc-400 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
              <Phone size={16} className="text-zinc-500" />
              WhatsApp
            </label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              required
              className="w-full bg-white/5 border border-white/10 p-3 sm:p-4 text-white font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-white/20"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-zinc-400 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
              <Users size={16} className="text-zinc-500" />
              Audience Size
            </label>
            <select
              name="audienceSize"
              value={formData.audienceSize}
              onChange={(e) => setFormData({ ...formData, audienceSize: e.target.value })}
              required
              className="w-full bg-white/5 border border-white/10 p-3 sm:p-4 text-white font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-white/20 appearance-none"
            >
              <option value="">Select</option>
              <option value="0-10k">0 - 10k followers</option>
              <option value="10k-50k">10k - 50k followers</option>
              <option value="50k-100k">50k - 100k followers</option>
              <option value="100k+">More than 100k followers</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-zinc-400 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
              <DollarSign size={16} className="text-zinc-500" />
              Monthly Revenue
            </label>
            <select
              name="currentRevenue"
              value={formData.currentRevenue}
              onChange={(e) => setFormData({ ...formData, currentRevenue: e.target.value })}
              required
              className="w-full bg-white/5 border border-white/10 p-3 sm:p-4 text-white font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-white/20 appearance-none"
            >
              <option value="">Select</option>
              <option value="0-10k">$0 - $10k/month</option>
              <option value="10k-50k">$10k - $50k/month</option>
              <option value="50k-100k">$50k - $100k/month</option>
              <option value="100k+">More than $100k/month</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-zinc-400 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 p-3 sm:p-4 text-white font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-white/20 h-32 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-euclidCircularB tracking-[-0.04em] overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
          >
            <span className="relative z-10 text-white/90">
              {isSubmitting ? 'SENDING...' : 'SUBMIT APPLICATION'}
            </span>
            <Send size={16} strokeWidth={1.5} className="relative z-10 text-white/70 group-hover:translate-x-1 transition-transform" />
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