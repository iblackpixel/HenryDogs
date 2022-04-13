import React from "react";
import style from "./Landing.css";
import Navbar from "../NavBar/Navbar";
import { Link } from "react-router-dom";

export default function Landing(props) {
  return (
    <div className="App BGLanding">
      <h2 className={style.title}>Henry Dogs</h2>
      <div className={style.btnHome}>
        <Link to={"/home"}>
          <button>Ingresa!</button>
        </Link>
      </div>
      <div className={style.caratula}>
        <li>Presentado por:</li>
        <li>Roque Iván Moyano</li>
      </div>
      <Navbar />
    </div>
  );
}
