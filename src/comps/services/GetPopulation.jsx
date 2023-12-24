import axios from "axios";
import { useContext, useEffect, useRef } from "react";
import { CoordsContext } from "../../App";

export default function GetPopulation({ setPopulation }) {
  const timerRef = useRef(null);
  const { city } = useContext(CoordsContext);
  useEffect(() => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      let URL = "http://localhost:9090/population?city=" + city;

      axios
        .get(URL)
        .then((res) => {
          if (res.data && res.data.population) {
            // Assuming the response contains a 'population' field
            setPopulation(res.data.population);
          }
        })
        .catch((error) => {
          console.log("Error:", error);
          // Optionally, you can set the population to a default value or handle the error here
          // setPopulation(0); // For example, setting population to 0 in case of error
        });
    }, 3000); // Delay of 3000 milliseconds (3 seconds)
  }, [city, setPopulation]);

  return null;
}
