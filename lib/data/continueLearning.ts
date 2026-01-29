import { ContinueLearning } from '@/lib/types/dashboard';

export const continueLearning: ContinueLearning[] = [
  {
    id: '1',
    courseId: 'n4-grammar',
    title: 'JLPT N4: Master Grammar',
    type: 'GRAMMAR',
    nextLesson: 'Lesson 14 - Passive Form (受身形)',
    progress: 65,
    thumbnail: '/assets/course_N4.png',
  },
  {
    id: '2',
    courseId: 'kanji-2000',
    title: 'Daily Kanji: 2000 Essential',
    type: 'VOCAB',
    nextLesson: 'Mastering Radicals & Components',
    progress: 28,
    thumbnail: '/assets/kanji_2000.png',
  },
];
