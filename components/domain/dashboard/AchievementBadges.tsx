import { Achievement } from '@/lib/types/dashboard';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';

interface AchievementBadgesProps {
  achievements: Achievement[];
}

export default function AchievementBadges({ achievements }: AchievementBadgesProps) {
  const getRarityColor = (rarity: Achievement['rarity']) => {
    switch (rarity) {
      case 'common':
        return 'bg-gray-500/20 text-gray-500 border-gray-500/30';
      case 'rare':
        return 'bg-blue-500/20 text-blue-500 border-blue-500/30';
      case 'epic':
        return 'bg-purple-500/20 text-purple-500 border-purple-500/30';
      case 'legendary':
        return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-500 border-gray-500/30';
    }
  };

  const getRarityBorder = () => 'border-2';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <Card className="bg-card-bg border-border-soft shadow-paper">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`p-4 rounded-xl border-2 ${getRarityColor(
                  achievement.rarity
                )} hover:shadow-lg transition-all cursor-pointer`}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="size-16 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl">
                      {achievement.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                      {achievement.description}
                    </p>
                    <Badge className="text-xs">
                      {achievement.rarity.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Earned: {achievement.earnedDate}
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
