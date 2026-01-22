
'use client'

import { motion } from 'motion/react'
import { trustedUniversities } from '@/lib/data/pricing'
import { Globe, Building, Building2 } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Domain: Globe,
  Building,
  Building2,
}

export function TrustedBySection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-32 py-16 border-t border-border flex flex-col items-center"
    >
      <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em] mb-12">
        Trusted by students at
      </p>
      <div className="flex flex-wrap justify-center gap-16 grayscale opacity-40 hover:opacity-60 transition-opacity">
        {trustedUniversities.map((uni, index) => {
          const Icon = iconMap[uni.icon]
          return (
            <motion.div
              key={uni.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-2 "
            >
              <Icon className="text-2xl dark:text-white" />
              <span className="font-bold text-lg dark:text-white">{uni.name}</span>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
