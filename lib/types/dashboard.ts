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
  learning?: number;
  review?: number;
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

// Extended types for student dashboard subpages
export interface DetailedProgress {
  overall: {
    percentage: number;
    lessonsCompleted: number;
    totalLessons: number;
    hoursStudied: number;
  };
  jlptLevels: {
    N5: ProgressLevel;
    N4: ProgressLevel;
    N3: ProgressLevel;
    N2: ProgressLevel;
    N1: ProgressLevel;
  };
  skills: {
    reading: number;
    writing: number;
    listening: number;
    speaking: number;
  };
  achievements: Achievement[];
  milestones: Milestone[];
}

export interface ProgressLevel {
  percentage: number;
  lessonsCompleted: number;
  totalLessons: number;
  nextMilestone?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnedDate: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface Milestone {
  id: string;
  title: string;
  date: string;
  completed: boolean;
}

export interface UserProfileExtended {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  location: string;
  badges: string[];
  stats: {
    coursesCompleted: number;
    hoursStudied: number;
    currentStreak: number;
    longestStreak: number;
  };
  preferences: LearningPreferences;
}

export interface LearningPreferences {
  jlptGoal: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  studyTime: {
    dailyGoal: number;
    preferredTime: 'morning' | 'afternoon' | 'evening';
  };
  focusAreas: string[];
  notificationSettings: {
    email: boolean;
    push: boolean;
    reminders: boolean;
  };
}

export interface UserSettings {
  account: {
    email: string;
    username: string;
    password?: string;
  };
  appearance: {
    theme: 'light' | 'dark' | 'system';
    language: string;
    fontSize: 'small' | 'medium' | 'large';
  };
  notifications: {
    email: boolean;
    push: boolean;
    inApp: boolean;
    dailyReminders: boolean;
    weeklyReport: boolean;
  };
  privacy: {
    profileVisibility: 'public' | 'private';
    showProgress: boolean;
    shareStats: boolean;
  };
}

export interface HelpContent {
  categories: HelpCategory[];
  faqs: FAQItem[];
  tutorials: Tutorial[];
}

export interface HelpCategory {
  id: string;
  name: string;
  icon: string;
  itemCount: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  helpful: number;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  url: string;
  category: string;
}
