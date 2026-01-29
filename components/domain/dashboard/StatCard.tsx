import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  badge?: string;
  badgeColor?: string;
  iconColor?: string;
  iconBgColor?: string;
}

export function StatCard({
  icon: Icon,
  label,
  value,
  badge,
  badgeColor = 'primary',
  iconColor = 'text-primary',
  iconBgColor = 'bg-primary/10',
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
      className="transition-transform"
    >
      <Card className="rounded-2xl p-5 sm:p-6 flex flex-col gap-1 bg-card dark:bg-card border-border dark:border-border hover:shadow-lg">
        <div className="flex justify-between items-start mb-2">
          <div className={`${iconBgColor} ${iconColor} p-2.5 rounded-xl`}>
            <Icon className="h-6 w-6" />
          </div>
          {badge && (
            <span
              className={`text-[10px] font-bold px-2 py-1 rounded-lg ${
                badgeColor === 'soft-green'
                  ? 'bg-soft-green/10 text-soft-green'
                  : badgeColor === 'primary'
                  ? 'bg-primary/10 text-primary'
                  : 'bg-white/5 text-slate-500'
              }`}
            >
              {badge}
            </span>
          )}
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground dark:text-slate-500">
          {label}
        </p>
        <p className="text-2xl font-bold text-foreground dark:text-white">{value}</p>
      </Card>
    </motion.div>
  );
}
