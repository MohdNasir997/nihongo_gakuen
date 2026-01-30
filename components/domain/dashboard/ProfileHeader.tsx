import { UserProfileExtended } from '@/lib/types/dashboard';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { motion } from 'motion/react';

interface ProfileHeaderProps {
  profile: UserProfileExtended;
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-card-bg border-border-soft shadow-paper">
        <div className="p-6">
          <div className="flex items-start gap-6">
            <Avatar className="size-24">
              <img src={profile.avatar} alt={profile.name} />
            </Avatar>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {profile.name}
                </h2>
                <div className="flex gap-2">
                  {profile.badges.map((badge, index) => (
                    <Badge key={index} className="bg-primary/20 text-primary text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-sm">
                    email
                  </span>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {profile.email}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-sm">
                    location_on
                  </span>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {profile.location}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-sm">
                    info
                  </span>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {profile.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
