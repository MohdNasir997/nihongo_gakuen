/**
 * Teacher-related type definitions
 */

export type TeacherSpecialty =
  | 'Grammar'
  | 'Business'
  | 'Conversation'
  | 'Culture'
  | 'Academic'
  | 'Kanji'
  | 'Beginners'
  | 'Kids'
  | 'JLPT N1-N2 Mastery'
  | 'Honorifics (Keigo)'
  | 'Business Etiquette'
  | 'Academic Writing'
  | 'Intensive Speaking';

export type JLPTLevel = 'N1' | 'N2' | 'N3' | 'N4' | 'N5';

export type AvailabilityStatus = 'available' | 'away' | 'busy';

export interface Teacher {
  id: string;
  name: string;
  title: string;
  avatar: string;
  isNative: boolean;
  rating: number;
  reviewCount: number;
  specialties: TeacherSpecialty[];
  level: JLPTLevel;
  bio: string;
  teachingStyle?: string;
  aboutMe?: string;
  hourlyRate: number;
  lessonsDone: number;
  studentCount: number;
  responseTime: string;
  availabilityStatus: AvailabilityStatus;
  videoIntroUrl?: string;
  videoIntroDuration?: string;
  achievements?: Achievement[];
  reviews?: TeacherReview[];
}

export interface Achievement {
  icon: string;
  title: string;
}

export interface TeacherReview {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  lessonType: string;
  comment: string;
}

export interface TeacherFilter {
  searchQuery: string;
  jlptLevel: string;
  lessonType: string;
  availability: string;
}

export interface TimeSlot {
  time: string;
  isSelected: boolean;
  isAvailable: boolean;
}

export interface CalendarDay {
  day: number;
  isAvailable: boolean;
  isSelected: boolean;
  isPast: boolean;
}
