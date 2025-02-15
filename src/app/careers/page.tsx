'use client'

import Link from 'next/link'
import { ArrowLeft, MapPin, DollarSign, Globe2 } from 'lucide-react'

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
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-blue-950 to-zinc-900 text-white">
      {/* Header with gradient */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-indigo-600/10 blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
          
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
            Work at <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 text-transparent bg-clip-text">Korax Labs</span>
          </h1>
          <p className="text-lg text-zinc-400 font-light max-w-2xl">
            Join a young and dynamic company working with the best technologies. We offer great salaries and above-market bonuses.
          </p>
        </div>
      </div>

      {/* Jobs grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid gap-8">
          {jobs.map((job, index) => (
            <div 
              key={job.title}
              className="group p-8 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500 relative bg-gradient-to-b from-transparent to-zinc-900/30"
              style={{
                transform: `translateY(${index * 20}px)`,
                opacity: 0,
                animation: `slideUp 0.5s ease-out ${index * 0.2}s forwards`
              }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-8">
                <div className="flex-1 space-y-2">
                  <h2 className="text-2xl font-light">{job.title}</h2>
                  <p className="text-zinc-400 font-light">{job.department}</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <MapPin size={16} className="text-purple-500" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <DollarSign size={16} className="text-purple-500" />
                    {job.salary}
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {job.description.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500/50 mt-2" />
                    <p className="flex-1 text-zinc-400 font-light">{item}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => window.location.href = 'mailto:careers@koraxlabs.com'}
                className="text-sm tracking-wider bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
              >
                APPLY NOW
              </button>
            </div>
          ))}
        </div>
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