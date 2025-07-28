'use client';

import React, { createContext, useContext, useState } from 'react';
import { DashboardData, generateNewData, filterDataByDateRange } from '@/lib/mock-data';

interface DataContextType {
  dashboardData: DashboardData;
  setDashboardData: React.Dispatch<React.SetStateAction<DashboardData>>;
  dateRange: { from: Date; to: Date } | undefined;
  setDateRange: React.Dispatch<React.SetStateAction<{ from: Date; to: Date } | undefined>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children, initialData }: { 
  children: React.ReactNode;
  initialData: DashboardData;
}) {
  const [dashboardData, setDashboardData] = useState<DashboardData>(initialData);
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date } | undefined>();

  // Apply date filtering when dateRange changes
  const filteredData = dateRange 
    ? filterDataByDateRange(dashboardData, dateRange) 
    : dashboardData;

  return (
    <DataContext.Provider value={{ 
      dashboardData: filteredData, 
      setDashboardData, 
      dateRange, 
      setDateRange 
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}