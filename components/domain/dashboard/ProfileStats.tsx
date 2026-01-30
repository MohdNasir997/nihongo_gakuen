import { Card } from '@/components/ui/card';
import { motion } from 'motion/react';
import { GraduationCap, Clock, Flame, Trophy } from 'lucide-react';

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
      icon: <GraduationCap className="text-3xl" />,
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      label: 'Hours Studied',
      value: stats.hoursStudied,
      icon: <Clock className="text-3xl" />,
      color: 'text-green-600 dark:text-green-400',
    },
    {
      label: 'Current Streak',
      value: `${stats.currentStreak} days`,
      icon: <Flame className="text-3xl" />,
      color: 'text-orange-600 dark:text-orange-400',
    },
    {
      label: 'Longest Streak',
      value: `${stats.longestStreak} days`,
      icon: <Trophy className="text-3xl" />,
      color: 'text-purple-600 dark:text-purple-400',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <Card className="bg-card border-border shadow-sm">
        <div className="p-6">
          <h2 className="text-xl font-bold text-card-foreground mb-6">
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
                className="p-4 rounded-lg bg-accent/20 hover:bg-accent/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className={stat.color}>
                    {stat.icon}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-card-foreground">
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
