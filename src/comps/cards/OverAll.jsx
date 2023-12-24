import "../style.css";
import { CoordsContext } from "../../App";
import { useContext, useState, useEffect } from "react";
import Quality from "../services/Quality";

export default function OverAll({ indice_of_quality }) {
  const { IOQ } = useContext(CoordsContext);
  const [whatToDo, tellMeWhatToDo] = useState("un congée ici sera super");

  useEffect(() => {
    // Calculate indice of quality when IOQ changes
    const calculateIndice = () => {
      // Calculate the indice_of_quality between 0 and 100
      if (IOQ > 75) {
        tellMeWhatToDo("une semaine ici sera super !");
      } else if (IOQ > 50) {
        tellMeWhatToDo("Envisage une visite d'une journée.");
      } else if (IOQ > 25) {
        tellMeWhatToDo("Pense à une courte activité.");
      } else {
        tellMeWhatToDo("Mieux vaut rester où vous êtes.");
      }
    };
    calculateIndice();
  }, [IOQ, indice_of_quality]);

  return (
    <div className="card w-100 p-2 h-25">
      <div className="card-body">
        <p className="text-dark fw-bolder">Indice de qualité de la ville</p>
        <Quality q={50} />
        <p style={{ fontFamily: "'Carter One', sans-serif", fontSize: "14px" }}>
          {whatToDo}
        </p>
      </div>
    </div>
  );
}
