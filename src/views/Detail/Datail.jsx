import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Style from "./Datail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getRazaId } from "../../redux/actions";

const Datail = () => {
  const { detailId } = useParams();
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(true);

  const dispatch = useDispatch();
  const raza = useSelector((state)=>state.RazaId[0])

  useEffect(() => {
    const apiData = async () => {
      try {
        await dispatch(getRazaId(detailId))
        setCargando(false);
      } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
        setError(
          "Ocurrió un error al obtener los datos. Por favor, intenta nuevamente más tarde."
        );
      }
    };
    apiData();
  }, [detailId,dispatch]);

  return (
    <div>
      <div className={Style.imagen}></div>
      <div>{error ? <p>{error}</p> : null}</div>
      {cargando ? (
        <div className={Style.contenedorCargando}>
          <div className={Style.imagenEsperando1}/>
          <h1>CARGANDO....</h1>
          <div className={Style.imagenEsperando2}/>
        </div>
      ) : (
        <div className={Style.ContenedorDatos}>
          <div className={Style.contenedorNombre}>
            <h1>{raza.nombre}</h1>
          </div>
          <div className={Style.contenedorDatosImagen}>
            <div className={Style.contenedorInfo}>
              <h3>Peso mínimo: {raza.peso_min}</h3>
              <h3>Peso máximo: {raza.peso_max}</h3>
              <h3>Altura mínimo: {raza.altura_min}</h3>
              <h3>Altura máxima: {raza.altura_max}</h3>
              <h3>
                Años de vida:
                {raza.años_de_vida.length > 5
                  ? raza.años_de_vida
                  : "No definido"}
              </h3>
            </div>
            <div className={Style.contenedorImagen}>
              <img src={raza.imagen} alt={raza.nombre} />
            </div>
          </div>
          <div className={Style.contenedorTemperamnetos}>
            <h3>Temperamentos: {raza.Temperamentos}</h3>
          </div>
          </div>
      )}
    </div>
  );
};

export default Datail;










// useEffect(() => {
  //   const apiData = async () => {
  //     try {
  //       const datosApi = await axios.get(
  //         `http://localhost:3001/dogs/${detailId}`
  //       );
  //       const raza = datosApi.data;
  //       setRaza(raza[0]);
  //       setCargando(false);
  //     } catch (error) {
  //       console.error("Error al obtener los datos de la API:", error);
  //       setError(
  //         "Ocurrió un error al obtener los datos. Por favor, intenta nuevamente más tarde."
  //       );
  //     }
  //   };
  //   apiData();
  // }, [detailId]);