import { CoordsContext } from "../../App";
import { useContext, useState } from "react";
import GetPopulation from "../services/GetPopulation";

export default function Population() {
  const { city, country } = useContext(CoordsContext);

  const [numberOfHumans, setNumberOfHumans] = useState(50);
  return (
    <p className="bg-light text-center text-dark rounded bolder p-2 child">
      Il y a plus que <strong>{numberOfHumans}</strong> personnes vivant à{" "}
      <strong>
        {city},&nbsp;{country.toUpperCase()}
      </strong>
    </p>
  );
  return (
    <p className="bg-light text-center text-dark rounded bolder p-2 child">
      <GetPopulation city={city} setPopulation={setNumberOfHumans} />
      Il y a plus que <strong>{numberOfHumans}</strong> personnes vivant à{" "}
      <strong>
        {city},&nbsp;{country.toUpperCase()}
      </strong>
    </p>
  );
}
