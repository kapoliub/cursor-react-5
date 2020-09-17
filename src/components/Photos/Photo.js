import React from "react";

import s from "./Photos.module.css";

const Photo = ({ url, name, description }) => {
  return (
    <div className={s.photoWrapper}>
      <div className={s.portraitWrapper}>
        <img src={url} alt="portrait_photo" />
      </div>
      <div className={s.textBlock}>
        <div className={s.name}>{name}</div>
        <div className={s.portraitDescription}>{description}</div>
      </div>
    </div>
  );
};

export default Photo;
