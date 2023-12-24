import { useEffect, useState } from "react";
import "../style.css";
export default function Quality({ q }) {
  const [quality, setQuality] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setQuality(q);
    }, 2000);
  }, [q]);
  return (
    <>
      <div style={{ width: "100%", margin: "0" }}>
        <i
          style={{
            fontSize: "20px",
            color: "black",
            position: "relative",
            top: "8px",
            transition: "all 1.4s",
            transitionDelay: "3s",
            left: `calc(${quality}% - 10px)`, // Adjust the positioning based on q
          }}
        >
          ▼
        </i>
      </div>
      <div className="progress" style={{ width: "100%" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `100%`, // Set progress bar width based on q
            backgroundImage: "linear-gradient(to right, red, yellow, green)",
          }}
        ></div>
      </div>
    </>
  );
}
