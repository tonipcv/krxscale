'use client'

import { useState } from 'react'
import { ArrowRight } from "lucide-react"
import Link from 'next/link'

interface Transcript {
  text: string
  duration: number
  offset: number
  lang?: string
}

export default function YoutubePage() {
  const [url, setUrl] = useState('')
  const [transcript, setTranscript] = useState<Transcript[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setTranscript([])

    try {
      // Clean the URL first
      const cleanUrl = url.trim()
      console.log('Processing URL:', cleanUrl)

      // Extract video ID from various URL formats
      let videoId = ''
      
      // Handle different URL formats
      if (cleanUrl.includes('youtube.com/watch?v=')) {
        videoId = cleanUrl.split('v=')[1]?.split('&')[0] || ''
      } else if (cleanUrl.includes('youtu.be/')) {
        videoId = cleanUrl.split('youtu.be/')[1]?.split('?')[0] || ''
      } else if (cleanUrl.includes('youtube.com/embed/')) {
        videoId = cleanUrl.split('embed/')[1]?.split('?')[0] || ''
      } else {
        // Try to extract from the last part of the URL
        videoId = cleanUrl.split('/').pop()?.split('?')[0] || ''
      }
      
      console.log('Extracted video ID:', videoId)

      if (!videoId) {
        throw new Error('URL inválida. Por favor, insira uma URL do YouTube válida.')
      }

      // Call our Python API
      const response = await fetch('/api/transcript', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ video_id: videoId }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'Erro ao obter a transcrição')
      }

      const data = await response.json()
      setTranscript(data.transcript)
    } catch (err) {
      console.error('Error in handleSubmit:', err)
      if (err instanceof Error) {
        setError(`Erro ao obter a transcrição: ${err.message}`)
      } else {
        setError('Não foi possível obter a transcrição. Verifique se o vídeo tem legendas disponíveis e se a URL está correta.')
      }
    } finally {
      setLoading(false)
    }
  }

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
        <main className="min-h-screen flex flex-col">
          {/* Hero Section */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-6 relative -mt-20">
              <div className="absolute inset-0 bg-white/[0.02] blur-3xl -z-10" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-satoshi tracking-[-0.03em] leading-[1.2] sm:leading-tight max-w-3xl mx-auto">
                <span className="text-white/90 relative inline-block group">
                  Transcrição de Vídeos
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white/20 group-hover:w-full transition-all duration-700" />
                </span>
                <br />
                <span className="text-white/80">do YouTube</span>
              </h1>

              {/* URL Form */}
              <div className="pt-6">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Cole a URL do vídeo do YouTube"
                    required
                    className="w-full sm:flex-[0.7] px-6 py-4 bg-white/5 border border-white/10 text-white placeholder-white/40 text-base font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-white/20"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:flex-[0.3] group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-euclidCircularB tracking-[-0.04em] overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 text-white/90">
                      {loading ? 'CARREGANDO...' : 'TRANSCREVER'}
                    </span>
                    <ArrowRight size={16} strokeWidth={1.5} className="relative z-10 text-white/70 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-red-400 text-sm font-euclidCircularB tracking-[-0.04em] mt-4">
                  {error}
                </p>
              )}

              {/* Transcript */}
              {transcript.length > 0 && (
                <div className="mt-8 max-w-3xl mx-auto text-left">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
                    {transcript.map((item, index) => (
                      <p key={index} className="text-white/80 text-base font-euclidCircularB tracking-[-0.04em] leading-relaxed">
                        {item.text}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Made by KRX */}
          <div className="pb-8 text-center">
            <p className="text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-600">
              made by <span className="text-zinc-500">krx</span>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
} 