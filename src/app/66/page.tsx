'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AIToolsPage() {
  const [step, setStep] = useState(1)
  const [userType, setUserType] = useState('')
  const [email, setEmail] = useState('')
  
  const handleContinue = () => {
    setStep(2)
  }
  
  const handleUserTypeSelect = (type: string) => {
    setUserType(type)
    setStep(3)
  }
  
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setStep(4)
    }
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full space-y-8 text-center">
        {step === 1 && (
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-satoshi tracking-[-0.03em] leading-tight">
              66 Ferramentas de IA que ainda estão Gratuitas e pode aumentar seu resultado no Trabalho em até 10x
            </h1>
            <button
              onClick={handleContinue}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-euclidCircularB transition-all duration-300"
            >
              Continuar
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-satoshi">Você é:</h2>
            <div className="grid gap-4">
              <button
                onClick={() => handleUserTypeSelect('entrepreneur')}
                className="w-full px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-euclidCircularB transition-all duration-300"
              >
                Empresário
              </button>
              <button
                onClick={() => handleUserTypeSelect('employee')}
                className="w-full px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-euclidCircularB transition-all duration-300"
              >
                Trabalho para uma empresa
              </button>
              <button
                onClick={() => handleUserTypeSelect('unemployed')}
                className="w-full px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-euclidCircularB transition-all duration-300"
              >
                Estou desempregado
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-satoshi">Qual e-mail quer receber o pdf com as ferramentas:</h2>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button
                type="submit"
                className="w-full px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-euclidCircularB transition-all duration-300"
              >
                Enviar
              </button>
            </form>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-satoshi">Parabéns, enviamos o documento para o seu e-mail!</h2>
            <p className="text-white/70">
              Estamos preparando para lançar um APP gratuito de IA, criamos um grupo do Whatspp Silencioso para notificar os prioritários.
            </p>
            <p className="text-white/70">
              Para entrar é só clicar no botão baixo:
            </p>
            <Link 
              href="https://chat.whatsapp.com/JjyQUiI5ATT7jVqFCWYzgH" 
              target="_blank"
              className="inline-block w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-euclidCircularB transition-all duration-300"
            >
              Entrar no Grupo
            </Link>
          </div>
        )}
      </div>
    </div>
  )
} 