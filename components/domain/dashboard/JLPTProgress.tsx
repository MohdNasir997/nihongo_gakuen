import { ProgressLevel } from '@/lib/types/dashboard';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';

interface JLPTProgressProps {
  levels: {
    N5: ProgressLevel;
    N4: ProgressLevel;
    N3: ProgressLevel;
    N2: ProgressLevel;
    N1: ProgressLevel;
  };
}

export default function JLPTProgress({ levels }: JLPTProgressProps) {
  const levelOrder = ['N5', 'N4', 'N3', 'N2', 'N1'] as const;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <Card className="bg-card-bg border-border-soft shadow-paper">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            JLPT Level Progress
          </h2>
          <div className="space-y-4">
            {levelOrder.map((level, index) => {
              const levelData = levels[level as keyof typeof levels];
              return (
                <motion.div
                  key={level}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <Badge className="bg-primary/20 text-primary text-sm mb-2">
                        {level}
                      </Badge>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {levelData.lessonsCompleted} / {levelData.totalLessons} lessons
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <Progress value={levelData.percentage} className="w-24" />
                    </div>
                  </div>
                  {levelData.nextMilestone && (
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-sm">
                        flag
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Next: {levelData.nextMilestone}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
