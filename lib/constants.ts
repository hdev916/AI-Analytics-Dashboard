export const dashboardData = {
  overview: {
    revenue: 45231.89,
    users: 12453,
    conversions: 2341,
    growth: 12.5,
  },
  trends: [
    { date: "2023-01-01", revenue: 4000, visits: 2400 },
    { date: "2023-02-01", revenue: 6000, visits: 3200 },
    { date: "2023-03-01", revenue: 8000, visits: 3800 },
    { date: "2023-04-01", revenue: 10500, visits: 4100 },
    { date: "2023-05-01", revenue: 12000, visits: 4300 },
    { date: "2023-06-01", revenue: 14000, visits: 4800 },
    { date: "2023-07-01", revenue: 18500, visits: 5200 },
    { date: "2023-08-01", revenue: 21000, visits: 6100 },
    { date: "2023-09-01", revenue: 25000, visits: 6700 },
    { date: "2023-10-01", revenue: 32000, visits: 7200 },
    { date: "2023-11-01", revenue: 39000, visits: 8900 },
    { date: "2023-12-01", revenue: 45231, visits: 10200 },
  ],
  campaigns: [
    { id: "1", name: "Summer Sale", clicks: 3480, cost: 5234, conversions: 812 },
    { id: "2", name: "Back to School", clicks: 4210, cost: 6120, conversions: 1023 },
    { id: "3", name: "Holiday Special", clicks: 5890, cost: 8450, conversions: 1542 },
    { id: "4", name: "New Year Launch", clicks: 3120, cost: 4320, conversions: 721 },
    { id: "5", name: "Spring Refresh", clicks: 4780, cost: 6980, conversions: 1189 },
  ],
  traffic: [
    { source: "Direct", value: 35 },
    { source: "Social", value: 25 },
    { source: "Search", value: 20 },
    { source: "Email", value: 15 },
    { source: "Referral", value: 5 },
  ],
};

// Type definitions
export type DashboardData = typeof dashboardData;
export type Campaign = (typeof dashboardData.campaigns)[0];
export type TrafficSource = (typeof dashboardData.traffic)[0];
export type TrendData = (typeof dashboardData.trends)[0];