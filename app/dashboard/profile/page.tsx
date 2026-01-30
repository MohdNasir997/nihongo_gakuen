'use client'
import { userProfileExtended } from '@/lib/data/user';
import { UserProfileExtended as UserProfileExtendedType } from '@/lib/types/dashboard';
import ProfileHeader from '@/components/domain/dashboard/ProfileHeader';
import ProfileForm from '@/components/domain/dashboard/ProfileForm';
import LearningPreferences from '@/components/domain/dashboard/LearningPreferences';
import ProfileStats from '@/components/domain/dashboard/ProfileStats';

export default function ProfilePage() {
  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          My Profile
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Manage your personal information and learning preferences.
        </p>
      </div>

      {/* Profile Header */}
      <div className="mb-8">
        <ProfileHeader profile={userProfileExtended} />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Profile Form - Takes 2 columns */}
        <div className="lg:col-span-2">
          <ProfileForm profile={userProfileExtended} />
        </div>

        {/* Profile Stats - Takes 1 column */}
        <div className="lg:col-span-1">
          <ProfileStats stats={userProfileExtended.stats} />
        </div>
      </div>

      {/* Learning Preferences */}
      <div>
        <LearningPreferences preferences={userProfileExtended.preferences} />
      </div>
    </div>
  );
}
