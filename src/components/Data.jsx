import React from "react";
import DataHeader from "./DataHeader";
import CardProfile from "./CardProfile";
import CardCount from "./CardCount";
import CardCoupon from "./CardCoupon";
import Charts from "./Charts";
import style from '../styles/home.module.css'

const cardData = [
  { positionLeft: '280px', text: 'Cantidad de productos vendidos', count: '120' },
  { positionLeft: '590px', text: 'Cantidad de cupones usados', count: '12' },
  { positionLeft: '900px', text: 'Total de interacciones de los usuarios', count: '120' },
];


const Data = () => {
  return (
    <div className={style.dataLayout}>
      <div className={style.cardsContainer}>
        {/* header */}
        <DataHeader />

        {/* card profile */}
        <CardProfile />

     
        {/* card coupont */}
        <CardCoupon />

        {/* cardCount */}
        {cardData.map((data, index) => (
        <CardCount
          key={index}
          positionLeft={data.positionLeft}
          text={data.text}
          count={data.count}
        />
      ))}

        {/* charts */}
      <Charts/>
      </div>
    </div>
  );
};

export default Data;
