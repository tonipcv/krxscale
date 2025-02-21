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
    <div className="fixed inset-0 bg-black/90 flex items-start sm:items-center justify-center p-0 sm:p-4 z-50 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <Toaster position="top-center" />
      
      <div className="bg-[#030303] w-full h-full sm:h-auto sm:max-w-xl sm:rounded-lg border-y sm:border border-white/5 relative animate-slideUp">
        <div className="flex items-center gap-3 p-4 border-b border-white/5">
          <svg
            width="20"
            height="20"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="white" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
              <line x1="128" y1="128" x2="256" y2="256" />
              <line x1="256" y1="256" x2="384" y2="128" />
              <line x1="256" y1="256" x2="128" y2="384" />
              <line x1="256" y1="256" x2="384" y2="384" />
              <line x1="256" y1="128" x2="256" y2="384" />
            </g>
          </svg>
          <span className="text-sm tracking-[-0.03em] font-satoshi">KRX</span>
        </div>

        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-zinc-500 hover:text-white transition-colors"
        >
          <X size={20} className="stroke-[1.5]" />
        </button>
        
        <div className="p-4 sm:p-8">
          <div className="space-y-2 mb-6">
            <h2 className="text-xl sm:text-2xl font-satoshi tracking-[-0.03em]">
              Let's Talk
            </h2>
            <p className="text-sm text-zinc-400 font-euclidCircularB tracking-[-0.04em]">Tell us about your project</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm text-zinc-400 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                  <User size={14} className="text-zinc-500" />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 p-2.5 text-sm text-white font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-white/20"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-zinc-400 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                  <Mail size={14} className="text-zinc-500" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 p-2.5 text-sm text-white font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-white/20"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-zinc-400 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                <Phone size={14} className="text-zinc-500" />
                WhatsApp
              </label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                required
                className="w-full bg-white/5 border border-white/10 p-2.5 text-sm text-white font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-white/20"
              />
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm text-zinc-400 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                  <Users size={14} className="text-zinc-500" />
                  Audience Size
                </label>
                <select
                  name="audienceSize"
                  value={formData.audienceSize}
                  onChange={(e) => setFormData({ ...formData, audienceSize: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 p-2.5 text-sm text-white font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-white/20 appearance-none"
                >
                  <option value="">Select</option>
                  <option value="0-10k">0 - 10k followers</option>
                  <option value="10k-50k">10k - 50k followers</option>
                  <option value="50k-100k">50k - 100k followers</option>
                  <option value="100k+">More than 100k followers</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm text-zinc-400 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                  <DollarSign size={14} className="text-zinc-500" />
                  Monthly Revenue
                </label>
                <select
                  name="currentRevenue"
                  value={formData.currentRevenue}
                  onChange={(e) => setFormData({ ...formData, currentRevenue: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 p-2.5 text-sm text-white font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-white/20 appearance-none"
                >
                  <option value="">Select</option>
                  <option value="0-10k">$0 - $10k/month</option>
                  <option value="10k-50k">$10k - $50k/month</option>
                  <option value="50k-100k">$50k - $100k/month</option>
                  <option value="100k+">More than $100k/month</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-zinc-400 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 p-2.5 text-sm text-white font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-white/20 h-24 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-euclidCircularB tracking-[-0.04em] overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
            >
              <span className="relative z-10 text-white/90">
                {isSubmitting ? 'SENDING...' : 'SUBMIT'}
              </span>
              <Send size={14} strokeWidth={1.5} className="relative z-10 text-white/70 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
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