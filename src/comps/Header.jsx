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
        className="container navbar-content d-flex flex-row child rounded"
        style={{ backgroundColor: "rgba(255, 255, 255, .5)" }}
      >
        <div className="flex ">
          <Link to="/home" className="navbar-brand flex">
            <img
              src={logoImg}
              alt="Site Logo"
              style={{
                width: "50px",
                height: "50px",
              }}
            />
            <span className="fw-bolder text-dark simple">City Advisor</span>
          </Link>
        </div>
        <div className="d-flex">
          <Link
            to="/home"
            className="nav-link text-dark simple fw-bold mx-3"
            onClick={disconnect}
            style={{ fontSize: "20px" }}
          >
            <i className="bi bi-box-arrow-right"></i>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
