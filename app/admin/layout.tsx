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
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-primary rounded-lg size-10 flex items-center justify-center">
              <span className="material-symbols-outlined text-white">
                translate
              </span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white text-base font-bold leading-tight">
                NihonGo Learn
              </h1>
              <p className="text-[#90a7cb] text-xs font-normal">Admin CMS</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2 grow">
            <a
              href="/admin"
              className="flex items-center gap-3 px-4 py-3 text-[#90a7cb] hover:text-white transition-colors"
            >
              <span className="text-sm font-medium">Dashboard</span>
            </a>
            <a
              href="/admin/analytics"
              className="flex items-center gap-3 px-4 py-3 text-[#90a7cb] hover:text-white transition-colors"
            >
              <span className="text-sm font-medium">Analytics</span>
            </a>
            <a
              href="/admin/courses"
              className="flex items-center gap-3 px-4 py-3 text-[#90a7cb] hover:text-white transition-colors"
            >
              {" "}
              <span className="text-sm font-medium">Courses</span>
            </a>
            <a
              href="/admin/editor/new"
              className="flex items-center gap-3 px-4 py-3 text-[#90a7cb] hover:text-white transition-colors"
            >
              <span className="text-sm font-medium">Editor</span>
            </a>
            <a
              href="/admin/settings"
              className="flex items-center gap-3 px-4 py-3 text-[#90a7cb] hover:text-white transition-colors mt-auto"
            >
              <span className="text-sm font-medium">Settings</span>
            </a>
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
