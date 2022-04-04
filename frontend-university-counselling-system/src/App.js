import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import AddStudentDetails from './Components/LoginAsStudent/AddStudentDetails'
import NotFound from './Components/NotFound/NotFound'
import RegisterStudent from './Components/RegisterAsStudent/RegisterStudent'
import StudentDashboard from './Components/StudentDashboard/StudentDashboard'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>

          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registerStudent" element={<RegisterStudent/>} />
            <Route path="/addStudentDetails" element={<AddStudentDetails/>} />
            <Route path="/studentDashboard" element={<StudentDashboard />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App