/**
 * HowItWorks Component
 * Display how language exchange works steps
 */

'use client'

import { motion } from 'motion/react'
import { Step } from '@/lib/types/community'
import { UserSearch, Send, School } from 'lucide-react'

interface HowItWorksProps {
  steps: Step[]
}

export function HowItWorks({ steps }: HowItWorksProps) {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    person_search: UserSearch,
    chat: Send,
    school: School,
  }

  return (
    <div className="py-16 mt-12 px-4 border-t border-border">
      <h2 className="text-foreground text-2xl font-bold text-center mb-12">
        How Language Exchange Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {steps.map((step, index) => {
          const Icon = iconMap[step.icon]
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Icon className="h-4xl w-4xl" />
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
