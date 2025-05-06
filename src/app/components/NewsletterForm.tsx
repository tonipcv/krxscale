'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { useRouter } from 'next/navigation';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { t } = useLanguage();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validar email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Por favor, insira um email válido.');
      setLoading(false);
      return;
    }

    try {
      // Usando nossa rota de API interna
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      let data;
      try {
        const text = await response.text();
        if (text && text.trim()) {
          data = JSON.parse(text);
        }
      } catch (jsonError) {
        console.error('Erro ao analisar resposta JSON:', jsonError);
      }

      // Só redireciona se a API retornar sucesso
      if (data?.success) {
        router.push(`/newsletter/confirmation?email=${encodeURIComponent(email)}`);
        return;
      }
      
      // Se não teve sucesso, mostra o erro
      throw new Error(data?.error || `Erro ${response.status}: Não foi possível completar o cadastro`);
    } catch (err: any) {
      console.error('Erro ao cadastrar no newsletter:', err);
      setError(err.message || 'Ocorreu um erro ao cadastrar o email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-zinc-100 p-8 border border-zinc-200 rounded-sm">
      <div className="text-center space-y-6">
        <h3 className="text-2xl font-satoshi tracking-[-0.03em] text-zinc-800">{t('blog.newsletter')}</h3>
        <p className="text-zinc-600 font-euclidCircularB tracking-[-0.04em]">
          {t('blog.newsletterDesc')}
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mt-6">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('blog.yourEmail')}
            className="flex-grow px-4 py-3 bg-white border border-zinc-200 text-zinc-800 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-300"
            required
            disabled={loading}
          />
          <button 
            type="submit"
            className={`px-6 py-3 bg-zinc-800 hover:bg-zinc-900 border border-zinc-900 text-white font-euclidCircularB transition-all duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </span>
            ) : t('blog.subscribe')}
          </button>
        </form>
        
        {error && (
          <p className="text-sm text-red-500 mt-2">{error}</p>
        )}
        
        <p className="text-xs text-zinc-500 font-euclidCircularB tracking-[-0.04em]">
          {t('blog.noSpam')}
        </p>
      </div>
    </div>
  );
} 