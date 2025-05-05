'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/app/components/LanguageProvider';
import NewsletterConfirmationContent from './NewsletterConfirmationContent';

// Componente pai com Suspense
export default function NewsletterConfirmationPage() {
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

      {/* Confirmation Content - com Suspense */}
      <Suspense fallback={
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-xl w-full mx-auto px-6 py-16 text-center">
            <div className="animate-pulse">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/10 rounded-full"></div>
              </div>
              <div className="h-8 bg-white/10 rounded-sm mb-6 max-w-sm mx-auto"></div>
              <div className="h-5 bg-white/5 rounded-sm mb-2 max-w-xs mx-auto"></div>
              <div className="h-5 bg-white/5 rounded-sm mb-8 max-w-sm mx-auto"></div>
            </div>
          </div>
        </div>
      }>
        <NewsletterConfirmationContent />
      </Suspense>

      {/* Made by KRX */}
      <footer className="pb-8 text-center">
        <p className="text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-600">
          {t('home.madeBy')} <span className="text-zinc-500">krx</span>
        </p>
      </footer>
    </div>
  );
} 