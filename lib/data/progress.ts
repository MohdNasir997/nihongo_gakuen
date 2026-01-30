import { UserProgress, DetailedProgress, Achievement, Milestone, ProgressLevel } from '@/lib/types/dashboard';

export const userProgress: UserProgress = {
  currentStreak: 15,
  streakBadge: 'TOP 5%',
  lessonsFinished: 42,
  progressStatus: 'PROGRESSING',
  jlptGoal: 'N3 Level',
  goalTarget: 'TARGET: DEC',
};

export const detailedProgress: DetailedProgress = {
  overall: {
    percentage: 65,
    lessonsCompleted: 42,
    totalLessons: 64,
    hoursStudied: 127,
  },
  jlptLevels: {
    N5: {
      percentage: 100,
      lessonsCompleted: 12,
      totalLessons: 12,
      nextMilestone: 'Completed!',
    },
    N4: {
      percentage: 78,
      lessonsCompleted: 18,
      totalLessons: 23,
      nextMilestone: 'Passive Verbs',
    },
    N3: {
      percentage: 45,
      lessonsCompleted: 9,
      totalLessons: 20,
      nextMilestone: 'Conditional Forms',
    },
    N2: {
      percentage: 0,
      lessonsCompleted: 0,
      totalLessons: 15,
      nextMilestone: 'Not Started',
    },
    N1: {
      percentage: 0,
      lessonsCompleted: 0,
      totalLessons: 18,
      nextMilestone: 'Not Started',
    },
  },
  skills: {
    reading: 72,
    writing: 58,
    listening: 68,
    speaking: 45,
  },
  achievements: [
    {
      id: 'ach-1',
      title: 'First Steps',
      description: 'Complete your first lesson',
      icon: 'emoji_events',
      earnedDate: '2023-10-15',
      rarity: 'common',
    },
    {
      id: 'ach-2',
      title: 'Week Warrior',
      description: 'Study for 7 consecutive days',
      icon: 'local_fire_department',
      earnedDate: '2023-10-22',
      rarity: 'common',
    },
    {
      id: 'ach-3',
      title: 'Kana Master',
      description: 'Master all Hiragana and Katakana',
      icon: 'school',
      earnedDate: '2023-11-01',
      rarity: 'rare',
    },
    {
      id: 'ach-4',
      title: 'N5 Graduate',
      description: 'Complete all N5 level lessons',
      icon: 'military_tech',
      earnedDate: '2023-11-20',
      rarity: 'epic',
    },
    {
      id: 'ach-5',
      title: 'Streak Master',
      description: 'Achieve a 15-day streak',
      icon: 'whatshot',
      earnedDate: '2023-12-05',
      rarity: 'rare',
    },
  ],
  milestones: [
    {
      id: 'mil-1',
      title: 'Started Learning Journey',
      date: '2023-10-15',
      completed: true,
    },
    {
      id: 'mil-2',
      title: 'Completed N5 Hiragana',
      date: '2023-10-25',
      completed: true,
    },
    {
      id: 'mil-3',
      title: 'Completed N5 Katakana',
      date: '2023-11-05',
      completed: true,
    },
    {
      id: 'mil-4',
      title: 'Passed N5 Grammar Quiz',
      date: '2023-11-15',
      completed: true,
    },
    {
      id: 'mil-5',
      title: 'Started N4 Level',
      date: '2023-11-20',
      completed: true,
    },
    {
      id: 'mil-6',
      title: 'Complete N4 Grammar',
      date: '2024-01-15',
      completed: false,
    },
    {
      id: 'mil-7',
      title: 'Pass N4 Mock Exam',
      date: '2024-02-01',
      completed: false,
    },
  ],
};
