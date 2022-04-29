import React, { useEffect, useMemo, useState } from "react";
import Axios from "axios";
import style from "./Form.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../actions/actions";
export function Form(props) {
  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    lifespan: "",
    temperaments: [],
    optionstatus: 0,
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const contenedor = useSelector((state) => state.temperaments);
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);
  // TODO Terminar la implementación del formulario
  const handleInputChange = function (e) {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSelect = function (e) {
    console.log(e.target.value);
    console.log(input);
    setInput((prevInput) => {
      return {
        ...prevInput,
        [e.target.name]: [...prevInput[e.target.name], e.target.value],
      };
    });

    //setInput({ ...input, input.temperaments: [...input.temperaments, e.target.value] });
  };
  const tempDelete = function (temp) {
    console.log(temp, "esto es temp");
    const filteredTemp = input.temperaments.filter((t) => t !== temp);
    setInput((prevInput) => {
      return {
        ...prevInput,
        temperaments: filteredTemp,
      };
    });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    const doggo = await Axios.post("http://localhost:3001/dog/", input);
    alert("Raza creada");
    history.push("/home");
  };
  const disabledSubmit = useMemo(() => {
    if (
      input.name.length > 0 &&
      input.height.length > 0 &&
      input.weight.length > 0 &&
      input.lifespan.length > 0
    ) {
      return false;
    }
    return true;
  }, [input]);
  return (
    <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
      <div>
        <input
          autoComplete="off"
          placeholder="Nombre"
          type="text"
          name="name"
          onChange={handleInputChange}
          value={input.name}
        />
      </div>
      <div>
        <input
          autoComplete="off"
          placeholder="Altura"
          type="text"
          name="height"
          onChange={handleInputChange}
          value={input.height}
        />
      </div>
      <div>
        <input
          autoComplete="off"
          placeholder="Peso"
          type="text"
          name="weight"
          onChange={handleInputChange}
          value={input.weight}
        />
      </div>
      <div>
        <div>
          <input
            autoComplete="off"
            placeholder="Expectativa de vida"
            type="text"
            name="lifespan"
            onChange={handleInputChange}
            value={input.lifespan}
          />
        </div>
      </div>
      <div>
        <select multiple={true} name="temperaments" onChange={handleSelect}>
          <option key={"h"} value={"default"}>
            Elija un temperamento
          </option>
          {contenedor.map((e) => {
            return (
              <option key={e.id} value={e.temperaments}>
                {e.temperament}
              </option>
            );
          })}
        </select>
        <div>
          Temperamentos:
          {input.temperaments.map((f, i) => {
            return (
              <span>
                {`${f}, `}
                <button
                  type="button"
                  key={i}
                  value={f}
                  onClick={() => tempDelete(f)}
                >
                  X
                </button>
              </span>
            );
          })}
        </div>
      </div>
      <div>
        <button type="submit" disabled={disabledSubmit}>
          Crear Raza
        </button>
      </div>
    </form>
  );
}
// export function validate(input) {
//   let errors = {};

//   if (!input.username) {
//     errors.username = "Username is required";
//   } else if (!/\S+@\S+\.\S+/.test(input.username)) {
//     errors.username = "Username is invalid";
//   }
//   if (!input.password) {
//     errors.password = "Password is required";
//   } else if (!/(?=.*[0-9])/.test(input.password)) {
//     errors.password = "Password is invalid";
//   }

//   return errors;
// }
