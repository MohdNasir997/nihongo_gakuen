'use client'

import { useParams } from 'next/navigation'
import { VideoPlayer } from '@/components/domain/lesson/VideoPlayer'
import { LessonResources } from '@/components/domain/lesson/LessonResources'
import { LessonQA } from '@/components/domain/lesson/LessonQA'
import { LessonNavigation } from '@/components/domain/lesson/LessonNavigation'
import { CheckCircle2 } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { mockLessonData, markLessonAsComplete } from '@/lib/data/lessons'

/**
 * Lesson player page
 * Features video player, lesson info, navigation, resources, and Q&A
 * Responsive design with 2/3 + 1/3 grid layout
 */
export default function LessonPlayerPage() {
  const params = useParams()
  const courseId = params.courseId as string
  const lessonId = params.lessonId as string

  // In a real application, this would be an API call
  // For now, use mock data
  const lessonData = mockLessonData

  // Handle mark as complete
  const handleMarkComplete = async () => {
    await markLessonAsComplete(courseId, lessonId)
  }

  return (
    <div className="w-full">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 mb-6">
        <a
          href={`/courses/${courseId}`}
          className="text-[#49699c] dark:text-gray-400 text-sm font-medium hover:underline"
        >
          {lessonData.course.title}
        </a>
        <span className="text-gray-400 text-sm font-medium">/</span>
        <a
          href={`/courses/${courseId}`}
          className="text-[#49699c] dark:text-gray-400 text-sm font-medium hover:underline"
        >
          {lessonData.module.title}
        </a>
        <span className="text-gray-400 text-sm font-medium">/</span>
        <span className="text-primary text-sm font-semibold">
          {lessonData.lesson.title}
        </span>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column (2/3 width) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Video Player */}
          <VideoPlayer thumbnailUrl={lessonData.lesson.thumbnailUrl} />

          {/* Lesson Info & Mark Complete */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4 bg-white dark:bg-[#1a212c] p-6 rounded-xl border border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex-1 min-w-[280px]">
                <h1 className="text-3xl font-black leading-tight tracking-tight text-[#0d131c] dark:text-white">
                  {lessonData.lesson.title}
                </h1>
                <p className="mt-2 text-[#49699c] dark:text-gray-400 text-base leading-relaxed">
                  {lessonData.lesson.description}
                </p>
              </div>
              <Button
                onClick={handleMarkComplete}
                className="flex items-center gap-2 px-6 py-3 bg-primary dark:bg-blue-400 text-white rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-sm"
              >
                <CheckCircle2 className="size-5" />
                <span>Mark as Complete</span>
              </Button>
            </div>
          </motion.div>

          {/* Lesson Navigation */}
          <LessonNavigation
            progress={lessonData.progress}
            onPrevious={() => console.log('Previous lesson')}
            onNext={() => console.log('Next lesson')}
            onMarkComplete={handleMarkComplete}
          />
        </div>

        {/* Sidebar Column (1/3 width) */}
        <div className="flex flex-col gap-6">
          {/* Resources */}
          <LessonResources resources={lessonData.resources} />

          {/* Q&A */}
          <LessonQA questions={lessonData.questions} />
        </div>
      </div>
    </div>
  )
}
