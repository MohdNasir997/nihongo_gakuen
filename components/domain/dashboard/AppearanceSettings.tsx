import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { motion } from "motion/react";
interface AppearanceSettingsProps {
  settings: {
    theme: "light" | "dark" | "system";
    language: string;
    fontSize: "small" | "medium" | "large";
  };
}
export default function AppearanceSettings({
  settings,
}: AppearanceSettingsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      {" "}
      <Card className="bg-card-bg border-border-soft shadow-paper">
        {" "}
        <div className="p-6">
          {" "}
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            {" "}
            Appearance Settings{" "}
          </h2>{" "}
          <form className="space-y-6">
            {" "}
            <div>
              {" "}
              <Label
                htmlFor="theme"
                className="text-base font-semibold text-slate-900 dark:text-white mb-2 block"
              >
                {" "}
                Theme{" "}
              </Label>{" "}
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                {" "}
                Choose your preferred color scheme{" "}
              </p>{" "}
              <div className="flex gap-2">
                {" "}
                <Button
                  type="button"
                  variant={settings.theme === "light" ? "default" : "outline"}
                  size="sm"
                >
                  {" "}
                  Light{" "}
                </Button>{" "}
                <Button
                  type="button"
                  variant={settings.theme === "dark" ? "default" : "outline"}
                  size="sm"
                >
                  {" "}
                  Dark{" "}
                </Button>{" "}
                <Button
                  type="button"
                  variant={settings.theme === "system" ? "default" : "outline"}
                  size="sm"
                >
                  {" "}
                  System{" "}
                </Button>{" "}
              </div>{" "}
            </div>{" "}
            <div>
              {" "}
              <Label
                htmlFor="language"
                className="text-base font-semibold text-slate-900 dark:text-white mb-2 block"
              >
                {" "}
                Language{" "}
              </Label>{" "}
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                {" "}
                Select your preferred language{" "}
              </p>{" "}
              <select
                id="language"
                aria-label="select your language"
                defaultValue={settings.language}
                className="w-full px-3 py-2 border border-border-soft rounded-md bg-background text-slate-900 dark:text-white"
              >
                {" "}
                <option value="en">English</option>{" "}
                <option value="ja">Japanese</option>{" "}
                <option value="es">Spanish</option>{" "}
                <option value="fr">French</option>{" "}
              </select>{" "}
            </div>{" "}
            <div>
              {" "}
              <Label
                htmlFor="fontSize"
                className="text-base font-semibold text-slate-900 dark:text-white mb-2 block"
              >
                {" "}
                Font Size{" "}
              </Label>{" "}
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                {" "}
                Adjust text size for better readability{" "}
              </p>{" "}
              <div className="flex gap-2">
                {" "}
                <Button
                  type="button"
                  variant={
                    settings.fontSize === "small" ? "default" : "outline"
                  }
                  size="sm"
                >
                  {" "}
                  Small{" "}
                </Button>{" "}
                <Button
                  type="button"
                  variant={
                    settings.fontSize === "medium" ? "default" : "outline"
                  }
                  size="sm"
                >
                  {" "}
                  Medium{" "}
                </Button>{" "}
                <Button
                  type="button"
                  variant={
                    settings.fontSize === "large" ? "default" : "outline"
                  }
                  size="sm"
                >
                  {" "}
                  Large{" "}
                </Button>{" "}
              </div>{" "}
            </div>{" "}
          </form>{" "}
          <div className="pt-4 border-t border-border-soft">
            {" "}
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
