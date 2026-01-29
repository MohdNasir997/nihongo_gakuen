'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import type { LessonProgress } from '@/lib/types/lesson'

/**
 * Props for lesson navigation component
 */
interface LessonNavigationProps {
  progress: LessonProgress
  onPrevious?: () => void
  onNext?: () => void
  onMarkComplete?: () => void
}

/**
 * Lesson navigation component
 * Features previous/next buttons and progress indicator
 */
export function LessonNavigation({
  progress,
  onPrevious,
  onNext,
  onMarkComplete,
}: LessonNavigationProps) {
  const [isCompleting, setIsCompleting] = useState(false)
  const [completed, setCompleted] = useState(false)

  /**
   * Handle mark as complete
   * Simulates API call to update progress
   */
  const handleMarkComplete = async () => {
    if (!onMarkComplete || isCompleting) return

    setIsCompleting(true)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('Marking lesson as complete')

    setCompleted(true)
    setIsCompleting(false)

    // Call parent handler
    onMarkComplete()

    // TODO: Implement actual API call
  }

  const canGoPrevious = progress.currentLesson > 1
  const canGoNext = progress.currentLesson < progress.totalLessons

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex justify-between items-center bg-white dark:bg-[#1a212c] p-4 rounded-xl border border-gray-200 dark:border-gray-800"
    >
      {/* Previous Button */}
      <Button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        variant="secondary"
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <ArrowLeft className="size-4" />
        <span>Previous Lesson</span>
      </Button>

      {/* Progress Indicator */}
      <div className="hidden sm:block text-xs font-bold text-gray-400 uppercase tracking-widest">
        Progress: {progress.currentLesson} / {progress.totalLessons} Lessons
      </div>

      {/* Next Button */}
      <Button
        onClick={onNext}
        disabled={!canGoNext}
        className="flex items-center gap-2 px-4 py-2 bg-primary dark:bg-blue-400 text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors"
      >
        <span>Next Lesson</span>
        <ArrowRight className="size-4" />
      </Button>
    </motion.div>
  )
}
