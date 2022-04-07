
import React, { useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import AddStudentDetails from "./Components/LoginAsStudent/AddStudentDetails";
import NotFound from "./Components/NotFound/NotFound";
import RegisterStudent from "./Components/RegisterAsStudent/RegisterStudent";
import StudentDashboard from "./Components/StudentDashboard/StudentDashboard";

import Navbar from "./Components/Home/Navbar";
import HomePage from "./Components/Home/HomePage";
import About from "./Components/Pages/About";
import Clients from "./Components/Home/Clients";
import ExtraInfo from "./Components/Home/ExtraInfo";
import Copyright from "./Components/Home/Copyright";
import "./App.css";

import Sidebar from './Components/StudentDashboard/Sidebar'
import AddQualification from './Components/StudentDashboard/AddQualification'

import CollegePage from "./Components/Pages/CollegePage";
import CoursePage from "./Components/Pages/CoursePage";
import TeamPage from "./Components/Pages/TeamPage";
import EventsPage from "./Components/Pages/EventsPage";
import CollegeList from "./Components/Pages/CollegeList";
import CourseList from "./Components/Pages/CourseList";
import { useState } from "react";
import Contact from "./Components/Pages/Contact";


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

          <Route path="/college_details/:name" element={<CollegePage />} />

          <Route path="/course_details/:courseName" element={<CoursePage />} />

         {/* // <Route path="/studentDashboard" element={<StudentDashboard />} /> */}
            
                        <Route path='/studentDashboard' element={<Sidebar/>} />
            <Route path="/addQualification" element={<AddQualification />} />

          <Route path="/team" element={<TeamPage />} />

          <Route path="/events" element={<EventsPage />} />

          <Route path="/colleges" element={<CollegeList />} />

          <Route path="/courses" element={<CourseList />} />

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
