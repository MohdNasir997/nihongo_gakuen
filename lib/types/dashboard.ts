export interface UserProfile {
  name: string;
  avatar: string;
  badge: string;
  badgeColor: string;
}

export interface UserProgress {
  currentStreak: number;
  streakBadge?: string;
  lessonsFinished: number;
  progressStatus?: string;
  jlptGoal: string;
  goalTarget?: string;
}

export interface WeeklyActivity {
  day: string;
  value: number;
  isToday?: boolean;
}

export interface DailyGoal {
  id: string;
  text: string;
  completed: boolean;
}

export interface ContinueLearning {
  id: string;
  courseId: string;
  title: string;
  type: string;
  nextLesson: string;
  progress: number;
  thumbnail: string;
}
