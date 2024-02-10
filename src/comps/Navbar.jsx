import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logoImg from "../img/logo.png";

const Navbar = () => {
  const [CoLogo, setCoLogo] = useState("");
  const [siLogo, setSiLogo] = useState("");
  useEffect(() => {
    if (window.innerWidth > 768) {
      setCoLogo("se Connecter");
      setSiLogo("Créer un compte");
    } else {
      setCoLogo(<i className="bi bi-box-arrow-in-right"></i>);
      setSiLogo(<i className="bi bi-person-add"></i>);
    }
  }, [window.innerWidth]);

  return (
    <div
      style={{ backgroundColor: "rgba(255, 255, 255, .5)" }}
      className="navbar text-dark rounded child"
      id="navbar"
    >
      <div className="container navbar-content flex">
        <div className="flex flex-sb">
          <Link to="/home" className="navbar-brand flex px-2 ">
            <img
              src={logoImg}
              alt="Site Logo"
              style={{
                width: "60px",
                height: "60px",
              }}
            />
            <span className="fw-bolder text-dark simple">
              City&nbsp;Hello 
            </span>
          </Link>
        </div>
        <div className="d-flex ">
          <ul className="navbar-nav flex-row">
            <li
              className="nav-item mx-3 fw-bolder"
              style={{ fontSize: "20px" }}
            >
              <Link to="/signin" className="nav-link text-dark simple">
                {CoLogo}
              </Link>
            </li>
            <li className="nav-item fw-bolder" style={{ fontSize: "20px" }}>
              <Link to="/signup" className="nav-link text-dark simple">
                {siLogo}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
