'use client';

import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useEffect, useState } from 'react';

interface BarChartProps {
  data: { name: string; clicks: number; cost: number; conversions: number }[];
}

export function BarChart({ data }: BarChartProps) {
  const [colors, setColors] = useState({
    primary: '#8884d8',
    secondary: '#82ca9d',
    border: '#e5e7eb',
    muted: '#6b7280',
    background: '#ffffff',
  });

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    setColors({
      primary: rootStyles.getPropertyValue('--primary').trim() || '#8884d8',
      secondary: rootStyles.getPropertyValue('--secondary').trim() || '#82ca9d',
      border: rootStyles.getPropertyValue('--border').trim() || '#e5e7eb',
      muted: rootStyles.getPropertyValue('--muted-foreground').trim() || '#6b7280',
      background: rootStyles.getPropertyValue('--background').trim() || '#ffffff',
    });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
        <XAxis
          dataKey="name"
          tick={{ fill: colors.muted }}
          stroke={colors.border}
        />
        <YAxis
          tick={{ fill: colors.muted }}
          stroke={colors.border}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: colors.background,
            borderColor: colors.border,
            borderRadius: '6px',
          }}
          formatter={(value) => [value, 'Value']}
        />
        <Legend />
        <Bar
          dataKey="clicks"
          fill={colors.primary}
          name="Clicks"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="conversions"
          fill={colors.secondary}
          name="Conversions"
          radius={[4, 4, 0, 0]}
        />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}
