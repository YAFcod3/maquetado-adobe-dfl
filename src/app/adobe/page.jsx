
import Navbar from "@/ui/navbar/Navbar";
import DataInfo from "./components/DataInfo";
import Sidebar from "./components/Sidebar";
import style from "./styles/page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className={style.section}>
        {/* left content */}
        <DataInfo />

        {/* aside content */}
        <Sidebar/>
      </section>
    </>
  );
}
