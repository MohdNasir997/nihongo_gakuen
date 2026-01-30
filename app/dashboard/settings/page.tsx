'use client'
import { userSettings } from '@/lib/data/user';
import SettingsTabs from '@/components/domain/dashboard/SettingsTabs';
import AccountSettings from '@/components/domain/dashboard/AccountSettings';
import AppearanceSettings from '@/components/domain/dashboard/AppearanceSettings';
import NotificationSettings from '@/components/domain/dashboard/NotificationSettings';
import PrivacySettings from '@/components/domain/dashboard/PrivacySettings';

export default function SettingsPage() {
  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Settings
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Customize your account, appearance, notifications, and privacy preferences.
        </p>
      </div>

      {/* Settings Tabs */}
      <SettingsTabs
        account={<AccountSettings settings={userSettings.account} />}
        appearance={<AppearanceSettings settings={userSettings.appearance} />}
        notifications={<NotificationSettings settings={userSettings.notifications} />}
        privacy={<PrivacySettings settings={userSettings.privacy} />}
      />
    </div>
  );
}
