import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'motion/react';

interface SettingsTabsProps {
  account: ReactNode;
  appearance: ReactNode;
  notifications: ReactNode;
  privacy: ReactNode;
}

export default function SettingsTabs({ account, appearance, notifications, privacy }: SettingsTabsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-card-bg border-border-soft shadow-paper">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="mt-6">
            {account}
          </TabsContent>

          <TabsContent value="appearance" className="mt-6">
            {appearance}
          </TabsContent>

          <TabsContent value="notifications" className="mt-6">
            {notifications}
          </TabsContent>

          <TabsContent value="privacy" className="mt-6">
            {privacy}
          </TabsContent>
        </Tabs>
      </Card>
    </motion.div>
  );
}
