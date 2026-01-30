import { ActivityItem } from '@/lib/types/admin';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';

interface ActivityFeedProps {
  activities: ActivityItem[];
}

export default function ActivityFeed({ activities }: ActivityFeedProps) {
  const getActivityIcon = (type: ActivityItem['type']) => {
    switch (type) {
      case 'new_student':
        return 'person_add';
      case 'course_update':
        return 'edit_note';
      case 'new_subscription':
        return 'payments';
      case 'system_alert':
        return 'warning';
      default:
        return 'info';
    }
  };

  const getStatusBadge = (status: ActivityItem['status']) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500/20 text-green-500">COMPLETED</Badge>;
      case 'reviewing':
        return <Badge className="bg-yellow-500/20 text-yellow-500">REVIEWING</Badge>;
      case 'critical':
        return <Badge className="bg-red-500/20 text-red-500">CRITICAL</Badge>;
      default:
        return <Badge>UNKNOWN</Badge>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <Card className="bg-card-dark border-border-dark">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div
                  className={`size-10 rounded-lg flex items-center justify-center shrink-0 ${
                    activity.type === 'system_alert'
                      ? 'bg-red-500/20'
                      : 'bg-primary/20'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined ${
                      activity.type === 'system_alert'
                        ? 'text-red-500'
                        : 'text-primary'
                    }`}
                  >
                    {getActivityIcon(activity.type)}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-sm text-white flex-1">
                      {activity.details}
                    </p>
                    <span className="text-xs text-[#90a7cb] flex-shrink-0 whitespace-nowrap">
                      {activity.timestamp}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(activity.status)}
                  </div>
                </div>

                <button className="flex-shrink-0 p-1 hover:bg-white/10 rounded transition-colors">
                  <span className="material-symbols-outlined text-[#90a7cb]">
                    more_horiz
                  </span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
