// 'use client'
import React from "react";
import style from "./info.module.css";
import { Avatar, Paper } from "@mui/material";
// import BarChartCountry from "../bar-chart/BarChartCountry";

const DataInfo = () => {
  return (
    // </div>
    <div className={style.layout}>
      <div className={style.row}></div>

      <div className={style.container}>
        {/* columnLeft */}
        <div className={style.column}>scs</div>

        {/* datos */}
        <div className={style.containerData}>
          <div className={style.cardsParent}>
            {/* header */}
            <Paper elevation={2} className={style.header}>
              <div>
                <span>Inicio/</span> <span>Mi tienda</span>
              </div>
            </Paper>

            {/* cupon */}
            <article className={style.cupon}>
              <div>
                <Avatar
                  sx={{ width: 56, height: 56 }}
                  alt="profile-cupon"
                  src="/profile-cupon.avif"
                />
                <div className={style.textCupon}>
                  <p className={style.name}>H4Io58</p>
                  <p className={style.desc}>Cupon de descuento</p>
                </div>
              </div>
            </article>


            {/* influencers asociados */}

            <div className={style.influencersCard}>
              
              <h6>Influencers asociados</h6>
            </div>


          </div>

          {/* <Paper elevation={3}>
            <BarChartCountry />
          </Paper> */}
        </div>
      </div>
    </div>
  );
};

export default DataInfo;
