
'use client'

import { PricingCard } from './PricingCard'
import { pricingPlans } from '@/lib/data/pricing'

interface PricingGridProps {
  isYearly: boolean
}

export function PricingGrid({ isYearly }: PricingGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
      {pricingPlans.map((plan) => (
        <PricingCard
          key={plan.id}
          plan={plan}
          isYearly={isYearly}
          isHighlighted={plan.highlight}
        />
      ))}
    </div>
  )
}
