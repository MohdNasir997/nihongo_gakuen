'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { TeacherReview } from '@/lib/types/teacher';

interface TeacherReviewsProps {
  reviews: TeacherReview[];
  totalReviewCount: number;
}

export function TeacherReviews({ reviews, totalReviewCount }: TeacherReviewsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="card-blur rounded-3xl p-6 lg:p-10 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800"
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Student Reviews</h2>
        <div className="flex items-center gap-2 text-primary font-bold">
          {reviews.length > 0 && (
            <>
              {(reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)}{' '}
              <Star className="w-5 h-5 fill-current" />
            </>
          )}
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map(review => (
          <div
            key={review.id}
            className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-200">
                  {review.avatar ? (
                    <AvatarFallback>{review.avatar}</AvatarFallback>
                  ) : (
                    <AvatarFallback>
                      {review.author
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <p className="font-bold text-sm text-slate-200 dark:text-slate-200">
                    {review.author}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-600">
                    {review.date} • {review.lessonType}
                  </p>
                </div>
              </div>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-slate-600 dark:text-slate-700'}`}
                  />
                ))}
              </div>
            </div>
            <p className="text-slate-400 dark:text-slate-400 text-sm italic">
              &ldquo;{review.comment}&rdquo;
            </p>
          </div>
        ))}
      </div>

      {totalReviewCount > reviews.length && (
        <button className="w-full mt-8 py-3 text-slate-400 hover:text-white font-bold text-sm transition-colors border-t border-slate-700/50 bg-transparent">
          Show all reviews ({totalReviewCount})
        </button>
      )}
    </motion.section>
  );
}
