import Link from "next/link";
import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border-dark bg-card-dark flex flex-col fixed h-full hidden lg:flex">
        <div className="p-6 flex flex-col h-full">
          {/* Brand */}
         <div className="flex items-center gap-3 px-2 mb-8">
        <div className="bg-primary/20 text-primary rounded-xl p-2 flex-shrink-0">
          <svg className="size-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
          </svg>
        </div>
        <div className="hidden lg:flex flex-col">
          <h1 className="text-foreground dark:text-white text-base font-bold leading-tight">NihonGo Learn</h1>
          <p className="text-muted-foreground dark:text-slate-500 text-xs font-normal">Admin Portal</p>
        </div>
      </div>


          {/* Navigation */}
          <nav className="flex flex-col gap-2 grow">
            <Link
              href="/admin"
              className="flex items-center gap-3 px-4 py-3 text-[#90a7cb] hover:text-white transition-colors"
            >
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
            <Link
              href="/admin/analytics"
              className="flex items-center gap-3 px-4 py-3 text-[#90a7cb] hover:text-white transition-colors"
            >
              <span className="text-sm font-medium">Analytics</span>
            </Link>
            <Link
              href="/admin/courses"
              className="flex items-center gap-3 px-4 py-3 text-[#90a7cb] hover:text-white transition-colors"
            >
              {" "}
              <span className="text-sm font-medium">Courses</span>
            </Link>
            <Link
              href="/admin/editor/new"
              className="flex items-center gap-3 px-4 py-3 text-[#90a7cb] hover:text-white transition-colors"
            >
              <span className="text-sm font-medium">Editor</span>
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center gap-3 px-4 py-3 text-[#90a7cb] hover:text-white transition-colors mt-auto"
            >
              <span className="text-sm font-medium">Settings</span>
            </Link>
          </nav>

          {/* Quick Add Button */}
          <div className="mt-6 pt-6 border-t border-border-dark">
            <button className="w-full bg-primary dark:bg-blue-400 hover:bg-primary/90 text-white font-bold py-2.5 rounded-lg text-sm transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">add</span>
              Quick Add Course
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-0 lg:ml-64 flex-1">{children}</main>
    </div>
  );
}
