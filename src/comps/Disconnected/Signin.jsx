import React, { useState } from "react";
import axios from "axios";

const Signin = ({ setConnected }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkUser = async (e) => {
    if (!email || !password) return 0;
    e.preventDefault();
    let URL =
      "http://localhost:9090/users/verify?mail=" +
      email +
      "&password=" +
      password;
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          localStorage.setItem("userLoggedIn", "true");
          setConnected(true);
        } else {
          alert("⛔ veuillez verifiez votre email et/ou mot de passe ⛔");
          setPassword("");
          setEmail("");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <form
      className="text-light p-4 rounded"
      style={{
        backgroundColor: "rgba(255,255,255,.3)",
        minWidth: "400px",
        textShadow:
          "-2px 0 12px black,0 2px 12px black,0 0 12px black,0 0 12px black,0 0 12px black,0 0 12px black,0 0 12px black",
      }}
    >
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Adresse email</label>
        <input
          type="email"
          className="form-control m-2"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="exampleInputPassword1">Mot de passe</label>
        <input
          type="password"
          className="form-control m-2"
          id="exampleInputPassword1"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          garde-moi connecté
        </label>
      </div>
      <button
        onClick={checkUser}
        className="btn btn-primary mt-3 mb-3 ml-auto"
        style={{ float: "right" }}
      >
        se connecter
      </button>
      <br />
      <small id="emailHelp" className="form-text text-light">
        vos informations sont en sécurité.
      </small>
    </form>
  );
};

export default Signin;
