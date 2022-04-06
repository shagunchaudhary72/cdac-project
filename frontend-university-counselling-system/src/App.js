<<<<<<< HEAD
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
=======
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import AddStudentDetails from "./Components/LoginAsStudent/AddStudentDetails";
import NotFound from "./Components/NotFound/NotFound";
import RegisterStudent from "./Components/RegisterAsStudent/RegisterStudent";
import StudentDashboard from "./Components/StudentDashboard/StudentDashboard";
>>>>>>> 6e1692ebb94de57c8f156220b8a2c9d13d312170
import Navbar from "./Components/Home/Navbar";
import HomePage from "./Components/Home/HomePage";
import About from "./Components/About/About";
import Clients from "./Components/Home/Clients";
import ExtraInfo from "./Components/Home/ExtraInfo";
import Copyright from "./Components/Home/Copyright";
import "./App.css";
import CollegePage from "./Components/Pages/CollegePage";
import CoursePage from "./Components/Pages/CoursePage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />

<<<<<<< HEAD
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
=======
          <Route exact path="/about" element={<About />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register/student" element={<RegisterStudent />} />

          <Route path="/addStudentDetails" element={<AddStudentDetails />} />

          <Route path="/college_details/:name" element={<CollegePage />} />

          <Route path="/course_details/:courseName" element={<CoursePage />} />

          <Route path="/studentDashboard" element={<StudentDashboard />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <footer className="footer section">
        <Clients />
        <ExtraInfo />
        <Copyright />
      </footer>
    </BrowserRouter>
  );
};
>>>>>>> 6e1692ebb94de57c8f156220b8a2c9d13d312170

export default App;
