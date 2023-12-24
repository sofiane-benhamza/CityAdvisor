import axios from "axios";
import { useEffect, useRef, useContext } from "react";
import { CoordsContext } from "../../App";

export default function GetPolution({ setAQD }) {
  const { city, setAirQua } = useContext(CoordsContext);
  const timerRef = useRef(null);

  useEffect(() => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const URL = `http://localhost:9090/airquality?city=${city}`;

      axios
        .get(URL)
        .then((res) => {
          setAQD(res.data);
          setAirQua(res.data.overall_aqi);

          console.log(res.data);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }, 3000); // Delay of 3000 milliseconds (3 seconds)

    // Clear the timer when component unmounts or city changes
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [city, setAQD]);
}
