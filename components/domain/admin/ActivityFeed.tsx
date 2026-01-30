import { ActivityItem } from '@/lib/types/admin';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, Variants } from 'motion/react';

// Animation constants for maintainability and consistency
const ANIMATION_DURATION = 0.3;
const CONTAINER_DELAY = 0.1;
const ITEM_DELAY_MULTIPLIER = 0.05;

// Reusable animation variants for better performance and consistency
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION,
      delay: CONTAINER_DELAY,
      ease: 'easeOut'
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATION,
      delay: index * ITEM_DELAY_MULTIPLIER,
      ease: 'easeOut'
    }
  })
};

// Status badge styles for consistency and reusability
const statusBadgeStyles = {
  completed: 'bg-green-500/20 text-green-600 dark:text-green-400',
  reviewing: 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400',
  critical: 'bg-red-500/20 text-red-600 dark:text-red-400'
} as const;

// Activity icon mapping for type safety and maintainability
const activityIcons: Record<ActivityItem['type'], string> = {
  new_student: 'person_add',
  course_update: 'edit_note',
  new_subscription: 'payments',
  system_alert: 'warning'
};

// Activity type styles for consistency
const activityTypeStyles = {
  system_alert: {
    bg: 'bg-red-500/20',
    text: 'text-red-600 text-xs  dark:text-red-400'
  },
  default: {
    bg: 'bg-primary/20',
    text: 'text-primary text-xs dark:text-primary'
  }
} as const;

interface ActivityFeedProps {
  activities: ActivityItem[];
}

/**
 * ActivityFeed component displays a list of recent activities with animations.
 * Handles empty states and respects user's motion preferences.
 */
export default function ActivityFeed({ activities }: ActivityFeedProps) {
  // Early return for empty state with proper error handling
  if (!activities || activities.length === 0) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
      <Card className="bg-card border-border">
        <div className="p-6">
          <h2 className="text-xl font-bold text-card-foreground mb-4">Recent Activity</h2>
          <div className="text-center py-8 text-muted-foreground">
            <span className="material-symbols-outlined text-4xl mb-2 block">
              history
            </span>
            <p>No recent activity to display</p>
          </div>
        </div>
      </Card>
      </motion.div>
    );
  }

  const getActivityIcon = (type: ActivityItem['type']): string => {
    return activityIcons[type] || 'info';
  };

  const getStatusBadge = (status: ActivityItem['status']) => {
    const badgeStyle = statusBadgeStyles[status];
    const statusText = status?.toUpperCase() || 'UNKNOWN';

    if (!badgeStyle) {
      return <Badge variant="outline">{statusText}</Badge>;
    }

    return <Badge className={badgeStyle}>{statusText}</Badge>;
  };

  const getActivityTypeStyle = (type: ActivityItem['type']) => {
    return type === 'system_alert' ? activityTypeStyles.system_alert : activityTypeStyles.default;
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Card className="bg-card border-border">
        <div className="p-6">
          <h2 className="text-xl font-bold text-card-foreground mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {activities.map((activity, index) => {
              const typeStyle = getActivityTypeStyle(activity.type);

              return (
                <motion.div
                  key={activity.id}
                  custom={index}
                  variants={itemVariants}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                  aria-label={`Activity: ${activity.details}`}
                >
                  <div
                    className={`size-16 rounded-lg flex items-center justify-center shrink-0 ${typeStyle.bg}`}
                  >
                    <span
                      className={`material-symbols-outlined ${typeStyle.text}`}
                      aria-hidden="true"
                    >
                      {getActivityIcon(activity.type)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="text-xs text-card-foreground flex-1">
                        {activity.details}
                      </p>
                      <span className="text-xs text-muted-foreground flex-shrink-0 whitespace-nowrap" aria-label={`Timestamp: ${activity.timestamp}`}>
                        {activity.timestamp}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(activity.status)}
                    </div>
                  </div>

                  <button
                    className="flex-shrink-0 p-1 hover:bg-accent rounded transition-colors"
                    aria-label="More options"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-muted-foreground">
                      more_horiz
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
