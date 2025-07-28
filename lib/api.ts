import { dashboardData } from './constants';

export async function getDashboardData() {
  if (process.env.NODE_ENV === 'development') {
    // Use mock data in development
    return dashboardData;
  }

  try {
    const res = await fetch('/api/data');
    return await res.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return dashboardData; // Fallback to mock data
  }
}