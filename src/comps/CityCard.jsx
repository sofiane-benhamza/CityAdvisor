import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";
import Map from "./cards/Map";
import Population from "./cards/Population";
import Flag from "./cards/Flag";
import Polution from "./cards/Polution";
import Weather from "./cards/Weather";
import OverAll from "./cards/OverAll";

function CityCard() {
  return (
    <div
      className="container rounded d-flex flex-column align-items-center justify-content-center"
      id="infos"
    >
      <div className="row justify-content-center w-100 h-50">
        <div className="col-lg-3 h-100 m-1">
          <Polution />
        </div>
        <div className="col-lg-2 h-100 d-flex flex-column align-items-center justify-content-center m-1 p-2">
          <Flag />
          <Population />
        </div>
        <div className="col-lg-6 h-100 m-1">
          <Map />
        </div>
      </div>
      <div className="col-lg-12 container align-items-center justify-content-center w-100 h-50 m-2">
        <div className="row h-100 w-100 align-items-center justify-content-center">
          <div className="col-lg-8 h-100 overflow-hidden d-flex align-items-center justify-content-center">
            <Weather />
          </div>
          <div className="bg-light col-lg-3 h-50 child">
            <OverAll />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityCard;
