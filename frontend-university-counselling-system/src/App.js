<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 4f9a1f155ca89dfda62f47ab186f452912165532
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import AddStudentDetails from './Components/LoginAsStudent/AddStudentDetails'
import NotFound from './Components/NotFound/NotFound'
import RegisterStudent from './Components/RegisterAsStudent/RegisterStudent'
=======
=======

>>>>>>> 9a3ff433486de9e801e93eb1de8e901c0a26a006
import React from "react";
=======
import React, { useEffect } from "react";

>>>>>>> fdf8b3ffad971518afc2c0fb565d5fa26f465e66
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import AddStudentDetails from "./Components/LoginAsStudent/AddStudentDetails";
import NotFound from "./Components/NotFound/NotFound";
import RegisterStudent from "./Components/RegisterAsStudent/RegisterStudent";
<<<<<<< HEAD
import StudentDashboard from "./Components/StudentDashboard/StudentDashboard";
<<<<<<< HEAD
>>>>>>> 6e1692ebb94de57c8f156220b8a2c9d13d312170
=======
=======
>>>>>>> fdf8b3ffad971518afc2c0fb565d5fa26f465e66

>>>>>>> 9a3ff433486de9e801e93eb1de8e901c0a26a006
import Navbar from "./Components/Home/Navbar";
import HomePage from "./Components/Home/HomePage";
import About from "./Components/Pages/About";
import Clients from "./Components/Home/Clients";
import ExtraInfo from "./Components/Home/ExtraInfo";
import Copyright from "./Components/Home/Copyright";
import "./App.css";

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

    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />

<<<<<<< HEAD
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
=======
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
>>>>>>> fdf8b3ffad971518afc2c0fb565d5fa26f465e66

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
>>>>>>> 6e1692ebb94de57c8f156220b8a2c9d13d312170

export default App;
