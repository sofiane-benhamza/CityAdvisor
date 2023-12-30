import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import backgroundImage from "./img/bg.gif";
import Navbar from "./comps/Navbar";
import Signin from "./comps/Disconnected/Signin";
import Signup from "./comps/Disconnected/Signup";
import Home from "./comps/Disconnected/Home";

const containerStyle = {
  minHeight: "100vh", // Adjust as needed
  backgroundImage: `url(${backgroundImage})`, // Apply the imported background image
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflow: "hidden",
  zIndex: "-999",
};

export default function Login({ setConnected }) {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={containerStyle}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />

            <Route
              path="signin"
              element={<Signin setConnected={setConnected} />}
            />
            <Route
              path="signup"
              element={<Signup setConnected={setConnected} />}
            />
            <Route path="home" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
//<Route path="signup" />
