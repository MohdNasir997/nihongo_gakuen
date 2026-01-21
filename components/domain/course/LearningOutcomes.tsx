import { Card } from '@/components/ui/card';
import { CourseDetails } from '@/lib/types/course';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

interface LearningOutcomesProps {
  course: CourseDetails;
}

export function LearningOutcomes({ course }: LearningOutcomesProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <CheckCircle2 className="text-primary" />
        What You&apos;ll Learn
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {course.learningOutcomes.map((outcome, index) => (
          <Card
            key={index}
            className="flex gap-3 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800"
          >
            <CheckCircle2 className="text-green-500 shrink-0 size-5" />
            <p className="text-sm font-medium">{outcome}</p>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
