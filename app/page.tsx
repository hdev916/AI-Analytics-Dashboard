// app/dashboard/page.tsx
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { DataProvider } from '@/lib/data-context';
import { generateDashboardData } from '@/lib/mock-data';
import DashboardClient from '@/components/dashboard/DashboardClient'; // move this to a separate file

export default async function DashboardPage() {
  const initialData = generateDashboardData();

  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <DataProvider initialData={initialData}>
        <DashboardClient />
      </DataProvider>
    </Suspense>
  );
}
