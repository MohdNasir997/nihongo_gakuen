'use client'
import { adminMetrics, recentActivities, popularCourses, platformHealth } from '@/lib/data/admin';
import MetricCard from '@/components/domain/admin/MetricCard';
import ActivityFeed from '@/components/domain/admin/ActivityFeed';
import PopularCoursesCard from '@/components/domain/admin/PopularCoursesCard';
import PlatformHealthCard from '@/components/domain/admin/PlatformHealthCard';

export default function AdminDashboardPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-black tracking-tight text-card-foreground mb-2">
          Admin Dashboard
        </h1>
        <p className="text-muted-foreground">
          Overview of platform metrics and recent activities.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {adminMetrics.map((metric, index) => (
          <MetricCard key={index} metric={metric} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Feed - Takes 2 columns */}
        <div className="lg:col-span-2">
          <ActivityFeed activities={recentActivities} />
        </div>

        {/* Right Column - Takes 1 column */}
        <div className="space-y-6">
          <PopularCoursesCard courses={popularCourses} />
          <PlatformHealthCard health={platformHealth} />
        </div>
      </div>
    </div>
  );
}
