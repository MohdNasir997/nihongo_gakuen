
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Play } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ContinueLearning as ContinueLearningType } from '@/lib/types/dashboard';

interface ContinueLearningCardProps {
  course: ContinueLearningType;
}

export function ContinueLearningCard({ course }: ContinueLearningCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="group"
    >
      <Card className="rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-card dark:bg-card border-border dark:border-border hover:shadow-lg transition-all">
        <div className="w-full sm:w-28 h-40 sm:h-24 rounded-xl bg-muted dark:bg-muted/20 flex-shrink-0 overflow-hidden border border-border dark:border-border relative">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 112px"
          />
        </div>
        <div className="flex-1 w-full">
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-bold text-lg text-foreground dark:text-white group-hover:text-primary transition-colors">
              {course.title}
            </h4>
            <span className="text-[10px] font-bold text-muted-foreground dark:text-slate-500 bg-muted dark:bg-white/5 px-2 py-1 rounded-lg">
              {course.type}
            </span>
          </div>
          <p className="text-xs text-muted-foreground dark:text-slate-500 mb-5 font-medium">
            Next: {course.nextLesson}
          </p>
          <div className="flex items-center gap-4">
            <div className="flex-1 bg-muted dark:bg-white/5 h-1.5 rounded-full overflow-hidden">
              <Progress value={course.progress} className="h-full" />
            </div>
            <span className="text-[10px] font-bold text-muted-foreground dark:text-slate-400">
              {course.progress}%
            </span>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="size-11 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20 self-end sm:self-center"
        >
          <Play className="h-5 w-5 fill-current" />
        </motion.button>
      </Card>
    </motion.div>
  );
}
