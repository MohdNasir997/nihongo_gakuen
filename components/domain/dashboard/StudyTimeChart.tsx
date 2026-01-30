import { Card } from '@/components/ui/card';
import { motion } from 'motion/react';

// interface StudyTimeChartProps {
//   // In a real implementation, this would receive chart data
//   // For now, we'll create a visual representation
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
// }

export default function StudyTimeChart() {
  // Mock data for demonstration
  const weeklyData = [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 3.2 },
    { day: 'Wed', hours: 4.1 },
    { day: 'Thu', hours: 2.8 },
    { day: 'Fri', hours: 3.5 },
    { day: 'Sat', hours: 1.9 },
    { day: 'Sun', hours: 2.2 },
  ];

  const maxHours = Math.max(...weeklyData.map((d) => d.hours));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <Card className="bg-card-bg border-border-soft shadow-paper">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Study Time This Week
            </h2>
            <div className="text-right">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                Total Hours
              </p>
              <p className="text-3xl font-bold text-primary">
                20.2
              </p>
            </div>
          </div>

          <div className="flex items-end gap-2 h-48">
            {weeklyData.map((data, index) => {
              const height = (data.hours / maxHours) * 100;
              return (
                <motion.div
                  key={data.day}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 flex flex-col items-center gap-2 cursor-pointer group"
                >
                  <div
                    className="w-full bg-primary/20 rounded-t-lg transition-all group-hover:bg-primary/30"
                    style={{ height: `${height}%` }}
                  />
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs font-semibold text-slate-900 dark:text-white">
                      {data.day}
                    </span>
                    <span className="text-sm font-bold text-primary">
                      {data.hours}h
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-border-soft">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500">
                  trending_up
                </span>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Average Daily
                  </p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">
                    2.9 hours
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Best Day
                </p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  Wednesday (4.1h)
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
