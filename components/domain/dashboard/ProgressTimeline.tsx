import { Milestone } from '@/lib/types/dashboard';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';

interface ProgressTimelineProps {
  milestones: Milestone[];
}

export default function ProgressTimeline({ milestones }: ProgressTimelineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <Card className="bg-card-bg border-border-soft shadow-paper">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Learning Milestones
          </h2>
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div
                  className={`size-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    milestone.completed ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined ${
                      milestone.completed ? 'text-white' : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {milestone.completed ? 'check' : 'schedule'}
                  </span>
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-base font-semibold mb-1 ${
                      milestone.completed
                        ? 'text-slate-900 dark:text-white'
                        : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {milestone.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-sm">
                      calendar_today
                    </span>
                    <p
                      className={`text-sm ${
                        milestone.completed
                          ? 'text-slate-600 dark:text-slate-400'
                          : 'text-slate-400 dark:text-slate-500'
                      }`}
                    >
                      {milestone.date}
                    </p>
                  </div>
                  {milestone.completed && (
                    <Badge className="bg-green-500/20 text-green-500 text-xs">
                      Completed
                    </Badge>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
