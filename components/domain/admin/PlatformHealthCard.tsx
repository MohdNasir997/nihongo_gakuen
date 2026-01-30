import { PlatformHealth } from '@/lib/types/admin';
import { Card } from '@/components/ui/card';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

interface PlatformHealthCardProps {
  health: PlatformHealth;
}

export default function PlatformHealthCard({ health }: PlatformHealthCardProps) {
  const getStatusColor = () => {
    switch (health.status) {
      case 'optimal':
        return 'bg-green-600 dark:bg-green-500';
      case 'degraded':
        return 'bg-yellow-600 dark:bg-yellow-500';
      case 'down':
        return 'bg-red-600 dark:bg-red-500';
      default:
        return 'bg-gray-600 dark:bg-gray-500';
    }
  };

  const getStatusText = () => {
    switch (health.status) {
      case 'optimal':
        return 'Optimal';
      case 'degraded':
        return 'Degraded';
      case 'down':
        return 'Down';
      default:
        return 'Unknown';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <Card className="bg-primary/10 border-border">
        <div className="p-6">
          <h2 className="text-xl font-bold text-card-foreground mb-4">Platform Health</h2>

          <div className="flex items-center gap-4 mb-4">
            <div className={`size-12 rounded-full ${getStatusColor()} flex items-center justify-center`}>
              <span className="material-symbols-outlined text-white text-xl">
                <CheckCircle />
              </span>
            </div>
            <div>
              <p className="text-2xl font-bold text-card-foreground">
                {getStatusText()}
              </p>
              <p className="text-sm text-muted-foreground">System Status</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Response Time</span>
              <span className="text-sm font-semibold text-card-foreground">
                {health.responseTime}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Uptime</span>
              <span className="text-sm font-semibold text-card-foreground">
                {health.uptime}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
