import { subDays, addDays, format } from 'date-fns';

export interface Campaign {
  id: string;
  name: string;
  clicks: number;
  cost: number;
  conversions: number;
  date: string;
}

export interface TrendData {
  date: string;
  revenue: number;
  visits: number;
}

export interface DashboardData {
  overview: {
    revenue: number;
    users: number;
    conversions: number;
    growth: number;
  };
  trends: TrendData[];
  campaigns: Campaign[];
  traffic: { source: string; value: number }[];
}

// Generate initial mock data
export function generateDashboardData(): DashboardData {
  const today = new Date();
  const trends: TrendData[] = [];
  const campaigns: Campaign[] = [];
  
  for (let i = 30; i >= 0; i--) {
    const date = subDays(today, i);
    const dateStr = format(date, 'yyyy-MM-dd');
    
    trends.push({
      date: dateStr,
      revenue: Math.floor(Math.random() * 10000) + 3000,
      visits: Math.floor(Math.random() * 5000) + 1000,
    });
    
    if (i % 3 === 0) {
      campaigns.push({
        id: `c${i}`,
        name: `Campaign ${campaigns.length + 1}`,
        clicks: Math.floor(Math.random() * 5000) + 1000,
        cost: Math.floor(Math.random() * 5000) + 500,
        conversions: Math.floor(Math.random() * 500) + 50,
        date: dateStr,
      });
    }
  }
  
  return {
    overview: {
      revenue: 45231.89,
      users: 12453,
      conversions: 2341,
      growth: 12.5,
    },
    trends,
    campaigns,
    traffic: [
      { source: "Direct", value: 35 },
      { source: "Social", value: 25 },
      { source: "Search", value: 20 },
      { source: "Email", value: 15 },
      { source: "Referral", value: 5 },
    ],
  };
}

// Generate new data for real-time updates
export function generateNewData(prevData: DashboardData): DashboardData {
  const today = new Date();
  const newTrends = [...prevData.trends.slice(1)];
  
  // Add new data point
  newTrends.push({
    date: format(today, 'yyyy-MM-dd'),
    revenue: Math.floor(Math.random() * 10000) + 3000,
    visits: Math.floor(Math.random() * 5000) + 1000,
  });
  
  // Update random campaign
  const updatedCampaigns = [...prevData.campaigns];
  if (updatedCampaigns.length > 0) {
    const randomIndex = Math.floor(Math.random() * updatedCampaigns.length);
    const campaign = updatedCampaigns[randomIndex];
    updatedCampaigns[randomIndex] = {
      ...campaign,
      clicks: campaign.clicks + Math.floor(Math.random() * 100),
      conversions: campaign.conversions + Math.floor(Math.random() * 10),
    };
  }
  
  return {
    ...prevData,
    overview: {
      ...prevData.overview,
      revenue: prevData.overview.revenue + Math.floor(Math.random() * 1000),
      users: prevData.overview.users + Math.floor(Math.random() * 100),
      conversions: prevData.overview.conversions + Math.floor(Math.random() * 20),
    },
    trends: newTrends,
    campaigns: updatedCampaigns,
  };
}

// Filter data by date range
export function filterDataByDateRange(data: DashboardData, dateRange: { from: Date; to: Date }): DashboardData {
  const fromDate = dateRange.from;
  const toDate = dateRange.to || dateRange.from;
  
  return {
    ...data,
    trends: data.trends.filter(trend => {
      const trendDate = new Date(trend.date);
      return trendDate >= fromDate && trendDate <= toDate;
    }),
    campaigns: data.campaigns.filter(campaign => {
      const campaignDate = new Date(campaign.date);
      return campaignDate >= fromDate && campaignDate <= toDate;
    }),
  };
}