import type { LearningPreferences } from '@/lib/types/dashboard';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

interface LearningPreferencesProps {
  preferences: LearningPreferences;
}

export default function LearningPreferences({ preferences }: LearningPreferencesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <Card className="bg-card-bg border-border-soft shadow-paper">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Learning Preferences
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="jlptGoal">JLPT Goal</Label>
                <Select defaultValue={preferences.jlptGoal}>
                  <SelectTrigger id="jlptGoal">
                    <SelectValue placeholder="Select your goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="N5">N5 - Beginner</SelectItem>
                    <SelectItem value="N4">N4 - Elementary</SelectItem>
                    <SelectItem value="N3">N3 - Intermediate</SelectItem>
                    <SelectItem value="N2">N2 - Advanced</SelectItem>
                    <SelectItem value="N1">N1 - Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dailyGoal">Daily Study Goal (minutes)</Label>
                <Input
                  id="dailyGoal"
                  type="number"
                  defaultValue={preferences.studyTime.dailyGoal}
                  placeholder="30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredTime">Preferred Study Time</Label>
              <Select defaultValue={preferences.studyTime.preferredTime}>
                <SelectTrigger id="preferredTime">
                  <SelectValue placeholder="Select preferred time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (6AM - 12PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12PM - 6PM)</SelectItem>
                  <SelectItem value="evening">Evening (6PM - 12AM)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Focus Areas</Label>
              <div className="flex flex-wrap gap-2">
                {preferences.focusAreas.map((area, index) => (
                  <Button
                    key={index}
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-9"
                  >
                    {area}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-border-soft">
              <Label>Notifications</Label>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Email notifications
                  </span>
                  <Button
                    type="button"
                    variant={preferences.notificationSettings.email ? 'default' : 'outline'}
                    size="sm"
                  >
                    {preferences.notificationSettings.email ? 'On' : 'Off'}
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Push notifications
                  </span>
                  <Button
                    type="button"
                    variant={preferences.notificationSettings.push ? 'default' : 'outline'}
                    size="sm"
                  >
                    {preferences.notificationSettings.push ? 'On' : 'Off'}
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Daily reminders
                  </span>
                  <Button
                    type="button"
                    variant={preferences.notificationSettings.reminders ? 'default' : 'outline'}
                    size="sm"
                  >
                    {preferences.notificationSettings.reminders ? 'On' : 'Off'}
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline" type="button">
                Reset to Defaults
              </Button>
              <Button type="submit">Save Preferences</Button>
            </div>
          </form>
        </div>
      </Card>
    </motion.div>
  );
}
