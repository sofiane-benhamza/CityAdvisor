import { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { CoordsContext } from "../../App";
import Quality from "../services/Quality";
import day from "../../../src/img/sun.gif";
import night from "../../../src/img/moon.gif";

export default function Weather() {
  const { city, setWeaQua } = useContext(CoordsContext);
  const [weatherData, setWeatherData] = useState({
    cloud: 0,
    wind_kph: 6.8,
    vis_km: 10,
    icon: "https://cdn.weatherapi.com/weather/64x64/night/113.png",
    is_day: 0,
    humidity: 48,
    temp_c: 4,
    gust_kph: 24,
  });
  const timerRef = useRef(null);

  //VISIBILTYY SAFETYY
  function VSP(visibility) {
    if (visibility > 10) {
      return 100; // Excellent visibility
    } else if (visibility >= 4 && visibility <= 10) {
      return 75; // Good visibility
    } else if (visibility >= 1 && visibility < 4) {
      return 50; // Fair visibility
    } else if (visibility < 1 && visibility >= 0) {
      return 25; // Poor visibility
    } else {
      return 0; // Visibility is negative or invalid
    }
  }
  /*
  useEffect(() => {
    const fetchWeatherData = async () => {
      if (city.length > 2) {
        try {
          const URL = `http://localhost:9090/weather?city=${city}`;
          const response = await axios.get(URL);
          response.data && setWeatherData(response.data);
          calculateWeatherQuality(response.data); // Calculate Weather Quality here
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }
    };

    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      fetchWeatherData();
    }, 3000); // Delay of 3000 milliseconds (3 seconds)

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [city]);*/

  // Function to calculate Weather Quality based on weather data
  const calculateWeatherQuality = (weatherData) => {
    // Your logic to calculate Weather Quality based on weatherData
    // For example, considering Cloud, Humidity, and Temperature
    if (weatherData) {
      const cloudPercentage = weatherData.cloud; // Assuming Cloud percentage directly contributes
      const humidity = weatherData.humidity;
      const temperature = weatherData.temp_c;

      // Example formula (you can adjust this based on your criteria)
      const weatherQuality = (cloudPercentage + humidity + temperature) / 3;
      setWeaQua(weatherQuality); // Set Weather Quality using setWeaQua function
    }
  };

  return (
    <div className="col-lg-12">
      {weatherData && (
        <div className="card bg-transparent">
          <div className="card-body">
            <div className="row d-flex align-items-center justify-content-center">
              <div className=" col-lg-2 d-flex align-items-center justify-content-center m-1">
                <img
                  src={weatherData.icon}
                  className="card-img-top bg-light"
                  alt="Weather Icon"
                  style={{
                    width: "120px",
                    height: "120px",
                    margin: "10px",
                  }}
                />
              </div>
              <div className="col-md-4">
                <ul className="list-group list-group-flush mh-25">
                  <li className="list-group-item child">
                    Vitesse du vent : {weatherData.wind_kph} km/h
                  </li>
                  <li className="list-group-item child">
                    Humidité : {weatherData.humidity}%
                  </li>
                  <li className="list-group-item child p-2">
                    Visibilé : {weatherData.vis_km} km
                    <Quality q={VSP(weatherData.vis_km) - 43} />
                  </li>
                </ul>
              </div>
              <div className="col-md-5">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item child">
                    Jour ou Nuit :
                    <img
                      src={weatherData.is_day ? day : night}
                      alt={weatherData.is_day ? "img of day" : "img of night"}
                      width="100px"
                      height="100px"
                    />
                  </li>
                  <li className="list-group-item child">
                    Température : {weatherData.temp_c}°C
                  </li>
                  <li className="list-group-item child">
                    Vitesse de rafale : {weatherData.gust_kph} km/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
//remove comment from useEffect
