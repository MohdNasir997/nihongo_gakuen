/**
 * PricingCard Component
 * Reusable pricing card with features and CTA button
 */

'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, X, Check, Sparkles, Users, School, Download } from 'lucide-react'
import { PricingPlan } from '@/lib/types/pricing'

interface PricingCardProps {
  plan: PricingPlan
  isYearly: boolean
  isHighlighted?: boolean
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CheckCircle,
  X,
  Check,
  Sparkles,
  Users,
  School,
  Download,
}

export function PricingCard({ plan, isYearly, isHighlighted }: PricingCardProps) {
  const price = isYearly ? plan.price.yearly : plan.price.monthly
  const Icon = iconMap[plan.highlight ? 'Check' : 'CheckCircle']

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: isHighlighted ? 0.2 : 0 }}
      className={`flex flex-col gap-8 rounded-2xl border bg-card p-8 transition-transform hover:-translate-y-1 ${
        isHighlighted
          ? 'border-primary shadow-lg shadow-primary/20 scale-105 z-10 relative'
          : 'border-border'
      }`}
    >
      {isHighlighted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2"
        >
          <Badge className="bg-primary/10 dark:bg-blue-500 text-primary text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full border border-primary/20">
            Most Popular
          </Badge>
        </motion.div>
      )}

      <div className="flex flex-col gap-2">
        <h3 className="text-muted-foreground text-xs font-bold uppercase tracking-[0.2em]">
          {plan.tier}
        </h3>
        <h2 className="text-foreground text-2xl font-bold">{plan.name}</h2>
        <p className="flex items-baseline gap-1 text-foreground mt-2">
          <span className="text-4xl font-black tracking-tighter">
            ${price}
          </span>
          <span className="text-muted-foreground text-sm font-medium">/mo</span>
        </p>
        <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
      </div>

      <Button
        className={`w-full h-12 text-sm font-bold tracking-tight ${
          isHighlighted
            ? 'bg-primary dark:bg-blue-500 text-white hover:bg-primary/90 shadow-lg shadow-primary/20'
            : 'bg-muted text-foreground hover:bg-muted/80'
        }`}
      >
        {plan.cta}
      </Button>

      <div className="flex flex-col gap-4 pt-4">
        {plan.features.map((feature, index) => {
          const FeatureIcon = iconMap[feature.icon]
          return (
            <div
              key={index}
              className={`text-sm font-medium flex items-center gap-3 ${
                feature.included ? 'text-foreground' : 'text-muted-foreground line-through'
              }`}
            >
              <FeatureIcon
                className={`h-5 w-5 ${
                  feature.included
                    ? isHighlighted
                      ? 'text-primary'
                      : 'text-emerald-500'
                    : 'text-muted-foreground/50'
                }`}
              />
              {feature.text}
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
