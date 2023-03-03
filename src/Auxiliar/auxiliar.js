export const traducir = (array, traduccion) => {
  return array.map((item) => {
    const estapacio = item.trim()
    return traduccion[estapacio] || item
  });
};

export const traducRazaTemp = (razas, temperamentosTraducidos)=>{
    razas.forEach(raza =>{
        const arr = raza.Temperamentos.split(",")
        const result = traducir(arr,temperamentosTraducidos)
        raza.Temperamentos = result.join(",")
      })
}