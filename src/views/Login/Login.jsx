import { Link } from "react-router-dom";
import Style from "./Login.module.css";

const Login = () => {
  return (
    <div className={Style.contenedorGeneral}>
      <h1>Bienvenido a Henry Dogs</h1>
      <div className={Style.contenedorParrafo}>
        <div className={Style.Parrafo}>
          <p>
            <b>
              Si estás pensando en adoptar un compañero y no estás seguro de qué
              raza se adaptará mejor a tu estilo de vida, Henry Dogs es tu mejor
              opción. Vas a poder obtener información de distintas razas, como
              su tamaño, ver una imagen y, muy importante, ver si sus
              temperamentos se adaptan a lo que estás buscando.
            </b>
          </p>
        </div>
      </div>

      <div className={Style.contenedorH3}>
        <h3>¡Anímate! Y no esperes más para buscar a tu nuevo compañero</h3>
      </div>
      <div className={Style.imagenPastorAleman} />
      <div className={Style.imagenCucha} />
      <div className={Style.cucha2} />
      <div className={Style.perroAnimado} />
      <div className={Style.contenedorButton}>
        <Link to="/home">
          <button>BUSCAR</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
