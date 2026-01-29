/**
 * Extended types for lesson player functionality
 * Builds upon existing lesson types from lib/types/course.ts
 */

/**
 * Downloadable lesson resource
 */
export interface LessonResource {
  id: string
  name: string
  type: 'pdf' | 'excel' | 'doc' | 'zip'
  size: string
  url: string
}

/**
 * Instructor reply to a question
 */
export interface InstructorReply {
  text: string
  timestamp: string
}

/**
 * Q&A question in lesson
 */
export interface QAQuestion {
  id: string
  user: {
    name: string
    avatar?: string
  }
  question: string
  timestamp: string
  reply?: InstructorReply
}

/**
 * Lesson progress tracking
 */
export interface LessonProgress {
  currentLesson: number
  totalLessons: number
  completedLessons: number[]
  currentModule: string
}

/**
 * Video player controls state
 */
export interface VideoPlayerState {
  isPlaying: boolean
  currentTime: number
  duration: number
  volume: number
  isMuted: boolean
  isFullscreen: boolean
  showSubtitles: boolean
  playbackSpeed: number
}

/**
 * Complete lesson data structure for player page
 */
export interface LessonPlayerData {
  course: {
    id: string
    title: string
    level: string
  }
  module: {
    id: string
    title: string
    number: number
  }
  lesson: {
    id: string
    title: string
    description: string
    videoUrl: string
    duration: string
    thumbnailUrl: string
  }
  resources: LessonResource[]
  questions: QAQuestion[]
  progress: LessonProgress
}
