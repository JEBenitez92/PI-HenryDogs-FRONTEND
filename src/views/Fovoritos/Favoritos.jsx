import React from "react";
import { useSelector } from "react-redux";
import Style from "./Favoritos.module.css"
import Card from "../../componets/Card/Card";

const Favoritos = () => {
  const misFavoritos = useSelector((state) => state.Favoritos);

  // useEffect(() => {
  //   localStorage.setItem("favoritos", JSON.stringify(misFavoritos));
  // }, [misFavoritos]);

  return (
    <div className={Style.container}>
      <h1>Favoritos</h1>
      <div className={Style.containerCard}>
      {misFavoritos.length > 0 ? (
        misFavoritos.map((dog) => (
          <Card
            key={dog.id}
            id={dog.id}
            imagen={dog.imagen}
            nombre={dog.nombre}
            peso_max={dog.peso_max}
            Temperamentos={dog.Temperamentos}
          />
        ))
      ) : 
      (<div className={Style.contenedorP}>
          <div className={Style.contenedorPerroEsperando}>
          <h3 className={Style.h3}>No hay razas favoritas</h3>

          </div>
        </div>)
      }
      </div>
    </div>
  );
};

export default Favoritos;