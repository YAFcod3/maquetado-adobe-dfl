import React from "react";
import HelpIcon from "@mui/icons-material/Help";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import style from "./navbar.module.css";

const NavbarRigth = () => {
  return (
    <div className={style.itemsRigth}>
      <div className={style.percent}>
        <div>
          <span>50</span>
          <span>%</span>
        </div>
        <KeyboardArrowDownIcon />
      </div>
      <OpenInFullIcon />
      <HelpIcon />
      <span>Iniciar sesión</span>
    </div>
  );
};

export default NavbarRigth;
