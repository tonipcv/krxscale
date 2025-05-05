'use client';

import Link from 'next/link';
import { ArrowRight, Search, Tag, Clock, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../components/LanguageProvider';
import NewsletterForm from '../components/NewsletterForm';

export default function BlogPage() {
  const { t, language, setLanguage } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: t('blog.all') },
    { id: 'ia', name: t('blog.ai') },
    { id: 'productivity', name: t('blog.productivity') },
    { id: 'future', name: t('blog.future') },
    { id: 'tools', name: t('blog.tools') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed w-full top-0 border-b border-white/5 backdrop-blur-md z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
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
            </Link>

            {/* Right Side Navigation */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-sm tracking-[-0.04em] font-euclidCircularB text-zinc-400 hover:text-white transition-colors"
              >
                <Globe size={16} />
                <span className="hidden sm:inline">{language === 'pt' ? 'PT' : 'EN'}</span>
              </button>
              <Link
                href="/blog"
                className="text-sm tracking-[-0.04em] font-euclidCircularB text-white hover:text-white/80 transition-colors"
              >
                <span className="sm:inline">{t('nav.blog')}</span>
              </Link>
              <Link
                href="/careers"
                className="text-sm tracking-[-0.04em] font-euclidCircularB text-zinc-400 hover:text-white transition-colors"
              >
                <span className="hidden sm:inline">{t('nav.careers')}</span>
                <span className="sm:hidden text-xs">{t('nav.jobs')}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 relative">
        <main className="pt-32 pb-16">
          {/* Blog Header */}
          <div className="text-center space-y-6 mb-16">
            <div className="absolute inset-0 bg-white/[0.02] blur-3xl -z-10" />
            <h1 className="text-5xl sm:text-6xl font-satoshi tracking-[-0.03em] leading-tight">
              <span className="bg-gradient-to-r from-white/95 to-white/60 text-transparent bg-clip-text">
                {t('blog.title')}
              </span>
            </h1>
            <p className="text-lg text-zinc-400 font-euclidCircularB tracking-[-0.04em] max-w-xl mx-auto">
              {t('blog.subtitle')}
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mt-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-zinc-500" />
              </div>
              <input
                type="text"
                placeholder={t('blog.search')}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 text-sm font-euclidCircularB tracking-[-0.04em] border transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-white/10 border-white/30 text-white'
                      : 'bg-transparent border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-16 group">
            <Link href="/66" className="block">
              <article className="relative overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                <div className="h-[450px] bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485')] bg-cover bg-center" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="space-y-4 max-w-3xl">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="bg-white/20 text-white px-3 py-1 font-euclidCircularB tracking-[-0.04em]">{t('blog.featured')}</span>
                      <div className="flex items-center gap-1 text-white/70">
                        <Clock size={14} />
                        <span className="font-euclidCircularB tracking-[-0.04em]">5 MIN</span>
                      </div>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl font-satoshi tracking-[-0.03em] leading-tight text-white group-hover:scale-[1.01] transition-transform duration-500">
                      66 Ferramentas de IA que ainda estão Gratuitas e podem aumentar seu resultado no Trabalho
                    </h2>
                    
                    <p className="text-white/80 font-euclidCircularB tracking-[-0.04em] max-w-2xl">
                      Descobrimos as ferramentas de IA mais poderosas que continuam gratuitas em 2024. Aumente sua produtividade, criatividade e eficiência com estas soluções inovadoras.
                    </p>

                    <div className="inline-flex items-center gap-2 text-white font-euclidCircularB tracking-[-0.04em] mt-4 group-hover:translate-x-1 transition-transform duration-300">
                      ACESSAR AGORA
                      <ArrowRight size={16} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>

          {/* Latest Posts Heading */}
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-satoshi tracking-[-0.03em]">{t('blog.recentArticles')}</h3>
            <Link 
              href="#" 
              className="flex items-center gap-1 text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-400 hover:text-white transition-colors"
            >
              {t('blog.viewAll')}
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>

          {/* Blog Posts Grid - Primeira linha */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <Link href="/isca" className="block group">
              <article className="h-full space-y-4 bg-white/5 p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 relative overflow-hidden rounded-sm">
                <div className="h-48 mb-4 bg-[url('https://images.unsplash.com/photo-1677442135143-302f17c0c3c1')] bg-cover bg-center rounded-sm group-hover:scale-105 transition-transform duration-500" />
                
                <div className="flex items-center gap-2 text-sm">
                  <span className="bg-white/10 text-white/90 px-2 py-0.5 font-euclidCircularB tracking-[-0.04em] text-xs rounded-full flex items-center gap-1">
                    <Tag size={10} />
                    <span>IA</span>
                  </span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span className="font-euclidCircularB tracking-[-0.04em] text-zinc-400">5 MIN</span>
                </div>
                
                <h2 className="text-xl font-satoshi tracking-[-0.03em] leading-tight">
                  <span className="text-white/90 relative inline-block group-hover:text-white transition-colors">
                    33 Aplicativos de IA Essenciais para 2024
                  </span>
                </h2>
                
                <p className="text-zinc-400 font-euclidCircularB tracking-[-0.04em] line-clamp-3">
                  Descubra as ferramentas de Inteligência Artificial que estão revolucionando a produtividade e criatividade. Uma lista completa com os melhores aplicativos para otimizar seu trabalho.
                </p>

                <div className="inline-flex items-center gap-2 text-sm text-white/70 group-hover:text-white transition-colors">
                  <span className="font-euclidCircularB tracking-[-0.04em]">{t('blog.readMore')}</span>
                  <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>

            <Link href="#" className="block group">
              <article className="h-full space-y-4 bg-white/5 p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 rounded-sm">
                <div className="h-48 mb-4 bg-[url('https://images.unsplash.com/photo-1664022617645-cf71791942e4')] bg-cover bg-center rounded-sm group-hover:scale-105 transition-transform duration-500" />
                
                <div className="flex items-center gap-2 text-sm">
                  <span className="bg-white/10 text-white/90 px-2 py-0.5 font-euclidCircularB tracking-[-0.04em] text-xs rounded-full flex items-center gap-1">
                    <Tag size={10} />
                    <span>FUTURO</span>
                  </span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span className="font-euclidCircularB tracking-[-0.04em] text-zinc-400">3 MIN</span>
                </div>
                
                <h2 className="text-xl font-satoshi tracking-[-0.03em] leading-tight">
                  <span className="text-white/90 relative inline-block group-hover:text-white transition-colors">
                    O Futuro do Trabalho com IA
                  </span>
                </h2>
                
                <p className="text-zinc-400 font-euclidCircularB tracking-[-0.04em] line-clamp-3">
                  Como a Inteligência Artificial está transformando o mercado de trabalho e criando novas oportunidades para profissionais de todas as áreas. Descubra como se preparar.
                </p>
                
                <div className="inline-flex items-center gap-2 text-sm text-white/70 group-hover:text-white transition-colors">
                  <span className="font-euclidCircularB tracking-[-0.04em]">{t('blog.readMore')}</span>
                  <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>

            <Link href="#" className="block group">
              <article className="h-full space-y-4 bg-white/5 p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 rounded-sm">
                <div className="h-48 mb-4 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e')] bg-cover bg-center rounded-sm group-hover:scale-105 transition-transform duration-500" />
                
                <div className="flex items-center gap-2 text-sm">
                  <span className="bg-white/10 text-white/90 px-2 py-0.5 font-euclidCircularB tracking-[-0.04em] text-xs rounded-full flex items-center gap-1">
                    <Tag size={10} />
                    <span>PRODUTIVIDADE</span>
                  </span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span className="font-euclidCircularB tracking-[-0.04em] text-zinc-400">4 MIN</span>
                </div>
                
                <h2 className="text-xl font-satoshi tracking-[-0.03em] leading-tight">
                  <span className="text-white/90 relative inline-block group-hover:text-white transition-colors">
                    Automação Inteligente com IA
                  </span>
                </h2>
                
                <p className="text-zinc-400 font-euclidCircularB tracking-[-0.04em] line-clamp-3">
                  Guia prático para automatizar tarefas repetitivas usando ferramentas de Inteligência Artificial. Economize tempo e foque no que realmente importa para seu crescimento.
                </p>
                
                <div className="inline-flex items-center gap-2 text-sm text-white/70 group-hover:text-white transition-colors">
                  <span className="font-euclidCircularB tracking-[-0.04em]">{t('blog.readMore')}</span>
                  <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>
          </div>
          
          {/* Blog Posts Grid - Segunda linha */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link href="#" className="block group">
              <article className="h-full space-y-4 bg-white/5 p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 relative overflow-hidden rounded-sm">
                <div className="h-48 mb-4 bg-[url('https://images.unsplash.com/photo-1591696331111-ef9586a5b17a')] bg-cover bg-center rounded-sm group-hover:scale-105 transition-transform duration-500" />
                
                <div className="flex items-center gap-2 text-sm">
                  <span className="bg-white/10 text-white/90 px-2 py-0.5 font-euclidCircularB tracking-[-0.04em] text-xs rounded-full flex items-center gap-1">
                    <Tag size={10} />
                    <span>TOOLS</span>
                  </span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span className="font-euclidCircularB tracking-[-0.04em] text-zinc-400">6 MIN</span>
                </div>
                
                <h2 className="text-xl font-satoshi tracking-[-0.03em] leading-tight">
                  <span className="text-white/90 relative inline-block group-hover:text-white transition-colors">
                    10 Ferramentas de IA para Designers em 2024
                  </span>
                </h2>
                
                <p className="text-zinc-400 font-euclidCircularB tracking-[-0.04em] line-clamp-3">
                  As melhores soluções de inteligência artificial para designers gráficos, UI/UX e profissionais criativos aumentarem sua produtividade e melhorarem suas entregas.
                </p>

                <div className="inline-flex items-center gap-2 text-sm text-white/70 group-hover:text-white transition-colors">
                  <span className="font-euclidCircularB tracking-[-0.04em]">{t('blog.readMore')}</span>
                  <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>

            <Link href="#" className="block group">
              <article className="h-full space-y-4 bg-white/5 p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 rounded-sm">
                <div className="h-48 mb-4 bg-[url('https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b')] bg-cover bg-center rounded-sm group-hover:scale-105 transition-transform duration-500" />
                
                <div className="flex items-center gap-2 text-sm">
                  <span className="bg-white/10 text-white/90 px-2 py-0.5 font-euclidCircularB tracking-[-0.04em] text-xs rounded-full flex items-center gap-1">
                    <Tag size={10} />
                    <span>IA</span>
                  </span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span className="font-euclidCircularB tracking-[-0.04em] text-zinc-400">7 MIN</span>
                </div>
                
                <h2 className="text-xl font-satoshi tracking-[-0.03em] leading-tight">
                  <span className="text-white/90 relative inline-block group-hover:text-white transition-colors">
                    IA Generativa: O que é e como usar
                  </span>
                </h2>
                
                <p className="text-zinc-400 font-euclidCircularB tracking-[-0.04em] line-clamp-3">
                  Guia completo sobre IA generativa, explicando seus princípios, aplicações práticas e como implementá-la em diferentes contextos para transformar sua produtividade.
                </p>
                
                <div className="inline-flex items-center gap-2 text-sm text-white/70 group-hover:text-white transition-colors">
                  <span className="font-euclidCircularB tracking-[-0.04em]">{t('blog.readMore')}</span>
                  <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>

            <Link href="#" className="block group">
              <article className="h-full space-y-4 bg-white/5 p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 rounded-sm">
                <div className="h-48 mb-4 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978')] bg-cover bg-center rounded-sm group-hover:scale-105 transition-transform duration-500" />
                
                <div className="flex items-center gap-2 text-sm">
                  <span className="bg-white/10 text-white/90 px-2 py-0.5 font-euclidCircularB tracking-[-0.04em] text-xs rounded-full flex items-center gap-1">
                    <Tag size={10} />
                    <span>FUTURO</span>
                  </span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span className="font-euclidCircularB tracking-[-0.04em] text-zinc-400">5 MIN</span>
                </div>
                
                <h2 className="text-xl font-satoshi tracking-[-0.03em] leading-tight">
                  <span className="text-white/90 relative inline-block group-hover:text-white transition-colors">
                    Como construir uma equipe pronta para a IA
                  </span>
                </h2>
                
                <p className="text-zinc-400 font-euclidCircularB tracking-[-0.04em] line-clamp-3">
                  Estratégias para líderes prepararem suas equipes para a era da IA, incluindo desenvolvimento de habilidades, cultura organizacional e estruturação de processos.
                </p>
                
                <div className="inline-flex items-center gap-2 text-sm text-white/70 group-hover:text-white transition-colors">
                  <span className="font-euclidCircularB tracking-[-0.04em]">{t('blog.readMore')}</span>
                  <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>
          </div>
          
          {/* Newsletter */}
          <div className="mt-20 bg-white/5 border border-white/10 p-8 rounded-sm">
            <NewsletterForm />
          </div>
        </main>

        {/* Made by KRX */}
        <footer className="pb-8 text-center">
          <p className="text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-600">
            {t('home.madeBy')} <span className="text-zinc-500">krx</span>
          </p>
        </footer>
      </div>
    </div>
  );
} 