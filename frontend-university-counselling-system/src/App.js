import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import "./App.css";
import Copyright from "./Components/Home/Copyright";
import HomePage from "./Components/Home/HomePage";
import About from "./Components/About/About";
import Clients from "./Components/Home/Clients";
import ExtraInfo from "./Components/Home/ExtraInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <footer className="footer section">
        <Clients />
        <ExtraInfo />
        <Copyright />
      </footer>
    </BrowserRouter>
  );
};

export default App;
