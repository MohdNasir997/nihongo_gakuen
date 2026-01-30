/**
 * Type definitions for Admin Dashboard
 */

export interface AdminMetric {
  label: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  badge?: {
    count: number;
    color: string;
  };
}

export interface ActivityItem {
  id: string;
  type: 'new_student' | 'course_update' | 'new_subscription' | 'system_alert';
  details: string;
  timestamp: string;
  status: 'completed' | 'reviewing' | 'critical';
}

export interface PlatformHealth {
  status: 'optimal' | 'degraded' | 'down';
  responseTime: string;
  uptime: string;
}

export interface PopularCourse {
  id: string;
  title: string;
  level: string;
  capacity: number;
  students: number;
}

export interface ChartDataPoint {
  date: string;
  value: number;
  label?: string;
}

export interface AnalyticsData {
  dateRange: { start: string; end: string };
  metrics: {
    totalUsers: number;
    activeUsers: number;
    revenue: number;
    completionRate: number;
  };
  charts: {
    userGrowth: ChartDataPoint[];
    revenue: ChartDataPoint[];
    engagement: ChartDataPoint[];
  };
}

export interface CourseManagementData {
  id: string;
  title: string;
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1' | 'All Levels';
  status: 'published' | 'draft' | 'archived';
  students: number;
  rating: number;
  revenue: number;
  createdDate: string;
  lastUpdated: string;
}

export interface LessonContent {
  id: string;
  courseId: string;
  moduleId: string;
  title: string;
  content: string;
  metadata: {
    duration: string;
    difficulty: string;
    tags: string[];
    resources: Resource[];
    description: string;
    allowComments: boolean;
    allowDownloads: boolean;
    requireCompletion: boolean;
    publishDate: string;
  };
  status: 'draft' | 'published' | 'archived';
  lastSaved: string;
}

export interface Resource {
  id: string;
  name: string;
  type: 'pdf' | 'video' | 'audio' | 'image';
  size: string;
  url: string;
}

export interface AdminSettings {
  general: {
    platformName: string;
    supportEmail: string;
    defaultLanguage: string;
  };
  notifications: {
    emailAlerts: boolean;
    pushNotifications: boolean;
    digestFrequency: 'daily' | 'weekly' | 'monthly';
  };
  security: {
    twoFactorEnabled: boolean;
    sessionTimeout: number;
    ipWhitelist: string[];
  };
  integrations: {
    stripeApiKey: string;
    googleAnalyticsId: string;
    sendGridApiKey: string;
  };
}

export interface EngagementMetrics {
  metric: string;
  value: number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
}

export interface RevenueData {
  period: string;
  revenue: number;
  growth: number;
}
