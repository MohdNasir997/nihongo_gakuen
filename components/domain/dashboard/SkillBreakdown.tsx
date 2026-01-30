import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { motion } from 'motion/react';

interface SkillBreakdownProps {
  skills: {
    reading: number;
    writing: number;
    listening: number;
    speaking: number;
  };
}

export default function SkillBreakdown({ skills }: SkillBreakdownProps) {
  const skillData = [
    { name: 'Reading', value: skills.reading, icon: 'menu_book' },
    { name: 'Writing', value: skills.writing, icon: 'edit' },
    { name: 'Listening', value: skills.listening, icon: 'headphones' },
    { name: 'Speaking', value: skills.speaking, icon: 'record_voice_over' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <Card className="bg-card-bg border-border-soft shadow-paper">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Skill Breakdown
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {skillData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {skill.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <Progress value={skill.value} className="flex-1" />
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    {skill.value}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
