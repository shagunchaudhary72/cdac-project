
<<<<<<< HEAD
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterAsCollege from './Components/College/RegisterAsCollege'
import Login from './Components/Login/Login'
import AddStudentDetails from './Components/LoginAsStudent/AddStudentDetails'
import NotFound from './Components/NotFound/NotFound'
import RegisterStudent from './Components/RegisterAsStudent/RegisterStudent'
import StudentDashboard from './Components/StudentDashboard/StudentDashboard'
=======
import React, { useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import AddStudentDetails from "./Components/LoginAsStudent/AddStudentDetails";
import NotFound from "./Components/NotFound/NotFound";
import RegisterStudent from "./Components/RegisterAsStudent/RegisterStudent";

>>>>>>> fdf8b3ffad971518afc2c0fb565d5fa26f465e66
import Navbar from "./Components/Home/Navbar";
import HomePage from "./Components/Home/HomePage";
import About from "./Components/Pages/About";
import Clients from "./Components/Home/Clients";
import ExtraInfo from "./Components/Home/ExtraInfo";
import Copyright from "./Components/Home/Copyright";
import "./App.css";
import AddCollegeDetails from './Components/LoginAsCollege/AddCollegeDetails'
import CollegeDashboard from './Components/CollegeDashboard/CollegeDashboard'
import CollegeProfile from './Components/College/CollegeProfile'

import Sidebar from './Components/StudentDashboard/Sidebar'

import CollegePage from "./Components/Pages/CollegePage";
import CoursePage from "./Components/Pages/CoursePage";
import TeamPage from "./Components/Pages/TeamPage";
import EventsPage from "./Components/Pages/EventsPage";
import CollegeList from "./Components/Pages/CollegeList";
import CourseList from "./Components/Pages/CourseList";
import { useState } from "react";
import Contact from "./Components/Pages/Contact";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";


const App = () => {

  // const [pathName, setPathName] = useState('');

  // const location = useLocation();

  // useEffect(() => {
  //   const path = window.localStorage.getItem('path')
  //   if( path != null)
  //     {const pathArray=path.split('/');
  //       setPathName(pathArray[1]);
  //     console.log( pathName );
  //     }
  // },[pathName])

  //  setInterval(() => {
  //   const path = window.localStorage.getItem('path')
  //    if( path == null)
  //     {
  //       const pathArray=path.split('/');
  //       setPathName(pathArray[1]);
  //     console.log( pathName );
  //     }
  //  }, 500);


 

  return (
<<<<<<< HEAD
    <>
      <BrowserRouter>
        <Navbar />
        <div>

          <Routes>
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/about" element={<About />} />
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registerStudent" element={<RegisterStudent/>} />
            <Route path="/addStudentDetails" element={<AddStudentDetails/>} />
            <Route path="/addCollegeDetails" element={<AddCollegeDetails/>} />
            <Route path="/studentDashboard" element={<StudentDashboard />} />
            <Route path="/collegeDashboard" element={<CollegeDashboard/>} />
            <Route path="*" element={<NotFound/>} />
            <Route path="/registerCollege" element={<RegisterAsCollege/>}/>
            <Route path="/collegeProfile" element={<CollegeProfile/>} />
          </Routes>
        </div>
        <footer className="footer section">
          <Clients />
          <ExtraInfo />
          <Copyright />
        </footer>
      </BrowserRouter>
    </>
  )
}
=======
>>>>>>> fdf8b3ffad971518afc2c0fb565d5fa26f465e66

    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register/student" element={<RegisterStudent />} />

          <Route path="/addStudentDetails" element={<AddStudentDetails />} />

          {/* <Route path="/addPreference" element={<AddPreference/>} /> */}

          <Route path="/college_details/:name" element={<CollegePage />} />

          <Route path="/course_details/:courseName" element={<CoursePage />} />

         {/* <Route path="/studentDashboard" element={<StudentDashboard />} /> */}
            
                        <Route path='/studentDashboard' element={<Sidebar/>} />
            {/* <Route path="/addQualification" element={<AddQualification />} /> */}

          <Route path="/team" element={<TeamPage />} />

          <Route path="/events" element={<EventsPage />} />

          <Route path="/colleges" element={<CollegeList />} />

          <Route path="/courses" element={<CourseList />} />

          <Route path="/adminDashboard" element={<AdminDashboard />} />

          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
      <footer className="footer section">
        {/* <Clients /> */}
        <ExtraInfo />
        <Copyright />
      </footer>
    </BrowserRouter>
  );
};

export default App;
