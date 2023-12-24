import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logoImg from "../img/logo.png";

const Header = () => {
  return (
    <div className="navbar bg-dark rounded child" id="navbar">
      <div className="container navbar-content flex">
        <div className="flex flex-sb">
          <Link to="/home" className="navbar-brand flex">
            <img
              src={logoImg}
              alt="Site Logo"
              style={{
                width: "50px",
                height: "50px",
              }}
            />
            <span
              className="text-uppercase fw-7 fs-24 ls-1 px-4 fw-bold text-light"
              style={{ fontFamily: "'Pacifico', cursive" }}
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
              <Link to="/home" className="nav-link text-light">
                Accueil
              </Link>
            </li>
            <li
              className="nav-item mx-3 fw-bolder"
              style={{ fontSize: "20px" }}
            >
              <Link to="/q_a" className="nav-link text-light">
                Q&A
              </Link>
            </li>
            <li
              className="nav-item mx-3 fw-bolder"
              style={{ fontSize: "20px" }}
            >
              <Link to="/about" className="nav-link text-light">
                A propos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
