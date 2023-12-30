import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logoImg from "../img/logo.png";

const Navbar = () => {
  return (
    <div
      style={{ backgroundColor: "rgba(255, 255, 255, .5)" }}
      className="navbar text-dark rounded child"
      id="navbar"
    >
      <div className="container navbar-content flex">
        <div className="flex flex-sb">
          <Link to="/home" className="navbar-brand flex px-4 ">
            <img
              src={logoImg}
              alt="Site Logo"
              style={{
                width: "60px",
                height: "60px",
              }}
            />
            <span
              className="fw-bolder text-dark simple"
              style={{ fontSize: "24px" }}
            >
              City&nbsp;Advisor
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
                Se Connecter
              </Link>
            </li>
            <li
              className="nav-item mx-3 fw-bolder"
              style={{ fontSize: "20px" }}
            >
              <Link to="/signup" className="nav-link text-dark simple">
                Créer un Compte
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
