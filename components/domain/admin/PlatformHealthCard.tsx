import { PlatformHealth } from '@/lib/types/admin';
import { Card } from '@/components/ui/card';
import { motion } from 'motion/react';

interface PlatformHealthCardProps {
  health: PlatformHealth;
}

export default function PlatformHealthCard({ health }: PlatformHealthCardProps) {
  const getStatusColor = () => {
    switch (health.status) {
      case 'optimal':
        return 'bg-green-500';
      case 'degraded':
        return 'bg-yellow-500';
      case 'down':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
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
      <Card className="bg-primary/10 border-primary/30">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-4">Platform Health</h2>

          <div className="flex items-center gap-4 mb-4">
            <div className={`size-12 rounded-full ${getStatusColor()} flex items-center justify-center`}>
              <span className="material-symbols-outlined text-white text-xl">
                check_circle
              </span>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {getStatusText()}
              </p>
              <p className="text-sm text-[#90a7cb]">System Status</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#90a7cb]">Response Time</span>
              <span className="text-sm font-semibold text-white">
                {health.responseTime}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#90a7cb]">Uptime</span>
              <span className="text-sm font-semibold text-white">
                {health.uptime}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
