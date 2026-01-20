# About Us Page Implementation Plan

## Overview
Build the About Us page for Nihongo Learn based on the Google Stitch design in `designs/About_us/`. The page should follow the established tech stack (Next.js, TypeScript, Tailwind CSS, Shadcn UI, Motion) and maintain consistency with the existing codebase.

## Design Analysis

### Page Structure
The About Us page consists of 4 main sections:

1. **Hero Section** (Lines 83-130 in code.html)
   - Main heading: "Bridging Cultures Through Language"
   - Subtitle paragraph about the mission
   - Two stat cards: "2,000+ Active Students" and "JLPT N5-N1 Certified Curriculum"
   - Hero image with Tokyo cityscape
   - Japanese calligraphy card: "継続は力なり" (Persistence is Power)

2. **Why NihonGo Learn Section** (Lines 135-168)
   - Section heading and subtitle
   - Three feature cards:
     - Expert Teachers (blue)
     - Community Focused (purple)
     - Proven Methodology (emerald)

3. **Our Story Section** (Lines 170-202)
   - Section heading with decorative divider
   - Narrative paragraphs about company history
   - Inline image
   - Quote block
   - Background decorative SVG

4. **Footer** (Lines 203-258)
   - Reuse existing Footer component from `components/layout/Footer.tsx`

## Component Architecture

```
app/about/page.tsx
├── AboutHero (components/domain/about/AboutHero.tsx)
│   ├── HeroHeading
│   ├── HeroStats (components/domain/about/HeroStats.tsx)
│   └── HeroImage
├── WhyChooseSection (components/domain/about/WhyChooseSection.tsx)
│   └── FeatureCard[] (components/domain/about/FeatureCard.tsx)
└── StorySection (components/domain/about/StorySection.tsx)
    ├── StoryContent
    └── StoryImage
```

## Implementation Steps

### Step 1: Create AboutHero Component
**File:** `components/domain/about/AboutHero.tsx`

**Features:**
- Main heading with gradient text effect
- Mission statement paragraph
- Two stat cards with icons
- Hero image with hover rotation effect
- Japanese calligraphy card (vertical text)
- Decorative background blur circle

**Key Design Tokens:**
```typescript
const HERO_CONFIG = {
  accentColor: '#bc002d', // Japanese red
  primaryColor: '#3c83f6', // Brand blue
  maxContainerWidth: 'max-w-7xl',
}
```

**Motion Animations:**
- Fade in on mount
- Hover effects on image (rotate-1 to rotate-0)
- Subtle scale on stat cards

**Responsive Design:**
- Mobile: Stacked layout
- Tablet: Side-by-side text and image
- Desktop: Full grid layout with decorative elements

### Step 2: Create HeroStats Component
**File:** `components/domain/about/HeroStats.tsx`

**Features:**
- Reusable stat card component
- Icon with colored background
- Label and value display
- Hover effects

**Data Structure:**
```typescript
interface StatItem {
  value: string
  label: string
  icon: LucideIcon
  bgColor: string
  textColor: string
}
```

### Step 3: Create FeatureCard Component
**File:** `components/domain/about/FeatureCard.tsx`

**Features:**
- Icon with colored background
- Title and description
- Hover shadow effect
- Color transition on hover (icon background)

**Variants:**
- Blue (Expert Teachers)
- Purple (Community Focused)
- Emerald (Proven Methodology)

**Motion Animations:**
- Scale on hover
- Icon background color transition
- Shadow increase

### Step 4: Create WhyChooseSection Component
**File:** `components/domain/about/WhyChooseSection.tsx`

**Features:**
- Section heading and subtitle
- Grid of three FeatureCards
- Centered layout
- Background color (stone-50/50)

**Responsive Design:**
- Mobile: Single column
- Tablet: 2 columns
- Desktop: 3 columns

### Step 5: Create StorySection Component
**File:** `components/domain/about/StorySection.tsx`

**Features:**
- Section heading with red divider
- Narrative paragraphs with proper typography
- Inline image with border
- Quote block with left border
- Background decorative SVG (low opacity)

**Typography:**
- Large font size (text-lg)
- Line height (leading-loose)
- Justified text alignment
- Light font weight

**Motion Animations:**
- Fade in with stagger
- Subtle parallax on decorative elements

### Step 6: Create Main Page
**File:** `app/about/page.tsx`

**Features:**
- Compose all section components
- Add page-level animations
- Ensure proper spacing between sections
- Add decorative brush line divider

**Page Metadata:**
```typescript
export const metadata: Metadata = {
  title: 'About Us - Nihongo Learn',
  description: 'Learn about Nihongo Learn\'s mission to bridge cultures through Japanese language education.',
}
```

### Step 7: Add Motion Animations
**Animation Variants:**
```typescript
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}
```

**Animation Strategy:**
- Page load: Sequential fade-in from top to bottom
- Scroll: Intersection Observer for revealing sections
- Hover: Subtle scale and shadow effects
- Image: Rotation effect on hover

### Step 8: Responsive Design Testing
**Breakpoints:**
- Mobile (< 768px): Single column, stacked layout
- Tablet (768px - 1024px): 2 columns, adjusted spacing
- Desktop (> 1024px): Full layout with all decorative elements

