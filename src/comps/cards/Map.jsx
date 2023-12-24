import GetMapByCoords from "../services/GetMapByCoords";
import { useContext } from "react";
import { CoordsContext } from "../../App";

export default function Map() {
  const { lon, lat } = useContext(CoordsContext);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center w-100 h-100">
        <GetMapByCoords len={lon} attit={lat} />
      </div>
    </>
  );
}
