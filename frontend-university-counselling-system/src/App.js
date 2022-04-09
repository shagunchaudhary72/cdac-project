
import React, { createContext, useReducer } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import AddStudentDetails from "./Components/LoginAsStudent/AddStudentDetails";
import NotFound from "./Components/NotFound/NotFound";
import RegisterStudent from "./Components/RegisterAsStudent/RegisterStudent";

import HomePage from "./Components/Home/HomePage";
import About from "./Components/Pages/About";
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

      <Route path="*" element={<NotFound />} />

    </Routes>
  </div>);
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (

    <BrowserRouter>
    <UserContext.Provider value={{state,dispatch}}>
        <Header />
        <Routing />
        </UserContext.Provider>
      <footer className="footer section">
        <ExtraInfo />
        <Copyright />
      </footer>
    </BrowserRouter>
  );
};

export default App;
