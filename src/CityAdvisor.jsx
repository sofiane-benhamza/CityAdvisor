import React, { useEffect, useState } from "react";
import Login from "./Login"; // Assuming Login component exists
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import backgroundImage from "./img/bg.gif";

export default function CityAdvisor() {
  const [connected, setConnection] = useState(false);

  //in case of refresh, check if user already logged in
  // Reading the value from localStorage
  const userConnected = localStorage.getItem("userLoggedIn");

  useEffect(() => {
    if (userConnected) setConnection(true);
  }, []);

  const setConnected = (val) => {
    setConnection(val);
  };

  return connected ? (
    <App setConnected={setConnected} />
  ) : (
    <Login setConnected={setConnected} />
  );
}
