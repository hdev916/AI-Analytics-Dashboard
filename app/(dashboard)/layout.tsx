import { ThemeToggle } from '@/components/theme/theme-toggle';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 backdrop-blur px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary" />
          <h1 className="text-xl font-bold">ADmyBRAND Insights</h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}