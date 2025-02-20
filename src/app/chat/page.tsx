'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { User, Bot } from 'lucide-react'

type Message = {
  id: number
  type: 'bot' | 'user'
  content: string
  options?: Array<{
    id: string
    text: string
    action?: () => void
  }>
}

const initialMessages: Message[] = [
  {
    id: 1,
    type: 'bot',
    content: 'Olá! eu sou a Jade da Korax Labs!'
  },
  {
    id: 2,
    type: 'bot',
    content: 'Deixa eu te apresentar a Korax e seus planos?',
    options: [
      { 
        id: 'yes',
        text: 'Claro, pode apresentar',
      },
      {
        id: 'no',
        text: 'Agora não'
      }
    ]
  }
]

const questions = [
  {
    id: 'name',
    question: 'Qual é o seu nome?',
    type: 'input'
  },
  {
    id: 'whatsapp',
    question: (name: string) => `Prazer, ${name}! 👋\n\nQual o seu whatsapp? para enviarmos as informações para você`,
    type: 'input',
    validate: (value: string) => {
      return {
        isValid: value.length > 8,
        confirmation: `Confirma que seu numero de whatsapp está correto? ${value}, é importante que esteja certo para que nosso time consiga falar com você!`,
        options: [
          { id: 'yes', text: 'Sim, está correto' },
          { id: 'no', text: 'Não, preciso corrigir' }
        ]
      }
    }
  },
  {
    id: 'email',
    question: 'Qual o seu e-mail mais utilizado?',
    type: 'input'
  },
  {
    id: 'role',
    question: 'Você é?',
    type: 'options',
    options: [
      { id: 'creator', text: 'Criador de Conteúdo' },
      { id: 'influencer', text: 'Influenciador' },
      { id: 'agency', text: 'Agência' },
      { id: 'other', text: 'Outro' }
    ]
  }
]

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [currentInput, setCurrentInput] = useState('')
  const [answers, setAnswers] = useState<{[key: string]: string}>({})
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const addMessage = (message: Message) => {
    setMessages(prev => [...prev, message])
  }

  const handleAnswer = (answer: string) => {
    // Add user message
    addMessage({
      id: messages.length + 1,
      type: 'user',
      content: answer
    })

    // Store answer
    const question = questions[currentQuestion]
    setAnswers(prev => ({
      ...prev,
      [question.id]: answer
    }))

    // If it needs validation
    if (question.validate) {
      const validation = question.validate(answer)
      if (validation.isValid) {
        setAwaitingConfirmation(true)
        // Add confirmation message
        setTimeout(() => {
          addMessage({
            id: messages.length + 2,
            type: 'bot',
            content: validation.confirmation,
            options: validation.options
          })
        }, 500)
        return
      }
    }

    proceedToNextQuestion()
  }

  const proceedToNextQuestion = () => {
    setAwaitingConfirmation(false)
    if (currentQuestion < questions.length - 1) {
      const nextQuestion = questions[currentQuestion + 1]
      setTimeout(() => {
        addMessage({
          id: messages.length + 2,
          type: 'bot',
          content: typeof nextQuestion.question === 'function' 
            ? nextQuestion.question(answers.name)
            : nextQuestion.question,
          options: nextQuestion.type === 'options' ? nextQuestion.options : undefined
        })
      }, 500)
      setCurrentQuestion(prev => prev + 1)
    } else {
      // Quiz finished
      router.push('/success')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentInput.trim()) return
    
    handleAnswer(currentInput)
    setCurrentInput('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-blue-950 to-zinc-900 text-white">
      <div className="relative max-w-2xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === 'user' ? 'bg-blue-500/20' : 'bg-indigo-500/20'
                }`}>
                  {message.type === 'user' ? <User size={14} /> : <Bot size={14} />}
                </div>
                <div className="space-y-4">
                  <div className={`p-4 rounded-2xl ${
                    message.type === 'user' 
                      ? 'bg-blue-500/20 rounded-tr-none' 
                      : 'bg-zinc-800/50 rounded-tl-none'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>
                  
                  {message.options && (
                    <div className="flex flex-wrap gap-2">
                      {message.options.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleAnswer(option.text)}
                          className="px-4 py-2 text-sm bg-zinc-800/50 hover:bg-zinc-700/50 rounded-full transition-colors"
                        >
                          {option.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form 
          onSubmit={handleSubmit}
          className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-zinc-900 via-zinc-900 to-transparent"
        >
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              placeholder="Digite sua resposta..."
              className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
              disabled={awaitingConfirmation || questions[currentQuestion]?.type === 'options'}
            />
          </div>
        </form>
      </div>
    </div>
  )
} 