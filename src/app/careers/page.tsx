'use client'

import Link from 'next/link'
import { ArrowLeft, MapPin, DollarSign, ArrowRight } from 'lucide-react'

const jobs = [
  {
    title: 'Python Developer',
    department: 'IT',
    location: 'Abu Dhabi',
    salary: '$15,000 / Month',
    description: [
      'Proficient in Python, with knowledge of at least one Python web framework (e.g., Django, Flask).',
      'Understanding of server-side templating languages and front-end technologies.',
      'Familiarity with ORM (Object Relational Mapping) libraries.',
      'Able to integrate multiple data sources and databases into one system.',
      'Excellent problem-solving skills and teamwork abilities.'
    ]
  },
  {
    title: 'UI Developer',
    department: 'Design',
    location: 'Abu Dhabi',
    salary: '$8,000 / Month',
    description: [
      'Proven UI/UX design experience with a strong portfolio.',
      'Proficiency in visual design and wireframing tools (e.g., Adobe XD, Sketch, Figma).',
      'Excellent visual design skills with sensitivity to user-system interaction.',
      'Ability to solve problems creatively and effectively.',
      'Up-to-date with the latest UI trends, techniques, and technologies.'
    ]
  },
  {
    title: 'Fraud Analysis',
    department: 'Risk',
    location: 'Abu Dhabi',
    salary: '$5,000 / Month',
    description: [
      'Experience in data analysis, risk management, or fraud detection.',
      'Strong analytical skills and proficiency in using data analysis tools (e.g., SQL, Excel).',
      'Excellent attention to detail and the ability to identify patterns and anomalies.',
      'Strong communication skills and the ability to work collaboratively in a team environment.',
      'A bachelor\'s degree in Finance, Criminal Justice, Data Science, or a related field is preferred.'
    ]
  }
]

export default function Careers() {
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      {/* Navbar */}
      <nav className="fixed w-full top-0 border-b border-white/5 backdrop-blur-md z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
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
            </Link>

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

      {/* Header */}
      <div className="relative pt-32">
        <div className="absolute inset-0 bg-white/[0.02] blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
          
          <h1 className="text-7xl sm:text-8xl font-satoshi tracking-[-0.03em] leading-[1.1] sm:leading-tight mb-6">
            <span className="text-white/90 relative inline-block group">
              Join
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white/20 group-hover:w-full transition-all duration-700" />
            </span>
            <br />
            <span className="text-white/80">the Future</span>
          </h1>
        </div>
      </div>

      {/* Jobs grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid gap-8">
          {jobs.map((job, index) => (
            <div 
              key={job.title}
              className="group p-8 border border-white/5 hover:border-white/10 transition-all duration-500 relative bg-white/[0.02]"
              style={{
                transform: `translateY(${index * 20}px)`,
                opacity: 0,
                animation: `slideUp 0.5s ease-out ${index * 0.2}s forwards`
              }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-8">
                <div className="flex-1 space-y-2">
                  <h2 className="text-2xl font-satoshi tracking-[-0.03em]">{job.title}</h2>
                  <p className="text-zinc-400 font-euclidCircularB tracking-[-0.04em]">{job.department}</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-zinc-400 font-euclidCircularB tracking-[-0.04em]">
                    <MapPin size={16} className="text-white/70" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-400 font-euclidCircularB tracking-[-0.04em]">
                    <DollarSign size={16} className="text-white/70" />
                    {job.salary}
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {job.description.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2" />
                    <p className="flex-1 text-zinc-400 font-euclidCircularB tracking-[-0.04em]">{item}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => window.location.href = 'mailto:careers@koraxlabs.com'}
                className="group relative inline-flex items-center gap-3 px-8 py-4 text-sm font-euclidCircularB tracking-[-0.04em] overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
              >
                <span className="relative z-10 text-white/90">APPLY NOW!</span>
                <ArrowRight size={16} strokeWidth={1.5} className="relative z-10 text-white/70 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Made by KRX */}
      <div className="pb-8 text-center">
        <p className="text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-600">
          made by <span className="text-zinc-500">krx</span>
        </p>
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
  )
} 