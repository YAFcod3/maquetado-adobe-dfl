import React from "react";
import { Avatar, Paper } from "@mui/material";

import style from "./influencers.module.css";
const CardProfile = () => {
  return (
    <article className={style.cupon}>




      {/*profile image top */}
      <div className={style.profileImg}>
        <Avatar
          sx={{ width: 76, height: 76 }}
          alt="profile-cupon"
          src="/profile-cupon.avif"
        />
        <p className={style.name}>Manuela Ramos</p>
        <p className={style.email}>email@domain.com</p>
      </div>

      <br />
      {/* social media -bottom */}
      <div className={style.social}>
        <div className={style.socialItem}>
          <span>Phone</span>
          <span>+55 748 327 439</span>
        </div>
        <div className={style.socialItem}>
          <span>Facebook</span>
          <span>Manuela Ramos</span>
        </div>
        <div className={style.socialItem}>
          <span>Twitter</span>
          <span>@manu</span>
        </div>
        <div className={style.socialItem}>
          <span>Youtube</span>
          <span>Manuela Ramos</span>
        </div>
        <div className={style.socialItem}>
          <span>Instagram</span>
          <span>@manu</span>
        </div>
      </div>
    </article>
  );
};

export default CardProfile;
