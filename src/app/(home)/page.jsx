import React from "react";
import ColumnLeft from "../../components/ColumnLeft";
import Data from "@/components/Data";
import style from "../../styles/home.module.css";

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
