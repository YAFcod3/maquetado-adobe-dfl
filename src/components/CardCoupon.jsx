import React from "react";
import { Divider } from "@mui/material";
import style from '../styles/influencers.module.css'

const cuponesRelacionados = [
  { codigo: 'H586ki', fecha: '06/02/2022' },
  { codigo: 'Manu25', fecha: '06/02/2022' },
  { codigo: 'Manu54', fecha: '06/02/2022' },
  { codigo: 'Manu87', fecha: '06/02/2022' },
  { codigo: 'Manu89', fecha: '06/02/2022' },
];



const CardCoupon = () => {
  return (
    <article className={style.cardCoupon}>
   <div>
      <span style={{ fontWeight: '600' }}>Cupones relacionados</span>
      {cuponesRelacionados.map((cupon, index) => (
        <div key={index} className={style.itemCoupon}>
          <span>{cupon.codigo}</span>
          <span>{cupon.fecha}</span>
        </div>
      ))}
    </div>
      <Divider />
      <footer>
        <span>Ver más</span>
      </footer>
    </article>
  );
};

export default CardCoupon;
