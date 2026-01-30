import { Card } from '@/components/ui/card';
import { motion } from 'motion/react';

interface ProgressOverviewProps {
  progress: {
    percentage: number;
    lessonsCompleted: number;
    totalLessons: number;
    hoursStudied: number;
  };
}

export default function ProgressOverview({ progress }: ProgressOverviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-card-bg border-border-soft shadow-paper">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Overall Progress
          </h2>

          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <svg className="w-40 h-40 transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="12"
                  className="text-border-soft"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="12"
                  strokeDasharray={`${progress.percentage * 4.4} 440`}
                  strokeLinecap="round"
                  className="text-primary"
                  transform="rotate(-90 80 80)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">
                  {progress.percentage}%
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                Lessons Completed
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {progress.lessonsCompleted}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                Total Lessons
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {progress.totalLessons}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                Hours Studied
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {progress.hoursStudied}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
