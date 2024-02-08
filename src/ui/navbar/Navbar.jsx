import React from "react";
import style from "./navbar.module.css";
import NavbarLeft from "./NavbarLeft";
import NavbarRigth from "./NavbarRigth";





const Navbar = () => {
  return (

    <div className={style.navbar}>
      <div className={style.container}>
       <NavbarLeft/>
       <NavbarRigth/>
      
      </div>
    </div>
  );
};

export default Navbar;
