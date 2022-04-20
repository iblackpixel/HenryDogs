import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Card from "../components/Card/Card";
import Footer from "../components/NavBar/Footer";
import NavBar from "../components/NavBar/NavBar";
import Paginado from "../components/NavBar/Paginado";
import { getDogs, getTemperaments } from "../actions/actions";
import style from "./style.module.css";
import sty from "../components/Landing/Landing.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const allTemperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const [totalDogs, setTotalDogs] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastCountrie = currentPage * 8;
  const indexOfFirstCountrie = indexOfLastCountrie - 8;
  const paginado = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };
  useEffect(() => {
    setTotalDogs(allDogs.length);
  }, [setTotalDogs, allDogs]);
  return (
    <div className={style.BGP}>
      <NavBar />
      <div className={style.dogcontainer}>
        {allDogs.slice(indexOfFirstCountrie, indexOfLastCountrie).map((e) => {
          return (
            <Card
              key={e.id}
              name={e.name}
              height={e.height}
              weight={e.weight}
              lifeSpan={e.lifeSpan}
              image={e.image}
              temperaments={e.temperament}
            />
          );
        })}
      </div>
      <Paginado totalDogs={totalDogs} paginado={paginado} />
      <Footer />
    </div>
  );
}
