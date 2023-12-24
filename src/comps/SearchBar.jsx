import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

function SearchBar({ setLat, setLon, setCity, setCountry }) {
  const [SearchBarCentered, setSearchBarCentered] = useState(false);
  const [City, changeCity] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [searchButtonContent, setSearchButtonContent] = useState(
    <i className="bi bi-search p-1"></i>
  );
  const [inputOff, setInputOff] = useState(false);

  useEffect(() => {
    const searchBarDistance = SearchBarCentered ? "0px" : "40vh";
    const cardDistance = SearchBarCentered ? "20vh" : "150vh";
    const headerDistance = SearchBarCentered ? "-100px" : "0vh";

    document.documentElement.style.setProperty(
      "--SearchBar",
      searchBarDistance
    );
    document.documentElement.style.setProperty("--Infos", cardDistance);
    document.documentElement.style.setProperty("--Header", headerDistance);
  }, [SearchBarCentered]);

  const toggleSearchBarPosition = () => {
    setSearchBarCentered((prevCentered) => !prevCentered);
  };

  useEffect(() => {
    setCity(City);
  }, [City]);

  /******** */
  let currentIndex = 0;
  let currentCharIndex = 0;
  let currentText = "";
  let temporaryText = "";
  const sentences = [
    "Bonjour !",
    "Bienvenue au City Advisor!",
    "Écrire le nom de la ville qui vous intéresse",
    "Exemple : Agadir, London, Las Vegas ...",
  ];

  const typeWriter = () => {
    if (currentIndex < sentences.length) {
      currentText = sentences[currentIndex];

      if (currentCharIndex < currentText.length) {
        temporaryText += currentText.charAt(currentCharIndex);
        setPlaceholder(temporaryText);
        currentCharIndex++;
        setTimeout(typeWriter, 100);
      } else {
        setTimeout(deleteWriter, 1000);
      }
    }
  };

  const deleteWriter = () => {
    if (currentCharIndex >= 0) {
      temporaryText = temporaryText.slice(0, -1);
      setPlaceholder(temporaryText);
      currentCharIndex--;
      setTimeout(deleteWriter, 100);
    } else {
      currentIndex = (currentIndex + 1) % sentences.length; // Increment currentIndex correctly
      currentCharIndex = 0;
      setTimeout(typeWriter, 400);
    }
  };

  useEffect(() => {
    typeWriter();
  }, []);

  /******************** */

  const checkCity = () => {
    if (!SearchBarCentered) {
      //only get infos if needed (bar centered)
      URL = "http://localhost:9090/check?city=" + City;
      console.log(URL);
      axios
        .get(URL)
        .then((res) => {
          setSearchButtonContent(
            <div
              className="spinner-border text-light custom-spinner"
              role="status"
            >
              <span className="sr-only"></span>
            </div>
          );
          if (res.data) {
            setLat(res.data[1]);
            setLon(res.data[2]);
            setCountry(res.data[3]);
            setInputOff(true);
            setTimeout(() => {
              setSearchButtonContent(<h4 className="bi bi-x"></h4>);
              toggleSearchBarPosition();
            }, 2000);
          } else {
            alert(" 👋 🌍 vérifier le nom de la ville ! 🌍 🧨 ");
            setSearchButtonContent(<i className="bi bi-search p-1"></i>);
          }
        })
        .catch((error) => {
          console.log("Error : ", error);
        });
    } else {
      setSearchButtonContent(<i className="bi bi-search"></i>);
      setInputOff(false);
      document.getElementById("search-city").value = "";
      toggleSearchBarPosition();
    }
  };

  /****/

  return (
    <div className="d-flex justify-content-center vw-100 p-3 " id="SearchBar">
      <div className="w-50">
        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control text-center"
            onChange={(e) => changeCity(e.target.value)} // Use arrow function to handle onChange
            id="search-city"
            placeholder={placeholder}
            disabled={inputOff}
          />

          <div className="input-group-append">
            <button
              className="btn btn-dark"
              style={{ width: "50px" }}
              type="button"
              onClick={checkCity}
            >
              {searchButtonContent}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
