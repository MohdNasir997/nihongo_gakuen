'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ABOUT_CONTENT, ABOUT_CONFIG } from './about-content'
import { HeroStats } from './HeroStats'

export function AboutHero() {
  const { hero } = ABOUT_CONTENT

  return (
    <section className="relative overflow-hidden pt-20 pb-16 px-6 lg:px-8">
      <div className={`${ABOUT_CONFIG.maxContainerWidth} mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#bc002d]" />
            <span className="text-[#bc002d] font-bold tracking-widest text-xs uppercase">
              {hero.badge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-[#1a1c1e] dark:text-white font-serif">
            Bridging Cultures Through{' '}
            <span className="text-primary italic">Language</span>.
          </h1>

          {/* Description */}
          <p className="text-lg text-stone-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed">
            {hero.description}
          </p>

          {/* Stats */}
          <HeroStats stats={hero.stats} />
        </motion.div>

        {/* Right Content - Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative Background Blur */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/assets/aboutushero.png"
              alt="Tokyo cityscape and team"
              width={600}
              height={500}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Japanese Calligraphy Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-6 shadow-xl border-l-4 border-[#bc002d] hidden md:block"
          >
            <p className="font-serif text-3xl text-vertical font-bold text-[#1a1c1e]/80 dark:text-white/80 opacity-60">
              {hero.japaneseCalligraphy.text}
            </p>
            <p className="text-[10px] uppercase tracking-tighter text-stone-400 dark:text-slate-500 mt-2 rotate-90 origin-left">
              {hero.japaneseCalligraphy.translation}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
