import React from "react";
import { Avatar, Paper } from "@mui/material";

import style from "../components/influencers-page/influencers.module.css";
import CardProfile from "../components/influencers-page/CardProfile";
import ColumnLeft from "../components/influencers-page/ColumnLeft";
import CardCount from "../components/influencers-page/CardCount";




const Influencers = () => {




  return (



    <section className={style.container}>


     <ColumnLeft/>




{/* contaainer data  */}

      <div className={style.containerData}>
        <div className={style.cardsParent}>
          {/* header */}
          <Paper elevation={2} className={style.header}>
            <div>
              <span>Inicio/</span> <span>Mi tienda</span>
            </div>
          </Paper>

          {/* card profile */}
          <CardProfile/>
          <CardCount 
          positionLeft="100px"
          text="Cantidad de productos vendidos"
          count='120'

          />
           <CardCount 
          positionLeft="120px"
          text="Cantidad de cupones usados"
          count='12'

          />
           <CardCount 
          positionLeft="130px"
          text="Total de interacciones de los usuarios"
          count='120'

          />
         
        </div>
      </div>
    </section>
  );
};

export default Influencers;
