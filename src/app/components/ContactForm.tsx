/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { X, Send, User, Building, Briefcase, DollarSign, Globe, Flag, MapPin, Target, ChevronDown } from 'lucide-react'

interface ContactFormProps {
  onClose: () => void
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    arr: '',
    markets: '',
    isUS: 'yes',
    country: '',
    intent: ''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = new FormData(e.currentTarget)
    const data = {
      name: form.get('name'),
      company: form.get('company'),
      role: form.get('role'),
      arr: form.get('arr'),
      markets: form.get('markets'),
      isUS: form.get('isUS') === 'yes',
      country: form.get('isUS') === 'no' ? (form.get('country') as string) : null,
      intent: form.get('intent')
    }

    try {
      const response = await fetch('/api/signups', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
        setIsSubmitting(false)
      } else {
        throw new Error('Error sending form')
      }
    } catch (error) {
      toast.error('Error sending form. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-[#f5efe7] flex items-start sm:items-center justify-center p-0 sm:p-4 z-50 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <Toaster position="top-center" />
      
      <div className="bg-[#f5efe7] w-full h-full sm:h-auto sm:max-w-xl sm:rounded-lg border-y sm:border border-zinc-300 relative animate-slideUp">
        <div className="flex items-center gap-3 p-4 border-b border-zinc-300 group">
          <img
            src="/logo.png"
            alt="KRX Labs Logo"
            width={32}
            height={32}
            className="w-5 h-5 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-300 invert"
          />
        </div>

        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-zinc-500 hover:text-zinc-700 transition-colors"
        >
          <X size={20} className="stroke-[1.5]" />
        </button>
        
        <div className="p-4 sm:p-8">
          {submitted ? (
            <div className="space-y-4 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-emerald-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-satoshi text-zinc-800 tracking-[-0.03em]">Request received</h3>
              <p className="text-sm text-zinc-600 font-euclidCircularB tracking-[-0.04em]">Well reach out shortly. You can close this window.</p>
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm rounded-full bg-zinc-900 text-white hover:bg-black transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm text-zinc-700 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                <User size={14} className="text-zinc-400" />
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Your full name"
                className="w-full bg-white border border-zinc-300 p-2.5 text-sm text-zinc-800 placeholder:text-zinc-400 font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-zinc-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-zinc-700 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                <Building size={14} className="text-zinc-400" />
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                required
                placeholder="Company name"
                className="w-full bg-white border border-zinc-300 p-2.5 text-sm text-zinc-800 placeholder:text-zinc-400 font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-zinc-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-zinc-700 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                <Briefcase size={14} className="text-zinc-400" />
                Role
              </label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                required
                placeholder="Your role (e.g. CTO)"
                className="w-full bg-white border border-zinc-300 p-2.5 text-sm text-zinc-800 placeholder:text-zinc-400 font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-zinc-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-zinc-700 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                <DollarSign size={14} className="text-zinc-400" />
                Annual Revenue
              </label>
              <div className="relative">
                <select
                  name="arr"
                  value={formData.arr}
                  onChange={(e) => setFormData({ ...formData, arr: e.target.value })}
                  required
                  className="w-full bg-white border border-zinc-300 p-2.5 pr-8 text-sm text-zinc-800 font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-zinc-500 appearance-none"
                >
                  <option value="" disabled hidden>Select...</option>
                  <option value="Less than $100k">Less than $100k</option>
                  <option value="$100k-$500k">$100k-$500k</option>
                  <option value="$500k-$1M">$500k-$1M</option>
                  <option value="$1M-$5M">$1M-$5M</option>
                  <option value="$5M-$10M">$5M-$10M</option>
                  <option value="$10M-$50M">$10M-$50M</option>
                  <option value=">$50M">More than $50M</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-zinc-700 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                <Globe size={14} className="text-zinc-400" />
                Markets you sell in
              </label>
              <div className="relative">
                <select
                  name="markets"
                  value={formData.markets}
                  onChange={(e) => setFormData({ ...formData, markets: e.target.value })}
                  required
                  className="w-full bg-white border border-zinc-300 p-2.5 pr-8 text-sm text-zinc-800 font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-zinc-500 appearance-none"
                >
                  <option value="" disabled hidden>Select...</option>
                  <option value="asia">Asia</option>
                  <option value="latam">LATAM</option>
                  <option value="africa">Africa</option>
                  <option value="all">All of the above</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-zinc-700 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                <Flag size={14} className="text-zinc-400" />
                Is it a US company?
              </label>
              <div className="relative">
                <select
                  name="isUS"
                  value={formData.isUS}
                  onChange={(e) => setFormData({ ...formData, isUS: e.target.value })}
                  required
                  className="w-full bg-white border border-zinc-300 p-2.5 pr-8 text-sm text-zinc-800 font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-zinc-500 appearance-none"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
              </div>
            </div>

            {formData.isUS === 'no' && (
              <div className="space-y-1.5">
                <label className="text-sm text-zinc-700 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                  <MapPin size={14} className="text-zinc-400" />
                  If not, which country?
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  required={formData.isUS === 'no'}
                  placeholder="Country"
                  className="w-full bg-white border border-zinc-300 p-2.5 text-sm text-zinc-800 placeholder:text-zinc-400 font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-zinc-500"
                />
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-sm text-zinc-700 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                <Target size={14} className="text-zinc-400" />
                What do you want?
              </label>
              <div className="relative">
                <select
                  name="intent"
                  value={formData.intent}
                  onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                  required
                  className="w-full bg-white border border-zinc-300 p-2.5 pr-8 text-sm text-zinc-800 font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-zinc-500 appearance-none"
                >
                  <option value="" disabled hidden>Select...</option>
                  <option value="sell_local_methods">Sell and accept local methods and increase conversion in days</option>
                  <option value="improve_local_rates">Improve local operation rates I already do today</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-euclidCircularB tracking-[-0.04em] overflow-hidden bg-zinc-800 hover:bg-zinc-900 border border-zinc-900 transition-all duration-300 rounded-full"
            >
              <span className="relative z-10 text-white/90">
                {isSubmitting ? 'SENDING...' : 'SUBMIT'}
              </span>
              <Send size={14} strokeWidth={1.5} className="relative z-10 text-white/70 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  )
} 