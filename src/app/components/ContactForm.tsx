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
    <div className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 z-50 backdrop-blur-sm animate-fadeIn">
      <Toaster position="top-center" />
      
      <div className="bg-zinc-900/50 backdrop-blur-md p-8 sm:p-12 rounded-lg w-full max-w-xl border border-zinc-800 relative animate-slideUp">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
        >
          <X size={20} />
        </button>
        
        <div className="space-y-3 mb-8">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wide">Vamos Conversar</h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base">Conte-nos um pouco sobre você e seu projeto</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2 group">
              <label className="text-sm text-zinc-400 font-light flex items-center gap-2">
                <User size={16} className="text-zinc-500 group-hover:text-white/80 transition-colors" />
                Nome
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-black/30 border border-zinc-800 p-3 sm:p-4 rounded-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 transition-all"
              />
            </div>
            <div className="space-y-2 group">
              <label className="text-sm text-zinc-400 font-light flex items-center gap-2">
                <Mail size={16} className="text-zinc-500 group-hover:text-white/80 transition-colors" />
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-black/30 border border-zinc-800 p-3 sm:p-4 rounded-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2 group">
            <label className="text-sm text-zinc-400 font-light flex items-center gap-2">
              <Phone size={16} className="text-zinc-500 group-hover:text-white/80 transition-colors" />
              WhatsApp
            </label>
            <input
              type="tel"
              name="whatsapp"
              required
              className="w-full bg-black/30 border border-zinc-800 p-3 sm:p-4 rounded-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 transition-all"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2 group">
              <label className="text-sm text-zinc-400 font-light flex items-center gap-2">
                <Users size={16} className="text-zinc-500 group-hover:text-white/80 transition-colors" />
                Tamanho da Audiência
              </label>
              <select
                name="audienceSize"
                required
                className="w-full bg-black/30 border border-zinc-800 p-3 sm:p-4 rounded-sm text-white focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 transition-all appearance-none"
              >
                <option value="">Selecione</option>
                <option value="0-10k">0 - 10k seguidores</option>
                <option value="10k-50k">10k - 50k seguidores</option>
                <option value="50k-100k">50k - 100k seguidores</option>
                <option value="100k+">Mais de 100k seguidores</option>
              </select>
            </div>
            <div className="space-y-2 group">
              <label className="text-sm text-zinc-400 font-light flex items-center gap-2">
                <DollarSign size={16} className="text-zinc-500 group-hover:text-white/80 transition-colors" />
                Faturamento Mensal
              </label>
              <select
                name="currentRevenue"
                required
                className="w-full bg-black/30 border border-zinc-800 p-3 sm:p-4 rounded-sm text-white focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 transition-all appearance-none"
              >
                <option value="">Selecione</option>
                <option value="0-10k">R$ 0 - R$ 10k/mês</option>
                <option value="10k-50k">R$ 10k - R$ 50k/mês</option>
                <option value="50k-100k">R$ 50k - R$ 100k/mês</option>
                <option value="100k+">Mais de R$ 100k/mês</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 mt-4 bg-gradient-to-r from-purple-500/80 to-blue-500/80 hover:from-purple-500 hover:to-blue-500 text-white font-light tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm group relative overflow-hidden"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              {isSubmitting ? 'ENVIANDO...' : 'CONTINUAR'}
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-white/10 to-blue-500/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
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