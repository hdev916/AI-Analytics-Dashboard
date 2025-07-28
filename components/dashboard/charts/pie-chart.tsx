'use client';

import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  PieLabelRenderProps
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

interface PieChartProps {
  data: { source: string; value: number }[];
}

export function PieChart({ data }: PieChartProps) {
  // Correct label renderer using Recharts types
  const renderLabel = (props: PieLabelRenderProps) => {
    // Access data from payload
    const source = props.payload?.source || 'Unknown';
    const percent = props.percent || 0;
    return `${source}: ${(percent * 100).toFixed(0)}%`;
  };

  // Correct tooltip formatter
  const formatTooltip = (value: number, name: string, props: any) => {
    const percent = props.payload?.percent || 0;
    return [`${value} (${(percent * 100).toFixed(1)}%)`, name];
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsPieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          nameKey="source"
          label={renderLabel}  // Correct implementation
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={formatTooltip}
          contentStyle={{ 
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
            borderRadius: 'var(--radius)',
          }}
        />
        <Legend />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
}