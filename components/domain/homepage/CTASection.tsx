'use client'

import { motion } from 'motion/react'
import { useState } from 'react'

export function CTASection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    // Handle form submission
  }

  return (
    <section className="py-24 px-6 lg:px-40">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[1280px] mx-auto bg-[#2d333a] dark:bg-[#1a1c1e] rounded-[2.5rem] p-12 lg:p-24 relative overflow-hidden shadow-organic"
      >
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex flex-col gap-6 text-center lg:text-left flex-1">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-card-light text-4xl lg:text-6xl font-bold leading-tight font-serif"
            >
              Ready to start your journey?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-xl max-w-lg"
            >
              Get your first week of premium access for free. No commitment, just quality learning.
            </motion.p>
          </div>
          
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 h-14 rounded-xl px-6 bg-white/5 border-white/10 focus:ring-1 focus:ring-primary/50 text-white placeholder-slate-500 transition-all"
              required
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="h-14 px-10 rounded-xl bg-primary dark:bg-black text-white font-bold hover:bg-primary/90 transition-all whitespace-nowrap shadow-soft"
            >
              Get Started
            </motion.button>
          </motion.form>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM6dmVyc2lvbj0iaHR0cDovL3d3cLnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+')] bg-repeat opacity-30"></div>
        </div>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -right-20 size-80 bg-primary/10 rounded-full blur-[100px]"
        ></motion.div>
      </motion.div>
    </section>
  )
}
