'use client';

import { Search } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { UserProfile as UserProfileType } from '@/lib/types/dashboard';

interface DashboardHeaderProps {
  user?: UserProfileType;
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  return (
    <header className="h-16 border-b border-border dark:border-border bg-card/80 dark:bg-card/80 backdrop-blur-md sticky top-0 z-10 px-4 md:px-8 flex items-center justify-between">
      {/* Left Section - Breadcrumb */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground dark:text-slate-500">
          <Link className="hover:text-primary transition-colors" href="/">Home</Link>
          <span className="text-muted-foreground/60 dark:text-slate-600">/</span>
          <span className="text-foreground dark:text-slate-300 font-medium tracking-wide">Dashboard</span>
        </div>
      </div>

      {/* Right Section - Search & Profile */}
      <div className="flex items-center gap-3 md:gap-6">
        {/* Search Bar */}
        <div className="relative w-32 sm:w-64 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground dark:text-slate-500 group-focus-within:text-primary transition-colors text-sm sm:text-base h-4 w-4" />
          <input
            type="text"
            placeholder="Search lessons..."
            className="w-full bg-muted/5 dark:bg-white/5 border border-border dark:border-border rounded-xl pl-8 sm:pl-10 py-2 text-xs sm:text-sm focus:ring-1 focus:ring-primary/50 focus:border-primary/50 text-foreground dark:text-slate-200 placeholder-muted-foreground dark:placeholder-slate-500"
          />
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 border-l border-border dark:border-border pl-3 sm:pl-6">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-sm font-semibold text-foreground dark:text-slate-200">
              {user?.name || 'Guest'}
            </span>
            <Badge
              variant="secondary"
              className={`text-[9px] bg-soft-green/10 text-soft-green px-2 py-0.5 rounded-full font-bold uppercase tracking-wider`}
            >
              {user?.badge || 'Learner'}
            </Badge>
          </div>
          <Avatar className="size-9 border-2 border-border dark:border-border shadow-inner">
            <AvatarImage src={user?.avatar} alt={user?.name} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {user?.name?.split(' ').map(n => n[0]).join('') || 'G'}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
