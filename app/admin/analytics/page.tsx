'use client';

import { motion } from 'motion/react';
import { adminMetrics, analyticsData } from '@/lib/data/admin';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AdminAnalyticsPage() {
  const { charts } = analyticsData;

  return (
    <div className="p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Analytics
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Track platform performance, user engagement, and revenue metrics.
          </p>
        </div>

        <div className="flex gap-4 mb-6">
          <Button variant="default" size="sm">
            7 Days
          </Button>
          <Button variant="outline" size="sm">
            30 Days
          </Button>
          <Button variant="outline" size="sm">
            90 Days
          </Button>
          <Button variant="outline" size="sm">
            1 Year
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {adminMetrics.map((metric, index) => (
            <Card
              key={index}
              className="bg-card-bg border-border-soft shadow-paper"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {metric.label}
                  </span>
                  <span
                    className={`material-symbols-outlined text-sm ${
                      metric.trend === 'up'
                        ? 'text-green-500'
                        : metric.trend === 'down'
                        ? 'text-red-500'
                        : 'text-gray-500'
                    }`}
                  >
                    {metric.trend === 'up'
                      ? 'trending_up'
                      : metric.trend === 'down'
                      ? 'trending_down'
                      : 'trending_flat'}
                  </span>
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                  {metric.value}
                </div>
                <div
                  className={`text-sm ${
                    metric.change >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {metric.change >= 0 ? '+' : ''}
                  {metric.change}% from last period
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card-bg border-border-soft shadow-paper">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Revenue Over Time
              </h3>
              <div className="h-64 flex items-end justify-between gap-2">
                {charts.revenue.map((point, index) => (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center"
                  >
                    <div
                      className="w-full bg-primary/80 rounded-t-sm"
                      style={{ height: `${(point.value / 10000) * 100}%` }}
                    ></div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                      {point.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="bg-card-bg border-border-soft shadow-paper">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                User Growth
              </h3>
              <div className="h-64 flex items-end justify-between gap-2">
                {charts.userGrowth.map((point, index) => (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center"
                  >
                    <div
                      className="w-full bg-indigo-500/80 rounded-t-sm"
                      style={{ height: `${(point.value / 5000) * 100}%` }}
                    ></div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                      {point.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
