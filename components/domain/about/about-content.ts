import { Users, CheckCircle, GraduationCap, Lightbulb } from 'lucide-react'

// Design tokens for About page
export const ABOUT_CONFIG = {
  accentColor: '#bc002d', // Japanese red
  primaryColor: '#3c83f6', // Brand blue
  maxContainerWidth: 'max-w-7xl',
  sectionPadding: 'py-24',
  sectionPaddingSmall: 'pt-20 pb-16',
} as const

// About page content
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
        bgColor: 'bg-blue-50 dark:bg-blue-950/30',
        textColor: 'text-primary',
      },
      {
        value: 'JLPT N5-N1',
        label: 'Certified Curriculum',
        icon: CheckCircle,
        bgColor: 'bg-green-50 dark:bg-green-950/30',
        textColor: 'text-emerald-600 dark:text-emerald-400',
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
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      hoverBgColor: 'group-hover:bg-primary dark:group-hover:bg-primary/90',
      textColor: 'text-primary',
    },
    {
      title: 'Community Focused',
      description: 'You\'re never alone on your journey. Join our vibrant Discord community for daily practice, cultural exchange, and peer support.',
      icon: Users,
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      hoverBgColor: 'group-hover:bg-purple-600 dark:group-hover:bg-purple-600/90',
      textColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      title: 'Proven Methodology',
      description: 'Our unique SRS (Spaced Repetition System) combined with immersive audio content ensures long-term retention of Kanji and vocabulary.',
      icon: Lightbulb,
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      hoverBgColor: 'group-hover:bg-emerald-600 dark:group-hover:bg-emerald-600/90',
      textColor: 'text-emerald-600 dark:text-emerald-400',
    },
  ],
  story: {
    heading: 'Our Story',
    subtitle: 'Crafting a learning experience that honors tradition while embracing modern education technology.',
    paragraphs: [
      'Started in a small coffee shop in Shibuya, NihonGo Learn began with a simple observation: most Japanese learning materials were either too academic or lacked the cultural context necessary to truly understand the language.',
      'Our founder, a linguist with a passion for Japanese literature, envisioned a platform where students could learn the "living language"—the way people actually speak, think, and interact in modern Japan.',
      'Today, we serve thousands of students worldwide, from professional expats in Tokyo to anime enthusiasts in Brazil. Every lesson we craft is infused with the spirit of Omotenashi—the Japanese art of selfless hospitality.',
    ],
    quote: 'We don\'t just teach you how to pass the JLPT; we teach you how to find your own home in the Japanese language.',
  },
} as const

// Animation variants
export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
} as const
