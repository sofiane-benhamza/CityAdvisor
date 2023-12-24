import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

const Map = ({ len, attit }) => {
  useEffect(() => {
    const mapElement = document.getElementById("map");

    if (!mapElement) {
      return; // If map container doesn't exist, return
    }

    const latitude = Number(attit);
    const longitude = Number(len);

    if (isNaN(latitude) || isNaN(longitude)) {
      console.error("Invalid latitude or longitude values:", attit, len);
      return;
    }

    const map = L.map(mapElement).setView([latitude, longitude], 8);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map);

    // Cleanup function to remove the map when component unmounts
    return () => {
      map.remove();
    };
  }, [len, attit]);

  return (
    <div
      id="map"
      className="child"
      style={{ width: "95%", height: "90%" }}
    ></div>
  );
};

export default Map;
