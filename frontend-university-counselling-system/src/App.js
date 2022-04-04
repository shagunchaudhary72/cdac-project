<<<<<<< HEAD
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import NotFound from './Components/NotFound/NotFound'
import RegisterStudent from './Components/RegisterAsStudent/RegisterStudent'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>

          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registerStudent" element={<RegisterStudent/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}
=======
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import "./App.css";
import Footer from "./Components/Home/Footer";
import HomePage from "./Components/Home/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
>>>>>>> 6b50230ce01c3d33ed14ff035f871dac72fba816

export default App;
