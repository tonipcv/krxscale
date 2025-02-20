'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Instagram, User, Mail, Phone } from 'lucide-react'

const questions = [
  {
    id: 1,
    type: 'contact',
    question: "What's your name?",
    field: 'name',
    icon: <User size={20} className="text-zinc-500" />,
    placeholder: 'Your full name'
  },
  {
    id: 2,
    type: 'contact',
    question: "What's your Instagram?",
    field: 'instagram',
    icon: <Instagram size={20} className="text-zinc-500" />,
    placeholder: '@yourusername'
  },
  {
    id: 3,
    type: 'contact',
    question: "What's your email?",
    field: 'email',
    icon: <Mail size={20} className="text-zinc-500" />,
    placeholder: 'you@example.com'
  },
  {
    id: 4,
    type: 'contact',
    question: "What's your phone number?",
    field: 'phone',
    icon: <Phone size={20} className="text-zinc-500" />,
    placeholder: 'Your WhatsApp number'
  },
  {
    id: 5,
    type: 'select',
    question: "Best way to contact you?",
    options: [
      { id: 'whatsapp', text: 'WhatsApp' },
      { id: 'email', text: 'Email' },
      { id: 'instagram', text: 'Instagram DM' },
      { id: 'call', text: 'Phone Call' }
    ]
  }
]

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{[key: string]: string}>({})
  const router = useRouter()

  const handleInputAnswer = (field: string, value: string) => {
    if (!value.trim()) return // Don't proceed if empty

    setAnswers(prev => ({
      ...prev,
      [field]: value
    }))
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      router.push('/?showForm=true')
    }
  }

  const handleSelectAnswer = (optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      preferredContact: optionId
    }))
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      router.push('/?showForm=true')
    }
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-blue-950 to-zinc-900 text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-indigo-600/10 blur-3xl -z-10" />
        
        <div className="max-w-3xl mx-auto px-6 pt-32 pb-16">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-zinc-800 rounded-full mb-12 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-2">
                Question <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 text-transparent bg-clip-text">{currentQuestion + 1}</span>
              </h2>
              <p className="text-2xl text-zinc-200 font-light">
                {question.question}
              </p>
            </div>

            {question.type === 'contact' ? (
              <div className="max-w-xl">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    {question.icon}
                  </div>
                  <input
                    type={question.field === 'email' ? 'email' : 'text'}
                    placeholder={question.placeholder}
                    className="w-full bg-zinc-900/50 border border-zinc-800/50 pl-12 pr-4 py-4 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-800/50 focus:ring-1 focus:ring-blue-800/50 transition-all"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleInputAnswer(question.field, e.currentTarget.value)
                      }
                    }}
                    onBlur={(e) => handleInputAnswer(question.field, e.target.value)}
                  />
                </div>
                <p className="text-sm text-zinc-500 mt-2">Press Enter to continue</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {question.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSelectAnswer(option.id)}
                    className="p-6 text-left border border-zinc-800/50 hover:border-zinc-700 rounded-lg bg-gradient-to-b from-transparent to-zinc-900/30 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg text-zinc-200">{option.text}</span>
                      <ArrowRight size={16} className="text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            )}

            <div className="text-sm text-zinc-500 text-center">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 