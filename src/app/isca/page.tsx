'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function IscaPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  // Immediate redirect to /66
  useEffect(() => {
    router.replace('/66');
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Here you can add your API call to save the lead data
      router.push('/isca-confirmado');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
        <main className="min-h-screen flex flex-col items-center justify-center py-32">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center space-y-4">
              <div className="absolute inset-0 bg-white/[0.02] blur-3xl -z-10" />
              <h1 className="text-4xl sm:text-5xl font-satoshi tracking-[-0.03em] leading-tight">
                <span className="text-white/90 relative inline-block group">
                  33 Aplicativos
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white/20 group-hover:w-full transition-all duration-700" />
                </span>
                <br />
                <span className="text-white/80">de IA Essenciais</span>
              </h1>
              <p className="text-zinc-400 font-euclidCircularB tracking-[-0.04em]">
                Receba gratuitamente a lista completa dos aplicativos de Inteligência Artificial mais úteis para o seu dia a dia
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 border border-white/10">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-400">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full bg-white/5 border border-white/10 p-2.5 text-sm text-white font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-white/20"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-400">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full bg-white/5 border border-white/10 p-2.5 text-sm text-white font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-white/20"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-400">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="mt-1 block w-full bg-white/5 border border-white/10 p-2.5 text-sm text-white font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-white/20"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full group relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-euclidCircularB tracking-[-0.04em] overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
              >
                <span className="relative z-10 text-white/90">
                  {isLoading ? 'ENVIANDO...' : 'ENVIAR'}
                </span>
                <ArrowRight size={16} strokeWidth={1.5} className="relative z-10 text-white/70 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </main>

        {/* Made by KRX */}
        <footer className="fixed bottom-0 left-0 right-0 pb-8 text-center">
          <p className="text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-600">
            made by <span className="text-zinc-500">krx</span>
          </p>
        </footer>
      </div>
    </div>
  );
} 