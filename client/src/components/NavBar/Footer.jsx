import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
export default function Footer() {
  return (
    <div className={style.NavCont}>
      <div className={style.pocket}>
        <div className={style.footerbtn}>Henry Dogs</div>
        <div className={style.footerbtn}>Por Roque Iván Moyano</div>
      </div>
      <div className={style.pocket}>
        <Link to="https://github.com/iblackpixel">
          <button className={style.footerbtn}>GitHub</button>
        </Link>
        <Link to="https://www.linkedin.com/in/roque-iván-moyano-a5b0b7203">
          <button className={style.footerbtn}>LinkedIn</button>
        </Link>
        <Link to="mailto:rimoyano23@gmail.com,rimoyano23@gmail.com">
          <button className={style.footerbtn}>Mail</button>
        </Link>
      </div>
    </div>
  );
}
