import React from "react";
import style from "./Card.module.css";
export default function Card({
  name,
  image,
  height,
  weight,
  lifeSpan,
  temperaments,
}) {
  return (
    <div className={style.contenedor}>
      <h4>{name}</h4>
      <div className={style.image}>
        <img src={image} width="60px" height="60px" alt="" />
      </div>
      <div className={style.informacion}>
        <h6>Height:{height}</h6>
        <h6>Weight:{weight}</h6>
        <h6>Life Span:{lifeSpan}</h6>
        <h6>Temperaments:{temperaments}</h6>
      </div>
    </div>
  );
}
