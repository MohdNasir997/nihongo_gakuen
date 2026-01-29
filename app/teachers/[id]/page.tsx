import { notFound } from 'next/navigation';

import { getTeacherById } from '@/lib/data/teachers';
import TeacherPage from '@/components/domain/teacher/teacherpage';

interface TeacherProfilePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TeacherProfilePage({ params }: TeacherProfilePageProps) {
  const { id } = await params;
  const teacher = getTeacherById(id);

  if (!teacher) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <TeacherPage teacher={teacher} />
    </div>
  );
}
