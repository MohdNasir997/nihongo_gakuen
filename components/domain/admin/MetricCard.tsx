import { AdminMetric } from '@/lib/types/admin';
import { Card } from '@/components/ui/card';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUp,  Trash2 } from 'lucide-react';

interface MetricCardProps {
  metric: AdminMetric;
}

export default function MetricCard({ metric }: MetricCardProps) {
  const getTrendIcon = () => {
    switch (metric.trend) {
      case 'up':
        return (
          <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-sm">
            <ArrowUp/>
          </span>
        );
      case 'down':
        return (
          <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-sm">
            <ArrowDown/>
          </span>
        );
      default:
        return (
          <span className="material-symbols-outlined text-gray-600 dark:text-gray-400 text-sm">
            <Trash2 />
          </span>
        );
    }
  };

  const getTrendColor = () => {
    switch (metric.trend) {
      case 'up':
        return 'text-green-600 dark:text-green-400';
      case 'down':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-card border-border p-6 hover:border-primary/50 transition-colors">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            {metric.label}
          </h3>
          {metric.badge && (
            <div
              className={`relative flex h-5 w-5 rounded-full ${
                metric.badge.color === 'orange'
                  ? 'bg-orange-500'
                  : 'bg-blue-500'
              }`}
            >
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold text-center">
                {metric.badge.count}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-baseline gap-2 mb-2">
          <p className="text-3xl font-bold text-card-foreground">
            {typeof metric.value === 'number'
              ? metric.value.toLocaleString()
              : metric.value}
          </p>
          <span className={`flex space-x-2 text-sm font-medium ${getTrendColor()}`}>
            {metric.change > 0 ? '+' : ''}
            {metric.change}%
            {getTrendIcon()}
          </span>
        </div>
      </Card>
    </motion.div>
  );
}
