/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { X } from 'lucide-react'

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
    <div className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <Toaster position="top-center" />
      <div className="bg-zinc-900 p-12 rounded-lg max-w-xl w-full border border-zinc-800 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="space-y-3 mb-8">
          <h2 className="text-3xl font-light tracking-wide">Vamos Conversar</h2>
          <p className="text-zinc-400 font-light">Conte-nos um pouco sobre você e seu projeto</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-zinc-400 font-light">Nome</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-black border border-zinc-800 p-4 rounded-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-700"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-zinc-400 font-light">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-black border border-zinc-800 p-4 rounded-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-700"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-zinc-400 font-light">WhatsApp</label>
            <input
              type="tel"
              name="whatsapp"
              required
              className="w-full bg-black border border-zinc-800 p-4 rounded-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-700"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-zinc-400 font-light">Tamanho da Audiência</label>
              <select
                name="audienceSize"
                required
                className="w-full bg-black border border-zinc-800 p-4 rounded-sm text-white focus:outline-none focus:border-zinc-700"
              >
                <option value="">Selecione</option>
                <option value="0-10k">0 - 10k seguidores</option>
                <option value="10k-50k">10k - 50k seguidores</option>
                <option value="50k-100k">50k - 100k seguidores</option>
                <option value="100k+">Mais de 100k seguidores</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-zinc-400 font-light">Faturamento Mensal</label>
              <select
                name="currentRevenue"
                required
                className="w-full bg-black border border-zinc-800 p-4 rounded-sm text-white focus:outline-none focus:border-zinc-700"
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
            className="w-full py-4 bg-white text-black font-light tracking-wider hover:bg-zinc-200 transition-colors disabled:opacity-50 mt-6"
          >
            {isSubmitting ? 'ENVIANDO...' : 'CONTINUAR'}
          </button>
        </form>
      </div>
    </div>
  )
} 