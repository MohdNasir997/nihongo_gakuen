'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Book, BarChart3, User, Settings, MessageCircle, HelpCircle, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { label: 'My Courses', icon: Book, href: '/dashboard', active: true },
  { label: 'My Progress', icon: BarChart3, href: '/dashboard/progress' },
  { label: 'Profile', icon: User, href: '/dashboard/profile' },
  { label: 'Settings', icon: Settings, href: '/dashboard/settings' },
];

export function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="bg-card dark:bg-card border-border dark:border-border">
              <Menu className="h-5 w-5 text-muted-foreground dark:text-slate-400" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0 bg-card dark:bg-card border-border dark:border-border">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed inset-y-0 left-0 z-40 w-20 lg:w-64 flex-col justify-between p-4 h-screen bg-card dark:bg-card border-r border-border dark:border-border">
        <SidebarContent />
      </aside>
    </>
  );
}

function SidebarContent() {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-3 px-2 mb-8">
        <div className="bg-primary/20 text-primary rounded-xl p-2 flex-shrink-0">
          <svg className="size-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
          </svg>
        </div>
        <div className="hidden lg:flex flex-col">
          <h1 className="text-foreground dark:text-white text-base font-bold leading-tight">NihonGo Learn</h1>
          <p className="text-muted-foreground dark:text-slate-500 text-xs font-normal">Student Portal</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1.5 mb-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors md:justify-center lg:justify-start',
                item.active
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground dark:text-slate-400 hover:bg-muted/5 dark:hover:bg-white/5'
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm font-medium md:hidden lg:block">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="flex flex-col gap-4">
        {/* Discord Promo */}
        <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10 hidden lg:block">
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">
            Community
          </p>
          <p className="text-xs text-muted-foreground dark:text-slate-500 mb-3 leading-relaxed">
            Join our student Discord for daily practice.
          </p>
          <Button className="w-full bg-primary dark:bg-blue-400 hover:bg-primary/90 text-white text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2">
            <MessageCircle className="h-4 w-4" />
            Join Discord
          </Button>
        </div>

        {/* Help Center */}
        <Link
          href="/help"
          className="flex items-center gap-3 px-3 py-2 text-muted-foreground dark:text-slate-500 hover:text-primary transition-colors md:justify-center lg:justify-start"
        >
          <HelpCircle className="h-5 w-5" />
          <p className="text-sm font-medium md:hidden lg:block">Help Center</p>
        </Link>
      </div>
    </div>
  );
}
