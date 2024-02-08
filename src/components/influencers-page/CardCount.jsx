import React from "react";
import style from '../../styles/influencers.module.css'

const CardCount = ({ positionLeft, text, count }) => {
  // const left=Number(positionLeft)

  return (
    <div className={style.cardCount} style={{ left: positionLeft }}>
      <div>
        <h4>{text}</h4>
        <span>{count}</span>
      </div>
    </div>
  );
};

export default CardCount;
