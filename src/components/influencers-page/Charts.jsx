import React from "react";
import LineChartGainsHistory from "./LineChartGainsHistory";
import BarChartCountry from "./BarChartCountry";
import BarCharCouponCat from "./BarCharCouponCat";
import LineChartCouponHistory from "./LineChartCouponHistory";
import style from '../../styles/influencers.module.css'

const Charts = () => {
  return (
    <>
      {/* 1 */}
      <div className={style.cardGainsHistory}>
        <LineChartGainsHistory />
      </div>
      {/* 2 */}
      <div className={style.cardBarCountry}>
        <BarChartCountry />
      </div>

      {/* 3 */}
      <div className={style.cardBarCategory}>
        <BarCharCouponCat />
      </div>

      {/* 4 */}
      <div className={style.cardCouponHistory}>
        <LineChartCouponHistory />
      </div>
    </>
  );
};

export default Charts;
