import React from "react";

import s from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={s.homepage}>
      <div className={s.imgWrapper}>
        <img src="https://bit.ly/3krhm6E" alt="homepage_img" />
      </div>
      <div className={s.description}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eos
        adipisci accusantium nam perferendis quidem quia facere reprehenderit
        exercitationem ratione asperiores fugit consequuntur explicabo fuga,
        veritatis quas in rerum sit eaque quae!
      </div>
    </div>
  );
};

export default Homepage;
