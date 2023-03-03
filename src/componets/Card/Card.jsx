import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addFavorito, deletFavorito } from "../../redux/actions";
import Style from "./Card.module.css";

const Card = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const misfavoritos = useSelector((state)=>state.Favoritos);
  const favorito = misfavoritos.some((raza) => raza.id === props.id);

  function handleFavorite() {
    dispatch(addFavorito(props.id));
  }
    
  function handleDeletFavorito() {
    dispatch(deletFavorito(props.id));
  }

  return (
    <div className={Style.conteiner}>
      <div className={Style.carConteiner}>
        <div>
          {location.pathname === "/home" ? (
            <button
              onClick={handleFavorite}
              className={favorito ? Style.buttonActive : Style.button}
            >
             { "\u2605" }
            </button>
          ) : (
            <button onClick={handleDeletFavorito} className={Style.buttonCierre}>X</button>
          )}
        </div>
        <p>
          Raza:
          <Link to={`/detail/${props.id}`} className={Style.link}>
            {props.nombre}
          </Link>
        </p>
        <Link to={`/detail/${props.id}`}>
          <img src={props.imagen} alt={props.nombre} />
        </Link>
        <p>
          Peso: {props.peso_max.length > 3 ? props.peso_max : "No definido"}
        </p>
        <p className={Style.pTemperamentos}>
          Temperamentos:
        </p>
        <div className={Style.temp}>
          {props.Temperamentos.length > 1 ? props.Temperamentos.replace(/,/g, ', ') : "No definido"}
        </div>
          
      </div>
    </div>
  );
};


export default Card;
