'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/app/components/LanguageProvider';

// Componente que usa useSearchParams dentro do Suspense
export default function NewsletterConfirmationContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';
  const { t } = useLanguage();

  return (
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
  );
} 