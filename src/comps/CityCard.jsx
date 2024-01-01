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
  if (window.innerWidth > 768) {
    return (
      <div
        className="container rounded d-flex flex-column align-items-center justify-content-center"
        id="infos"
      >
        <div className="row justify-content-center w-100 h-50">
          <div
            className="col-lg-3 h-100 m-1"
            style={{ position: "relative", left: "-30px" }}
          >
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
  } else {
    return (
      <div
        className="container rounded d-flex flex-column align-items-center justify-content-center"
        id="infos"
      >
        <div className="d-flex flex-column flex-sm-row justify-content-center w-100">
          <div style={{ height: "700px" }}></div>

          <div className="w-100 col-sm-12 d-flex justify-content-center align-items-center">
            {" "}
            {/* Added align-items-center */}
            <Polution />
          </div>
          <br />
          <br />

          <div className="w-100 col-sm-12 col-lg-4 d-flex flex-column align-items-center justify-content-center m-1">
            <div style={{ minWidth: "100px" }}>
              <Flag />
            </div>
            <Population />
          </div>
          <div style={{ minHeight: "400px" }}>
            <Map />
          </div>
        </div>
        <div className="container align-items-center justify-content-center w-100 m-2">
          <div className="w-100 justify-content-center">
            <div className="col-lg-8 col-sm-12 overflow-hidden d-flex align-items-center justify-content-center">
              <Weather />
            </div>
            <div className="bg-light col-sm-12 child">
              <OverAll />
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default CityCard;
