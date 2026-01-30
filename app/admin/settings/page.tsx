'use client'
import { motion } from "motion/react";
import { adminSettings } from "@/lib/data/admin";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
export default function AdminSettingsPage() {
  const { general, notifications, security, integrations } = adminSettings;
  return (
    <div className="p-6 md:p-8">
      {" "}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {" "}
        <div className="mb-8">
          {" "}
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {" "}
            Admin Settings{" "}
          </h1>{" "}
          <p className="text-slate-500 dark:text-slate-400">
            {" "}
            Configure platform settings, integrations, and security
            options.{" "}
          </p>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {" "}
          <Card className="bg-card-bg border-border-soft shadow-paper">
            {" "}
            <div className="p-6">
              {" "}
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {" "}
                General Settings{" "}
              </h2>{" "}
              <div className="space-y-4">
                {" "}
                <div>
                  {" "}
                  <Label htmlFor="siteName">Site Name</Label>{" "}
                  <Input id="siteName" defaultValue={general.platformName} />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <Label htmlFor="siteUrl">Site URL</Label>{" "}
                  <Input id="siteUrl" defaultValue={general.platformName} />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <Label htmlFor="defaultLanguage">Default Language</Label>{" "}
                  <select
                    id="defaultLanguage"
                    aria-label="default language"
                    defaultValue={general.defaultLanguage}
                    className="w-full px-3 py-2 border border-border-soft rounded-md bg-background text-slate-900 dark:text-white"
                  >
                    {" "}
                    <option value="en">English</option>{" "}
                    <option value="ja">Japanese</option>{" "}
                    <option value="es">Spanish</option>{" "}
                  </select>{" "}
                </div>{" "}
                <div className="flex items-center justify-between">
                  {" "}
                  <Label htmlFor="maintenanceMode">Maintenance Mode</Label>{" "}
                  <Switch
                    id="maintenanceMode"
                    defaultChecked={true}
                  />{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </Card>{" "}
          <Card className="bg-card-bg border-border-soft shadow-paper">
            {" "}
            <div className="p-6">
              {" "}
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {" "}
                Notification Settings{" "}
              </h2>{" "}
              <div className="space-y-4">
                {" "}
                <div className="flex items-center justify-between">
                  {" "}
                  <Label htmlFor="emailAlerts">Email Alerts</Label>{" "}
                  <Switch
                    id="emailAlerts"
                    defaultChecked={notifications.emailAlerts}
                  />{" "}
                </div>{" "}
                <div className="flex items-center justify-between">
                  {" "}
                  <Label htmlFor="pushNotifications">
                    Push Notifications
                  </Label>{" "}
                  <Switch
                    id="pushNotifications"
                    defaultChecked={notifications.pushNotifications}
                  />{" "}
                </div>{" "}
                <div className="flex items-center justify-between">
                  {" "}
                  <Label htmlFor="weeklyReports">Weekly Reports</Label>{" "}
                  <Switch
                    id="weeklyReports"
                    defaultChecked={true}
                  />{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </Card>{" "}
          <Card className="bg-card-bg border-border-soft shadow-paper">
            {" "}
            <div className="p-6">
              {" "}
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {" "}
                Security Settings{" "}
              </h2>{" "}
              <div className="space-y-4">
                {" "}
                <div>
                  {" "}
                  <Label htmlFor="sessionTimeout">
                    Session Timeout (minutes)
                  </Label>{" "}
                  <Input
                    id="sessionTimeout"
                    type="number"
                    min="1"
                    max="1440"
                    step="1"
                    defaultValue={security.sessionTimeout / 60}
                    aria-describedby="sessionTimeoutHelp"
                  />{" "}
                  <p id="sessionTimeoutHelp" className="text-sm text-slate-500 dark:text-slate-400">
                    Time before users are automatically logged out (1-1440 minutes)
                  </p>
                </div>{" "}
                <div className="flex items-center justify-between">
                  {" "}
                  <Label htmlFor="twoFactorAuth">
                    Two-Factor Authentication
                  </Label>{" "}
                  <Switch
                    id="twoFactorAuth"
                    defaultChecked={security.twoFactorEnabled}
                  />{" "}
                </div>{" "}
                <div className="flex items-center justify-between">
                  {" "}
                  <Label htmlFor="ipWhitelist">IP Whitelist</Label>{" "}
                  <Switch
                    id="ipWhitelist"
                    defaultChecked={true}
                  />{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </Card>{" "}
          <Card className="bg-card-bg border-border-soft shadow-paper">
            {" "}
            <div className="p-6">
              {" "}
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {" "}
                Integrations{" "}
              </h2>{" "}
              <div className="space-y-4">
                {" "}
                <div className="flex items-center justify-between">
                  {" "}
                  <Label htmlFor="stripeIntegration">Stripe Payment</Label>{" "}
                  <Switch
                    id="stripeIntegration"
                    defaultChecked={true}
                  />{" "}
                </div>{" "}
                <div className="flex items-center justify-between">
                  {" "}
                  <Label htmlFor="googleAnalytics">Google Analytics</Label>{" "}
                  <Switch
                    id="googleAnalytics"
                    defaultChecked={true}
                  />{" "}
                </div>{" "}
                <div className="flex items-center justify-between">
                  {" "}
                  <Label htmlFor="emailProvider">
                    Email Service Provider
                  </Label>{" "}
                  <select
                    id="emailProvider"
                    aria-label="email"
                    defaultValue={general.supportEmail}
                    className="w-full px-3 py-2 border border-border-soft rounded-md bg-background text-slate-900 dark:text-white"
                  >
                    {" "}
                    <option value="sendgrid">SendGrid</option>{" "}
                    <option value="mailgun">Mailgun</option>{" "}
                    <option value="aws">AWS SES</option>{" "}
                  </select>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </Card>{" "}
        </div>{" "}
        <div className="mt-6 flex justify-end">
          {" "}
          <Button>Save Changes</Button>{" "}
        </div>{" "}
      </motion.div>{" "}
    </div>
  );
}
