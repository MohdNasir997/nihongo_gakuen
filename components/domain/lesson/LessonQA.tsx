'use client'

import { useState } from 'react'
import { MessageSquare, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import type { QAQuestion } from '@/lib/types/lesson'

/**
 * Props for lesson Q&A component
 */
interface LessonQAProps {
  questions: QAQuestion[]
}

/**
 * Lesson Q&A component
 * Displays questions with instructor replies and allows posting new questions
 */
export function LessonQA({ questions }: LessonQAProps) {
  const [newQuestion, setNewQuestion] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  /**
   * Handle question submission
   * Simulates API call to post question
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!newQuestion.trim()) return

    setIsSubmitting(true)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('Submitting question:', newQuestion)

    // Reset form and show success
    setNewQuestion('')
    setSubmitSuccess(true)
    setIsSubmitting(false)

    // Hide success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000)

    // TODO: Implement actual API call
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-[#1a212c] p-6 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col flex-1"
    >
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <MessageSquare className="size-5 text-primary" />
        Lesson Q&A
      </h3>

      {/* Questions List */}
      <div className="flex-1 space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2">
        <AnimatePresence mode="popLayout">
          {questions.map((question) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-3 bg-background-light dark:bg-gray-800 rounded-lg"
            >
              {/* Question Header */}
              <div className="flex items-center gap-2 mb-2">
                <Avatar className="size-6">
                  {question.user.avatar ? (
                    <AvatarImage src={question.user.avatar} alt={question.user.name} />
                  ) : (
                    <AvatarFallback className="bg-gray-300">
                      {question.user.name.charAt(0)}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="flex-1">
                  <span className="text-xs font-bold text-gray-900 dark:text-white">
                    {question.user.name}
                  </span>
                  <span className="text-[10px] text-gray-500 ml-2">
                    {question.timestamp}
                  </span>
                </div>
              </div>

              {/* Question Text */}
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {question.question}
              </p>

              {/* Instructor Reply */}
              {question.reply && (
                <div className="mt-2 pl-4 border-l-2 border-primary/30">
                  <p className="text-xs font-semibold text-primary mb-1">
                    Instructor Reply
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                    {question.reply.text}
                  </p>
                  <span className="text-[10px] text-gray-500">
                    {question.reply.timestamp}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Question Input Form */}
      <div className="mt-auto">
        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
          Ask a question
        </label>
        <form onSubmit={handleSubmit}>
          <Textarea
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Type your question here..."
            rows={3}
            className="w-full rounded-lg border-gray-200 dark:border-gray-700 dark:bg-gray-800 text-sm focus:ring-primary focus:border-primary resize-none p-3"
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            disabled={isSubmitting || !newQuestion.trim()}
            className="w-full mt-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg font-bold text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="size-4 animate-spin rounded-full border-2 border-gray-400 border-t-gray-800 dark:border-white dark:border-gray-600" />
                <span>Posting...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <Send className="size-4" />
                <span>Post Question</span>
              </div>
            )}
          </Button>
        </form>

        {/* Success Message */}
        <AnimatePresence>
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-sm text-green-800 dark:text-green-200"
            >
              Question submitted successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
