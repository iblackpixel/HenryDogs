import React, { useEffect } from "react";
import Axios from "axios";
import style from "./Form.css";
import { useHistory } from "react-router-dom";
export function Form(props) {
  const [input, setInput] = React.useState({
    name: "",
    height: "",
    weight: "",
    lifeSpan: "",
    temperaments: [],
    contenedor: [],
    optionstatus: 0,
  });
  const history = useHistory();
  // TODO Terminar la implementación del formulario
  useEffect(() => {
    async function handleOptions() {
      const datos = await Axios.get("http://localhost:3001/temperament")
        .then((res) => {
          setInput({ contenedor: res.data, optionstatus: 1 });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (input.optionstatus === 0) {
      return () => {
        handleOptions();
      };
    }
  });
  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    const doggo = await Axios.post("http://localhost:3001/dog/", input);
    alert("Raza creada");
    history.push("/home");
  };
  return (
    <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
      <div style={{ alignItem: "center" }}>
        <label style={{ alignItem: "center" }}>Nombre: </label>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={input.name}
        />
      </div>
      <div style={{ alignItem: "center" }}>
        <label style={{ alignItem: "center" }}>Altura: </label>
        <input
          type="text"
          name="height"
          onChange={handleInputChange}
          value={input.height}
        />
      </div>
      <div style={{ alignItem: "center" }}>
        <label style={{ alignItem: "center" }}>Peso: </label>
        <input
          type="text"
          name="weight"
          onChange={handleInputChange}
          value={input.weight}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div>
          {" "}
          <label style={{ alignItems: "center" }}>Edad: </label>
        </div>
        <div>
          {" "}
          <input
            type="text"
            name="lifespan"
            onChange={handleInputChange}
            value={input.lifespan}
          />
        </div>
      </div>
      <div style={{ alignItem: "center" }}>
        <label style={{ textAlign: "center" }}>Temperamentos</label>
        <select name="temperaments" className={style.selectForm}>
          {input.contenedor.map((e) => (
            <option key={e.id} value={e.id}>
              {e.temperament}
            </option>
          ))}
        </select>
      </div>
      <div style={{ alignItem: "center" }}>
        <button type="submit">Crear Raza</button>
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
