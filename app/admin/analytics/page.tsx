'use client';

import { motion } from 'motion/react';
import { adminMetrics, analyticsData } from '@/lib/data/admin';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, TrendingDown, TrendingUp } from 'lucide-react';

interface BarChartProps {
  data: Array<{ date: string; value: number }>;
  label: string;
  color: string;
  maxValue: number;
  formatValue?: (value: number) => string;
}

function SimpleBarChart({ data, label, color, maxValue, formatValue }: BarChartProps) {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold text-card-foreground mb-4">
        {label}
      </h3>
      <div className="flex-1 relative">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-xs text-muted-foreground">
          <span>{formatValue ? formatValue(maxValue) : maxValue}</span>
          <span>{formatValue ? formatValue(maxValue * 0.75) : Math.round(maxValue * 0.75)}</span>
          <span>{formatValue ? formatValue(maxValue * 0.5) : Math.round(maxValue * 0.5)}</span>
          <span>{formatValue ? formatValue(maxValue * 0.25) : Math.round(maxValue * 0.25)}</span>
          <span>0</span>
        </div>

        {/* Chart area */}
        <div className="ml-14 flex-1 h-64 relative flex items-end justify-between gap-2 border-l border-border">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => (
              <div
                key={index}
                className="w-full border-t border-border/20"
                style={{ bottom: `${ratio * 100}%` }}
              />
            ))}
          </div>

          {/* Bars */}
          {data.map((point, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center group relative"
            >
              <div
                className={`w-full rounded-t-sm transition-all hover:opacity-80 ${color}`}
                style={{
                  height: `${(point.value / maxValue) * 100}%`,
                  minHeight: '4px'
                }}
                title={formatValue ? formatValue(point.value) : point.value.toLocaleString()}
              >
                {/* Hover tooltip */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                  {point.date}
                  <br />
                  <strong>{formatValue ? formatValue(point.value) : point.value.toLocaleString()}</strong>
                </div>
              </div>
              <span className="text-xs text-muted-foreground mt-2">
                {point.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AdminAnalyticsPage() {
  const { charts } = analyticsData;

  // Calculate max values for proper scaling
  const maxRevenue = Math.max(...charts.revenue.map(p => p.value));
  const maxUserGrowth = Math.max(...charts.userGrowth.map(p => p.value));

  return (
    <div className="p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-card-foreground mb-2">
            Analytics
          </h1>
          <p className="text-muted-foreground">
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
              className="bg-card border-border shadow-sm"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    {metric.label}
                  </span>
                  <span
                    className={`material-symbols-outlined text-sm ${
                      metric.trend === 'up'
                        ? 'text-green-600 dark:text-green-400'
                        : metric.trend === 'down'
                        ? 'text-red-600 dark:text-red-400'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {metric.trend === 'up'
                      ? <TrendingUp />
                      : metric.trend === 'down'
                      ? <TrendingDown />
                      : <LineChart />}
                  </span>
                </div>
                <div className="text-3xl font-bold text-card-foreground mb-1">
                  {metric.value}
                </div>
                <div
                  className={`text-sm ${
                    metric.change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
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
          <Card className="bg-card border-border shadow-sm">
            <SimpleBarChart
              data={charts.revenue}
              label="Revenue Over Time"
              color="bg-primary/80 hover:bg-primary/90"
              maxValue={maxRevenue}
              formatValue={(value) => `¥${value.toLocaleString()}`}
            />
          </Card>

          <Card className="bg-card border-border shadow-sm">
            <SimpleBarChart
              data={charts.userGrowth}
              label="User Growth"
              color="bg-indigo-500/80 hover:bg-indigo-500/90 dark:bg-indigo-400/80 dark:hover:bg-indigo-400/90"
              maxValue={maxUserGrowth}
              formatValue={(value) => `${value.toLocaleString()} users`}
            />
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
