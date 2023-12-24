import { useContext } from "react";
import { CoordsContext } from "../../App";

export default function Flag() {
  const { country } = useContext(CoordsContext);

  if (!country) return null;

  // Convert country to uppercase
  const uppercaseCountry = country.toUpperCase();

  // Construct the flagUrl with the uppercase country value
  const flagUrl = `https://flagsapi.com/${uppercaseCountry}/flat/64.png`;

  //const flagUrl = `https://flagsapi.com/MA/flat/64.png`;

  return (
    <>
      {/* Use the flagUrl variable as the source for the image */}
      <img className="w-75" src={flagUrl} alt={`Flag of ${country}`} />
    </>
  );
}
