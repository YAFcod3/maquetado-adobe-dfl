import React from "react";
import ColumnLeft from "../../components/influencers-page/ColumnLeft";
import Data from "@/components/influencers-page/Data";
import style from "../../styles/influencers.module.css";

const Influencers = () => {
  return (
    <section className={style.container}>
      {/* column left */}
      <ColumnLeft />
      {/* container data  */}
      <Data />
    </section>
  );
};

export default Influencers;
