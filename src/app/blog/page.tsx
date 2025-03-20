'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed w-full top-0 border-b border-white/5 backdrop-blur-md z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 group">
              <svg
                width="40"
                height="40"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:scale-110 transition-transform duration-300"
              >
                <g stroke="white" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="128" y1="128" x2="256" y2="256" />
                  <line x1="256" y1="256" x2="384" y2="128" />
                  <line x1="256" y1="256" x2="128" y2="384" />
                  <line x1="256" y1="256" x2="384" y2="384" />
                  <line x1="256" y1="128" x2="256" y2="384" />
                </g>
              </svg>
              <span className="text-xl tracking-[-0.03em] font-satoshi">KRX</span>
            </div>

            {/* Right Side Navigation */}
            <div className="flex items-center gap-4 sm:gap-6">
              <Link
                href="/careers"
                className="text-sm tracking-[-0.04em] font-euclidCircularB text-zinc-400 hover:text-white transition-colors"
              >
                <span className="hidden sm:inline">CAREERS</span>
                <span className="sm:hidden text-xs">JOBS</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 relative">
        <main className="pt-32 pb-16">
          {/* Blog Header */}
          <div className="text-center space-y-4 mb-16">
            <div className="absolute inset-0 bg-white/[0.02] blur-3xl -z-10" />
            <h1 className="text-4xl sm:text-5xl font-satoshi tracking-[-0.03em] leading-tight">
              <span className="text-white/90 relative inline-block group">
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white/20 group-hover:w-full transition-all duration-700" />
              </span>
            </h1>
            <p className="text-zinc-400 font-euclidCircularB tracking-[-0.04em]">
              Insights sobre tecnologia e inovação
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Featured Post */}
            <div className="col-span-full mb-8">
              <Link href="/isca" className="block group">
                <article className="space-y-4 bg-white/5 p-8 border border-white/10 transition-all duration-300 hover:bg-white/10">
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <span className="font-euclidCircularB tracking-[-0.04em]">FEATURED</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                    <span className="font-euclidCircularB tracking-[-0.04em]">5 MIN READ</span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-satoshi tracking-[-0.03em] leading-tight">
                    <span className="text-white/90 relative inline-block group-hover:text-white transition-colors">
                      33 Aplicativos de IA Essenciais para 2024
                    </span>
                  </h2>
                  
                  <p className="text-zinc-400 font-euclidCircularB tracking-[-0.04em] line-clamp-3">
                    Descubra as ferramentas de Inteligência Artificial que estão revolucionando a produtividade e criatividade. Uma lista completa com os melhores aplicativos para otimizar seu trabalho.
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm text-white/70 group-hover:text-white transition-colors">
                    <span className="font-euclidCircularB tracking-[-0.04em]">LER MAIS</span>
                    <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            </div>

            {/* Regular Posts */}
            <Link href="#" className="block group">
              <article className="h-full space-y-4 bg-white/5 p-6 border border-white/10 transition-all duration-300 hover:bg-white/10">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <span className="font-euclidCircularB tracking-[-0.04em]">TECH</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span className="font-euclidCircularB tracking-[-0.04em]">3 MIN READ</span>
                </div>
                
                <h2 className="text-xl font-satoshi tracking-[-0.03em] leading-tight">
                  <span className="text-white/90 relative inline-block group-hover:text-white transition-colors">
                    O Futuro do Trabalho com IA
                  </span>
                </h2>
                
                <p className="text-zinc-400 font-euclidCircularB tracking-[-0.04em] line-clamp-3">
                  Como a Inteligência Artificial está transformando o mercado de trabalho e criando novas oportunidades.
                </p>
              </article>
            </Link>

            <Link href="#" className="block group">
              <article className="h-full space-y-4 bg-white/5 p-6 border border-white/10 transition-all duration-300 hover:bg-white/10">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <span className="font-euclidCircularB tracking-[-0.04em]">INNOVATION</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span className="font-euclidCircularB tracking-[-0.04em]">4 MIN READ</span>
                </div>
                
                <h2 className="text-xl font-satoshi tracking-[-0.03em] leading-tight">
                  <span className="text-white/90 relative inline-block group-hover:text-white transition-colors">
                    Tendências de IA para 2024
                  </span>
                </h2>
                
                <p className="text-zinc-400 font-euclidCircularB tracking-[-0.04em] line-clamp-3">
                  As principais tendências e inovações em Inteligência Artificial que vão impactar os negócios este ano.
                </p>
              </article>
            </Link>

            <Link href="#" className="block group">
              <article className="h-full space-y-4 bg-white/5 p-6 border border-white/10 transition-all duration-300 hover:bg-white/10">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <span className="font-euclidCircularB tracking-[-0.04em]">PRODUCTIVITY</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span className="font-euclidCircularB tracking-[-0.04em]">3 MIN READ</span>
                </div>
                
                <h2 className="text-xl font-satoshi tracking-[-0.03em] leading-tight">
                  <span className="text-white/90 relative inline-block group-hover:text-white transition-colors">
                    Automação com IA
                  </span>
                </h2>
                
                <p className="text-zinc-400 font-euclidCircularB tracking-[-0.04em] line-clamp-3">
                  Guia prático para automatizar tarefas repetitivas usando ferramentas de Inteligência Artificial.
                </p>
              </article>
            </Link>
          </div>
        </main>

        {/* Made by KRX */}
        <footer className="pb-8 text-center">
          <p className="text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-600">
            made by <span className="text-zinc-500">krx</span>
          </p>
        </footer>
      </div>
    </div>
  );
} 