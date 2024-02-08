"use client";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const chartSetting = {


  // xAxis: [
  //   {
  //     label: "rainfall (mm)",
  //   },
  // ],
  width: 380,
  height: 300,
};
const dataset = [
  {
    coupons: 5300,
    country: "Cuba",
  },
  {
    coupons: 4300,

    country: "México",
  },
  {
    coupons: 4150,

    country: "España",
  },
  {
    coupons: 3200,

    country: "Estados Unidos",
  },
  {
    coupons: 3050,

    country: "Reino Unido",
  },
  {
    coupons: 2500,

    country: "Rusia",
  },
  
];

const valueFormatter = (value) => `${value}mm`;

export default function BarChartCountry() {
  return (
    <BarChart
      dataset={dataset}

      yAxis={[{ scaleType: "band", dataKey: "country",
      categoryGapRatio: 0.4,
    }]}
      series={[{ dataKey: "coupons",  valueFormatter ,  color: "rgb(161, 13, 161)",    
 
     }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}
