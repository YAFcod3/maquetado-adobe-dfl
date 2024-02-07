// import Image from "next/image";
import DataInfo from "./components/data-info/DataInfo";
import Sidebar from "./components/sidebar/Sidebar";
import style from "./page.module.css";

export default function Home() {
  return (
    <section className={style.container}>



      {/* left content */}
     <DataInfo/>

      {/* aside content */}
      <Sidebar/>

    </section>
  );
}
