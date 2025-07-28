'use client';

import { Button } from '@/components/ui/button';
import { DownloadIcon } from 'lucide-react';
import { useData } from '@/lib/data-context';
import { generatePDF, generateCSV } from '@/lib/export-utils';

export function ExportButtons() {
  const { dashboardData } = useData();

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => generateCSV(dashboardData, 'dashboard-export')}
      >
        <DownloadIcon className="mr-2 h-4 w-4" />
        Export CSV
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => generatePDF(dashboardData, 'dashboard-export')}
      >
        <DownloadIcon className="mr-2 h-4 w-4" />
        Export PDF
      </Button>
    </div>
  );
}