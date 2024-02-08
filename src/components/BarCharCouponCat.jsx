"use client";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const chartSetting = {

  width: 400,
  height: 200,
};
const dataset = [
  {
    coupons: 1234,
    category: "Comida",
  },
  {
    coupons: 1083,

    category: "Confecciones",
  },
  {
    coupons: 672,

    category: "Restaurantes",
  },
  {
    coupons: 301,

    category: "Útiles del hogar'",
  },

  
];

const valueFormatter = (value) => `${value}mm`;

export default function BarCharCouponCat() {
  return (
    <BarChart sx={{marginLeft:'30px'}}
      dataset={dataset}

      yAxis={[{ scaleType: "band", dataKey: "category",
      categoryGapRatio: 0.2
    }]}
      series={[{ dataKey: "coupons",  valueFormatter ,  color: "rgb(161, 13, 161)",    
 
     }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}
