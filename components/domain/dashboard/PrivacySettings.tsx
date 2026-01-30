import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
interface PrivacySettingsProps {
  settings: {
    profileVisibility: "public" | "private";
    showProgress: boolean;
    shareStats: boolean;
  };
}
export default function PrivacySettings({ settings }: PrivacySettingsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      {" "}
      <Card className="bg-card-bg border-border-soft shadow-paper">
        {" "}
        <div className="p-6">
          {" "}
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            {" "}
            Privacy Settings{" "}
          </h2>{" "}
          <form className="space-y-4">
            {" "}
            <div className="flex items-center justify-between">
              {" "}
              <div>
                {" "}
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                  {" "}
                  Profile Visibility{" "}
                </h3>{" "}
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {" "}
                  Control who can see your profile{" "}
                </p>{" "}
              </div>{" "}
              <Button
                type="button"
                variant={
                  settings.profileVisibility === "public"
                    ? "default"
                    : "outline"
                }
                size="sm"
              >
                {" "}
                {settings.profileVisibility === "public"
                  ? "Public"
                  : "Private"}{" "}
              </Button>{" "}
            </div>{" "}
            <div className="flex items-center justify-between">
              {" "}
              <div>
                {" "}
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                  {" "}
                  Show Progress{" "}
                </h3>{" "}
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {" "}
                  Display your learning progress to others{" "}
                </p>{" "}
              </div>{" "}
              <Button
                type="button"
                variant={settings.showProgress ? "default" : "outline"}
                size="sm"
              >
                {" "}
                {settings.showProgress ? "On" : "Off"}{" "}
              </Button>{" "}
            </div>{" "}
            <div className="flex items-center justify-between">
              {" "}
              <div>
                {" "}
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                  {" "}
                  Share Stats{" "}
                </h3>{" "}
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {" "}
                  Allow others to see your learning statistics{" "}
                </p>{" "}
              </div>{" "}
              <Button
                type="button"
                variant={settings.shareStats ? "default" : "outline"}
                size="sm"
              >
                {" "}
                {settings.shareStats ? "On" : "Off"}{" "}
              </Button>{" "}
            </div>{" "}
          </form>{" "}
          <div className="pt-4 border-t border-border-soft">
            {" "}
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              {" "}
              By making your profile public, your progress and achievements will
              be visible to other users in community.{" "}
            </p>{" "}
            <div className="flex justify-end">
              {" "}
              <Button type="submit">Save Changes</Button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </Card>{" "}
    </motion.div>
  );
}
