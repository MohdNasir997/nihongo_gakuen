import { UserProfileExtended } from '@/lib/types/dashboard';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

interface ProfileFormProps {
  profile: UserProfileExtended;
}

export default function ProfileForm({ profile }: ProfileFormProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <Card className="bg-card-bg border-border-soft shadow-paper">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Personal Information
          </h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  defaultValue={profile.name}
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  defaultValue={profile.name.split(' ')[0]}
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue={profile.email}
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                defaultValue={profile.location}
                placeholder="Enter your location"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                defaultValue={profile.bio}
                placeholder="Tell us about yourself..."
                rows={4}
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </div>
      </Card>
    </motion.div>
  );
}
