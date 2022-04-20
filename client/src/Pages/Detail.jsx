import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBreed } from "../actions/actions";
import Card from "../components/Card/Card";
import Footer from "../components/NavBar/Footer";
import NavBar from "../components/NavBar/NavBar";
import style from "./style.module.css";
function Detail({ id }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBreed(id));
  }, [dispatch, id]);
  const breed = useSelector((state) => state.breed);
  console.log([id, breed]);
  return (
    <div>
      <NavBar />
      <div className={style.card}>
        <Card
          name={breed.name}
          weight={breed.weight}
          height={breed.height}
          image={breed.image}
          lifeSpan={breed.lifeSpan}
          temperaments={breed.temperament}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Detail;
