import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRazaName } from "../../redux/actions";
import Style from "./SearchBar.module.css";

export default function SearchBar() {
  const [nombre, setNombre] = useState("");

  const dispatch = useDispatch();

  const buscarRaza = () => dispatch(getRazaName(nombre));

  function handleChange(e) {
    setNombre(e.target.value);
  }

  const limpiarImput = (nombre) => {
    setNombre((nombre = ""));
  };
  const buscarLimpiar = () => {
    buscarRaza();
    limpiarImput();
  };

  return (
    <div className={Style.conteiner}>
      <input
        type="search"
        value={nombre}
        placeholder="Raza..."
        onChange={handleChange}
      />
      <button onClick={buscarLimpiar}>Buscar</button>
      <button onClick={buscarRaza}>Volver</button>
    </div>
  );
}
