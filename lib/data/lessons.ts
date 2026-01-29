import type { LessonPlayerData } from '@/lib/types/lesson'

/**
 * Mock lesson data for lesson player page
 * Simulates backend data for lesson player functionality
 */
export const mockLessonData: LessonPlayerData = {
  course: {
    id: 'course-1',
    title: 'Japanese N3',
    level: 'N3',
  },
  module: {
    id: 'module-2',
    title: 'Module 2: Grammar',
    number: 2,
  },
  lesson: {
    id: 'lesson-4',
    title: '4. Expressing Intent with ~to omou',
    description:
      'In this lesson, we dive deep into the nuances of expressing personal plans and thoughts using the volitional form combined with \'to omou\'. This is essential for natural-sounding conversational Japanese.',
    videoUrl: 'https://example.com/video-placeholder.mp4',
    duration: '24:15',
    thumbnailUrl: '/assets/course_N3.png',
  },
  resources: [
    {
      id: 'resource-1',
      name: 'Lesson_4_Notes.pdf',
      type: 'pdf',
      size: '2.4 MB',
      url: '/downloads/lesson-4-notes.pdf',
    },
    {
      id: 'resource-2',
      name: 'Vocabulary_List.xlsx',
      type: 'excel',
      size: '1.1 MB',
      url: '/downloads/vocabulary-list.xlsx',
    },
  ],
  questions: [
    {
      id: 'question-1',
      user: {
        name: 'Mikael K.',
        avatar: '/assets/student_1.png',
      },
      question: 'Can I use this with negative volitional forms?',
      timestamp: '2 hours ago',
      reply: {
        text: 'Yes, Mikael! You would use \'nai\' form + \'to omou\'.',
        timestamp: '1 hour ago',
      },
    },
    {
      id: 'question-2',
      user: {
        name: 'Sarah L.',
        avatar: '/assets/student_2.png',
      },
      question: 'Is this lesson part of N3 exam?',
      timestamp: '5 hours ago',
    },
  ],
  progress: {
    currentLesson: 4,
    totalLessons: 12,
    completedLessons: [1, 2, 3],
    currentModule: 'Module 2: Grammar',
  },
}

/**
 * Helper function to get lesson data by course and lesson ID
 * Simulates API call to fetch lesson data
 */
export async function getLessonData(
  courseId: string,
  lessonId: string,
): Promise<LessonPlayerData | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))

  // In a real application, this would be an API call
  // For now, return mock data if IDs match
  if (courseId === 'course-1' && lessonId === 'lesson-4') {
    return mockLessonData
  }

  return null
}

/**
 * Helper function to mark lesson as complete
 * Simulates API call to update progress
 */
export async function markLessonAsComplete(
  courseId: string,
  lessonId: string,
): Promise<{ success: boolean; message: string }> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  console.log(`Marking lesson ${lessonId} as complete for course ${courseId}`)

  return {
    success: true,
    message: 'Lesson marked as complete!',
  }
}

/**
 * Helper function to submit a question
 * Simulates API call to post question
 */
export async function submitQuestion(
  courseId: string,
  lessonId: string,
  question: string,
): Promise<{ success: boolean; message: string }> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  console.log(`Submitting question for lesson ${lessonId}: ${question}`)

  return {
    success: true,
    message: 'Question submitted successfully!',
  }
}

/**
 * Helper function to download a resource
 * Simulates file download
 */
export async function downloadResource(resourceId: string): Promise<{ success: boolean; message: string }> {
  // Simulate download delay
  await new Promise(resolve => setTimeout(resolve, 500))

  console.log(`Downloading resource: ${resourceId}`)

  return {
    success: true,
    message: 'Download started!',
  }
}
