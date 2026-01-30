/**
 * Mock data for Help page
 */

import { HelpContent, FAQItem, HelpCategory, Tutorial } from '@/lib/types/dashboard';

export const helpCategories: HelpCategory[] = [
  {
    id: 'getting-started',
    name: 'Getting Started',
    icon: 'rocket_launch',
    itemCount: 12,
  },
  {
    id: 'courses',
    name: 'Courses',
    icon: 'school',
    itemCount: 18,
  },
  {
    id: 'account',
    name: 'Account & Billing',
    icon: 'person',
    itemCount: 8,
  },
  {
    id: 'technical',
    name: 'Technical Support',
    icon: 'support_agent',
    itemCount: 15,
  },
  {
    id: 'community',
    name: 'Community',
    icon: 'groups',
    itemCount: 6,
  },
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I change my JLPT goal?',
    answer:
      'You can change your JLPT goal in your Profile settings. Navigate to Dashboard > Profile > Learning Preferences and select your desired JLPT level (N5-N1). Your progress will be recalculated based on the new goal.',
    category: 'getting-started',
    helpful: 45,
  },
  {
    id: 'faq-2',
    question: 'Can I download lessons for offline use?',
    answer:
      'Yes! Pro and Ultimate plan members can download lessons for offline learning. Go to any lesson and click the download button in the resources section. Downloaded lessons are available in the "My Downloads" section of your profile.',
    category: 'courses',
    helpful: 38,
  },
  {
    id: 'faq-3',
    question: 'How do I cancel my subscription?',
    answer:
      'You can cancel your subscription at any time from your account settings. Go to Dashboard > Settings > Account > Subscription and click "Cancel Subscription". Your access will continue until the end of your current billing period.',
    category: 'account',
    helpful: 52,
  },
  {
    id: 'faq-4',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. For annual subscriptions, we also accept bank transfers in select regions.',
    category: 'account',
    helpful: 29,
  },
  {
    id: 'faq-5',
    question: 'How do I reset my password?',
    answer:
      'Click "Forgot Password" on the login page and enter your email address. You will receive a password reset link within a few minutes. The link expires after 24 hours for security purposes.',
    category: 'account',
    helpful: 67,
  },
  {
    id: 'faq-6',
    question: 'Can I switch between plans?',
    answer:
      'Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, the change takes effect immediately with prorated billing. When downgrading, the change takes effect at the start of your next billing cycle.',
    category: 'account',
    helpful: 41,
  },
  {
    id: 'faq-7',
    question: 'How does the language exchange work?',
    answer:
      'Our language exchange connects you with native Japanese speakers who want to learn your native language. You can browse partners, send connection requests, and practice via text or video chat. The matching algorithm considers your JLPT level, interests, and availability.',
    category: 'community',
    helpful: 55,
  },
  {
    id: 'faq-8',
    question: 'What if I need technical support?',
    answer:
      'If you encounter any technical issues, please contact our support team at support@nihongolearn.com or use the contact form in the Help section. Our team typically responds within 24 hours on business days.',
    category: 'technical',
    helpful: 48,
  },
];

export const tutorials: Tutorial[] = [
  {
    id: 'tut-1',
    title: 'Getting Started with NihonGo Learn',
    description: 'A comprehensive guide to setting up your account and navigating the platform.',
    duration: '5:30',
    thumbnail: '/assets/tutorial-getting-started.png',
    url: '/tutorials/getting-started',
    category: 'getting-started',
  },
  {
    id: 'tut-2',
    title: 'How to Take Your First Lesson',
    description: 'Learn how to navigate lessons, use the video player, and complete exercises.',
    duration: '8:15',
    thumbnail: '/assets/tutorial-first-lesson.png',
    url: '/tutorials/first-lesson',
    category: 'courses',
  },
  {
    id: 'tut-3',
    title: 'Using the Language Exchange Feature',
    description: 'Connect with native speakers and practice your Japanese conversation skills.',
    duration: '6:45',
    thumbnail: '/assets/tutorial-language-exchange.png',
    url: '/tutorials/language-exchange',
    category: 'community',
  },
  {
    id: 'tut-4',
    title: 'Tracking Your Progress',
    description: 'Understand your dashboard metrics and how to interpret your learning progress.',
    duration: '4:20',
    thumbnail: '/assets/tutorial-progress.png',
    url: '/tutorials/progress',
    category: 'getting-started',
  },
  {
    id: 'tut-5',
    title: 'Managing Your Account Settings',
    description: 'Customize your profile, notifications, and privacy preferences.',
    duration: '7:00',
    thumbnail: '/assets/tutorial-settings.png',
    url: '/tutorials/settings',
    category: 'account',
  },
];

export const helpContent: HelpContent = {
  categories: helpCategories,
  faqs: faqItems,
  tutorials: tutorials,
};
