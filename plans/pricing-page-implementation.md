# Pricing Page Implementation Plan

## Overview
Build a responsive pricing page for Nihongo Learn with light and dark mode support, following DRY principles and using Shadcn UI components.

## Design Analysis

### Light Mode Features
- **Hero Section**: "Master Japanese with Comfort" with subtitle
- **Billing Toggle**: Monthly / Yearly (Save 20%) with radio button style
- **3 Pricing Cards**:
  - Free ($0) - Beginner tier
  - Pro ($19) - Highlighted "Most Popular" with badge
  - Ultimate ($49) - Master tier
- **Trusted By Section**: University logos (Waseda, Tokyo Tech, Kyoto Edu, Nagoya Art)
- **Full Footer**: Links for Product, Company, and social icons

### Dark Mode Features
- **Hero Section**: "Master Japanese at your own pace" with subtitle
- **Billing Toggle**: Monthly / Yearly (-20%) with radio button style
- **3 Pricing Cards**:
  - Entry/Free ($0)
  - Scholar/Pro ($19) - Highlighted "Most Popular" with glow effect
  - Master/Ultimate ($49)
- **FAQ Section**: 3 accordion-style questions
- **Simple Footer**: Copyright and legal links

## Component Architecture

### Reusable Components (DRY Principle)

#### 1. `PricingCard.tsx`
**Purpose**: Display a single pricing plan with all features
**Props**:
```typescript
interface PricingCardProps {
  plan: PricingPlan
  isYearly: boolean
  isHighlighted?: boolean
}
```
**Features**:
- Responsive card design
- Dynamic pricing based on billing cycle
- Feature list with icons
- CTA button
- Highlight badge for "Most Popular"
- Hover animations with Motion

#### 2. `BillingToggle.tsx`
**Purpose**: Toggle between monthly and yearly billing
**Props**:
```typescript
interface BillingToggleProps {
  isYearly: boolean
  onToggle: (value: boolean) => void
}
```
**Features**:
- Radio button style toggle
- Animated transition
- Discount indicator
- Accessible keyboard navigation

#### 3. `PricingHero.tsx`
**Purpose**: Hero section with title and description
**Features**:
- Animated entrance
- Responsive typography
- Dark mode support

#### 4. `PricingGrid.tsx`
**Purpose**: Container for pricing cards with responsive grid
**Features**:
- 1 column on mobile
- 2 columns on tablet
- 3 columns on desktop
- Highlighted card elevation

#### 5. `TrustedBySection.tsx`
**Purpose**: Display university logos (light mode only)
**Features**:
- Grayscale logos with hover effect
- Responsive grid
- Dark mode invert

#### 6. `PricingFAQ.tsx`
**Purpose**: FAQ accordion section (dark mode only)
**Features**:
- Uses existing Shadcn Accordion component
- 3 predefined questions
- Smooth animations

## Data Structure

### TypeScript Interfaces (`lib/types/pricing.ts`)
```typescript
export interface PricingPlan {
  id: string
  tier: 'beginner' | 'fluent' | 'master'
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
```

### Mock Data (`lib/data/pricing.ts`)
```typescript
export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    tier: 'beginner',
    name: 'Free Access',
    price: { monthly: 0, yearly: 0 },
    description: 'Perfect for hobbyists and travelers getting started.',
    features: [
      { text: 'JLPT N5 basics', icon: 'CheckCircle', included: true },
      { text: 'Core vocabulary decks', icon: 'CheckCircle', included: true },
      { text: 'Community access', icon: 'CheckCircle', included: true },
      { text: 'Daily drills', icon: 'X', included: false },
    ],
    cta: 'Start Learning'
  },
  {
    id: 'pro',
    tier: 'fluent',
    name: 'Pro Plan',
    price: { monthly: 19, yearly: 15.2 }, // 20% off
    description: 'For serious students aiming for fluency and JLPT certificates.',
    features: [
      { text: 'Everything in Free', icon: 'CheckCircle', included: true },
      { text: 'Adaptive Daily Drills', icon: 'CheckCircle', included: true },
      { text: 'Full JLPT N5-N1 modules', icon: 'CheckCircle', included: true },
      { text: 'Unlimited AI Speaking Practice', icon: 'CheckCircle', included: true },
      { text: 'Offline learning mode', icon: 'CheckCircle', included: true },
    ],
    cta: 'Choose Pro',
    highlight: true
  },
  {
    id: 'ultimate',
    tier: 'master',
    name: 'Ultimate',
    price: { monthly: 49, yearly: 39.2 }, // 20% off
    description: 'Comprehensive mastery with personal guidance and lifetime perks.',
    features: [
      { text: 'Everything in Pro', icon: 'CheckCircle', included: true },
      { text: 'Live Language Exchange', icon: 'CheckCircle', included: true },
      { text: '1-on-1 Monthly Coaching', icon: 'CheckCircle', included: true },
      { text: 'Downloads & Offline', icon: 'CheckCircle', included: true },
    ],
    cta: 'Go Ultimate'
  }
]

export const faqItems: FAQItem[] = [
  {
    question: 'Can I switch plans later?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time from your account settings. If you upgrade, the change is immediate.'
  },
  {
    question: 'Is there a student discount?',
    answer: 'We offer a 50% discount for verified students. Contact our support team with your student ID to claim your coupon.'
  },
  {
    question: 'What is the AI speaking practice?',
    answer: 'Our proprietary AI voice recognition engine listens to your pronunciation and provides real-time feedback on pitch accent and intonation.'
  }
]

export const trustedUniversities = [
  { name: 'Waseda Univ.', icon: 'domain' },
  { name: 'Tokyo Tech', icon: 'apartment' },
  { name: 'Kyoto Edu', icon: 'corporate_fare' },
  { name: 'Nagoya Art', icon: 'location_city' }
]
```

