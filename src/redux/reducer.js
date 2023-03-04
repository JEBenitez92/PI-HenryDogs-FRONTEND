import {
  GET_RAZA_NAME,
  GET_RAZAS,
  ORDER_ALFABETICO,
  ORDER_PESO,
  GET_TEMPERAMENTOS,
  ORDER_TEMP,
  ORDER_RAZA,
  GET_RAZAS_NOMBRES,
  GET_RAZA_ID,
  ADD_FAVORITO,
  DELET_FAVORITO,
  VACIAR_FAVORITOS,
} from "./types";

const initialState = {
  Razas:[],
  RazaNombre:[],
  RazaId:[],
  Favoritos:[],
  Temperamento:[],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RAZAS:
      return { ...state, Razas: payload };

    case GET_RAZAS_NOMBRES:
      return { ...state, RazaNombre: payload };

    case GET_RAZA_ID:
      return {...state, RazaId: payload };
     
    case GET_TEMPERAMENTOS:
      return { ...state, Temperamento: payload };

    case GET_RAZA_NAME:
      return { ...state, Razas: payload };

    case ADD_FAVORITO:
      const buscarFavorito = state.Razas.find(raza => raza.id === payload);
      let favorito = [];
      const compararFavorito = state.Favoritos.find(raza => raza.id === buscarFavorito.id);
      if (!compararFavorito) {
        favorito = [...state.Favoritos, buscarFavorito];
      } else {
        favorito = [...state.Favoritos];
      }
      return {
        ...state,
        Favoritos: favorito
      };
           
    case DELET_FAVORITO:
      const favoritoFiltrado = state.Favoritos.filter(raza => raza.id !== payload)
      return{
          ...state,
          Favoritos: favoritoFiltrado,
      }

    case VACIAR_FAVORITOS:
      return{
        ...state,
        Favoritos: [],
    }
    
    case ORDER_ALFABETICO:
      const ordenAlfabetico = [...state.Razas];
      const orderFilterAlfabetico = ordenAlfabetico.sort((a, b) => {
        if (payload === "Nombre") return ordenAlfabetico;
        if (payload === "Z-A") {
          return b.nombre.localeCompare(a.nombre);
        } else {
          return a.nombre.localeCompare(b.nombre);
        }
      });
      return {
        ...state,
        Razas: orderFilterAlfabetico,
      };

    case ORDER_PESO:
      const orden = [...state.Razas];
      const orderFilter = orden.sort((a, b) => {
        if (payload === "Peso") return orden;
        if (payload === "Decendente") {
          return (
            parseInt(b.peso_max.slice(0, 3)) - parseInt(a.peso_max.slice(0, 3))
          );
        } else {
          return (
            parseInt(a.peso_max.slice(0, 3)) - parseInt(b.peso_max.slice(0, 3))
          );
        }
      });
      return {
        ...state,
        Razas: orderFilter,
      };

    case ORDER_RAZA:
      const orderRaza = [...state.RazaNombre];
      const buscarRaza = orderRaza.filter((raza) => raza.nombre === payload);
      let resultRaza;
      buscarRaza.length ? (resultRaza = buscarRaza) : (resultRaza = orderRaza);
      return {
        ...state,
        Razas: resultRaza,
      };

    case ORDER_TEMP:
      const orderTemp = [...state.RazaNombre];
      const buscarTem = orderTemp.filter((tem) =>
        tem.Temperamentos.includes(payload)
      );
      let resultTem;
      buscarTem.length ? (resultTem = buscarTem) : (resultTem = orderTemp);
      return {
        ...state,
        Razas: resultTem,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
