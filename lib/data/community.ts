/**
 * Mock data for community page
 */

import { Partner, Step } from '@/lib/types/community'

export const partners: Partner[] = [
  {
    id: '1',
    name: 'Yuki Tanaka',
    location: 'Tokyo, Japan',
    avatar: '/assets/partner_1.png',
    isOnline: true,
    nativeLanguage: 'Japanese',
    learningLanguages: ['English', 'Spanish'],
    interests: ['Anime', 'Cooking'],
    bio: 'Hello! I\'m a chef in Tokyo. I love talking about food, anime, and hiking. Let\'s practice together!',
  },
  {
    id: '2',
    name: 'James Miller',
    location: 'London, UK',
    avatar: '/assets/partner_2.png',
    isOnline: false,
    nativeLanguage: 'English',
    learningLanguages: ['Japanese (N2)'],
    interests: ['Business', 'Tennis'],
    bio: 'Designer from Osaka. I want to improve my French while helping you with Japanese slang!',
  },
  {
    id: '3',
    name: 'Emi Watanabe',
    location: 'Osaka, Japan',
    avatar: '/assets/partner_3.png',
    isOnline: true,
    nativeLanguage: 'Japanese',
    learningLanguages: ['French', 'English'],
    interests: ['History', 'Jazz'],
    bio: 'Kyoto University student. Interested in literature and history. Happy to help beginners!',
  },
]

export const howItWorksSteps: Step[] = [
  {
    icon: 'person_search',
    title: '1. Find a Partner',
    description:
      'Filter by language proficiency, interests, and availability to find your perfect match.',
  },
  {
    icon: 'chat',
    title: '2. Start a Chat',
    description:
      'Send a connection request and start messaging. Practice writing and speaking in real-time.',
  },
  {
    icon: 'school',
    title: '3. Practice Together',
    description:
      'Schedule video calls or share study materials to improve your Japanese skills faster.',
  },
]
