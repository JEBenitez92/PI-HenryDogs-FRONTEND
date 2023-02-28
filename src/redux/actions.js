import {
  GET_RAZA_NAME,
  GET_RAZAS,
  GET_TEMPERAMENTOS,
  ORDER_ALFABETICO,
  ORDER_PESO,
  ORDER_RAZA,
  ORDER_TEMP,
  GET_RAZAS_NOMBRES,
  GET_RAZA_ID,
  ADD_FAVORITO,
  DELET_FAVORITO,
  VACIAR_FAVORITOS,
} from "./types";
import axios from "axios";

export const ordenTemp = (value) => {
  return {
    type: ORDER_TEMP,
    payload: value,
  };
};

export const orderRaza = (value) => {
  return {
    type: ORDER_RAZA,
    payload: value,
  };
};

export const orderPeso = (orden) => {
  return {
    type: ORDER_PESO,
    payload: orden,
  };
};

export const orderAlfabetico = (orden) => {
  return {
    type: ORDER_ALFABETICO,
    payload: orden,
  };
};

export const addFavorito = (id)=>{
  return {
    type: ADD_FAVORITO,
    payload: id,
  }
};

export const deletFavorito = (id)=>{
  return {
    type: DELET_FAVORITO,
    payload: id,
  }
};

export const vaciarFavoritos = ()=>{
  return {
    type: VACIAR_FAVORITOS
  }
}

export const getRazas = () => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get("https://pihenrydogsbacken-production.up.railway.app/dogs");
      const razas = apiData.data;
      dispatch({
        type: GET_RAZAS,
        payload: razas,
      });
    } catch (error) {
      alert(error);
    }
  };
};

export const getRazasNombres = () => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get("https://pihenrydogsbacken-production.up.railway.app/dogs");
      const razaNombre = apiData.data;
      dispatch({
        type: GET_RAZAS_NOMBRES,
        payload: razaNombre,
      });
    } catch (error) {
      alert(error);
    }
  };
};

export const getRazaName = (name) => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(
        `https://pihenrydogsbacken-production.up.railway.app/dogs?nombre=${name}`
      );
      const razas = apiData.data;
      dispatch({
        type: GET_RAZA_NAME,
        payload: razas,
      });
    } catch (error) {
      alert(error.request.response);
    }
  };
};

export const getRazaId = (detailId) => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(
        `https://pihenrydogsbacken-production.up.railway.app/dogs/${detailId}`
      );
      const razas = apiData.data;
      dispatch({
        type: GET_RAZA_ID,
        payload: razas,
      });
    } catch (error) {
      alert(error.request.response);
    }
  };
};

export const getTemperamentos = () => {
  return async function (dispatch) {
    try {
      const apiTemp = await axios.get(
        "https://pihenrydogsbacken-production.up.railway.app/dogs/temperaments"
      );
      const apiTempData = apiTemp.data;
      dispatch({
        type: GET_TEMPERAMENTOS,
        payload: apiTempData,
      });
    } catch (error) {
      alert(error.request.response);
    }
  };
};
