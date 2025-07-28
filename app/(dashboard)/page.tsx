import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { MetricCard } from '@/components/dashboard/metric-card';
import { LineChart } from '@/components/dashboard/charts/line-chart';
import { BarChart } from '@/components/dashboard/charts/bar-chart';
import { PieChart } from '@/components/dashboard/charts/pie-chart';
import { DataTable } from '@/components/dashboard/data-table';
import { DateRangePicker } from '@/components/dashboard/date-range-picker';
import { ExportButtons } from '@/components/dashboard/export-buttons';
import { RealTimeUpdater } from '@/components/dashboard/real-time-updater';
import { DataProvider, useData } from '@/lib/data-context';
import { generateDashboardData } from '@/lib/mock-data';

// Server component fetches initial data
async function DashboardContent() {
  const initialData = generateDashboardData();
  
  return (
    <DataProvider initialData={initialData}>
      <DashboardClient />
    </DataProvider>
  );
}

// Client component handles interactions
function DashboardClient() {
  const { dashboardData } = useData();
  
  return (
    <div className="grid gap-6">
      {/* Real-time updates */}
      <RealTimeUpdater interval={10000} />
      
      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">ADmyBRAND Insights</h1>
          <p className="text-muted-foreground">Real-time marketing analytics dashboard</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <DateRangePicker />
          <ExportButtons />
        </div>
      </div>
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<Skeleton className="h-32" />}>
          <MetricCard 
            title="Total Revenue" 
            value={`$${dashboardData.overview.revenue.toLocaleString()}`} 
            change={dashboardData.overview.growth} 
          />
          <MetricCard 
            title="Active Users" 
            value={dashboardData.overview.users.toLocaleString()} 
            change={8.2} 
          />
          <MetricCard 
            title="Conversions" 
            value={dashboardData.overview.conversions.toLocaleString()} 
            change={4.7} 
          />
          <MetricCard 
            title="Avg. Session" 
            value="4m 32s" 
            change={-2.1} 
          />
        </Suspense>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-card p-4 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Revenue Trend</h3>
            <div className="text-sm text-muted-foreground">
              {dashboardData.trends.length} days
            </div>
          </div>
          <Suspense fallback={<Skeleton className="h-64 w-full" />}>
            <LineChart data={dashboardData.trends} />
          </Suspense>
        </div>
        
        <div className="rounded-xl border bg-card p-4 shadow-sm">
          <h3 className="text-lg font-medium mb-4">Traffic Sources</h3>
          <Suspense fallback={<Skeleton className="h-64 w-full" />}>
            <PieChart data={dashboardData.traffic} />
          </Suspense>
        </div>
      </div>

      {/* Data Table */}
      <div className="rounded-xl border bg-card p-4 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Campaign Performance</h3>
          <div className="text-sm text-muted-foreground">
            {dashboardData.campaigns.length} campaigns
          </div>
        </div>
        <Suspense fallback={<Skeleton className="h-64 w-full" />}>
          <DataTable data={dashboardData.campaigns} />
        </Suspense>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <DashboardContent />
    </Suspense>
  );
}