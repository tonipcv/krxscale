'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function ClinicGuardPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clinic: '',
    role: '',
    patients: '',
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
          clinic: formData.clinic,
          role: formData.role,
          patientVolume: formData.patients,
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
                        ClinicGuard™
                      </span>
                    </h1>
                    <p className="mt-6 sm:mt-8 text-zinc-600 text-sm sm:text-base md:text-lg font-euclidCircularB tracking-[-0.04em] max-w-3xl mx-auto px-2">
                      Comprehensive cybersecurity and automated backup solution for medical clinics, practices, and healthcare professionals in the UK and Europe
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
                    <div className="p-6 bg-white border border-zinc-200 hover:border-zinc-300 transition-all duration-300">
                      <h3 className="text-xl font-satoshi mb-3">Automated Backup</h3>
                      <p className="text-zinc-600 text-sm space-y-1 mb-4">SecureVault™</p>
                      <p className="text-zinc-500 text-sm mb-4">
                        Automated, encrypted backup system designed specifically for medical practices and patient data.
                      </p>
                      <ul className="text-zinc-500 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Real-time Backup:</span>
                          <span>Continuous data protection with instant encryption and secure cloud storage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Smart Recovery:</span>
                          <span>Quick restoration of patient records and clinic data with version history</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Data Verification:</span>
                          <span>Automated integrity checks and backup validation</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-6 bg-white border border-zinc-200 hover:border-zinc-300 transition-all duration-300">
                      <h3 className="text-xl font-satoshi mb-3">Ransomware Protection</h3>
                      <p className="text-zinc-600 text-sm space-y-1 mb-4">ClinicShield™</p>
                      <p className="text-zinc-500 text-sm mb-4">
                        Advanced protection against ransomware and cyber threats targeting healthcare providers.
                      </p>
                      <ul className="text-zinc-500 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Active Defense:</span>
                          <span>Real-time monitoring and blocking of ransomware attempts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">File Protection:</span>
                          <span>Prevents unauthorized encryption of medical records</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Instant Recovery:</span>
                          <span>Immediate system restoration if an attack occurs</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-6 bg-white border border-zinc-200 hover:border-zinc-300 transition-all duration-300">
                      <h3 className="text-xl font-satoshi mb-3">Monitoring Dashboard</h3>
                      <p className="text-zinc-600 text-sm space-y-1 mb-4">ClinicView™</p>
                      <p className="text-zinc-500 text-sm mb-4">
                        Intuitive monitoring dashboard for clinic owners and healthcare professionals.
                      </p>
                      <ul className="text-zinc-500 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Real-time Status:</span>
                          <span>Live monitoring of backup status and security threats</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Usage Analytics:</span>
                          <span>Track data usage, access patterns, and security events</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Mobile Access:</span>
                          <span>Secure access to dashboard from any device</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 bg-white border border-zinc-200 hover:border-zinc-300 transition-all duration-300">
                      <h3 className="text-xl font-satoshi mb-3">Compliance Management</h3>
                      <p className="text-zinc-600 text-sm space-y-1 mb-4">ComplianceGuard™</p>
                      <p className="text-zinc-500 text-sm mb-4">
                        Comprehensive compliance tools for GDPR, HIPAA, and local healthcare regulations.
                      </p>
                      <ul className="text-zinc-500 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Compliance Tracking:</span>
                          <span>Automated monitoring of regulatory requirements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Audit Reports:</span>
                          <span>Generate compliance reports with one click</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Policy Updates:</span>
                          <span>Stay current with changing healthcare regulations</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 bg-white border border-zinc-200 hover:border-zinc-300 transition-all duration-300">
                      <h3 className="text-xl font-satoshi mb-3">Access Control</h3>
                      <p className="text-zinc-600 text-sm space-y-1 mb-4">StaffGuard™</p>
                      <p className="text-zinc-500 text-sm mb-4">
                        Secure access management system for healthcare staff and practitioners.
                      </p>
                      <ul className="text-zinc-500 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Role Management:</span>
                          <span>Granular access controls based on staff roles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Activity Logs:</span>
                          <span>Detailed tracking of all data access and changes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Secure Login:</span>
                          <span>Multi-factor authentication for all staff members</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 bg-white border border-zinc-200 hover:border-zinc-300 transition-all duration-300">
                      <h3 className="text-xl font-satoshi mb-3">Training & Support</h3>
                      <p className="text-zinc-600 text-sm space-y-1 mb-4">ClinicLearn™</p>
                      <p className="text-zinc-500 text-sm mb-4">
                        Comprehensive training and 24/7 support for your medical practice.
                      </p>
                      <ul className="text-zinc-500 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Staff Training:</span>
                          <span>Online security awareness courses for healthcare staff</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">24/7 Support:</span>
                          <span>Round-the-clock technical assistance and emergency response</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Resource Center:</span>
                          <span>Access to guides, best practices, and security updates</span>
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
                          <h2 className="text-2xl font-satoshi text-zinc-800">Get Started with ClinicGuard™</h2>
                          <p className="mt-2 text-zinc-500 text-sm">
                            Fill out the form below and our healthcare security specialists will contact you within 24 hours.
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
                                placeholder="Dr. John Smith"
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
                                placeholder="john@clinic.com"
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
                                placeholder="+44 20 1234 5678"
                              />
                            </div>

                            <div>
                              <label htmlFor="clinic" className="block text-sm font-medium text-zinc-700 mb-1">
                                Clinic Name
                              </label>
                              <input
                                type="text"
                                id="clinic"
                                name="clinic"
                                value={formData.clinic}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 bg-white border border-zinc-200 text-zinc-800 text-sm rounded-md placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200"
                                placeholder="Smith Medical Practice"
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
                                <option value="owner">Clinic Owner</option>
                                <option value="doctor">Doctor / Physician</option>
                                <option value="manager">Practice Manager</option>
                                <option value="it">IT Manager</option>
                                <option value="admin">Administrator</option>
                                <option value="other">Other</option>
                              </select>
                            </div>

                            <div>
                              <label htmlFor="patients" className="block text-sm font-medium text-zinc-700 mb-1">
                                Monthly Patients
                              </label>
                              <select
                                id="patients"
                                name="patients"
                                value={formData.patients}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 bg-white border border-zinc-200 text-zinc-800 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-200"
                              >
                                <option value="">Select patient volume</option>
                                <option value="1-50">1-50 patients</option>
                                <option value="51-200">51-200 patients</option>
                                <option value="201-500">201-500 patients</option>
                                <option value="501-1000">501-1000 patients</option>
                                <option value="1000+">1000+ patients</option>
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
                              placeholder="Tell us about your clinic's security needs..."
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
                    Stay updated with the latest in healthcare cybersecurity and compliance updates.
                  </p>
                  <p className="text-zinc-600">
                    Join our Healthcare Security Network:
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