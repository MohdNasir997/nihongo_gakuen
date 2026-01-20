'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40 px-6 lg:px-40">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-10 order-2 lg:order-1"
        >
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#f0ede4] dark:bg-primary/10 px-4 py-1.5 text-[10px] font-bold text-slate-500 w-fit uppercase tracking-[0.2em] border border-[#e8e4db] dark:border-primary/20"
            >
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-primary/40 dark:bg-primary"
              />
              Learning Reimagined
            </motion.div>
            
            <h1 className="text-[#1a1c1e] dark:text-white text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight font-serif">
              Master Japanese <br />
              <span className="text-primary/80">with Confidence</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-500 dark:text-slate-400 max-w-[540px] leading-relaxed">
              Join 50,000+ learners today. A gentle, structured path designed for visual comfort and focused mastery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <motion.button
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="flex min-w-50 items-center justify-center rounded-xl h-14 px-8 bg-primary dark:bg-blue-400 text-white text-lg font-bold shadow-lg hover:bg-primary/90 transition-all duration-300"
            >
              Start Learning
            </motion.button>
            <motion.button
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="flex min-w-50 items-center justify-center rounded-xl h-14 px-8 bg-card-light dark:bg-slate-800 border border-[#e8e4db] dark:border-slate-700 text-[#2d333a] dark:text-white text-lg font-bold hover:bg-[#f5f2eb] dark:hover:bg-slate-700 transition-colors"
            >
              Explore Courses
            </motion.button>
          </div>

          <div className="flex items-center gap-5 pt-4">
            <div className="flex -space-x-3">
              <div className="size-11 rounded-full border-4 border-background-light dark:border-background-dark bg-cover shadow-sm" style={{ backgroundImage: 'url("/assets/student_1.png")' }}></div>
              <div className="size-11 rounded-full border-4 border-background-light dark:border-background-dark bg-cover shadow-sm" style={{ backgroundImage: 'url("/assets/student_2.png")' }}></div>
              <div className="size-11 rounded-full border-4 border-background-light dark:border-background-dark bg-cover shadow-sm" style={{ backgroundImage: 'url("/assets/student_3.png")' }}></div>
            </div>
            <p className="text-sm font-medium text-slate-400">
              Trusted by over <span className="text-[#1a1c1e] dark:text-white font-bold">50k students</span>
            </p>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative order-1 lg:order-2"
        >
          <div className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-3xl shadow-lg relative z-10 border-[12px] border-card-light dark:border-slate-800 overflow-hidden group">
            <Image
              src="/assets/hero.png"
              alt="Japanese learning platform hero image"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <div className="absolute -bottom-8 -left-8 size-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-[80px] z-0"></div>
          <div className="absolute -top-8 -right-8 size-64 bg-[#8b7355]/5 dark:bg-[#8b7355]/10 rounded-full blur-[80px] z-0"></div>
        </motion.div>
      </div>
    </section>
  )
}
