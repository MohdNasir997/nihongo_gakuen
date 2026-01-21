'use client'

import { motion } from 'motion/react'

export function ContactHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-16"
      >
        <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Reach out to our{' '}
          <span className="text-primary italic">Tokyo team.</span>
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
          Questions about our JLPT courses or corporate training? We&apso;re here to guide
          your journey to fluency with personalized support.
        </p>
      </motion.div>
    </section>
  )
}
