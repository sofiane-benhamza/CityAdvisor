import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logoImg from "../img/logo.png";

const Header = ({ setConnected }) => {
  const disconnect = () => {
    localStorage.removeItem("userLoggedIn");
    setConnected(false);
  };

  return (
    <div
      className="navbar text-dark rounded d-flex justify-content-center"
      id="navbar"
    >
      <div
        className="container navbar-content flex child rounded"
        style={{ backgroundColor: "rgba(255, 255, 255, .5)" }}
      >
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
              className="fw-bolder text-dark simple"
              style={{ fontSize: "24px" }}
            >
              City&nbsp;Advisor
            </span>
          </Link>
        </div>
        <div className="d-flex">
          <ul className="navbar-nav flex-row">
            <li
              className="nav-item mx-3 fw-bolder"
              style={{ fontSize: "20px" }}
            >
              <Link
                to="/home"
                className="nav-link text-dark simple"
                onClick={disconnect}
              >
                Se déconnecter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
