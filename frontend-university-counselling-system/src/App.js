import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterAsCollege from './Components/College/RegisterAsCollege'
import Login from './Components/Login/Login'
import NotFound from './Components/NotFound/NotFound'
import RegisterStudent from './Components/RegisterAsStudent/RegisterStudent'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>

          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registerStudent" element={<RegisterStudent/>} />
            <Route path="*" element={<NotFound/>} />
            <Route path="/registerCollege" element={<RegisterAsCollege/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App