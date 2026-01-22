/**
 * PricingHero Component
 * Hero section for pricing page with animated entrance
 */

'use client'

import { motion } from 'motion/react'

export function PricingHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center mb-16"
    >
      <h1 className="text-foreground tracking-tight text-4xl sm:text-5xl font-extrabold leading-tight pb-4">
        Master Japanese with Comfort
      </h1>
      <p className="text-muted-foreground text-lg font-normal leading-relaxed max-w-2xl mx-auto">
        A focused, serene environment for your language journey. Join 50,000+ students
        mastering JLPT levels with our visual-first approach.
      </p>
    </motion.div>
  )
}
