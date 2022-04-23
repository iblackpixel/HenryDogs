import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Card from "../components/Card/Card";
import Footer from "../components/NavBar/Footer";
import NavBar from "../components/NavBar/NavBar";
import Paginado from "../components/NavBar/Paginado";
import { getDogs, getTemperaments } from "../actions/actions";
import style from "./style.module.css";

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
  const [door, setDoor] = useState(0);
  const [door2, setDoor2] = useState(1);
  const [totalDogs, setTotalDogs] = useState([]);
  useEffect(() => {
    setTotalDogs(allDogs);
  }, [setTotalDogs, allDogs]);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastCountrie = currentPage * 8;
  const indexOfFirstCountrie = indexOfLastCountrie - 8;
  const paginado = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };
  const handleWeightSort = function () {
    if (door === 0) {
      const byWeight = [...totalDogs].sort(function (a, b) {
        return a.weight.slice(-2) - b.weight.slice(-2);
      });
      setTotalDogs(byWeight);
      setDoor(1);
      console.log("aqui tampoco");
    } else {
      setTotalDogs(allDogs);
      console.log(totalDogs, "aqui no entra");
      setDoor(0);
    }
  };
  console.log(door, "queonda");
  return (
    <div className={style.BGP}>
      <NavBar />
      <div className="ordenamiento">
        {door === 0 ? (
          <button onClick={(door) => handleWeightSort()}>Peso</button>
        ) : (
          <button onClick={(door) => handleWeightSort()}>A-Z</button>
        )}
        {door2 === 1 ? (
          <button
            onClick={() => {
              setDoor2(0);
            }}
          >
            Ascendente
          </button>
        ) : (
          <button
            onClick={() => {
              setDoor2(1);
            }}
          >
            Descendente
          </button>
        )}
      </div>
      <div className={style.dogcontainer}>
        {door2 === 1
          ? totalDogs
              .slice(indexOfFirstCountrie, indexOfLastCountrie)
              .map((e) => {
                return (
                  <Card
                    key={e.id}
                    id={e.id}
                    name={e.name}
                    weight={e.weight}
                    image={e.image}
                    temperaments={e.temperament}
                  />
                );
              })
          : totalDogs
              .slice(
                totalDogs.length -
                  (indexOfLastCountrie < totalDogs.length
                    ? indexOfLastCountrie
                    : totalDogs.length),
                totalDogs.length - indexOfFirstCountrie
              )
              .reverse()
              .map((e) => {
                return (
                  <Card
                    key={e.id}
                    id={e.id}
                    name={e.name}
                    weight={e.weight}
                    image={e.image}
                    temperaments={e.temperament}
                  />
                );
              })}
      </div>
      <Paginado totalDogs={totalDogs.length} paginado={paginado} />
      <Footer />
    </div>
  );
}
