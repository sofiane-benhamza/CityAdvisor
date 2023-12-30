import React, { useState } from "react";
import axios from "axios";

const Signup = ({ setConnected }) => {
  const [fname, setFname] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const createUser = async (e) => {
    if (!fname || !name || !email || !password || !password2) return 0;
    e.preventDefault();
    let URL =
      "http://localhost:9090/users/create?name=" +
      fname +
      "+" +
      name +
      "&mail=" +
      email +
      "&password=" +
      password;

    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setConnected(true);
        } else {
          alert("⛔ quelle que chose a mal passé ⛔");
        }
      })
      .catch((error) => {
        alert("ce compte existe déja !");
      });
  };

  return (
    <form
      className="text-light p-4 rounded"
      style={{
        backgroundColor: "rgba(255,255,255,.3)",
        textShadow:
          "-2px 0 12px black,0 2px 12px black,0 0 12px black,0 0 12px black,0 0 12px black,0 0 12px black,0 0 12px black",
      }}
    >
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control m-2"
              id="fname"
              placeholder="Prénom"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control m-2"
              id="name"
              placeholder="Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      <div className="form-group mt-3">
        <input
          type="email"
          className="form-control m-2"
          id="mail"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group mt-3">
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

      <div className="form-group mt-3">
        <input
          type="password"
          className="form-control m-2"
          id="exampleInputPassword2"
          placeholder="Confirmer votre mot de passe"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          required
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          garde-moi connecté
        </label>
      </div>
      <button
        onClick={createUser}
        className="btn btn-primary mt-3 mb-3 ml-auto"
        style={{ float: "right" }}
      >
        Enregistrez
      </button>
      <br />
      <small id="emailHelp" className="form-text text-light">
        vos informations sont en sécurité.
      </small>
    </form>
  );
};

export default Signup;
