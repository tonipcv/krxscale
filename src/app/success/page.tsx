'use client'

import { useRouter } from 'next/navigation'
import { CheckCircle } from 'lucide-react'

export default function Success() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
        <h1 className="text-3xl font-light tracking-wide">Mensagem Enviada!</h1>
        <p className="text-zinc-400 font-light leading-relaxed">
          Agradecemos seu interesse. Nossa equipe entrará em contato em breve para discutirmos seu projeto.
        </p>
        <button
          onClick={() => router.push('/')}
          className="px-8 py-3 border border-zinc-800 text-sm font-light tracking-wider hover:bg-white hover:text-black transition-all duration-300"
        >
          VOLTAR PARA O INÍCIO
        </button>
      </div>
    </div>
  )
} 