/**
 * Curriculum-related type definitions
 */

export type CurriculumPath = 'standard' | 'accelerated';

export type JLPTLevel = 'N1' | 'N2' | 'N3' | 'N4' | 'N5';

export interface CurriculumLevel {
  id: string;
  level: JLPTLevel;
  title: string;
  description: string;
  lessonsCount: number;
  duration: string;
  features: string[];
  isPopular?: boolean;
  color?: string;
}

export interface CurriculumStats {
  activeStudents: string;
  passRate: string;
  teacherCount: string;
  videoLessons: string;
}

export interface FeaturedLesson {
  id: string;
  title: string;
  description: string;
  teacherName: string;
  teacherAvatar: string;
  imageUrl: string;
}

export interface CurriculumFilter {
  path: CurriculumPath;
  level?: JLPTLevel;
}
