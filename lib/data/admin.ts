/**
 * Mock data for Admin Dashboard
 */

import {
  AdminMetric,
  ActivityItem,
  PlatformHealth,
  PopularCourse,
  AnalyticsData,
  CourseManagementData,
  LessonContent,
  AdminSettings,
  EngagementMetrics,
  RevenueData,
  ChartDataPoint,
} from '@/lib/types/admin';

export const adminMetrics: AdminMetric[] = [
  {
    label: 'Total Students',
    value: 12482,
    change: 12.5,
    trend: 'up',
  },
  {
    label: 'Active Courses',
    value: 156,
    change: 3.2,
    trend: 'up',
  },
  {
    label: 'Monthly Revenue',
    value: '¥2,450,000',
    change: 8.4,
    trend: 'up',
  },
  {
    label: 'Pending Review',
    value: 24,
    change: 0,
    trend: 'neutral',
    badge: {
      count: 18,
      color: 'orange',
    },
  },
];

export const recentActivities: ActivityItem[] = [
  {
    id: '1',
    type: 'new_student',
    details: 'New student registration: Sarah M.',
    timestamp: '2 minutes ago',
    status: 'completed',
  },
  {
    id: '2',
    type: 'course_update',
    details: 'Course "N3 Grammar" updated by Tanaka Sensei',
    timestamp: '15 minutes ago',
    status: 'completed',
  },
  {
    id: '3',
    type: 'new_subscription',
    details: 'New Pro subscription: John D.',
    timestamp: '1 hour ago',
    status: 'completed',
  },
  {
    id: '4',
    type: 'system_alert',
    details: 'High server load detected on US-East region',
    timestamp: '2 hours ago',
    status: 'critical',
  },
  {
    id: '5',
    type: 'course_update',
    details: 'Course "N5 Vocabulary" published',
    timestamp: '3 hours ago',
    status: 'reviewing',
  },
  {
    id: '6',
    type: 'new_student',
    details: 'New student registration: Michael K.',
    timestamp: '4 hours ago',
    status: 'completed',
  },
];

export const platformHealth: PlatformHealth = {
  status: 'optimal',
  responseTime: '45ms',
  uptime: '99.9%',
};

export const popularCourses: PopularCourse[] = [
  {
    id: '1',
    title: 'JLPT N5: Master Grammar',
    level: 'N5',
    capacity: 85,
    students: 425,
  },
  {
    id: '2',
    title: 'Daily Kanji: 2000 Essential',
    level: 'N3',
    capacity: 62,
    students: 310,
  },
  {
    id: '3',
    title: 'Japanese through Manga',
    level: 'N4',
    capacity: 78,
    students: 390,
  },
];

export const analyticsData: AnalyticsData = {
  dateRange: { start: 'Oct 1, 2023', end: 'Nov 30, 2023' },
  metrics: {
    totalUsers: 12482,
    activeUsers: 8540,
    revenue: 2450000,
    completionRate: 78.5,
  },
  charts: {
    userGrowth: [
      { date: 'Oct 1', value: 11800 },
      { date: 'Oct 8', value: 12050 },
      { date: 'Oct 15', value: 12100 },
      { date: 'Oct 22', value: 12280 },
      { date: 'Oct 29', value: 12350 },
      { date: 'Nov 5', value: 12400 },
      { date: 'Nov 12', value: 12482 },
    ],
    revenue: [
      { date: 'Oct 1', value: 2100000 },
      { date: 'Oct 8', value: 2200000 },
      { date: 'Oct 15', value: 2250000 },
      { date: 'Oct 22', value: 2300000 },
      { date: 'Oct 29', value: 2380000 },
      { date: 'Nov 5', value: 2420000 },
      { date: 'Nov 12', value: 2450000 },
    ],
    engagement: [
      { date: 'Oct 1', value: 72 },
      { date: 'Oct 8', value: 74 },
      { date: 'Oct 15', value: 76 },
      { date: 'Oct 22', value: 75 },
      { date: 'Oct 29', value: 77 },
      { date: 'Nov 5', value: 78 },
      { date: 'Nov 12', value: 78.5 },
    ],
  },
};

