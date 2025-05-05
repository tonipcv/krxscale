'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/app/components/LanguageProvider';

export default function NewsletterConfirmation() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col">
      {/* Navbar */}
      <nav className="w-full border-b border-white/5 backdrop-blur-md transition-all duration-300">
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
              <Link
                href="/blog"
                className="text-sm tracking-[-0.04em] font-euclidCircularB text-zinc-400 hover:text-white transition-colors"
              >
                <span className="sm:inline">{t('nav.blog')}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Confirmation Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-xl w-full mx-auto px-6 py-16 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle size={64} className="text-white/80" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-satoshi tracking-[-0.03em] leading-tight mb-6">
            <span className="bg-gradient-to-r from-white/95 to-white/60 text-transparent bg-clip-text">
              Inscrição Confirmada!
            </span>
          </h1>
          
          <p className="text-white/80 text-lg mb-2">
            Obrigado por se inscrever em nossa newsletter.
          </p>
          
          <p className="text-zinc-400 mb-8">
            {email ? (
              <>Enviamos uma confirmação para <span className="text-white">{email}</span>.</>
            ) : (
              <>Enviamos uma confirmação para o seu email.</>
            )}
          </p>
          
          <div className="space-y-4">
            <p className="text-zinc-400 mb-6">
              Fique atento à sua caixa de entrada para receber as últimas novidades sobre IA, produtividade e o futuro do trabalho.
            </p>
            
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-euclidCircularB transition-all duration-300"
            >
              <span>Explorar Blog</span>
              <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Made by KRX */}
      <footer className="pb-8 text-center">
        <p className="text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-600">
          {t('home.madeBy')} <span className="text-zinc-500">krx</span>
        </p>
      </footer>
    </div>
  );
} 