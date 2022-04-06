import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
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

    let logoutClick = () => {
        window.sessionStorage.removeItem("name");
        window.sessionStorage.removeItem("email");
        window.sessionStorage.removeItem("id");
        setLogOut(true);
    }

    return (
        <>
        {loggedInCollegeFalse && <Navigate to="/login" />}
        {logOut && <Navigate to="/login" />}
            <div>
                Hello
            </div>
            <Link to="/collegeProfile">To College Profile</Link>
            <button type="button" className="btn1 primary1" onClick={logoutClick}>Logout</button>
        </>
    );
}

export default CollegeDashboard;