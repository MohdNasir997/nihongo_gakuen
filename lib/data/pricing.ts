/**
 * Mock data for pricing page
 */

import { PricingPlan, FAQItem, TrustedUniversity } from '@/lib/types/pricing'

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    tier: 'beginner',
    name: 'Free Access',
    price: {
      monthly: 0,
      yearly: 0,
    },
    description: 'Perfect for hobbyists and travelers getting their feet wet.',
    features: [
      { text: 'JLPT N5 basics', icon: 'CheckCircle', included: true },
      { text: 'Core vocabulary decks', icon: 'CheckCircle', included: true },
      { text: 'Community access', icon: 'CheckCircle', included: true },
      { text: 'Daily drills', icon: 'X', included: false },
    ],
    cta: 'Start Learning',
  },
  {
    id: 'pro',
    tier: 'fluent',
    name: 'Pro Plan',
    price: {
      monthly: 19,
      yearly: 15.2, // 20% off
    },
    description: 'For serious students aiming for fluency and JLPT certificates.',
    features: [
      { text: 'Everything in Free', icon: 'CheckCircle', included: true },
      { text: 'Adaptive Daily Drills', icon: 'CheckCircle', included: true },
      { text: 'Full JLPT N5-N1 modules', icon: 'CheckCircle', included: true },
      { text: 'Unlimited AI Speaking Practice', icon: 'CheckCircle', included: true },
      { text: 'Offline learning mode', icon: 'CheckCircle', included: true },
    ],
    cta: 'Choose Pro',
    highlight: true,
  },
  {
    id: 'ultimate',
    tier: 'master',
    name: 'Ultimate',
    price: {
      monthly: 49,
      yearly: 39.2, // 20% off
    },
    description: 'Comprehensive mastery with personal guidance and lifetime perks.',
    features: [
      { text: 'Everything in Pro', icon: 'CheckCircle', included: true },
      { text: 'Live Language Exchange', icon: 'CheckCircle', included: true },
      { text: '1-on-1 Monthly Coaching', icon: 'CheckCircle', included: true },
      { text: 'Downloads & Offline', icon: 'CheckCircle', included: true },
    ],
    cta: 'Go Ultimate',
  },
]

export const faqItems: FAQItem[] = [
  {
    question: 'Can I switch plans later?',
    answer:
      'Yes! You can upgrade or downgrade your plan at any time from your account settings. If you upgrade, the change is immediate.',
  },
  {
    question: 'Is there a student discount?',
    answer:
      'We offer a 50% discount for verified students. Contact our support team with your student ID to claim your coupon.',
  },
  {
    question: 'What is the AI speaking practice?',
    answer:
      'Our proprietary AI voice recognition engine listens to your pronunciation and provides real-time feedback on pitch accent and intonation.',
  },
]

export const trustedUniversities: TrustedUniversity[] = [
  { name: 'Waseda Univ.', icon: 'Domain' },
  { name: 'Tokyo Tech', icon: 'Building' },
  { name: 'Kyoto Edu', icon: 'Building2' },
  { name: 'Nagoya Art', icon: 'Building' },
]
