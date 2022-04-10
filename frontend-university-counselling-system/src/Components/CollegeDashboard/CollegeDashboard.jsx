import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "../Login/Login.css";

const CollegeDashboard = () => {
    const collegeName = window.sessionStorage.getItem("name");
    const collegeEmail = window.sessionStorage.getItem("email");
    const[loggedInCollegeFalse,setLoggedInCollegeFalse] = useState(false);
    const [logOut,setLogOut] = useState(false);

    useEffect(()=>{
        if(collegeName===null || collegeEmail===null){
            setLoggedInCollegeFalse(true);
        }
    });

    return (
        <>
        {loggedInCollegeFalse && <Navigate to="/login" />}
        {logOut && <Navigate to="/login" />}
            <div>
                Hello
            </div>
        </>
    );
}

export default CollegeDashboard;