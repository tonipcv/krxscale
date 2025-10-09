/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { X, Send, User, Mail, Phone, Building, Users, DollarSign, FileText, ChevronDown } from 'lucide-react'

interface ContactFormProps {
  onClose: () => void
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sector: '',
    employees: '',
    arr: '',
    needs: ''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      sector: formData.get('sector'),
      employees: formData.get('employees'),
      arr: formData.get('arr'),
      needs: formData.get('needs')
    }

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        router.push('/success')
      } else {
        throw new Error('Error sending form')
      }
    } catch (error) {
      toast.error('Error sending form. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/90 flex items-start sm:items-center justify-center p-0 sm:p-4 z-50 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <Toaster position="top-center" />
      
      <div className="bg-[#f5efe7] w-full h-full sm:h-auto sm:max-w-xl sm:rounded-lg border-y sm:border border-zinc-200 relative animate-slideUp">
        <div className="flex items-center gap-3 p-4 border-b border-zinc-200">
          <svg
            width="20"
            height="20"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#111111" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
              <line x1="128" y1="128" x2="256" y2="256" />
              <line x1="256" y1="256" x2="384" y2="128" />
              <line x1="256" y1="256" x2="128" y2="384" />
              <line x1="256" y1="256" x2="384" y2="384" />
              <line x1="256" y1="128" x2="256" y2="384" />
            </g>
          </svg>
          <span className="text-sm tracking-[-0.03em] font-satoshi text-zinc-800">Precision-built technology</span>
        </div>

        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-800 transition-colors"
        >
          <X size={20} className="stroke-[1.5]" />
        </button>
        
        <div className="p-4 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm text-zinc-600 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                <User size={14} className="text-zinc-500" />
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-zinc-100 border border-zinc-200 p-2.5 text-sm text-zinc-800 font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-zinc-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-zinc-600 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                <Mail size={14} className="text-zinc-500" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-zinc-100 border border-zinc-200 p-2.5 text-sm text-zinc-800 font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-zinc-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-zinc-600 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                <Phone size={14} className="text-zinc-500" />
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full bg-zinc-100 border border-zinc-200 p-2.5 text-sm text-zinc-800 font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-zinc-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-zinc-600 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                <Building size={14} className="text-zinc-500" />
                Industry
              </label>
              <div className="relative">
                <select
                  name="sector"
                  value={formData.sector}
                  onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                  required
                  className="w-full bg-zinc-100 border border-zinc-200 p-2.5 pr-8 text-sm text-zinc-800 font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-zinc-400 appearance-none"
                >
                  <option value="">Select</option>
                  <option value="Technology">Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Finance">Finance</option>
                  <option value="Retail">Retail</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Services">Services</option>
                  <option value="Other">Other</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-zinc-600 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                <Users size={14} className="text-zinc-500" />
                Number of employees
              </label>
              <div className="relative">
                <select
                  name="employees"
                  value={formData.employees}
                  onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                  required
                  className="w-full bg-zinc-100 border border-zinc-200 p-2.5 pr-8 text-sm text-zinc-800 font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-zinc-400 appearance-none"
                >
                  <option value="">Select</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501-1000">501-1000 employees</option>
                  <option value="1001+">More than 1000 employees</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-zinc-600 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                <DollarSign size={14} className="text-zinc-500" />
                Annual Revenue
              </label>
              <div className="relative">
                <select
                  name="arr"
                  value={formData.arr}
                  onChange={(e) => setFormData({ ...formData, arr: e.target.value })}
                  required
                  className="w-full bg-zinc-100 border border-zinc-200 p-2.5 pr-8 text-sm text-zinc-800 font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-zinc-400 appearance-none"
                >
                  <option value="">Select</option>
                  <option value="Less than $100k">Less than $100k</option>
                  <option value="$100k-$500k">$100k-$500k</option>
                  <option value="$500k-$1M">$500k-$1M</option>
                  <option value="$1M-$5M">$1M-$5M</option>
                  <option value="$5M-$10M">$5M-$10M</option>
                  <option value="$10M-$50M">$10M-$50M</option>
                  <option value="More than $50M">More than $50M</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-zinc-600 font-euclidCircularB tracking-[-0.04em] flex items-center gap-2">
                <FileText size={14} className="text-zinc-500" />
                What are your needs?
              </label>
              <textarea
                name="needs"
                value={formData.needs}
                onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                className="w-full bg-zinc-100 border border-zinc-200 p-2.5 text-sm text-zinc-800 font-euclidCircularB tracking-[-0.04em] focus:outline-none focus:border-zinc-400 h-24 resize-none"
                required
              />
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