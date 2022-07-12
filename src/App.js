import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Articles from "./components/Articles/Articles.jsx";
import About from "./components/About/About.jsx";
import Header from "./components/Header/Header.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";
import { Dashboard } from "./components/Dashboard/Dashboard.jsx";
import { Login } from "./components/Buttons/Login.jsx";
import { Signup } from "./components/Buttons/Signup.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/arcticles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Articles />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
