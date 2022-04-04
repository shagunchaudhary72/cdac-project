
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterAsCollege from './Components/College/RegisterAsCollege'
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
            <Route path="/registerCollege" element={<RegisterAsCollege/>}/>
          </Routes>
        </div>
<Footer />
      </BrowserRouter>
    </>
  )
}


export default App;
