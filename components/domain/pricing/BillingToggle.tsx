/**
 * BillingToggle Component
 * Toggle between monthly and yearly billing with discount indicator
 */

'use client'

import { motion } from 'motion/react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

interface BillingToggleProps {
  isYearly: boolean
  onToggle: (value: boolean) => void
}

export function BillingToggle({ isYearly, onToggle }: BillingToggleProps) {
  return (
    <div className="flex justify-center mb-16">
      <div className="flex h-12 w-full max-w-[340px] items-center justify-center rounded-2xl bg-muted/50 p-1.5 shadow-inner">
        <RadioGroup
          value={isYearly ? 'yearly' : 'monthly'}
          onValueChange={(value) => onToggle(value === 'yearly')}
          className="flex h-full grow"
        >
          <div className="flex grow items-center justify-center">
            <RadioGroupItem
              value="monthly"
              id="monthly"
              className="peer sr-only"
            />
            <Label
              htmlFor="monthly"
              className="flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-xl px-2 text-sm font-semibold transition-all has-[:checked]:bg-background has-[:checked]:shadow-sm has-[:checked]:text-foreground text-muted-foreground"
            >
              <span className="truncate">Monthly</span>
            </Label>
          </div>
          <div className="flex grow items-center justify-center">
            <RadioGroupItem
              value="yearly"
              id="yearly"
              className="peer sr-only"
            />
            <Label
              htmlFor="yearly"
              className="flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-xl px-2 text-sm font-semibold transition-all has-[:checked]:bg-background has-[:checked]:shadow-sm has-[:checked]:text-foreground text-muted-foreground"
            >
              <span className="truncate">
                Yearly{' '}
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-emerald-500 ml-1"
                >
                  (Save 20%)
                </motion.span>
              </span>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
