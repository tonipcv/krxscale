'use client'

import { ArrowLeft, Shield, AlertTriangle, Target, Lock, Clock, Server, Code, Network } from 'lucide-react'
import Link from 'next/link'

export default function BlindEaglePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 border-b border-zinc-200 backdrop-blur-md z-40 transition-all duration-300 bg-white/80">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <svg
                width="40"
                height="40"
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
              <span className="text-xl tracking-[-0.03em] font-satoshi text-zinc-900">KRX</span>
            </Link>

            <div className="flex items-center gap-6">
              <Link
                href="/blog"
                className="text-sm tracking-[-0.04em] font-euclidCircularB text-zinc-800 hover:text-zinc-600 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/careers"
                className="text-sm tracking-[-0.04em] font-euclidCircularB text-zinc-500 hover:text-zinc-800 transition-colors"
              >
                Careers
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-16">
        <article className="max-w-3xl mx-auto px-6">
          {/* Back to Blog */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 transition-colors mb-16"
          >
            <ArrowLeft size={16} />
            <span className="font-euclidCircularB">Back to Blog</span>
          </Link>

          {/* Article Header */}
          <header className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-red-100 text-red-800 px-3 py-1 text-sm font-euclidCircularB tracking-[-0.04em] rounded-full flex items-center gap-2">
                <AlertTriangle size={14} />
                THREAT ANALYSIS
              </span>
              <span className="text-sm text-zinc-500 font-euclidCircularB tracking-[-0.04em]">10 MIN READ</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-satoshi tracking-[-0.03em] leading-tight text-zinc-900 mb-8">
              Blind Eagle: How a Persistent Hacker Group Targets South America's Financial Sector
            </h1>

            <p className="text-xl text-zinc-600 font-euclidCircularB tracking-[-0.04em] leading-relaxed">
              The Blind Eagle hacker group has become one of the most persistent cyber threats in South America, relentlessly targeting banks and financial institutions — particularly in Colombia.
              This article breaks down who they are, their tactics, and how they manage to keep their malicious operations running despite repeated takedown efforts.
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-zinc prose-lg max-w-none">
            <h2 className="text-zinc-900 text-3xl mb-8">Who Is Blind Eagle?</h2>
            
            <div className="not-prose space-y-8 mb-16">
              <div className="flex items-start gap-6 bg-zinc-50 p-8 rounded-lg">
                <div className="bg-zinc-200 p-3 rounded-lg">
                  <Shield size={28} className="text-zinc-700" />
                </div>
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">The Actors</h3>
                  <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                    Blind Eagle (also known as <strong>Águila Ciega</strong>) is a <strong>South American cyber-espionage group</strong>, identified by researchers as a financially-motivated threat actor with a focus on stealing sensitive information and credentials.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-zinc-50 p-8 rounded-lg">
                <div className="bg-zinc-200 p-3 rounded-lg">
                  <Target size={28} className="text-zinc-700" />
                </div>
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">Their Targets</h3>
                  <ul className="list-none m-0 space-y-2">
                    <li className="text-zinc-600">Banks and financial institutions (e.g., Bancolombia, BBVA)</li>
                    <li className="text-zinc-600">Government agencies</li>
                    <li className="text-zinc-600">High-value individuals and businesses within Colombia and surrounding countries</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-zinc-50 p-8 rounded-lg">
                <div className="bg-zinc-200 p-3 rounded-lg">
                  <Lock size={28} className="text-zinc-700" />
                </div>
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">Their Objective</h3>
                  <p className="text-zinc-600 font-euclidCircularB mb-4">Their campaigns aim to exfiltrate:</p>
                  <ul className="list-none m-0 space-y-2">
                    <li className="text-zinc-600">Banking credentials</li>
                    <li className="text-zinc-600">Sensitive corporate data</li>
                    <li className="text-zinc-600">Personal information that could be leveraged for fraud or further attacks</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-zinc-900 text-3xl mb-8">The Attack Chain: Old Tricks, Modern Tools</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Blind Eagle employs a combination of tried-and-true social engineering with updated malware delivery techniques.
            </p>

            <div className="not-prose space-y-8 mb-16">
              <div className="flex items-start gap-6 bg-zinc-50 p-8 rounded-lg">
                <div className="bg-zinc-200 p-3 rounded-lg">
                  <AlertTriangle size={28} className="text-zinc-700" />
                </div>
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">1. The Lure: Phishing</h3>
                  <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                    They craft <strong>fake banking websites</strong>, visually indistinguishable from legitimate sites.
                    Victims are directed to these through phishing emails or fraudulent messages designed to create urgency.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-zinc-50 p-8 rounded-lg">
                <div className="bg-zinc-200 p-3 rounded-lg">
                  <Code size={28} className="text-zinc-700" />
                </div>
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">2. The Trap: Malicious VBS Files</h3>
                  <p className="text-zinc-600 font-euclidCircularB mb-4">
                    Once on the fake site, victims are prompted to download what seems to be a legitimate file.
                    This file is a <strong>Visual Basic Script (VBS)</strong> — an old but still functional Windows scripting technology.
                  </p>
                  <p className="text-zinc-600 font-euclidCircularB mb-2">Why VBS?</p>
                  <ul className="list-none m-0 space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="bg-green-400 p-1.5 rounded-full mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-600">Runs silently on most Windows machines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-400 p-1.5 rounded-full mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-600">Often bypasses basic antivirus</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-400 p-1.5 rounded-full mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-600">Simple and lightweight</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-zinc-50 p-8 rounded-lg">
                <div className="bg-zinc-200 p-3 rounded-lg">
                  <Network size={28} className="text-zinc-700" />
                </div>
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">3. The Infection: Remote Access Trojans (RATs)</h3>
                  <p className="text-zinc-600 font-euclidCircularB mb-4">
                    The downloaded VBS doesn't cause damage directly. Its job is to fetch and install the real payload — sophisticated malware such as:
                  </p>
                  <ul className="list-none m-0 space-y-2 mb-4">
                    <li className="text-zinc-600"><strong>AsyncRAT</strong></li>
                    <li className="text-zinc-600"><strong>Remcos RAT</strong></li>
                  </ul>
                  <p className="text-zinc-600 font-euclidCircularB mb-4">
                    These <strong>Remote Access Trojans (RATs)</strong> give attackers full control over the victim's machine, enabling:
                  </p>
                  <ul className="list-none m-0 space-y-2">
                    <li className="text-zinc-600">Keystroke logging</li>
                    <li className="text-zinc-600">File exfiltration</li>
                    <li className="text-zinc-600">Webcam and microphone activation</li>
                    <li className="text-zinc-600">Network pivoting to access internal systems</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-zinc-900 text-3xl mb-8">Staying "Invisible": The Role of Bulletproof Hosting</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              A key discovery by researchers was <strong>how Blind Eagle keeps their malicious infrastructure online</strong> despite constant efforts to report and dismantle it.
            </p>

            <div className="not-prose space-y-8 mb-16">
              <div className="flex items-start gap-6 bg-zinc-50 p-8 rounded-lg">
                <div className="bg-zinc-200 p-3 rounded-lg">
                  <Server size={28} className="text-zinc-700" />
                </div>
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">Enter Proton66</h3>
                  <p className="text-zinc-600 font-euclidCircularB mb-4">
                    Blind Eagle hosts its phishing sites and command-and-control servers on a Russian <strong>bulletproof hosting</strong> service called <strong>Proton66</strong>.
                  </p>
                  <h4 className="text-lg font-satoshi text-zinc-900 mb-3">What is Bulletproof Hosting?</h4>
                  <ul className="list-none m-0 space-y-2">
                    <li className="text-zinc-600">A hosting service designed specifically for cybercriminals</li>
                    <li className="text-zinc-600">Ignores abuse complaints and takedown requests from authorities</li>
                    <li className="text-zinc-600">Allows hosting of phishing pages, malware distribution, and C2 servers</li>
                    <li className="text-zinc-600">Provides a "safe haven" for criminal operations</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-zinc-900 text-3xl mb-8">Why This Matters</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Blind Eagle demonstrates how attackers blend old techniques (VBS scripts), modern RAT tools, and resilient infrastructure (Proton66) to mount effective, long-term campaigns.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-16">
              This approach makes them hard to eradicate and highly damaging to the financial sector in Latin America.
            </p>

            <h2 className="text-zinc-900 text-3xl mb-8">How to Protect Against Blind Eagle's Tactics</h2>
            
            <div className="not-prose space-y-8 mb-16">
              <div className="flex items-start gap-6 bg-zinc-50 p-8 rounded-lg">
                <div className="bg-zinc-200 p-3 rounded-lg">
                  <Shield size={28} className="text-zinc-700" />
                </div>
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">For Individuals</h3>
                  <ul className="list-none m-0 space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="bg-green-400 p-1.5 rounded-full mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-600">Do not click on links in unsolicited emails or messages claiming to be from banks.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-400 p-1.5 rounded-full mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-600">Always verify the URL before entering credentials — look for HTTPS and correct domain names.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-400 p-1.5 rounded-full mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-600">Keep Windows updated and disable unnecessary scripting engines if possible.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-400 p-1.5 rounded-full mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-600">Run reputable endpoint protection software capable of detecting RATs.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-zinc-50 p-8 rounded-lg">
                <div className="bg-zinc-200 p-3 rounded-lg">
                  <Shield size={28} className="text-zinc-700" />
                </div>
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">For Organizations</h3>
                  <ul className="list-none m-0 space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="bg-green-400 p-1.5 rounded-full mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-600">Conduct phishing awareness training regularly.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-400 p-1.5 rounded-full mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-600">Implement advanced email filtering to block malicious attachments and links.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-400 p-1.5 rounded-full mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-600">Monitor outbound traffic for connections to known C2 servers.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-400 p-1.5 rounded-full mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-600">Isolate infected systems immediately to contain RAT infections.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-zinc-900 text-3xl mb-8">Conclusion: An Adaptive and Persistent Threat</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Blind Eagle exemplifies a <strong>persistent, adaptable threat actor</strong> combining social engineering, legacy technologies, modern malware, and bulletproof infrastructure to compromise victims in the South American financial sector.
            </p>

            <p className="text-zinc-600 leading-relaxed mb-16">
              By understanding their tactics and proactively defending against them, individuals and organizations can reduce their risk and respond more effectively.
            </p>

            <h2 className="text-zinc-900 text-3xl mb-8">Frequently Asked Questions (FAQ)</h2>
            <div className="not-prose space-y-12">
              <div className="border-b border-zinc-200 pb-8">
                <h3 className="text-xl font-satoshi text-zinc-900 mb-4">Who is Blind Eagle?</h3>
                <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                  Blind Eagle is a South American cyber-espionage group that targets banks and government entities, primarily in Colombia, using phishing and RATs to steal sensitive data.
                </p>
              </div>

              <div className="border-b border-zinc-200 pb-8">
                <h3 className="text-xl font-satoshi text-zinc-900 mb-4">What is a VBS file and why is it dangerous?</h3>
                <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                  A VBS (Visual Basic Script) file is a Windows scripting file. Attackers use it to silently execute malicious commands and download malware.
                </p>
              </div>

              <div className="border-b border-zinc-200 pb-8">
                <h3 className="text-xl font-satoshi text-zinc-900 mb-4">What are AsyncRAT and Remcos RAT?</h3>
                <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                  They are Remote Access Trojans — malware that provides attackers with full remote control over infected systems.
                </p>
              </div>

              <div className="pb-8">
                <h3 className="text-xl font-satoshi text-zinc-900 mb-4">What is bulletproof hosting?</h3>
                <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                  Bulletproof hosting is a hosting service that ignores abuse reports and takedown requests, enabling cybercriminals to host malicious content and stay online.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
} 