**Key Adjustments:**
- Hero image size: Mobile (smaller) → Desktop (larger)
- Stat cards: Mobile (stacked) → Desktop (side-by-side)
- Feature cards: Mobile (1 col) → Tablet (2 cols) → Desktop (3 cols)
- Japanese calligraphy: Hidden on mobile, visible on desktop

### Step 9: Dark Mode Support
**Color Mapping:**
```typescript
const colors = {
  light: {
    background: '#fdfcf8',
    text: '#1a1a1a',
    card: '#ffffff',
    border: '#e7e5e4',
  },
  dark: {
    background: '#0b111a',
    text: '#f1f5f9',
    card: '#1e293b',
    border: '#334155',
  },
}
```

**Dark Mode Considerations:**
- Background colors need dark variants
- Text colors need contrast adjustment
- Decorative elements should be visible in both modes
- Images may need overlay adjustments

### Step 10: Accessibility
**ARIA Labels:**
- Decorative elements: `aria-hidden="true"`
- Navigation: Proper landmarks
- Images: Descriptive alt text

**Keyboard Navigation:**
- All interactive elements focusable
- Focus rings visible
- Tab order logical

**Screen Reader:**
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- Skip to main content link

## Data Structures

### About Page Content
```typescript
// components/domain/about/about-content.ts
export const ABOUT_CONTENT = {
  hero: {
    badge: '私たちの使命',
    heading: 'Bridging Cultures Through Language',
    description: 'At NihonGo Learn, we believe that learning Japanese isn\'t just about grammar—it\'s about opening doors to a new perspective of the world.',
    stats: [
      {
        value: '2,000+',
        label: 'Active Students',
        icon: Users,
        bgColor: 'bg-blue-50',
        textColor: 'text-primary',
      },
      {
        value: 'JLPT N5-N1',
        label: 'Certified Curriculum',
        icon: CheckCircle,
        bgColor: 'bg-green-50',
        textColor: 'text-emerald-600',
      },
    ],
    japaneseCalligraphy: {
      text: '継続は力なり',
      translation: 'Persistence is Power',
    },
  },
  features: [
    {
      title: 'Expert Teachers',
      description: 'Learn from native Japanese instructors and certified linguists who specialize in making complex grammar accessible and fun.',
      icon: GraduationCap,
      bgColor: 'bg-blue-50',
      hoverBgColor: 'group-hover:bg-primary',
      textColor: 'text-primary',
    },
    {
      title: 'Community Focused',
      description: 'You\'re never alone on your journey. Join our vibrant Discord community for daily practice, cultural exchange, and peer support.',
      icon: Users,
      bgColor: 'bg-purple-50',
      hoverBgColor: 'group-hover:bg-purple-600',
      textColor: 'text-purple-600',
    },
    {
      title: 'Proven Methodology',
      description: 'Our unique SRS (Spaced Repetition System) combined with immersive audio content ensures long-term retention of Kanji and vocabulary.',
      icon: Lightbulb,
      bgColor: 'bg-emerald-50',
      hoverBgColor: 'group-hover:bg-emerald-600',
      textColor: 'text-emerald-600',
    },
  ],
  story: {
    heading: 'Our Story',
    paragraphs: [
      'Started in a small coffee shop in Shibuya, NihonGo Learn began with a simple observation: most Japanese learning materials were either too academic or lacked the cultural context necessary to truly understand the language.',
      'Our founder, a linguist with a passion for Japanese literature, envisioned a platform where students could learn the "living language"—the way people actually speak, think, and interact in modern Japan.',
      'Today, we serve thousands of students worldwide, from professional expats in Tokyo to anime enthusiasts in Brazil. Every lesson we craft is infused with the spirit of Omotenashi—the Japanese art of selfless hospitality.',
    ],
    quote: 'We don\'t just teach you how to pass the JLPT; we teach you how to find your own home in the Japanese language.',
  },
} as const
```

## Technical Considerations

### Performance
- Use Next.js Image component for all images
- Lazy load off-screen content
- Optimize animations with `will-change` sparingly
- Use CSS transforms for animations (GPU accelerated)

### SEO
- Proper meta tags
- Semantic HTML structure
- Descriptive alt text
- Structured data markup (optional)

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support
- ES2017+ JavaScript features

## File Structure

```
components/domain/about/
├── AboutHero.tsx
├── HeroStats.tsx
├── FeatureCard.tsx
├── WhyChooseSection.tsx
├── StorySection.tsx
└── about-content.ts

app/about/
└── page.tsx
```

## Success Criteria

✅ Page matches the design from `designs/About_us/screen.png`
✅ All components are reusable and follow DRY principle
✅ Responsive design works across all breakpoints
✅ Dark mode is properly implemented
✅ Animations are smooth and performant
✅ Accessibility standards are met (WCAG 2.1 AA)
✅ TypeScript strict mode with no errors
✅ Code follows established patterns from existing codebase
✅ Footer component is reused from existing implementation

## Next Steps After Implementation

1. Add unit tests for components
2. Add integration tests for page
3. Performance audit with Lighthouse
4. Cross-browser testing
5. User acceptance testing
6. Deploy to staging environment
