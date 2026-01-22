/**
 * PartnerGrid Component
 * Container for partner cards with responsive grid
 */

'use client'

import { motion } from 'motion/react'
import { Partner } from '@/lib/types/community'
import { PartnerCard } from './PartnerCard'

interface PartnerGridProps {
  partners: Partner[]
  variant?: 'dark' | 'light'
}

export function PartnerGrid({ partners, variant = 'dark' }: PartnerGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-4">
      {partners.map((partner, index) => (
        <motion.div
          key={partner.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <PartnerCard partner={partner} variant={variant} />
        </motion.div>
      ))}
    </div>
  )
}
