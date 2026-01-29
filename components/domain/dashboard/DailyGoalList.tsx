import { Card } from '@/components/ui/card';
import { Check, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { DailyGoal as DailyGoalType } from '@/lib/types/dashboard';

interface DailyGoalListProps {
  goals: DailyGoalType[];
  completedCount?: number;
  totalCount?: number;
}

export function DailyGoalList({ goals, completedCount, totalCount }: DailyGoalListProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <Card className="rounded-2xl p-6 bg-card dark:bg-card border-border dark:border-border">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xs font-bold text-muted-foreground dark:text-slate-500 uppercase tracking-[0.2em]">
            Daily Goal
          </h3>
          {completedCount !== undefined && totalCount !== undefined && (
            <span className="text-[10px] font-bold text-soft-green">
              {completedCount}/{totalCount} Done
            </span>
          )}
        </div>
        <div className="flex flex-col gap-4">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              className={`flex items-center gap-3 group cursor-pointer ${
                !goal.completed ? 'hover:bg-muted/50 dark:hover:bg-white/5 rounded-lg p-1 -m-1' : ''
              }`}
            >
              <div
                className={`size-5 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  goal.completed
                    ? 'bg-soft-green/10 text-soft-green'
                    : 'border border-border dark:border-border bg-muted dark:bg-white/5 group-hover:border-primary/50 transition-colors'
                }`}
              >
                {goal.completed && <Check className="h-[14px] w-[14px] font-bold" />}
              </div>
              <p
                className={`text-sm font-medium ${
                  goal.completed
                    ? 'text-foreground dark:text-slate-300'
                    : 'text-muted-foreground dark:text-slate-500 group-hover:text-slate-400 transition-colors'
                }`}
              >
                {goal.text}
              </p>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