export const engagementMetrics: EngagementMetrics[] = [
  { metric: 'Daily Active Users', value: 8540, change: 12.3, trend: 'up' },
  { metric: 'Average Session Duration', value: 45, change: 8.2, trend: 'up' },
  { metric: 'Lesson Completion Rate', value: 78.5, change: 5.1, trend: 'up' },
  { metric: 'Quiz Success Rate', value: 82, change: -2.3, trend: 'down' },
];

export const revenueData: RevenueData[] = [
  { period: 'Oct 2023', revenue: 2100000, growth: 8.4 },
  { period: 'Nov 2023', revenue: 2450000, growth: 16.7 },
  { period: 'Dec 2023', revenue: 2800000, growth: 14.3 },
];

export const courseManagementData: CourseManagementData[] = [
  {
    id: '1',
    title: 'Survival Japanese: Essential Phrases',
    level: 'N5',
    status: 'published',
    students: 425,
    rating: 4.8,
    revenue: 12350,
    createdDate: '2023-01-15',
    lastUpdated: '2023-11-20',
  },
  {
    id: '2',
    title: 'Mastering N3 Kanji: The Core 600',
    level: 'N3',
    status: 'published',
    students: 310,
    rating: 4.9,
    revenue: 18290,
    createdDate: '2023-02-10',
    lastUpdated: '2023-11-18',
  },
  {
    id: '3',
    title: 'Keigo Mastery: Professional Japanese',
    level: 'N2',
    status: 'published',
    students: 185,
    rating: 4.7,
    revenue: 14615,
    createdDate: '2023-03-05',
    lastUpdated: '2023-11-15',
  },
  {
    id: '4',
    title: 'Japanese through Manga: Everyday Slang',
    level: 'N4',
    status: 'draft',
    students: 0,
    rating: 0,
    revenue: 0,
    createdDate: '2023-11-25',
    lastUpdated: '2023-11-28',
  },
  {
    id: '5',
    title: 'Literary Japanese: Reading Classic Novels',
    level: 'N1',
    status: 'published',
    students: 92,
    rating: 4.9,
    revenue: 9108,
    createdDate: '2023-04-20',
    lastUpdated: '2023-11-10',
  },
  {
    id: '6',
    title: 'Daily Listening Practice: Authentic Dialogues',
    level: 'All Levels',
    status: 'published',
    students: 520,
    rating: 4.6,
    revenue: 9880,
    createdDate: '2023-05-15',
    lastUpdated: '2023-11-22',
  },
];

export const lessonContent: LessonContent = {
  id: 'lesson-1',
  courseId: 'course-1',
  moduleId: 'module-1',
  title: 'Mastering JLPT N5 Particles: は vs が',
  content: '<h1>Introduction to Particles</h1><p>In this lesson, we will explore the fundamental differences between は (wa) and が (ga) particles.</p>',
  metadata: {
    duration: '24:15',
    difficulty: 'Beginner',
    tags: ['Grammar', 'Particles', 'N5'],
    resources: [
      {
        id: 'res-1',
        name: 'Lesson Notes.pdf',
        type: 'pdf',
        size: '2.4 MB',
        url: '/downloads/lesson-notes.pdf',
      },
      {
        id: 'res-2',
        name: 'Practice Exercises.pdf',
        type: 'pdf',
        size: '1.8 MB',
        url: '/downloads/practice-exercises.pdf',
      },
    ],
    description: 'Learn the fundamental differences between the は (wa) and が (ga) particles in Japanese grammar.',
    allowComments: true,
    allowDownloads: true,
    requireCompletion: false,
    publishDate: '2024-02-15',
  },
  status: 'draft',
  lastSaved: '14:22',
};

export const adminSettings: AdminSettings = {
  general: {
    platformName: 'NihonGo Learn',
    supportEmail: 'support@nihongolearn.com',
    defaultLanguage: 'en',
  },
  notifications: {
    emailAlerts: true,
    pushNotifications: true,
    digestFrequency: 'weekly',
  },
  security: {
    twoFactorEnabled: true,
    sessionTimeout: 3600,
    ipWhitelist: ['192.168.1.1', '10.0.0.1'],
  },
  integrations: {
    stripeApiKey: 'sk_test_...',
    googleAnalyticsId: 'UA-XXXXX-Y',
    sendGridApiKey: 'SG.xxxxx',
  },
};
