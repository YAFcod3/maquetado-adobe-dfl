'use client'
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';


export default function LineChartGainsHistory() {
  
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
          color: "rgba(161, 13, 161,0.9)",
        },
      ]}
      width={450}
      height={300}
    />
  );
}