/**
 * Mock data for curriculum page
 */

import { CurriculumLevel, CurriculumStats, FeaturedLesson } from '@/lib/types/curriculum';
import { teachers } from '@/lib/data/teachers';

export const curriculumLevels: CurriculumLevel[] = [
  {
    id: 'n5',
    level: 'N5',
    title: 'The Foundations',
    description: 'Master Hiragana, Katakana, and essential daily survival phrases. Perfect for absolute beginners.',
    lessonsCount: 48,
    duration: '12 Weeks',
    features: [
      'Mastering Kana Scripts',
      'Basic Grammar (wa, ga, o)',
      '800+ Common Vocabulary',
    ],
    color: 'blue',
  },
  {
    id: 'n4',
    level: 'N4',
    title: 'Daily Proficiency',
    description: 'Build conversational confidence and tackle complex sentence patterns for daily life.',
    lessonsCount: 62,
    duration: '16 Weeks',
    features: [
      'Conditional Forms',
      'Potential & Passive Verbs',
      '300 Essential Kanji',
    ],
    color: 'indigo',
  },
  {
    id: 'n3',
    level: 'N3',
    title: 'Intermediate Bridge',
    description: 'Bridge gap between basic and advanced. Understand daily news and natural dialogues.',
    lessonsCount: 84,
    duration: '20 Weeks',
    features: [
      'Natural Speed Listening',
      'Abstract Topics & Essays',
      '650 Core Kanji',
    ],
    color: 'primary',
    isPopular: true,
  },
  {
    id: 'n2',
    level: 'N2',
    title: 'Advanced Mastery',
    description: 'Develop advanced reading comprehension and express complex ideas in Japanese.',
    lessonsCount: 96,
    duration: '24 Weeks',
    features: [
      'Advanced Grammar Patterns',
      'Business Japanese',
      '1000+ Kanji',
    ],
    color: 'purple',
  },
  {
    id: 'n1',
    level: 'N1',
    title: 'Expert Level',
    description: 'Achieve native-level proficiency with academic and professional Japanese.',
    lessonsCount: 120,
    duration: '30 Weeks',
    features: [
      'Academic Writing',
      'Classical Japanese',
      '2000+ Kanji',
    ],
    color: 'rose',
  },
];

export const curriculumStats: CurriculumStats = {
  activeStudents: '15k+',
  passRate: '98%',
  teacherCount: '200+',
  videoLessons: '1.2k',
};

export const featuredLesson: FeaturedLesson = {
  id: 'featured-1',
  title: 'Mastering Keigo for Business',
  description: 'Learn honorific language and business etiquette for professional settings.',
  teacherName: 'Yumi Tanaka',
  teacherAvatar: teachers[0].avatar,
  imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTbUioYl9OWnCgd_1NOV5IC6wdAWPUGI5Uax1AmavDW7DA1tVtZwjl9jO7rzUJguN1NQRFI6cOFj_qmliYYkJ2g7_tU7yG0ytzmNI_hPvkJ9WHsnSkNPT9Pw3UjtSqzF0OunvknWjM2-YYXic1C_Z4wnxOyw-_tUqKbKYBrFtcgirY-gAbcE82L-ypuXfvAys9oFxb95J1rLRc_iI8eOqT_bnIkFNJekojvbnSHbV4pUxN1JaNABWNaeF0lYv9I-m3jgJMlNuCOXY',
};

export const getCurriculumLevelById = (id: string): CurriculumLevel | undefined => {
  return curriculumLevels.find(level => level.id === id);
};

export const getCurriculumLevelByJLPT = (level: string): CurriculumLevel | undefined => {
  return curriculumLevels.find(l => l.level === level);
};

export const getFeaturedTeachers = (count: number = 4) => {
  return teachers.slice(0, count);
};
