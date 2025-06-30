'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ClinicGuardPage() {
  const [step, setStep] = useState(1)
  const [userType, setUserType] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const handleContinue = () => {
    setStep(2)
  }
  
  const handleUserTypeSelect = (type: string) => {
    setUserType(type)
    setStep(3)
  }
  
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (!email) {
      setError('Please enter your email')
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
          name: 'ClinicGuard Page User',
          email: email,
          whatsapp: '',
          audienceSize: userType,
          currentRevenue: '',
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
    <div className="min-h-screen bg-[#030303] text-white flex flex-col items-center justify-center px-4">
      <div className="max-w-3xl w-full space-y-8 text-center">
        {step === 1 && (
          <div className="space-y-8">
            <h1 className="text-3xl sm:text-4xl font-satoshi tracking-[-0.03em] leading-tight">
              ClinicGuard™ — Complete Security Solutions for the Medical Sector
            </h1>
            <div className="grid gap-6 text-left">
              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <h3 className="text-xl font-satoshi mb-3">🔐 Device Protection (Endpoints)</h3>
                <p className="text-white/70 mb-2">ClinicProtect™ - £9/month per device</p>
                <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                  <li>Next-gen antivirus (NGAV)</li>
                  <li>Ransomware prevention</li>
                  <li>Malicious app blocking</li>
                  <li>Smart firewall</li>
                  <li>Suspicious behavior monitoring</li>
                </ul>
              </div>
              
              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <h3 className="text-xl font-satoshi mb-3">📱 Mobile Security iOS/Android</h3>
                <p className="text-white/70 mb-2">ClinicMobile™ - £4.50/month per device</p>
                <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                  <li>Secure VPN for public Wi-Fi</li>
                  <li>Phishing protection</li>
                  <li>Remote lock and wipe</li>
                  <li>GDPR compliance reporting</li>
                  <li>Mobile device management (MDM)</li>
                </ul>
              </div>
              
              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <h3 className="text-xl font-satoshi mb-3">📧 Email Protection</h3>
                <p className="text-white/70 mb-2">ClinicMail™ - £1.80/month per mailbox</p>
                <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                  <li>Spam, phishing, and malware filtering</li>
                  <li>Dangerous link protection</li>
                  <li>Inbound/outbound email protection</li>
                  <li>Audit logs and reporting</li>
                  <li>Smart MX redirection</li>
                </ul>
              </div>
            </div>
            <button
              onClick={handleContinue}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-euclidCircularB transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-satoshi">What best describes your role?</h2>
            <div className="grid gap-4">
              <button
                onClick={() => handleUserTypeSelect('clinic_owner')}
                className="w-full px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-euclidCircularB transition-all duration-300"
              >
                Clinic Owner/Manager
              </button>
              <button
                onClick={() => handleUserTypeSelect('healthcare_professional')}
                className="w-full px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-euclidCircularB transition-all duration-300"
              >
                Healthcare Professional
              </button>
              <button
                onClick={() => handleUserTypeSelect('it_admin')}
                className="w-full px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-euclidCircularB transition-all duration-300"
              >
                IT Administrator
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-satoshi">Enter your email to receive detailed pricing and information:</h2>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
                disabled={loading}
              />
              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}
              <button
                type="submit"
                className={`w-full px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-euclidCircularB transition-all duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-satoshi">Thank you! We've sent the information to your email!</h2>
            <p className="text-white/70">
              Want to stay updated on the latest cybersecurity threats and protection strategies for healthcare?
            </p>
            <p className="text-white/70">
              Join our Healthcare Security Updates group:
            </p>
            <Link 
              href="https://chat.whatsapp.com/JjyQUiI5ATT7jVqFCWYzgH" 
              target="_blank"
              className="inline-block w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-euclidCircularB transition-all duration-300"
            >
              Join Group
            </Link>
          </div>
        )}
      </div>
    </div>
  )
} 