'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function KRXProtectPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    employees: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const handleContinue = () => {
    setStep(2)
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill in all required fields')
      setLoading(false)
      return
    }
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          whatsapp: formData.phone,
          company: formData.company,
          role: formData.role,
          audienceSize: formData.employees,
          message: formData.message
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Error saving data');
      }
      
      setStep(4);
    } catch (err: any) {
      console.error('Error saving lead:', err);
      setError(err.message || 'An error occurred while processing your request');
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-zinc-800 overflow-hidden">
      <nav className="fixed w-full top-0 border-b border-zinc-200 backdrop-blur-md z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center group">
              <svg
                width="36"
                height="36"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:scale-110 transition-transform duration-300"
              >
                <g stroke="#111111" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="128" y1="128" x2="256" y2="256" />
                  <line x1="256" y1="256" x2="384" y2="128" />
                  <line x1="256" y1="256" x2="128" y2="384" />
                  <line x1="256" y1="256" x2="384" y2="384" />
                  <line x1="256" y1="128" x2="256" y2="384" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-5 relative">
        <main className="pt-24 min-h-screen flex flex-col">
          <div className="flex-1 flex items-center justify-center pt-12 sm:pt-16">
            <div className="text-center space-y-6 sm:space-y-8 relative">
              <div className="absolute inset-0 bg-zinc-100 blur-3xl -z-10" />
              
              {step === 1 && (
          <div className="space-y-8">
                  <div>
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-satoshi tracking-[-0.03em] leading-[1.1] sm:leading-tight">
                      <span className="bg-gradient-to-r from-zinc-800/95 to-zinc-600/80 text-transparent bg-clip-text">
                        KRXProtect™
                      </span>
                    </h1>
                    <p className="mt-6 sm:mt-8 text-zinc-600 text-sm sm:text-base md:text-lg font-euclidCircularB tracking-[-0.04em] max-w-3xl mx-auto px-2">
                      Advanced security solutions for modern enterprises, protecting your digital assets with AI-powered defense systems
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
                    <div className="p-6 bg-white border border-zinc-200 hover:border-zinc-300 transition-all duration-300">
                      <h3 className="text-xl font-satoshi mb-3">Endpoint Protection</h3>
                      <p className="text-zinc-600 text-sm space-y-1 mb-4">KRXShield™</p>
                      <p className="text-zinc-500 text-sm mb-4">
                        Comprehensive endpoint security that protects all your devices with AI-powered threat detection and automated response.
                      </p>
                      <ul className="text-zinc-500 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Next-gen Antivirus:</span>
                          <span>Real-time protection against malware, ransomware, and zero-day threats</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Behavioral Analysis:</span>
                          <span>Continuous monitoring of all processes to detect and block suspicious activities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Smart Firewall:</span>
                          <span>Adaptive network protection with automatic policy enforcement</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-6 bg-white border border-zinc-200 hover:border-zinc-300 transition-all duration-300">
                      <h3 className="text-xl font-satoshi mb-3">Mobile Security</h3>
                      <p className="text-zinc-600 text-sm space-y-1 mb-4">KRXMobile™</p>
                      <p className="text-zinc-500 text-sm mb-4">
                        Enterprise-grade mobile security platform that ensures your workforce can work safely from any device, anywhere.
                      </p>
                      <ul className="text-zinc-500 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Enterprise VPN:</span>
                          <span>Secure, encrypted connections for remote work with automatic tunneling</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Device Management:</span>
                          <span>Centralized control for app deployment, updates, and security policies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Container Security:</span>
                          <span>Isolated workspace for corporate data with zero-trust access control</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-6 bg-white border border-zinc-200 hover:border-zinc-300 transition-all duration-300">
                      <h3 className="text-xl font-satoshi mb-3">Email Security</h3>
                      <p className="text-zinc-600 text-sm space-y-1 mb-4">KRXMail™</p>
                      <p className="text-zinc-500 text-sm mb-4">
                        Advanced email protection system that guards against sophisticated phishing attacks and data loss.
                      </p>
                      <ul className="text-zinc-500 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="font-medium">AI Detection:</span>
                          <span>Machine learning algorithms that identify and block advanced threats in real-time</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">DLP Controls:</span>
                          <span>Prevent sensitive data leaks with smart content analysis and policy controls</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Smart Policies:</span>
                          <span>Automated enforcement of security rules based on user behavior and content</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 bg-white border border-zinc-200 hover:border-zinc-300 transition-all duration-300">
                      <h3 className="text-xl font-satoshi mb-3">Security Operations</h3>
                      <p className="text-zinc-600 text-sm space-y-1 mb-4">KRXOps™</p>
                      <p className="text-zinc-500 text-sm mb-4">
                        24/7 security monitoring and response center that combines human expertise with AI for comprehensive protection.
                      </p>
                      <ul className="text-zinc-500 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Continuous Monitoring:</span>
                          <span>Round-the-clock surveillance of your entire network and security infrastructure</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Incident Response:</span>
                          <span>Automated threat containment and expert-led investigation of security incidents</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Analytics Platform:</span>
                          <span>Advanced security metrics and threat intelligence with actionable insights</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 bg-white border border-zinc-200 hover:border-zinc-300 transition-all duration-300">
                      <h3 className="text-xl font-satoshi mb-3">Cloud Protection</h3>
                      <p className="text-zinc-600 text-sm space-y-1 mb-4">KRXCloud™</p>
                      <p className="text-zinc-500 text-sm mb-4">
                        Cloud-native security platform that ensures your cloud infrastructure is protected across all environments.
                      </p>
                      <ul className="text-zinc-500 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Workload Security:</span>
                          <span>Automated protection for cloud servers, containers, and serverless functions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Container Defense:</span>
                          <span>Security scanning and runtime protection for containerized applications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Data Protection:</span>
                          <span>Encryption and access controls for cloud storage and databases</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 bg-white border border-zinc-200 hover:border-zinc-300 transition-all duration-300">
                      <h3 className="text-xl font-satoshi mb-3">Risk & Compliance</h3>
                      <p className="text-zinc-600 text-sm space-y-1 mb-4">KRXRisk™</p>
                      <p className="text-zinc-500 text-sm mb-4">
                        Comprehensive risk management and compliance automation platform for modern enterprises.
                      </p>
                      <ul className="text-zinc-500 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Risk Assessment:</span>
                          <span>Continuous evaluation of security posture with vulnerability scanning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Compliance Tools:</span>
                          <span>Automated compliance monitoring for GDPR, HIPAA, SOC 2, and more</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Security Metrics:</span>
                          <span>Real-time scoring and benchmarking of your security program</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 sm:pt-8 pb-16 sm:pb-20 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                      onClick={handleContinue}
                      className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-euclidCircularB tracking-[-0.04em] overflow-hidden bg-zinc-800 hover:bg-zinc-900 border border-zinc-900 transition-all duration-300"
                    >
                      <span className="relative z-10 text-white/90">Get Started</span>
              </button>
            </div>
          </div>
        )}

              {step === 2 && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                  <div className="bg-white rounded-lg w-full max-w-xl relative">
                    <button
                      onClick={() => setStep(1)}
                      className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-600 transition-colors"
                    >
                      <X size={24} />
                    </button>
                    
                    <div className="p-6 sm:p-8">
          <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-satoshi text-zinc-800">Get Started with KRXProtect™</h2>
                          <p className="mt-2 text-zinc-500 text-sm">
                            Fill out the form below and our team will get back to you within 24 hours.
                          </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                              <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">
                                Full Name *
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 bg-white border border-zinc-200 text-zinc-800 text-sm rounded-md placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200"
                                placeholder="John Doe"
                              />
                            </div>

                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
                                Work Email *
                              </label>
              <input
                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 bg-white border border-zinc-200 text-zinc-800 text-sm rounded-md placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200"
                                placeholder="john@company.com"
                              />
                            </div>
                          </div>

                          <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                              <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1">
                                Phone Number *
                              </label>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                required
                                className="w-full px-4 py-2 bg-white border border-zinc-200 text-zinc-800 text-sm rounded-md placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200"
                                placeholder="+1 (555) 000-0000"
                              />
                            </div>

                            <div>
                              <label htmlFor="company" className="block text-sm font-medium text-zinc-700 mb-1">
                                Company Name
                              </label>
                              <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 bg-white border border-zinc-200 text-zinc-800 text-sm rounded-md placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200"
                                placeholder="Company Inc."
                              />
                            </div>
                          </div>

                          <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                              <label htmlFor="role" className="block text-sm font-medium text-zinc-700 mb-1">
                                Your Role
                              </label>
                              <select
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 bg-white border border-zinc-200 text-zinc-800 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-200"
                              >
                                <option value="">Select your role</option>
                                <option value="ceo">CEO / Founder</option>
                                <option value="cto">CTO / Technical Lead</option>
                                <option value="ciso">CISO / Security Lead</option>
                                <option value="manager">IT Manager</option>
                                <option value="engineer">Security Engineer</option>
                                <option value="other">Other</option>
                              </select>
                            </div>

                            <div>
                              <label htmlFor="employees" className="block text-sm font-medium text-zinc-700 mb-1">
                                Company Size
                              </label>
                              <select
                                id="employees"
                                name="employees"
                                value={formData.employees}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 bg-white border border-zinc-200 text-zinc-800 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-200"
                              >
                                <option value="">Select company size</option>
                                <option value="1-10">1-10 employees</option>
                                <option value="11-50">11-50 employees</option>
                                <option value="51-200">51-200 employees</option>
                                <option value="201-500">201-500 employees</option>
                                <option value="501-1000">501-1000 employees</option>
                                <option value="1000+">1000+ employees</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">
                              Additional Information
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              rows={3}
                              className="w-full px-4 py-2 bg-white border border-zinc-200 text-zinc-800 text-sm rounded-md placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200 resize-none"
                              placeholder="Tell us about your security needs..."
                            />
                          </div>

              {error && (
                            <p className="text-red-500 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                            className={`w-full px-8 py-3 bg-zinc-800 hover:bg-zinc-900 text-white text-sm font-medium rounded-md transition-all duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                            {loading ? 'Sending...' : 'Submit Request'}
              </button>

                          <p className="text-xs text-zinc-500 text-center">
                            By submitting this form, you agree to our privacy policy and terms of service.
                          </p>
            </form>
                      </div>
                    </div>
                  </div>
          </div>
        )}

        {step === 4 && (
                <div className="space-y-8 max-w-xl mx-auto">
                  <h2 className="text-2xl font-satoshi text-zinc-800">Thank you! We've sent the information to your email!</h2>
                  <p className="text-zinc-600">
                    Stay updated with the latest in enterprise security and threat intelligence.
                  </p>
                  <p className="text-zinc-600">
                    Join our Security Intelligence Network:
            </p>
            <Link 
              href="https://chat.whatsapp.com/JjyQUiI5ATT7jVqFCWYzgH" 
              target="_blank"
                    className="inline-block w-full sm:w-auto px-8 py-4 bg-zinc-800 hover:bg-zinc-900 text-white font-euclidCircularB transition-all duration-300"
            >
                    Join Network
            </Link>
          </div>
        )}
            </div>
          </div>

          <div className="pb-8 text-center">
            <p className="text-xs font-euclidCircularB tracking-[-0.04em] text-zinc-400">
              Made by <span className="text-zinc-600">krx</span>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
} 