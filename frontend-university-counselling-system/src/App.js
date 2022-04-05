<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4f9a1f155ca89dfda62f47ab186f452912165532
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import AddStudentDetails from './Components/LoginAsStudent/AddStudentDetails'
import NotFound from './Components/NotFound/NotFound'
import RegisterStudent from './Components/RegisterAsStudent/RegisterStudent'
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Home/Footer";
import HomePage from "./Components/Home/HomePage";

import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
    <Navbar />
        <div>

          <Routes>
     <Route exact path="/home" element={<HomePage />} />
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registerStudent" element={<RegisterStudent/>} />
            <Route path="/addStudentDetails" element={<AddStudentDetails/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
<Footer />
      </BrowserRouter>
    </>
  )
}
<<<<<<< HEAD
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
=======

>>>>>>> 4f9a1f155ca89dfda62f47ab186f452912165532

export default App;