## Required Shadcn UI Components

### Already Available
- ✅ `button.tsx`
- ✅ `card.tsx`
- ✅ `badge.tsx`
- ✅ `accordion.tsx`

### Need to Add
- ⬜ `radio-group.tsx` - For billing toggle

## Implementation Steps

### Step 1: Add Shadcn Radio Group Component
```bash
pnpx dlx shadcn@latest add radio-group
```

### Step 2: Create Type Definitions
- Create `lib/types/pricing.ts` with interfaces

### Step 3: Create Mock Data
- Create `lib/data/pricing.ts` with pricing plans, FAQs, and universities

### Step 4: Create Domain Components
Create `components/domain/pricing/` directory with:
- `PricingHero.tsx`
- `BillingToggle.tsx`
- `PricingCard.tsx`
- `PricingGrid.tsx`
- `TrustedBySection.tsx`
- `PricingFAQ.tsx`

### Step 5: Create Page Structure
- Create `app/pricing/layout.tsx` with Navbar and Footer
- Create `app/pricing/page.tsx` that composes all components

### Step 6: Add Animations
- Use Motion for:
  - Hero entrance animation
  - Card hover effects
  - Toggle transition
  - FAQ accordion animation

### Step 7: Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px (1 column)
  - Tablet: 768px - 1024px (2 columns)
  - Desktop: > 1024px (3 columns)

### Step 8: Dark Mode Support
- Use `dark:` prefix for dark mode styles
- Test both light and dark modes
- Ensure proper contrast

## Styling Guidelines

### Color Palette
- **Primary**: `#3c83f6` (blue)
- **Background Light**: `hsl(40, 20%, 98%)`
- **Background Dark**: `#101722`
- **Text Light**: `#0d131c` (primary), `#5c6d85` (secondary)
- **Text Dark**: `white` (primary), `gray-400` (secondary)

### Typography
- **Font Family**: Lexend (display), Inter (body)
- **Hero Title**: 4xl mobile, 5xl desktop, font-extrabold
- **Card Title**: 2xl, font-bold
- **Price**: 4xl-5xl, font-black

### Spacing
- **Section Padding**: py-12 mobile, py-20 desktop
- **Card Padding**: p-8
- **Grid Gap**: gap-6-8

## Accessibility Requirements

- ✅ Keyboard navigation for toggle
- ✅ ARIA labels for interactive elements
- ✅ Color contrast 4.5:1 minimum
- ✅ Touch targets 44px minimum
- ✅ Screen reader support

## Performance Considerations

- ✅ Lazy load heavy components
- ✅ Optimize images (university logos)
- ✅ Use Motion's `layout` prop sparingly
- ✅ CSS transforms for animations

## Testing Checklist

- [ ] All components render correctly
- [ ] Billing toggle works and updates prices
- [ ] "Most Popular" card is highlighted
- [ ] Responsive design works on all breakpoints
- [ ] Dark mode toggles correctly
- [ ] Animations are smooth (60fps)
- [ ] Keyboard navigation works
- [ ] Screen reader announces content correctly
- [ ] Touch targets are accessible on mobile
- [ ] Links and buttons are functional

## File Structure

```
app/
├── pricing/
│   ├── layout.tsx
│   └── page.tsx
components/
└── domain/
    └── pricing/
        ├── PricingHero.tsx
        ├── BillingToggle.tsx
        ├── PricingCard.tsx
        ├── PricingGrid.tsx
        ├── TrustedBySection.tsx
        └── PricingFAQ.tsx
lib/
├── data/
│   └── pricing.ts
└── types/
    └── pricing.ts
```

## Notes

- Use existing Navbar and Footer components
- Follow DRY principle - make PricingCard truly reusable
- Use Motion for subtle animations only
- Test both light and dark modes thoroughly
- Ensure mobile-friendly touch targets
- Keep pricing data separate from components for easy updates
