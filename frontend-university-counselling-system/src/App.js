
import React, { createContext, useReducer, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from "./Components/Login/Login";
import AddStudentDetails from "./Components/LoginAsStudent/AddStudentDetails";
import NotFound from "./Components/NotFound/NotFound";
import RegisterStudent from "./Components/RegisterAsStudent/RegisterStudent";
import RegisterAsCollege from './Components/College/RegisterAsCollege'
import CollegeSidebar from './Components/CollegeDashboard/CollegeSidebar'

import HomePage from "./Components/Home/HomePage";
import About from "./Components/Pages/About";
import ExtraInfo from "./Components/Home/ExtraInfo";
import Copyright from "./Components/Home/Copyright";
import "./App.css";
import AddCollegeDetails from './Components/LoginAsCollege/AddCollegeDetails'
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
import ForgotPassword from "./Components/Login/ForgotPassword";
import ProfileUpdate from "./Components/StudentDashboard/ProfileUpdate";

export const UserContext = createContext();

const Routing = () => {
  return (<div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route exact path="/home" element={<HomePage />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register/student" element={<RegisterStudent />} />



      <Route path="/add_student_details" element={<AddStudentDetails />} />

      <Route path="/college_details/:name" element={<CollegePage />} />

      <Route path="/course_details/:courseName" element={<CoursePage />} />

      <Route path='/student_dashboard' element={<Sidebar />} />

      <Route path="/team" element={<TeamPage />} />

      <Route path="/events" element={<EventsPage />} />

      <Route path="/colleges" element={<CollegeList />} />

      <Route path="/courses" element={<CourseList />} />

      <Route path="/admin_dashboard" element={<AdminDashboard />} />

      <Route path="/add_college_details" element={<AddCollegeDetails />} />
      <Route path="/college_dashboard" element={<CollegeSidebar />} />
      <Route path="/register/college" element={<RegisterAsCollege />} />
      <Route path="/college_profile" element={<CollegeProfile />} />
      <Route path="/forgot_password" element={<ForgotPassword />} />

      <Route path="/student/profile" element={<ProfileUpdate />} />

      <Route path="*" element={<NotFound />} />

    </Routes>
  </div>);
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const username = window.sessionStorage.getItem("name");
  useEffect(() => {
    if (username !== null) {
      dispatch({ type: "USER", payload: true });
    }
    else {
      dispatch({ type: "USER", payload: false });
    }
  }, [])



  return (

    <BrowserRouter>
      <UserContext.Provider value={{ state, dispatch }}>
          <Header />
        <Routing />
      </UserContext.Provider>
      <footer className="footer section ">
        <ExtraInfo />
        <Copyright />
      </footer>
    </BrowserRouter>
  )
};

export default App;