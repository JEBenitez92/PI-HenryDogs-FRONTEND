import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { validate } from "./Validacion";
import Style from "./From.module.css";
import axios from "axios";

const From = () => {
  const temperamentos = useSelector((state) => state.Temperamento);
  const razaNombre = useSelector((state) => state.RazaNombre);
  const nombres = razaNombre.map((raza) => raza.nombre);
  const nombre = nombres.filter((item, index) => {
    return nombres.indexOf(item) === index;
  });

  const [crear, setCrear] = useState({
    nombre: "",
    peso_min: "",
    peso_max: "",
    altura_min: "",
    altura_max: "",
    años_de_vida: "",
    imagen: "",
    temperamento: "",
  });

  const [error, setError] = useState({
    nombre: "",
    peso_min: "",
    peso_max: "",
    altura_min: "",
    altura_max: "",
    años_de_vida: "",
    imagen: "",
    temperamento: "",
  });

  const handleNombreChange = (event) => {
    setCrear({ ...crear, nombre: event.target.value });
  };

  const handleTemperamentoChange = (event) => {
    const temp = event.target.value;
    if (temp !== "Temperamentos..." && !crear.temperamento.includes(temp)) {
      if (crear.temperamento.length < 2) {
        setCrear({ ...crear, temperamento: temp });
      } else {
        setCrear({
          ...crear,
          temperamento: `${crear.temperamento}, ${temp}`,
        });
      }
    }
  };

  const handleInputTemperamentos = (event) => {
    const nuevoValor = event.target.value;
    setCrear({
      ...crear,
      temperamento: nuevoValor,
    });
  };

  const onChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setError(
      validate({
        ...crear,
        [property]: value,
      })
    );
    setCrear({ ...crear, [property]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let formValid = false;
    Object.values(error).forEach((err) => {
      if (err.length <= 0) {
        formValid = true;
      }
      let errores = []
      if (err.length > 0) {
        errores.push(err);
      }
      if(errores.length ){
        formValid = true
      }
    });
    if (formValid) {
      alert(
        "No se puede crear la Raza, por favor complete todos los campos requeridos. O verifique que la informacion ingresada sea correcta"
      );
      return;
    }

    const confirmarEnvio = window.confirm(
      "¿Está seguro de que desea crear esta Raza?"
    );
    if (confirmarEnvio) {
      // Si el usuario hace clic en "Aceptar", enviar el formulario y mostrar un mensaje de éxito
      alert("Raza creada correctamente.");

      //para mandar la informacion a la base de datos:
      axios
        .post("http://localhost:3001/dogs", crear)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      // Si el usuario hace clic en "Cancelar", no enviar el formulario y mostrar un mensaje de cancelación
      alert("La Raza no se creo.");
    }
    setCrear({
      nombre: "",
      peso_min: "",
      peso_max: "",
      altura_min: "",
      altura_max: "",
      años_de_vida: "",
      imagen: "",
      temperamento: "",
    });
  };

  return (
    <div className={Style.contenedorGeneral}>
      <div className={Style.contenedorFormulario}>
        <form onSubmit={submitHandler}>
          <div>
            <label>
              Raza:
              <select
                name="nombre"
                value={crear.nombre}
                onChange={handleNombreChange}
              >
                <option>Elegir una Raza existente....</option>
                {nombre.map((raza, index) => {
                  return (
                    <option value={raza} key={index}>
                      {raza}
                    </option>
                  );
                })}
              </select>
              <p>Si no encuntras la raza que quieres, Creala!!</p>
              <input
                type="text"
                value={crear.nombre}
                name="nombre"
                placeholder="Seleccioná una raza o escriba una nueva..."
                onChange={handleNombreChange}
              />
            </label>
            <div className={Style.contenedorError}>
              {!error ? null : <p>{error.nombre}</p>}
            </div>
          </div>

          <div>
            <label>
              Temperamento:
              <select name="Temperamento" onClick={handleTemperamentoChange}>
                <option>Temperamentos...</option>
                {temperamentos.map((tem, index) => {
                  return (
                    <option value={tem} key={index}>
                      {tem}
                    </option>
                  );
                })}
              </select>
              <input
                type="text"
                value={crear.temperamento}
                name="temperamento"
                placeholder="Seleccioná o escribe un temperamento..."
                onChange={handleInputTemperamentos}
              />
            </label>
            <div className={Style.contenedorError}>
              {!error ? null : <p>{error.temperamento}</p>}
            </div>
          </div>

          <div>
            <label>Peso Mínimo: </label>
            <input
              type="text"
              value={crear.peso_min}
              name="peso_min"
              placeholder="Escriba el peso, Ej: 10"
              onChange={onChange}
            />
            <div className={Style.contenedorError}>
              {!error ? null : <p>{error.peso_min}</p>}
            </div>
          </div>

          <div>
            <label>Peso Máximo: </label>
            <input
              type="text"
              value={crear.peso_max}
              name="peso_max"
              placeholder="Escriba el peso, Ej: 35"
              onChange={onChange}
            />
            <div className={Style.contenedorError}>
              {!error ? null : <p>{error.peso_max}</p>}
            </div>
          </div>

          <div>
            <label>Altura Mínima: </label>
            <input
              type="text"
              value={crear.altura_min}
              name="altura_min"
              placeholder="Escriba la altura, Ej: 15"
              onChange={onChange}
            />
            <div className={Style.contenedorError}>
              {!error ? null : <p>{error.altura_min}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="Altura Máximo">Altura Máximo: </label>
            <input
              type="text"
              value={crear.altura_max}
              name="altura_max"
              id="Altura Máximo"
              placeholder="Escriba la altura, Ej: 40"
              onChange={onChange}
            />
            <div className={Style.contenedorError}>
              {!error ? null : <p>{error.altura_max}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="Años">Años de vida: </label>
            <input
              type="text"
              value={crear.años_de_vida}
              name="años_de_vida"
              id="Años"
              placeholder="Escriba los años, Ej: 7 - 10"
              onChange={onChange}
            />
            <div className={Style.contenedorError}>
              {!error ? null : <p>{error.años_de_vida}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="imagen">Pega la url de la foto: </label>
            <input
              type="text"
              id="imagen"
              name="imagen"
              placeholder="Escriba una URL, Ej: https://images..."
              value={crear.imagen}
              onChange={onChange}
            />
            <div className={Style.contenedorError}>
              {!error ? null : <p>{error.imagen}</p>}
            </div>
          </div>

          <button type="submit">CREAR</button>
        </form>
      </div>
      <div className={Style.contenedorMuestra}>
        <div className={Style.contenedorNombre}>
          <h1>Raza: {crear.nombre}</h1>
        </div>
        <div className={Style.contenedorInfoImagen}>
          <div className={Style.contenedorInfo}>
            <h3>Peso mínimo: {`${crear.peso_min} Kg`}</h3>
            <h3>Peso máximo: {`${crear.peso_max} Kg`}</h3>
            <h3>Altura mínimo: {`${crear.altura_min} cm`}</h3>
            <h3>Altura máxima: {`${crear.altura_max} cm`}</h3>
            <h3>Años de vida: {`${crear.años_de_vida} años`}</h3>
          </div>

          <div className={Style.contenedorImagen}>
            <img src={crear.imagen} alt={crear.nombre} />
          </div>
        </div>

        <div className={Style.contenedorTemperamento}>
          <h3>Temperamentos: {crear.temperamento}</h3>
        </div>
      </div>
    </div>
  );
};

export default From;
