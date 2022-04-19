import React from "react";
import style from "./Landing.module.css";
import NavBar from "../NavBar/NavBar.jsx";
import { Link } from "react-router-dom";
import Footer from "../NavBar/Footer";

export default function Landing(props) {
  return (
    <div className={style.BGP}>
      <NavBar />
      <h2 className={style.title}>Henry Dogs</h2>
      <div className={style.btnCont}>
        <Link to={"/home"}>
          <button className={style.btnHome}>Ingresa!</button>
        </Link>
      </div>
      <div className={style.caratula}>
        <span className={style.pocket}>Presentado por:</span>
        <span className={style.pocket}>Roque Iván Moyano</span>
      </div>
      <Footer />
    </div>
  );
}
