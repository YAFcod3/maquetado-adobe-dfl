// import Image from "next/image";
import DataInfo from "./components/data-info/DataInfo";
import Sidebar from "./components/sidebar/Sidebar";
import style from "./page.module.css";
import Navbar from "./ui/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className={style.container}>
        {/* left content */}
        <DataInfo />

        {/* aside content */}
        <Sidebar />
      </section>
    </>
  );
}
