import { Card } from '@/components/ui/card';
import { WeeklyActivity as WeeklyActivityType } from '@/lib/types/dashboard';
import { motion } from 'motion/react';

interface WeeklyActivityChartProps {
  data: WeeklyActivityType[];
}

export function WeeklyActivityChart({ data }: WeeklyActivityChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <Card className="rounded-2xl p-6 bg-card dark:bg-card border-border dark:border-border">
        <h3 className="text-xs font-bold text-muted-foreground dark:text-slate-500 mb-6 uppercase tracking-[0.2em]">
          Weekly Activity
        </h3>
        <div className="flex items-end justify-between h-28 gap-2 mb-4 px-1">
          {data.map((item, index) => (
            <motion.div
              key={item.day}
              initial={{ height: 0 }}
              animate={{ height: `${item.value}%` }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`w-full rounded-t-lg cursor-pointer transition-colors ${
                item.isToday
                  ? 'bg-primary/80 shadow-[0_0_12px_rgba(99,102,241,0.2)]'
                  : 'bg-muted dark:bg-white/5 hover:bg-primary/30'
              }`}
              title={`${item.day}: ${item.value}%`}
            />
          ))}
        </div>
        <div className="flex justify-between text-[9px] text-muted-foreground dark:text-slate-600 font-bold tracking-tighter">
          {data.map((item) => (
            <span key={item.day}>{item.day}</span>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
