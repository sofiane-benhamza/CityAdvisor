import React, { useState } from "react";
import SearchBar from "./comps/SearchBar";
import CityCard from "./comps/CityCard";
import Header from "./comps/Header";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useContext, createContext } from "react";

export const CoordsContext = createContext();

function App({ setConnected }) {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [lon, setLon] = useState(0);
  const [lat, setLat] = useState(0);

  const [airQua, setAirQu] = useState(0.0);
  const [weaQua, setWeaQu] = useState(0.0);

  const IOQ = Math.max(
    Math.min(((160 - airQua * 0.7 + weaQua * 0.3 + 100) / 214) * 100, 100),
    0
  );

  const containerStyle = {
    minHeight: "100vh", // Adjust as needed
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fix",
    overflow: "hidden",
  };

  const setAirQua = (val) => {
    setAirQu(val);
  };

  const setWeaQua = (val) => {
    setWeaQu(val);
  };

  const setMapLat = (val) => {
    setLat(val);
  };

  const setMapLon = (val) => {
    setLon(val);
  };

  const setNameCity = (val) => {
    setCity(val);
  };
  const setNameCountry = (val) => {
    setCountry(val);
  };
  const coordinates = { city, lon, lat, country, setAirQua, setWeaQua, IOQ };

  return (
    <Router>
      <div style={containerStyle}>
        <div className="container d-flex gap-2 flex-wrap justify-content-center ">
          <Header setConnected={setConnected} />
          <SearchBar
            setLat={setMapLat}
            setLon={setMapLon}
            setCity={setNameCity}
            setCountry={setNameCountry}
          />
          <CoordsContext.Provider value={coordinates}>
            <CityCard />
          </CoordsContext.Provider>
        </div>
      </div>
    </Router>
  );
}

export default App;
