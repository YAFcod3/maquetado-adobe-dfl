import React from 'react'
import style from './influencers.module.css'


const CardCount = ({positionLeft,text,name}) => {

  // const left=Number(positionLeft)


  return (


    <div className={style.cardCount} style={{ left: positionLeft }}>
      <span>{text}</span>
    </div>
  )
}

export default CardCount