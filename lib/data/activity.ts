import { WeeklyActivity } from '@/lib/types/dashboard';

export const weeklyActivity: WeeklyActivity[] = [
  { day: 'MON', value: 40 },
  { day: 'TUE', value: 60 },
  { day: 'WED', value: 90, isToday: true },
  { day: 'THU', value: 30 },
  { day: 'FRI', value: 50 },
  { day: 'SAT', value: 75 },
  { day: 'SUN', value: 15 },
];
