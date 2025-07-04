'use client'

import { ArrowLeft, Shield, Monitor, Eye, Target, CheckCircle2, Clock, Bell } from 'lucide-react'
import Link from 'next/link'

export default function BlogPost() {
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
              <span className="bg-blue-100 text-blue-800 px-3 py-1 text-sm font-euclidCircularB tracking-[-0.04em] rounded-full flex items-center gap-2">
                <Shield size={14} />
                SECURITY
              </span>
              <span className="text-sm text-zinc-500 font-euclidCircularB tracking-[-0.04em]">10 MIN READ</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-satoshi tracking-[-0.03em] leading-tight text-zinc-900 mb-8">
              Why Your Enterprise Needs Network Detection and Response (NDR)
            </h1>

            <p className="text-xl text-zinc-600 font-euclidCircularB tracking-[-0.04em] leading-relaxed">
              Learn how Network Detection and Response detects advanced attacks and stops intruders hiding in your network.
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-zinc prose-lg max-w-none">
            <p className="text-zinc-600 leading-relaxed mb-6">
              Cyber threats have evolved. Today's attackers no longer bash down the front door — they blend in, wearing stolen credentials and behaving like legitimate employees.
            </p>

            <p className="text-zinc-600 leading-relaxed mb-6">
              This is where <strong>Network Detection and Response (NDR)</strong> becomes indispensable.
            </p>

            <p className="text-zinc-600 leading-relaxed mb-16">
              This article explores why firewalls and EDRs alone are insufficient, how attackers exploit legitimate-looking behaviors to infiltrate, and how NDR — the "intelligent cameras" of your infrastructure — can detect these stealthy threats.
            </p>

            <h2 className="text-zinc-900 text-3xl mb-8">The Evolution of Cyberattacks: From Brute Force to Credential Abuse</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              In the past, attackers were akin to burglars smashing through the front door — noisy, obvious, and easily blocked by firewalls or antivirus solutions.
            </p>

            <p className="text-zinc-600 leading-relaxed mb-6">
              Today, however, adversaries have become more sophisticated: They steal user credentials and walk right through the door, smiling at security, appearing to belong — all while working their way toward the "vault" (your critical data).
            </p>

            <p className="text-zinc-600 leading-relaxed mb-16">
              These tactics, known as <strong>living-off-the-land</strong> or <strong>lateral movement</strong>, evade traditional controls.
            </p>

            <h2 className="text-zinc-900 text-3xl mb-8">Why Traditional Defenses Fall Short</h2>
            
            <div className="not-prose space-y-8 mb-16">
              <div className="flex items-start gap-6 bg-zinc-50 p-8 rounded-lg">
                <div className="bg-zinc-200 p-3 rounded-lg">
                  <Shield size={28} className="text-zinc-700" />
                </div>
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">Firewalls: The Doorman</h3>
                  <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                    Firewalls are essential for filtering inbound and outbound traffic at the perimeter, blocking obviously malicious connections. But if an attacker enters the network with valid credentials, the firewall is powerless to stop them — it sees nothing suspicious.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-zinc-50 p-8 rounded-lg">
                <div className="bg-zinc-200 p-3 rounded-lg">
                  <Monitor size={28} className="text-zinc-700" />
                </div>
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">EDR: The Desk Guard</h3>
                  <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                    <strong>Endpoint Detection and Response (EDR)</strong> monitors endpoint activity, detecting malware or unauthorized actions on specific devices. However, it lacks visibility into activities that traverse the network between endpoints — or into interactions that appear normal at the host level but abnormal at the network level.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-zinc-600 leading-relaxed mb-16">
              These solutions are crucial — but they leave a blind spot in the corridors between endpoints.
            </p>

            <h2 className="text-zinc-900 text-3xl mb-8">The Blind Spot: Your Internal Network</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Between the perimeter (firewall) and endpoints (EDR), lies the <strong>enterprise network</strong>: a complex web of servers, databases, and communications that attackers exploit.
            </p>

            <p className="text-zinc-600 leading-relaxed mb-16">
              Modern adversaries leverage stolen credentials and lateral movement to explore and exfiltrate data while masquerading as legitimate users. They access unusual resources at odd hours, move large volumes of data, and slowly progress toward their objectives — all while flying under the radar.
            </p>

            <h2 className="text-zinc-900 text-3xl mb-8">NDR: Intelligent Surveillance for the Enterprise Network</h2>
            
            <div className="not-prose space-y-8 mb-16">
              <div className="flex items-start gap-6 bg-zinc-50 p-8 rounded-lg">
                <div className="bg-zinc-200 p-3 rounded-lg">
                  <Eye size={28} className="text-zinc-700" />
                </div>
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">What Is NDR?</h3>
                  <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                    <strong>Network Detection and Response (NDR)</strong> provides deep, continuous monitoring of network traffic using machine learning and behavioral analytics. It establishes a baseline of "normal" activity and flags deviations indicative of compromise — even when attackers use legitimate credentials.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-zinc-600 leading-relaxed mb-16">
              Think of NDR as <strong>intelligent cameras covering every hallway of your digital building</strong>, detecting movements inconsistent with normal behavior.
            </p>

            <h2 className="text-zinc-900 text-3xl mb-8">How Does NDR Work?</h2>
            <div className="not-prose space-y-8 mb-16">
              <div className="flex items-start gap-6 bg-zinc-50 p-8 rounded-lg">
                <div className="bg-zinc-200 p-3 rounded-lg">
                  <CheckCircle2 size={28} className="text-zinc-700" />
                </div>
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">Baselining Normal Behavior</h3>
                  <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                    "John from Accounting typically works on the third floor between 9 AM and 6 PM."
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-zinc-50 p-8 rounded-lg">
                <div className="bg-zinc-200 p-3 rounded-lg">
                  <Target size={28} className="text-zinc-700" />
                </div>
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">Detecting Anomalies</h3>
                  <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                    "Why is John accessing the server room at 2 AM?"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-zinc-50 p-8 rounded-lg">
                <div className="bg-zinc-200 p-3 rounded-lg">
                  <Bell size={28} className="text-zinc-700" />
                </div>
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">Alerting Suspicious Actions</h3>
                  <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                    "Mary from Sales normally downloads 10 files per day. Today she attempted to download 5,000."
                  </p>
                </div>
              </div>
            </div>

            <p className="text-zinc-600 leading-relaxed mb-16">
              By combining real-time traffic analysis, threat intelligence, and behavioral profiling, NDR detects advanced persistent threats (APTs), insider threats, and data exfiltration attempts.
            </p>

            <h2 className="text-zinc-900 text-3xl mb-8">Why Invest in NDR?</h2>
            
            <div className="not-prose space-y-8 mb-16">
              <div className="flex items-start gap-6 bg-zinc-50 p-8 rounded-lg">
                <div className="bg-zinc-200 p-3 rounded-lg">
                  <Target size={28} className="text-zinc-700" />
                </div>
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">Detect Advanced Attacks</h3>
                  <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                    NDR identifies attackers who evade firewalls and EDRs by blending in — detecting subtle, non-signature-based threats.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-zinc-50 p-8 rounded-lg">
                <div className="bg-zinc-200 p-3 rounded-lg">
                  <Eye size={28} className="text-zinc-700" />
                </div>
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">Complete Visibility</h3>
                  <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                    NDR closes the visibility gap by monitoring <strong>east-west traffic</strong> (lateral movement) within the network.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-zinc-50 p-8 rounded-lg">
                <div className="bg-zinc-200 p-3 rounded-lg">
                  <Clock size={28} className="text-zinc-700" />
                </div>
                <div>
                  <h3 className="text-xl font-satoshi text-zinc-900 mb-3">Accelerate Response Time</h3>
                  <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                    NDR surfaces actionable alerts in real-time, enabling security teams to respond quickly and limit damage.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-zinc-900 text-3xl mb-8">Real-World Examples of NDR in Action</h2>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-8 mb-16">
              <ul className="m-0 space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-green-400 p-1.5 rounded-full mt-1.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-700 leading-relaxed">An unauthorized contractor accessing sensitive data during off-hours was flagged by NDR behavioral analysis.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-green-400 p-1.5 rounded-full mt-1.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-700 leading-relaxed">An attacker using admin credentials was detected when moving unusually large amounts of data to an external server.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-green-400 p-1.5 rounded-full mt-1.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-700 leading-relaxed">NDR identified ransomware propagating laterally before it could encrypt critical systems.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-zinc-900 text-3xl mb-8">Best Practices for Deploying NDR</h2>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-8 mb-16">
              <ol className="m-0 space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-green-400 p-1.5 rounded-full mt-1.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-700 leading-relaxed"><strong>Assess Your Network:</strong> Map critical assets and high-risk segments.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-green-400 p-1.5 rounded-full mt-1.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-700 leading-relaxed"><strong>Select the Right Solution:</strong> Evaluate NDR platforms for scalability, integration with SIEM/SOAR, and machine learning capabilities.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-green-400 p-1.5 rounded-full mt-1.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-700 leading-relaxed"><strong>Train Your Team:</strong> Analysts must understand how to interpret NDR alerts and fine-tune policies.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-green-400 p-1.5 rounded-full mt-1.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-700 leading-relaxed"><strong>Continuous Monitoring:</strong> Regularly review baselines as your environment and behaviors change.</span>
                </li>
              </ol>
            </div>

            <h2 className="text-zinc-900 text-3xl mb-8">Combining Layers: Defense-in-Depth</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              A modern defense strategy should include:
            </p>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-8 mb-16">
              <ul className="m-0 space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-green-400 p-1.5 rounded-full mt-1.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-700 leading-relaxed"><strong>Firewalls</strong> to block external threats at the perimeter.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-green-400 p-1.5 rounded-full mt-1.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-700 leading-relaxed"><strong>EDRs</strong> to secure endpoints and detect host-level anomalies.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-green-400 p-1.5 rounded-full mt-1.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-700 leading-relaxed"><strong>NDR</strong> to monitor the network and detect lateral movement and insider threats.</span>
                </li>
              </ul>
            </div>

            <p className="text-zinc-600 leading-relaxed mb-16">
              Together, these layers provide comprehensive protection against today's sophisticated attacks.
            </p>

            <h2 className="text-zinc-900 text-3xl mb-8">Conclusion: NDR Is No Longer Optional</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              In today's threat landscape, relying solely on perimeter and endpoint security is inadequate. Attackers use legitimate credentials and subtle movements to evade detection.
            </p>

            <p className="text-zinc-600 leading-relaxed mb-6">
              <strong>Network Detection and Response</strong> closes this critical gap, giving your security team the visibility needed to detect and stop intruders before they reach your crown jewels.
            </p>

            <p className="text-zinc-600 leading-relaxed mb-16">
              <strong>Take action now: evaluate and deploy NDR to secure your network's blind spots.</strong>
            </p>

            <h2 className="text-zinc-900 text-3xl mb-8">Frequently Asked Questions (FAQ)</h2>
            <div className="not-prose space-y-12">
              <div className="border-b border-zinc-200 pb-8">
                <h3 className="text-xl font-satoshi text-zinc-900 mb-4">What does NDR stand for?</h3>
                <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                  NDR stands for <strong>Network Detection and Response</strong>, a cybersecurity technology that monitors network traffic to detect and respond to anomalous or malicious behavior.
                </p>
              </div>

              <div className="border-b border-zinc-200 pb-8">
                <h3 className="text-xl font-satoshi text-zinc-900 mb-4">Does NDR replace firewall or EDR?</h3>
                <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                  No. NDR complements firewalls and EDRs by providing visibility into the internal network — especially east-west traffic — where other tools have limited reach.
                </p>
              </div>

              <div className="border-b border-zinc-200 pb-8">
                <h3 className="text-xl font-satoshi text-zinc-900 mb-4">Is specialized training required to operate NDR?</h3>
                <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                  Yes. While many solutions leverage AI to reduce noise, analysts must be trained to interpret alerts and refine detection baselines.
                </p>
              </div>

              <div className="pb-8">
                <h3 className="text-xl font-satoshi text-zinc-900 mb-4">What is the immediate benefit of NDR?</h3>
                <p className="text-zinc-600 font-euclidCircularB m-0 leading-relaxed">
                  NDR dramatically reduces dwell time by identifying threats early, preventing lateral movement, and limiting potential damage.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
} 