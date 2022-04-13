import React from "react";
import style from "./Card.css";
export default function Card(props) {
  return (
    <div className={style.contenedor}>
      <h4>{props.name}</h4>
      <div className={style.image}>
        <img src={props.image} alt="" />
      </div>
      <div className={style.informacion}>
        <h6>Height:{props.height}</h6>
        <h6>Weight:{props.weight}</h6>
        <h6>Life Span:{props.lifespan}</h6>
        <h6>Temperaments:{props.temperaments}</h6>
      </div>
    </div>
  );
}
