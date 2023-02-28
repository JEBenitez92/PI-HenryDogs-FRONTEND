import Card from "../Card/Card";
import { useSelector } from "react-redux";
import Style from "../CardsConteiner/CardsConteiners.module.css";

const CardsContainers = ({ primerIndex, ultimoIndex }) => {
  const razas = useSelector((state) => state.Razas);

  return (
    <div className={Style.container}>
      {razas
        .map((dog, index) => {
          return (
            <Card
              key={index}
              id={dog.id}
              imagen={dog.imagen}
              nombre={dog.nombre}
              peso_max={dog.peso_max}
              Temperamentos={dog.Temperamentos}
            />
          );
        })
        .slice(primerIndex, ultimoIndex)}
    </div>
  );
};

export default CardsContainers;
