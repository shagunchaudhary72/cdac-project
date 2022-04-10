<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
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
=======
import React, { createContext, useReducer,useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

>>>>>>> 6a865253228e88dd021fc77cae1adefdd7a7f504
import Login from "./Components/Login/Login";
import AddStudentDetails from "./Components/LoginAsStudent/AddStudentDetails";
import NotFound from "./Components/NotFound/NotFound";
import RegisterStudent from "./Components/RegisterAsStudent/RegisterStudent";
<<<<<<< HEAD
<<<<<<< HEAD
import StudentDashboard from "./Components/StudentDashboard/StudentDashboard";
<<<<<<< HEAD
>>>>>>> 6e1692ebb94de57c8f156220b8a2c9d13d312170
=======
=======
>>>>>>> fdf8b3ffad971518afc2c0fb565d5fa26f465e66

>>>>>>> 9a3ff433486de9e801e93eb1de8e901c0a26a006
import Navbar from "./Components/Home/Navbar";
=======
import RegisterAsCollege from './Components/College/RegisterAsCollege'
import CollegeSidebar from './Components/CollegeDashboard/CollegeSidebar'

>>>>>>> 6a865253228e88dd021fc77cae1adefdd7a7f504
import HomePage from "./Components/Home/HomePage";
import About from "./Components/Pages/About";
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
import Contact from "./Components/Pages/Contact";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import Header from "./Components/Home/Header";
import { initialState, reducer } from "./Reducer/UseReducer";

export const UserContext = createContext();

const Routing = () =>{
  return (  <div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route exact path="/home" element={<HomePage />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register/student" element={<RegisterStudent />} />



      <Route path="/add_student_details" element={<AddStudentDetails />} />

      {/* <Route path="/addPreference" element={<AddPreference/>} /> */}

      <Route path="/college_details/:name" element={<CollegePage />} />

      <Route path="/course_details/:courseName" element={<CoursePage />} />

      {/* <Route path="/studentDashboard" element={<StudentDashboard />} /> */}

      <Route path='/student_dashboard' element={<Sidebar />} />
      {/* <Route path="/addQualification" element={<AddQualification />} /> */}

      <Route path="/team" element={<TeamPage />} />

      <Route path="/events" element={<EventsPage />} />

      <Route path="/colleges" element={<CollegeList />} />

      <Route path="/courses" element={<CourseList />} />

      <Route path="/adminDashboard" element={<AdminDashboard />} />

      <Route path="/addCollegeDetails" element={<AddCollegeDetails />} />
      <Route path="/collegeDashboard" element={<CollegeSidebar />} />
      <Route path="/register/college" element={<RegisterAsCollege />} />
      <Route path="/collegeProfile" element={<CollegeProfile />} />

      <Route path="*" element={<NotFound />} />

    </Routes>
  </div>);
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (

    <BrowserRouter>
<<<<<<< HEAD
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
=======
    <UserContext.Provider value={{state,dispatch}}>
        <Header />
        <Routing />
        </UserContext.Provider>
>>>>>>> 6a865253228e88dd021fc77cae1adefdd7a7f504
      <footer className="footer section">
        <ExtraInfo />
        <Copyright />
      </footer>
    </BrowserRouter>
  )


//   return (
// <BrowserRouter>
//   <Navbar />
//   <div>
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route exact path="/home" element={<HomePage />} />

//       <Route path="/about" element={<About />} />

//       <Route path="/contact" element={<Contact />} />

//       <Route path="/login" element={<Login />} />

//       <Route path="/register/student" element={<RegisterStudent />} />

//       <Route path="/addStudentDetails" element={<AddStudentDetails />} />

//       {/* <Route path="/addPreference" element={<AddPreference/>} /> */}

//       <Route path="/college_details/:name" element={<CollegePage />} />


//       <Route path="/course_details/:courseName" element={<CoursePage />} />

//       {/* <Route path="/studentDashboard" element={<StudentDashboard />} /> */}

//       <Route path='/studentDashboard' element={<Sidebar />} />
//       {/* <Route path="/addQualification" element={<AddQualification />} /> */}

//       <Route path="/team" element={<TeamPage />} />

//       <Route path="/events" element={<EventsPage />} />

//       <Route path="/colleges" element={<CollegeList />} />

//       <Route path="/courses" element={<CourseList />} />

//       <Route path="/adminDashboard" element={<AdminDashboard />} />

//       <Route path="*" element={<NotFound />} />

//     </Routes>
//   </div>
//   <footer className="footer section">
//     {/* <Clients /> */}
//     <ExtraInfo />
//     <Copyright />
//   </footer>
// </BrowserRouter>
  




// );
};
>>>>>>> 6e1692ebb94de57c8f156220b8a2c9d13d312170

export default App;
