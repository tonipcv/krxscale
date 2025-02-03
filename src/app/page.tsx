'use client'

import { useState } from 'react'
import Image from "next/image";
import { Target, Code, Rocket, Trophy, ArrowRight } from "lucide-react";
import ContactForm from './components/ContactForm'

export default function Home() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center">
                <span className="text-2xl font-light text-black">K</span>
              </div>
              <span className="text-xl font-light tracking-wider">KORAX</span>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="group relative px-6 py-2 text-sm font-light overflow-hidden bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300"
            >
              <span className="relative z-10 text-white/90">COMECE AGORA!</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6">
        <main className="space-y-32 py-32">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <h1 className="text-5xl sm:text-7xl font-extralight tracking-tight">
              Transformando<br />
              <span className="text-zinc-400">Influência</span> em <span className="text-zinc-400">Equity</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
              Desenvolvemos softwares white label que transformam sua audiência em ativos digitais de alto valor e fluxos de receita recorrente.
            </p>
          </div>

          {/* Abordagem Section */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-10 border border-zinc-900 hover:border-zinc-800 transition-colors duration-300">
              <Target size={28} className="text-zinc-500 mb-6" strokeWidth={1} />
              <h3 className="text-xl font-light mb-4 tracking-wide">Definimos</h3>
              <p className="text-zinc-400 font-light leading-relaxed">Identificamos o alvo perfeito para seu produto digital</p>
            </div>
            <div className="p-10 border border-zinc-900 hover:border-zinc-800 transition-colors duration-300">
              <Code size={28} className="text-zinc-500 mb-6" strokeWidth={1} />
              <h3 className="text-xl font-light mb-4 tracking-wide">Desenvolvemos</h3>
              <p className="text-zinc-400 font-light leading-relaxed">Criamos soluções tecnológicas sob medida</p>
            </div>
            <div className="p-10 border border-zinc-900 hover:border-zinc-800 transition-colors duration-300">
              <Rocket size={28} className="text-zinc-500 mb-6" strokeWidth={1} />
              <h3 className="text-xl font-light mb-4 tracking-wide">Aceleramos</h3>
              <p className="text-zinc-400 font-light leading-relaxed">Impulsionamos o crescimento do seu negócio</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-8 py-20 border-y border-zinc-900">
            <h2 className="text-3xl font-light tracking-wide">Pronto para escalar sua marca?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
              Se você tem uma audiência e quer monetizá-la com um software inovador, nós podemos construir isso para você.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 text-sm font-light overflow-hidden bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300"
            >
              <span className="relative z-10 text-white/90">COMECE AGORA!</span>
              <ArrowRight size={16} strokeWidth={1} className="relative z-10 text-white/90 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </button>
          </div>
        </main>

        {/* Renderiza o formulário quando showForm for true */}
        {showForm && <ContactForm onClose={() => setShowForm(false)} />}

        <footer className="py-8 text-center text-zinc-500 font-light text-sm tracking-wide">
          <p>© {new Date().getFullYear()} KORAX LABS. TODOS OS DIREITOS RESERVADOS.</p>
        </footer>
      </div>
    </div>
  );
}
