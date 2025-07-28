'use client';

import { cn } from '@/lib/utils'; // CORRECTED IMPORT PATH
import { ArrowUp, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  className?: string;
}

export function MetricCard({
  title,
  value,
  change,
  className,
}: MetricCardProps) {
  const isPositive = change >= 0;

  return (
    <motion.div 
      whileHover={{ y: -5 }}
    >
      <Card className={cn("p-6", className)}>
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <div className="mt-2 flex items-baseline gap-2">
          <p className="text-2xl font-bold">{value}</p>
          <span className={cn(
            "flex items-center text-sm",
            isPositive ? "text-green-500" : "text-red-500"
          )}>
            {isPositive ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
            {Math.abs(change)}%
          </span>
        </div>
      </Card>
    </motion.div>
  );
}