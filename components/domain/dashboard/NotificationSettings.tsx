import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

interface NotificationSettingsProps {
  settings: {
    email: boolean;
    push: boolean;
    inApp: boolean;
    dailyReminders: boolean;
    weeklyReport: boolean;
  };
}

export default function NotificationSettings({ settings }: NotificationSettingsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <Card className="bg-card-bg border-border-soft shadow-paper">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Notification Settings
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  Email Notifications
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Receive updates and alerts via email
                </p>
              </div>
              <Button
                type="button"
                variant={settings.email ? 'default' : 'outline'}
                size="sm"
              >
                {settings.email ? 'On' : 'Off'}
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  Push Notifications
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Receive notifications on your device
                </p>
              </div>
              <Button
                type="button"
                variant={settings.push ? 'default' : 'outline'}
                size="sm"
              >
                {settings.push ? 'On' : 'Off'}
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  In-App Notifications
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Show notifications within the app
                </p>
              </div>
              <Button
                type="button"
                variant={settings.inApp ? 'default' : 'outline'}
                size="sm"
              >
                {settings.inApp ? 'On' : 'Off'}
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  Daily Reminders
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Get reminded to study every day
                </p>
              </div>
              <Button
                type="button"
                variant={settings.dailyReminders ? 'default' : 'outline'}
                size="sm"
              >
                {settings.dailyReminders ? 'On' : 'Off'}
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  Weekly Report
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Receive weekly progress summary
                </p>
              </div>
              <Button
                type="button"
                variant={settings.weeklyReport ? 'default' : 'outline'}
                size="sm"
              >
                {settings.weeklyReport ? 'On' : 'Off'}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
