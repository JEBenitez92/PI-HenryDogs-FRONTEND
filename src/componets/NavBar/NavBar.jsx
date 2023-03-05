import { Link, useLocation } from "react-router-dom";
import Style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { vaciarFavoritos } from "../../redux/actions";

const NavBar = ({paginaActual, setPaginaActual}) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleDelet = ()=>{
    dispatch(vaciarFavoritos())
  }

  return (
    <div className={Style.contenedor}>
      <div className={Style.contenedorBotones}>
        {location.pathname !== "/home" ? (
          <Link to="/home">
            <button>Inicio</button>
          </Link>
        ) : null}

        {location.pathname === "/home" ? (
          <Link to="/about">
            <button>Informacion</button>
          </Link>
        ) : null} 

        {location.pathname === "/home" || location.pathname === "/create" ? (
          <Link to="/favoritos">
            <button>Favoritos</button>
          </Link>
        ) : null}

        {location.pathname === "/home" || location.pathname === "/favoritos" ? (
          <Link to="/create">
            <button>Crear</button>
          </Link>
        ) : null}
      </div>

      <div className={Style.contenedorSerbach}>{location.pathname === "/home" ? <SearchBar setPaginaActual={setPaginaActual} /> : null}</div>

      <div className={Style.contenedorButtonBorrar}>
        {location.pathname === "/favoritos" ? (
          <button onClick={handleDelet}>{"\u{1F5D1}"} <br/> <p className={Style.pButton}>Borrar Favoritos</p>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;
