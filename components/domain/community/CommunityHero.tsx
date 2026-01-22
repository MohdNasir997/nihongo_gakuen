/**
 * CommunityHero Component
 * Hero section with optional background image
 */

'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'

interface CommunityHeroProps {
  variant?: 'dark' | 'light'
}

export function CommunityHero({ variant = 'dark' }: CommunityHeroProps) {
  const isDark = variant === 'dark'

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden rounded-xl border p-12 flex flex-col items-center text-center ${
        isDark
          ? 'bg-charcoal-medium/50 border-white/5'
          : 'min-h-100 bg-cover bg-center bg-no-repeat'
      }`}
    >
      {isDark && (
        <>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -ml-32 -mb-32"></div>
        </>
      )}
      <div className="flex flex-col gap-4 max-w-2xl relative z-10">
        <h1 className="text-foreground text-4xl md:text-5xl font-black leading-tight tracking-tighter mb-4">
          {isDark ? 'Find Your Voice.' : 'Connect with Native Speakers'}
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl font-normal leading-relaxed mb-8">
          {isDark
            ? 'Connect with native Japanese speakers and learners worldwide in our professional language exchange community.'
            : 'Practice Japanese with locals and help them learn your language. Build real friendships while mastering a new tongue through our exchange community.'}
        </p>
        <Button
          className={`bg-primary text-white text-base font-bold h-14 px-10 rounded-lg transition-all shadow-lg shadow-primary/20 ${
            isDark ? 'bg-blue-400 hover:bg-blue-500 ' : 'hover:scale-105 '
          }`}
        >
         Join the Community
        </Button>
      </div>
    </motion.section>
  )
}
