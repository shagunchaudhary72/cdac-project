import React from 'react'
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "../Login/Login.css";

const StudentDashboard = () => {
    const studentName = window.sessionStorage.getItem("name");
    const studentEmail = window.sessionStorage.getItem("email");
    const studentAge = window.sessionStorage.getItem("age");
    const[loggedInStudentFalse,setLoggedInStudentFalse] = useState(false);
    const [logOut,setLogOut] = useState(false);

    useEffect(()=>{
        if(studentName===null || studentEmail===null || studentAge===null){
            setLoggedInStudentFalse(true);
        }
    });

    let logoutClick = () => {
        window.sessionStorage.removeItem("name");
        window.sessionStorage.removeItem("email");
        window.sessionStorage.removeItem("age");
        window.sessionStorage.removeItem("id");
        setLogOut(true);
    }

    return (
        <>
        {loggedInStudentFalse && <Navigate to="/login" />}
        {logOut && <Navigate to="/login" />}
            <div>
                Hello
            </div>
            <button type="button" className="btn1 primary1" onClick={logoutClick}>Logout</button>
        </>
    );
}

export default StudentDashboard;