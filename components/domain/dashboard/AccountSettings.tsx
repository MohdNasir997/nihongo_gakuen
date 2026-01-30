import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

interface AccountSettingsProps {
  settings: {
    email: string;
    username: string;
    password?: string;
  };
}

export default function AccountSettings({ settings }: AccountSettingsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <Card className="bg-card-bg border-border-soft shadow-paper">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Account Settings
          </h2>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue={settings.username} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue={settings.email} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">New Password</Label>
              <Input id="password" type="password" placeholder="Enter new password" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" placeholder="Confirm new password" />
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <Button type="submit">Update Password</Button>
              <Button variant="outline" type="button" className="text-red-500 hover:text-red-600">
                Delete Account
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </motion.div>
  );
}
