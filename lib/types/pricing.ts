/**
 * Pricing page type definitions
 */

export type PricingTier = 'beginner' | 'fluent' | 'master'

export interface PricingPlan {
  id: string
  tier: PricingTier
  name: string
  price: {
    monthly: number
    yearly: number
  }
  description: string
  features: PricingFeature[]
  cta: string
  highlight?: boolean
}

export interface PricingFeature {
  text: string
  icon: string // Lucide icon name
  included: boolean
}

export interface FAQItem {
  question: string
  answer: string
}

export interface TrustedUniversity {
  name: string
  icon: string // Lucide icon name
}
