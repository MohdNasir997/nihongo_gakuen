import { WeeklyActivity } from '@/lib/types/dashboard';

export const weeklyActivity: WeeklyActivity[] = [
  { day: 'MON', value: 40, learning: 30, review: 20 },
  { day: 'TUE', value: 60, learning: 45, review: 15 },
  { day: 'WED', value: 90, learning: 60, review: 25, isToday: true },
  { day: 'THU', value: 30, learning: 20, review: 10 },
  { day: 'FRI', value: 50, learning: 40, review: 30 },
  { day: 'SAT', value: 75, learning: 10, review: 65 },
  { day: 'SUN', value: 15, learning: 15, review: 15 },
];
