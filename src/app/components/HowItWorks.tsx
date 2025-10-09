'use client'

import { motion, cubicBezier, type Variants } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement | null>(null)

  const EASE = cubicBezier(0.22, 1, 0.36, 1)

  const container: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: EASE,
        staggerChildren: 0.18,
      },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  }

  return (
    <section ref={ref} className="relative overflow-hidden py-20 sm:py-28 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-5">
        {/* Narrative header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center space-y-3 mb-12"
        >
          <motion.h2 variants={item} className="text-zinc-50 text-2xl sm:text-3xl font-satoshi tracking-[-0.03em]">
            How it works
          </motion.h2>
          <motion.p variants={item} className="text-zinc-300 text-sm sm:text-base font-euclidCircularB tracking-[-0.04em] max-w-2xl mx-auto">
            Expanding into new markets is complex. KRX Scale turns local acceptance into global liquidity through one flow.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          <Step title="Integrate" desc="Connect once to KRX Scale with modern APIs and dashboards." />
          <Step title="Collect" desc="Accept Pix and local methods with instant confirmation." />
          <Step title="Settle" desc="Convert local currencies and settle in USD with compliance." />
          <Step title="Scale" desc="Expand to new markets and optimize payouts programmatically." last />
        </motion.div>

        {/* Payoff CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex justify-center mt-10"
        >
          <button className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white transition-colors">
            Explore KRX Scale
            <ArrowRight size={16} className="text-zinc-300 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

function Step({ title, desc, last = false }: { title: string; desc: string; last?: boolean }) {
  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  }
  return (
    <motion.div
      variants={stepVariants}
      className="relative rounded-xl bg-white/10 border border-white/15 p-5 sm:p-6 text-zinc-50"
    >
      <div className="relative z-10">
        <h3 className="text-lg font-satoshi tracking-[-0.03em]">{title}</h3>
        <p className="text-sm text-zinc-200 font-euclidCircularB tracking-[-0.04em] mt-1.5">{desc}</p>
      </div>
      {/* Subtle connecting line for flow */}
      {!last && (
        <div className="hidden md:block absolute right-[-12px] top-1/2 h-px w-6 bg-gradient-to-r from-white/10 to-transparent" />
      )}
    </motion.div>
  )
}
