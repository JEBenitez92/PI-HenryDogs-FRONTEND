const regexUrl =
  /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
const regxAñosDeVida = /^[1-9][0-9]? - [1-9][0-9]?$/;

const regxNumeos = /^\d{1,2}$/;

export function validate(crear) {
  const error = {};

  //validar nombre
  if (!crear.nombre.length) {
    error.nombre = "Falta declarar el nombre";
  }
  if (crear.nombre.length < 3) {
    error.nombre = "El nombre es muy corto";
  }
  if (crear.nombre.length > 30) {
    error.nombre = "El nombre es muy largo";
  }

  //validar peso minimo
  if (crear.peso_min.length === 0) {
    error.peso_min = "El campo no puede estar vacio";
  }

  if (crear.peso_min.length && !regxNumeos.test(crear.peso_min)) {
    error.peso_min = "Solo se aceptan números";
  }

  if (crear.peso_min.length === 3) {
    error.peso_min =
      "El peso tiene que ser definido máximo por dos cifras. Ej: 5 o 25";
  }
  if (parseInt(crear.peso_min) < 1) {
    error.peso_min = "El valor del peso minimo tiene que ser mayor a 3";
  }
  if (parseInt(crear.peso_min) > parseInt(crear.peso_max)) {
    error.peso_min = "El valor del peso minimo tiene que ser menor al peso máximo";
  }

  //validar peso maximo
  if (crear.peso_max.length === 0) {
    error.peso_max = "El campo no puede estar vacio";
  }

  if (crear.peso_max.length && !regxNumeos.test(crear.peso_max)) {
    error.peso_max = "Solo se aceptan números";
  }

  if (crear.peso_max.length === 3) {
    error.peso_max =
      "El peso tiene que ser definido máximo por dos cifras. Ej: 5 o 25";
  }
  if (parseInt(crear.peso_max) < 2) {
    error.peso_max = "El valor del peso máximo tiene que ser mayor a 2";
  }
  if (parseInt(crear.peso_max) < parseInt(crear.peso_min)) {
    error.peso_max = "El valor del peso máximo tiene que ser mayor al peso minimo";
  }

  //validar altura minima
  if (!crear.altura_min.length) {
    error.altura_min = "El campo no puede estar vacio";
  }

  if (crear.altura_min.length && !regxNumeos.test(crear.altura_min)) {
    error.altura_min = "Solo se aceptan números";
  }

  if (crear.altura_min.length === 3) {
    error.altura_min =
      "La altura tiene que ser definida máximo por dos cifras. Ej: 5 o 25";
  }
  if (parseInt(crear.altura_min) < 10) {
    error.altura_min = "El valor de la altura minima tiene que ser mayor a 9";
  }
  if (parseInt(crear.altura_min) > 80) {
    error.altura_min = "El valor de la altura minima tiene que ser menor a 80";
  }

  if(parseInt(crear.altura_min) > parseInt(crear.altura_max)) {
    return error.altura_min = "La altura minima no puede ser mayor a la altura máxima"
  }
  //validar altura máxima

  if (!crear.altura_max.length) {
    error.altura_max = "El campo no puede estar vacio";
  }

  if (crear.altura_max.length && !regxNumeos.test(crear.altura_max)) {
    error.altura_max = "Solo se aceptan números";
  }

  if (crear.altura_max.length === 3) {
    error.altura_max =
      "La altura tiene que ser definida máximo por dos cifras. Ej: 5 o 25";
  }
  if (parseInt(crear.altura_max) <= 10) {
    error.altura_max = "El valor de la altura máxima tiene que ser mayor a 10";
  }
  if (parseInt(crear.altura_max) > 85) {
    error.altura_max = "El valor de la altura maxima tiene que ser menor a 85";
  }
  if (parseInt(crear.altura_max) < parseInt(crear.altura_min)) {
    error.altura_max = "La altura máxima no puede ser menor a la altura minima"
  }

  //validar temperamentos
  if (!crear.temperamento.length) {
    error.temperamento = "Falta declarar el temperamento";
  }
  if (crear.temperamento.length < 1) {
    error.temperamento = "El temperamento es muy corto";
  }

  //validar formato de la imagen
  if (crear.imagen.length && !regexUrl.test(crear.imagen)) {
    error.imagen = "El formato no corresponde a una Url";
  }

  //validar años de vida
  if (crear.años_de_vida.length && !regxAñosDeVida.test(crear.años_de_vida)) {
    error.años_de_vida =
      "Debe pasar los años de vide da la siguiente manera 2 - 5";
  }
  return error;
}
