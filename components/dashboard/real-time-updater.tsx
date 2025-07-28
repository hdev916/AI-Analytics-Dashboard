'use client';

import { useEffect } from 'react';
import { useData } from '@/lib/data-context';
import { generateNewData } from '@/lib/mock-data';

export function RealTimeUpdater({ interval = 5000 }: { interval?: number }) {
  const { setDashboardData } = useData();

  useEffect(() => {
    const timer = setInterval(() => {
      setDashboardData(prev => generateNewData(prev));
    }, interval);

    return () => clearInterval(timer);
  }, [setDashboardData, interval]);

  return null;
}