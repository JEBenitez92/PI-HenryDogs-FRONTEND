import { useSelector } from "react-redux";
import Style from "./Paginacion.module.css";

const Paginacion = ({ paginaActual, setPaginaActual, paginas }) => {
  const razas = useSelector((state) => state.Razas);
  const cantidad = razas.length;
  const cantidadPorPagina = Math.ceil(cantidad / paginas);

  const pageNumber = [];

  let inicio = Math.max(paginaActual - 1, 1);
  let fin = Math.min(inicio + 4, cantidadPorPagina);

  if (inicio === fin) {
    inicio = Math.max(fin - 2, 1);
  }

  for (let i = inicio; i <= fin; i++) {
    pageNumber.push(i);
  }

  const paginaAnterior = () => {
    setPaginaActual(paginaActual - 1);
    window.scrollTo(0, 0)
  };

  const paginaSiguiente = () => {
    setPaginaActual(paginaActual + 1);
    window.scrollTo(0, 0)
  };

  const numeroPagina = (num) => {
    setPaginaActual(num);
     window.scrollTo(0, 0)
  };

  return (
    <nav className={Style.conteiner}>
      <button
        disabled={paginaActual === 1 ? true : false}
        className={Style.button_Anterior_Siguente}
        onClick={paginaAnterior}
      >
        Anterior
      </button>
      <ul>
        {pageNumber.map((num) => {
          return (
            <li key={num.toString()}>
              <button
                className={
                  paginaActual === num
                    ? Style.buttonPaginActive
                    : Style.buttonPaginas
                }
                onClick={() => numeroPagina(num)}
              >
                {num}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        disabled={paginaActual >= cantidadPorPagina ? true : false}
        className={Style.button_Anterior_Siguente}
        onClick={paginaSiguiente}
      >
        Siguiente
      </button>
    </nav>
  );
};
export default Paginacion;
