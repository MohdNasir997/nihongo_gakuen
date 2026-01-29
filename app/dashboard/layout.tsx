import { DashboardSidebar } from '@/components/domain/dashboard/DashboardSidebar';
import { DashboardHeader } from '@/components/domain/dashboard/DashboardHeader';
import { userProfile } from '@/lib/data/user';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full relative">
      <DashboardSidebar />
      <main className="flex-1 flex flex-col overflow-y-auto w-full md:ml-20 lg:ml-64">
        <DashboardHeader user={userProfile} />
        {children}
      </main>
    </div>
  );
}
