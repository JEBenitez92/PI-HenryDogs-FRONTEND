import CardsContainers from "../../componets/CardsConteiner/CardsConteiners";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Style from "./Home.module.css";
import {
  getRazas,
  getRazasNombres,
  getTemperamentos,
  ordenTemp,
  orderAlfabetico,
  orderPeso,
  orderRaza,
} from "../../redux/actions.js";
import Paginacion from "../../componets/Paginacion/Paginacion.jsx";

const Home = ({paginaActual, setPaginaActual}) => {
  const dispatch = useDispatch();
  const temperamentos = useSelector((state) => state.Temperamento);
  const razaNombre = useSelector((state) => state.RazaNombre);
  const nombres = razaNombre.map((raza) => raza.nombre);
  const nombre = nombres.filter((item, index) => {
    return nombres.indexOf(item.trim()) === index;
  });
  
  const [cargando, setCargando] = useState(true);
 
  //para que se monte:
useEffect(() => {
  const cargandoDatos = async () => {
    await dispatch(getRazas());
    await dispatch(getRazasNombres());
    await dispatch(getTemperamentos());
    setCargando(false);
  }
  cargandoDatos();
}, [dispatch]);
  

  //para la paginacion
  const [paginas] = useState(8);
  // const [paginaActual, setPaginaActual] = useState(1);

  const ultimoIndex = paginaActual * paginas;
  const primerIndex = ultimoIndex - paginas;
  

  // Para el ordenamiento
  
  const handleClick = (e) => {
    const { name, value } = e.target;

    if (name === "Orden_Alfabetico") {
      return dispatch(orderAlfabetico(value));
    }
    if (name === "Orden_Peso") {
      return dispatch(orderPeso(value));
    }
    if (name === "Temperamento") {
      dispatch(ordenTemp(value));
      return setPaginaActual(1)

    }
    if (name === "Raza") {
      dispatch(orderRaza(value));
      return setPaginaActual(1)
    }
  };

  return (
    <div>
      {cargando ? (
        <div className={Style.cargando}>
          <div className={Style.imagenEsperando1}/>
          <h1>Cargando......</h1>
          <div className={Style.imagenEsperando2}/>
        </div>
      ) : (
       
    <div className={Style.contenedorGeneral}>
      <div className={Style.contenedorOrdenamiento}>
        <select name="Orden_Alfabetico" onClick={handleClick}>
          <option name="Nombre">Ordenar por Nombre</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <select name="Orden_Peso" onClick={handleClick}>
          <option value="Peso">Ordenar por Peso</option>
          <option value="Acendente">Acendente</option>
          <option value="Decendente">Decendente</option>
        </select>
      </div>
      <div className={Style.contenedorFiltro}>
        <select name="Temperamento" onClick={handleClick}>
          <option>Temperamentos</option>
          {temperamentos.map((tem, index) => {
            return (
              <option value={tem} key={index}>
                {tem}
              </option>
            );
          })}
        </select>
        <select name="Raza" onClick={handleClick}>
          <option>Razas</option>
          {nombre.map((raza, index) => {
            return (
              <option value={raza} key={index}>
                {raza}
              </option>
            );
          })}
        </select>
      </div>
     
        <div className={Style.cardsContainers}>
          <CardsContainers
            ultimoIndex={ultimoIndex}
            primerIndex={primerIndex}

          />
        </div>
      
      <div className={Style.contenedorPaginacion}>
        <Paginacion
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
          paginas={paginas}
        />
      </div>
    </div>
      )}
    </div>
  );
};

export default Home;
