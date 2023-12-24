import { useState } from "react";
import React from "react";
import GetPolution from "../services/GetPolution";
import Quality from "../services/Quality";
import "../style.css";

const cssHead = {
  border: "1px solid #ddd",
  padding: "8px",
  backgroundColor: "#f2f2f2",
  textAlign: "center",
};

const getSafetyPercentage = (aqiValue) => {
  if (aqiValue <= 50) return 100; // Parfait: 100% safe
  if (aqiValue <= 100) return 75; // Bon: 75% safe
  if (aqiValue <= 150) return 50; // Moy.: 50% safe
  if (aqiValue <= 200) return 25; // Mauv.: 25% safe
  return 0; // dang.: 0% safe
};

const getEmoji = (pollutant) => {
  let emoji = "";
  if (pollutant.charAt(0) === "C") {
    emoji = "🔥"; // Emoji for CO (Carbon Monoxide)
  } else if (pollutant.charAt(0) === "N") {
    emoji = "🚫"; // Emoji for NO2 (Nitrogen Dioxide)
  } else if (pollutant.charAt(0) === "O") {
    emoji = "🌍"; // Emoji for O3 (Ozone)
  } else {
    emoji = "💨"; // Default emoji for other cases
  }
  return `${emoji}`;
};

// Usage example:
const aqiValue = 120; // Replace this with the actual AQI value
const safetyPercentage = getSafetyPercentage(aqiValue);

const AirQualityTable = ({ data }) => {
  return (
    <div className="rounded ">
      <table className=" rounded bg-light text-dark">
        <thead>
          <tr>
            <th style={cssHead}>Pollution</th>
            <th style={cssHead}>Concentration</th>
            <th style={cssHead}>&nbsp;&nbsp;&nbsp;Statut&nbsp;&nbsp;&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data)
            .filter((pollutant) => pollutant !== "overall_aqi")
            .map((pollutant, index) =>
              pollutant.charAt(0) != "P" ? (
                <tr key={index}>
                  <td
                    style={{
                      border: "1px solid #ddd",
                      padding: "5px",
                    }}
                  >
                    {pollutant}&nbsp;
                    <i className="vibrate-element">{getEmoji(pollutant)}</i>
                  </td>
                  <td
                    style={{
                      border: "1px solid #ddd",
                      padding: "5px",
                    }}
                  >
                    {data[pollutant].concentration}
                  </td>
                  <td
                    style={{
                      border: "1px solid #ddd",
                      padding: "5px",
                    }}
                  >
                    <Quality q={getSafetyPercentage(data[pollutant].aqi)} />
                  </td>
                </tr>
              ) : null
            )}
          <tr>
            <td
              style={{
                ...cssHead,
                fontWeight: "bold",
              }}
              colSpan="2"
            >
              Qualité Global
            </td>
            <td
              style={{
                ...cssHead,
                fontWeight: "bold",
              }}
            >
              <Quality q={getSafetyPercentage(data.overall_aqi)} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default function Polution({ setAitQua }) {
  const [airQualityData, setAirQualityData] = useState({
    CO: { concentration: 240.33, aqi: 2 },
    NO2: { concentration: 0.79, aqi: 0 },
    O3: { concentration: 91.55, aqi: 141 },
    SO2: { concentration: 1.89, aqi: 2 },
    overall_aqi: 141,
  });

  return (
    <div
      className="w-100 h-100 d-flex align-items-center justify-content-center mx-2"
      style={{ position: "relative", top: "20px", left: "-30px" }}
    >
      <AirQualityTable data={airQualityData} />
    </div>
  );
  return (
    <div
      className="w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ position: "relative", top: "20px" }}
    >
      <GetPolution setAQD={setAirQualityData} />
      <AirQualityTable data={airQualityData} />
    </div>
  );
}
//remove comment from return
