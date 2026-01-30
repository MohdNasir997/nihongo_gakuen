import { Card } from '@/components/ui/card';
import { motion } from 'motion/react';

interface ProfileStatsProps {
  stats: {
    coursesCompleted: number;
    hoursStudied: number;
    currentStreak: number;
    longestStreak: number;
  };
}

export default function ProfileStats({ stats }: ProfileStatsProps) {
  const statsData = [
    {
      label: 'Courses Completed',
      value: stats.coursesCompleted,
      icon: 'school',
      color: 'text-blue-500',
    },
    {
      label: 'Hours Studied',
      value: stats.hoursStudied,
      icon: 'schedule',
      color: 'text-green-500',
    },
    {
      label: 'Current Streak',
      value: `${stats.currentStreak} days`,
      icon: 'local_fire_department',
      color: 'text-orange-500',
    },
    {
      label: 'Longest Streak',
      value: `${stats.longestStreak} days`,
      icon: 'emoji_events',
      color: 'text-purple-500',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <Card className="bg-card-bg border-border-soft shadow-paper">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            My Stats
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`material-symbols-outlined text-3xl ${stat.color}`}
                  >
                    {stat.icon}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
