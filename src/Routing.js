import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import About from "./Components/About";
import Final from "./Components/Final";
import Home from "./Components/Home";
import Partner from "./Components/Partner";
import Prize from "./Components/Prize";
import Register from "./Components/Register";
import User from "./Components/User";
import Venue from "./Components/Venue";
function Routing() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/prize" element={<Prize />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/user" element={<User />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Routing;
