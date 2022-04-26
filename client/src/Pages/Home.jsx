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
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);

  useEffect(() => {
    const filtDogs = [...allDogs].sort(function (a, b) {
      return a.name - b.name;
    });
    console.log(
      filtDogs[filtDogs.length - 1],
      filtDogs[filtDogs.length - 2],
      "no se ve"
    );
    setTotalDogs(filtDogs);
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
    } else {
      setTotalDogs(allDogs);
      setDoor(0);
    }
  };
  const handleChecked = function () {
    if (checked === false) {
      if (checked2 === false) {
        let filteredBreeds = allDogs.filter(
          (p) => p.id.toString().includes("b") === false
        );
        setTotalDogs(filteredBreeds);
        console.log(filteredBreeds[0].weight.slice(-2), "aquientra");
        if (door === 1) {
          setTotalDogs(() => {
            handleWeightSort();
          });
        }
      } else {
        setTotalDogs(allDogs);
        if (door === 1) {
          setTotalDogs(() => {
            handleWeightSort();
          });
        }
      }
      return setChecked(true);
    } else {
      if (checked2 === false) {
        setTotalDogs(allDogs);
        if (door === 1) {
          setTotalDogs(() => {
            handleWeightSort();
          });
        }
      } else {
        let filteredBreeds = allDogs.filter(
          (p) => p.id.toString().includes("b") === true
        );
        setTotalDogs(filteredBreeds);

        if (door === 1) {
          setTotalDogs(() => {
            handleWeightSort();
          });
        }
      }
      return setChecked(false);
    }
  };
  const handleChecked2 = function () {
    if (checked2 === false) {
      if (checked === false) {
        let filteredBreeds = allDogs.filter(
          (p) => p.id.toString().includes("b") === true
        );
        setTotalDogs(filteredBreeds);
        if (door === 1) {
          setTotalDogs(() => {
            handleWeightSort();
          });
        }
      } else {
        setTotalDogs(allDogs);
        if (door === 1) {
          setTotalDogs(() => {
            handleWeightSort();
          });
        }
      }
      return setChecked2(true);
    } else {
      if (checked === false) {
        setTotalDogs(allDogs);
      } else {
        let filteredBreeds = allDogs.filter(
          (p) => p.id.toString().includes("b") === false
        );
        setTotalDogs(filteredBreeds);
        if (door === 1) {
          setTotalDogs(() => {
            handleWeightSort();
          });
        }
      }
      return setChecked2(false);
    }
  };
  return (
    <div className={style.BGP}>
      <NavBar />
      <div className="ordenamiento">
        {door === 0 ? (
          <button onClick={() => handleWeightSort()}>Peso</button>
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
        <label>
          <input type="checkbox" checked={checked} onChange={handleChecked} />
          Razas Conocidas
        </label>
        <label>
          <input type="checkbox" checked={checked2} onChange={handleChecked2} />
          Nuevas Razas
        </label>
      </div>
      <div className={style.dogcontainer}>
        {console.log(totalDogs.length)}
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
