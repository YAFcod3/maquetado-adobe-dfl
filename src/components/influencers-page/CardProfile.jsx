import React from "react";
import { Avatar, Divider } from "@mui/material";
import style from '../../styles/influencers.module.css'




const CardProfile = () => {


  const socialData = [
    { label: 'Phone', value: '+55 748 327 439' },
    { label: 'Facebook', value: 'Manuela Ramos' },
    { label: 'Twitter', value: '@manu' },
    { label: 'Youtube', value: 'Manuela Ramos' },
    { label: 'Instagram', value: '@manu' },
  ];
  



  return (



    <article className={style.profileContainer}>
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

      <Divider />
      {/* social media -bottom */}
      <div className={style.social}>
      {socialData.map((item, index) => (
        <div key={index} className={style.socialItem}>
          <span>{item.label}</span>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
    </article>
  );
};

export default CardProfile;
