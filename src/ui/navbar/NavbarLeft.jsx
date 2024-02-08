import React from "react";
import WindowIcon from "@mui/icons-material/Window";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import style from "./navbar.module.css";

const NavbarLeft = () => {
  return (
    <div className={style.itemsLeft}>
      <WindowIcon style={{fontSize:'20px'}} />
      <span>Flow 1</span>
      <ArrowForwardIosIcon style={{fontSize:'14px',fontWeight:'thin'}}/>
      <span>influencers-2</span>
    </div>
  );
};

export default NavbarLeft;
