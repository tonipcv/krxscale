/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useEffect } from 'react'
import Image from "next/image";
import { Target, Code, Rocket, Trophy, ArrowRight, MousePointer2, Sparkles } from "lucide-react";
import ContactForm from './components/ContactForm'

export default function Home() {
  const [showForm, setShowForm] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / maxScroll) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Cursor follower */}
      <div 
        className="fixed w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl pointer-events-none transition-transform duration-1000"
        style={{
          transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)`,
        }}
      />

      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-zinc-800 z-50">
        <div 
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed w-full top-0 border-b border-zinc-900 backdrop-blur-md z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group">
              <Image
                src="/logo.svg"
                alt="Korax Labs"
                width={40}
                height={40}
                className="group-hover:scale-110 transition-transform duration-300"
                priority
              />
              <span className="text-xl font-light tracking-wider">KORAX</span>
            </div>

            {/* Desktop CTA */}
            <div className="hidden sm:block">
              <button
                onClick={() => setShowForm(true)}
                className="group relative px-6 py-2 text-sm font-light overflow-hidden bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300"
              >
                <span className="relative z-10 text-white/90 group-hover:text-white transition-colors">COMECE AGORA!</span>
                <Sparkles className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-white/0 group-hover:text-white/50 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-blue-500/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </button>
            </div>

            {/* Mobile CTA */}
            <button 
              onClick={() => setShowForm(true)}
              className="sm:hidden px-4 py-2 text-sm font-light bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 rounded-sm"
            >
              <span className="text-white/90">COMECE AGORA!</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 relative">
        <main className="space-y-32 py-32 mt-16">
          {/* Hero Section */}
          <div className="text-center space-y-8 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent blur-3xl -z-10" />
            <h1 className="text-5xl sm:text-7xl font-extralight tracking-tight">
              Transforming<br />
              <span className="text-zinc-400 relative inline-block group">
                Influence
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-700" />
              </span> into <span className="text-zinc-400 relative inline-block group">
                Equity
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-700" />
              </span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
              We develop white-label software that transforms your audience into high-value digital assets and recurring revenue streams.
            </p>
          </div>

          {/* Abordagem Section */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Target,
                title: "Define",
                description: "We identify the perfect target for your digital product"
              },
              {
                icon: Code,
                title: "Develop",
                description: "We create tailored technological solutions"
              },
              {
                icon: Rocket,
                title: "Accelerate",
                description: "We boost your business growth"
              }
            ].map((item, index) => (
              <div 
                key={item.title}
                className="group p-10 border border-zinc-900 hover:border-zinc-800 transition-all duration-500 relative bg-gradient-to-b from-transparent to-zinc-900/30"
                style={{
                  transform: `translateY(${index * 20}px)`,
                  opacity: 0,
                  animation: `slideUp 0.5s ease-out ${index * 0.2}s forwards`
                }}
              >
                <item.icon size={28} className="text-zinc-500 mb-6 group-hover:text-white/80 transition-colors duration-300" strokeWidth={1} />
                <h3 className="text-xl font-light mb-4 tracking-wide group-hover:text-white transition-colors duration-300">{item.title}</h3>
                <p className="text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">{item.description}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-8 py-20 border-y border-zinc-900 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent blur-3xl -z-10" />
            <h2 className="text-3xl font-light tracking-wide">Ready to scale your brand?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
              If you have an audience and want to monetize it with innovative software, we can build that for you.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 text-sm font-light overflow-hidden bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300"
            >
              <span className="relative z-10 text-white/90 group-hover:text-white">START NOW!</span>
              <ArrowRight size={16} strokeWidth={1} className="relative z-10 text-white/90 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-blue-500/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </button>
          </div>
        </main>

        {showForm && <ContactForm onClose={() => setShowForm(false)} />}

        <footer className="py-8 text-center text-zinc-500 font-light text-sm tracking-wide">
          <p>© {new Date().getFullYear()} KORAX LABS. ALL RIGHTS RESERVED.</p>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
