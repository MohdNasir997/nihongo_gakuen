export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1' | 'All Levels';

export interface Course {
  id: string;
  title: string;
  level: JLPTLevel;
  description: string;
  instructor: {
    name: string;
    avatar?: string;
  };
  lessons: string;
  price: number;
  imageUrl: string;
  badgeColor?: 'primary' | 'indigo' | 'red' | 'black' | 'gray';
}

export interface CourseFilter {
  level: JLPTLevel | 'All Levels';
  kanjiFocus: string;
}

// Extended types for course details page
export interface Instructor {
  name: string;
  avatar?: string;
  title: string;
  bio: string;
  credentials: string[];
}

export type LessonType = 'video' | 'pdf';

export interface Lesson {
  id: string;
  title: string;
  type: LessonType;
  duration: string;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  lessonsCount: number;
  duration: string;
  lessons: Lesson[];
}

export interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  comment: string;
}

export interface CourseStats {
  lessons: number;
  duration: string;
  modules: number;
  students: number;
  rating: number;
  reviewCount: number;
}

export interface CourseIncludes {
  videoHours: string;
  resources: number;
  lifetimeAccess: boolean;
  mobileAccess: boolean;
  certificate: boolean;
}

export interface CourseDetails extends Course {
  slug: string;
  longDescription: string;
  heroImage: string;
  previewVideo: string;
  instructor: Instructor;
  originalPrice?: number;
  discountPercent?: number;
  discountDeadline?: string;
  learningOutcomes: string[];
  modules: Module[];
  reviews: Review[];
  stats: CourseStats;
  includes: CourseIncludes;
}
