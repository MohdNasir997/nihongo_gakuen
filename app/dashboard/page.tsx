
'use client';

import { StatCard } from '@/components/domain/dashboard/StatCard';
import { ContinueLearningCard } from '@/components/domain/dashboard/ContinueLearningCard';
import { WeeklyActivityChart } from '@/components/domain/dashboard/WeeklyActivityChart';
import { DailyGoalList } from '@/components/domain/dashboard/DailyGoalList';
import { Flame, School, Flag } from 'lucide-react';
import { motion } from 'motion/react';
import { userProgress } from '@/lib/data/progress';
import { continueLearning } from '@/lib/data/continueLearning';
import { weeklyActivity } from '@/lib/data/activity';
import { dailyGoals } from '@/lib/data/goals';
import { userProfile } from '@/lib/data/user';
import Link from 'next/link';

export default function DashboardPage() {
  const completedGoals = dailyGoals.filter(goal => goal.completed).length;

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-6xl mx-auto w-full">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <h1 className="text-foreground dark:text-white text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          Okaeri, {userProfile.name.split(' ')[0]}-san! 👋
        </h1>
        <p className="text-muted-foreground dark:text-slate-500 text-sm sm:text-base">
          You&apos;ve mastered 12 new kanji this week. Keep the momentum!
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
        <StatCard
          icon={Flame}
          label="Current Streak"
          value={`${userProgress.currentStreak} Days`}
          badge={userProgress.streakBadge}
          badgeColor="soft-green"
          iconColor="text-orange-400"
          iconBgColor="bg-orange-400/10"
        />
        <StatCard
          icon={School}
          label="Lessons Finished"
          value={userProgress.lessonsFinished.toString()}
          badge={userProgress.progressStatus}
          badgeColor="primary"
          iconColor="text-primary"
          iconBgColor="bg-primary/10"
        />
        <StatCard
          icon={Flag}
          label="JLPT Goal"
          value={userProgress.jlptGoal}
          badge={userProgress.goalTarget}
          iconColor="text-purple-400"
          iconBgColor="bg-purple-400/10"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Continue Learning Section */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-foreground dark:text-white">
              Continue Learning
            </h3>
            <Link
              href="/courses"
              className="text-primary text-sm font-semibold hover:text-accent-muted transition-colors"
            >
              Browse all
            </Link>
          </div>
          {continueLearning.map((course, index) => (
            <ContinueLearningCard key={course.id} course={course} />
          ))}
        </div>

        {/* Right Sidebar - Activity & Goals */}
        <div className="flex flex-col gap-6">
          <WeeklyActivityChart data={weeklyActivity} />
          <DailyGoalList
            goals={dailyGoals}
            completedCount={completedGoals}
            totalCount={dailyGoals.length}
          />
        </div>
      </div>
    </div>
  );
}
