'use client'

import { motion } from 'motion/react'
import { AboutHero } from '@/components/domain/about/AboutHero'
import { WhyChooseSection } from '@/components/domain/about/WhyChooseSection'
import { StorySection } from '@/components/domain/about/StorySection'



export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-[#0b111a]">
      {/* Hero Section */}
      <AboutHero />

      {/* Decorative Brush Line Divider */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="h-[2px] bg-gradient-to-r from-transparent via-[#1a1c1e] dark:via-white to-transparent opacity-15 relative my-16"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-6 bg-[#bc002d] rounded-full blur-[2px] opacity-60" />
        </motion.div>
      </div>

      {/* Why NihonGo Learn Section */}
      <WhyChooseSection />

      {/* Our Story Section */}
      <StorySection />
    </main>
  )
}
