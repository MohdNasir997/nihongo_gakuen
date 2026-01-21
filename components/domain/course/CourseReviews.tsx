import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { CourseDetails } from '@/lib/types/course';
import { motion } from 'motion/react';
import { Star, StarHalf } from 'lucide-react';

interface CourseReviewsProps {
  course: CourseDetails;
}

export function CourseReviews({ course }: CourseReviewsProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="fill-yellow-400 text-yellow-400 size-4" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="fill-yellow-400 text-yellow-400 size-4" />);
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="text-yellow-400 size-4" />);
    }

    return stars;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="space-y-6 pt-8"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Student Reviews</h2>
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            {renderStars(course.stats.rating)}
          </div>
          <span className="font-bold">{course.stats.rating}</span>
          <span className="text-slate-500 text-sm">({course.stats.reviewCount} reviews)</span>
        </div>
      </div>
      <div className="space-y-4">
        {course.reviews.map((review) => (
          <Card
            key={review.id}
            className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800"
          >
            <div className="flex justify-between mb-4">
              <div className="flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage src={review.avatar} alt={review.author} />
                  <AvatarFallback className="bg-slate-200 text-slate-500 font-bold text-sm">
                    {review.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-sm">{review.author}</p>
                  <p className="text-xs text-slate-500">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 text-sm">
                {renderStars(review.rating)}
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm italic">&ldquo;{review.comment}&rdquo;</p>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
