import { UserProfile, UserProfileExtended, LearningPreferences, UserSettings } from '@/lib/types/dashboard';

export const userProfile: UserProfile = {
  name: 'Alex Chen',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV2B_PXjzKa0KmElCrIFHyxjOR7rWEhJxpyzJezoU4_SoK6bN7bBHRZVLQg_0pjbvVhn8-RnwF6S9b4cD0GjRNH1flLmJiVFbkZYw2yqZwInGqXlGf4RyFEXXBnIQiEn6AAcUII8YkxJlcBXNnzaf1BvOegoEhrVN4g8ZisWz5FgyGt9cHwK6o2fjSJ4p0SM7riL1TlXGkIFzdWaL9G-vBarU8l615vwk6m8SsqcHUqYsWloQtT5T5LP-dlMO2EXuoivbgCA8SllA',
  badge: 'Pro Learner',
  badgeColor: 'soft-green',
};

export const learningPreferences: LearningPreferences = {
  jlptGoal: 'N3',
  studyTime: {
    dailyGoal: 30,
    preferredTime: 'evening',
  },
  focusAreas: ['Grammar', 'Kanji', 'Conversation'],
  notificationSettings: {
    email: true,
    push: true,
    reminders: true,
  },
};

export const userProfileExtended: UserProfileExtended = {
  id: 'user-1',
  name: 'Alex Chen',
  email: 'alex.chen@example.com',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV2B_PXjzKa0KmElCrIFHyxjOR7rWEhJxpyzJezoU4_SoK6bN7bBHRZVLQg_0pjbvVhn8-RnwF6S9b4cD0GjRNH1flLmJiVFbkZYw2yqZwInGqXlGf4RyFEXXBnIQiEn6AAcUII8YkxJlcBXNnzaf1BvOegoEhrVN4g8ZisWz5FgyGt9cHwK6o2fjSJ4p0SM7riL1TlXGkIFzdWaL9G-vBarU8l615vwk6m8SsqcHUqYsWloQtT5T5LP-dlMO2EXuoivbgCA8SllA',
  bio: 'Passionate Japanese learner aiming for N3 certification. Love anime and manga!',
  location: 'San Francisco, CA',
  badges: ['Pro Learner', 'Week Warrior', 'Kana Master'],
  stats: {
    coursesCompleted: 3,
    hoursStudied: 127,
    currentStreak: 15,
    longestStreak: 23,
  },
  preferences: learningPreferences,
};

export const userSettings: UserSettings = {
  account: {
    email: 'alex.chen@example.com',
    username: 'alexchen',
  },
  appearance: {
    theme: 'dark',
    language: 'en',
    fontSize: 'medium',
  },
  notifications: {
    email: true,
    push: true,
    inApp: true,
    dailyReminders: true,
    weeklyReport: true,
  },
  privacy: {
    profileVisibility: 'public',
    showProgress: true,
    shareStats: true,
  },
};
