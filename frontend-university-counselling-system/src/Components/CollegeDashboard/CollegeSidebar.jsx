import { useEffect, useState } from "react";
import React from 'react';
import { Navigate, Link } from "react-router-dom";
import "../Login/Login.css";
import "./CollegeDashboard.css";
import { AiFillDashboard, AiTwotoneHome, AiFillSetting } from "react-icons/ai";
//import { ImBooks } from "react-icons/im";
//import { BsFillDoorOpenFill } from "react-icons/bs";
import "./Sidebar.css";
import { FaUserGraduate } from "react-icons/fa";
//import AddQualification from "./AddQualification";
//import AddPreference from "./AddPreference";
import Home from "./Home";
import Dashboard from "./CollegeDashboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import CollegeProfile from '../College/CollegeProfile'

const CollegeSidebar = () => {
    const [collegeName, setCollegeName] = useState(window.sessionStorage.getItem("name"));
    const collegeEmail = window.sessionStorage.getItem("email");
    //const studentAge = window.sessionStorage.getItem("age");
    const [loggedInCollegeFalse, setLoggedInCollegeFalse] = useState(false);
    const [logOut, setLogOut] = useState(false);
    const [show, setShow] = useState("");
    const [show2, setShow2] = useState("");
    const snackbar = window.sessionStorage.getItem("snackbar");
    const snackbar3 = window.sessionStorage.getItem("snackbar3");
    //const [qualification,setQualification] = useState(false);
    //const [preference,setPreference] = useState(false);
    const [home, setHome] = useState(true);
    const [dashboard, setDashboard] = useState(false);
    // const [profile, setProfile] = useState(false);

    useEffect(() => {
        if (collegeName === null || collegeEmail === null) {
            setLoggedInCollegeFalse(true);
        }

        if (snackbar === "show") {
            setShow(snackbar);
            setTimeout(function () { setShow(""); clearTimeout(); }, 3000)
            window.sessionStorage.removeItem("snackbar");
        }
        if (snackbar3 === "show") {
            setShow2(snackbar3);
            setTimeout(function () { setShow2(""); clearTimeout(); }, 3000)
            window.sessionStorage.removeItem("snackbar3");
        }
        //console.log(window.sessionStorage.getItem("success"));
        if(window.sessionStorage.getItem("success") === "true"){
            toast.dark("Details updated successfully",{
                position:"bottom-center"
            });
            window.sessionStorage.removeItem("success", "false");
        }
    }, [collegeName]);

    let logoutClick = () => {
        window.sessionStorage.removeItem("id");
        window.sessionStorage.removeItem("email");
        window.sessionStorage.removeItem("name");
        window.sessionStorage.removeItem("city");
        window.sessionStorage.removeItem("state");
        window.sessionStorage.removeItem("universityId");
        window.sessionStorage.removeItem("universityEmail");
        window.sessionStorage.removeItem("universityName");
        window.sessionStorage.removeItem("phone_no");
        window.sessionStorage.removeItem("courses");

        window.sessionStorage.setItem("snackbar2", "show");
        setLogOut(true);
    }

    /*let showQualification = () =>{
        if(home){
            setHome(false);
        }
        if(dashboard){
            setDashboard(false);
        }
        if(profile){
            setProfile(false);
        }
        setQualification(true);
    }*/

    let showProfile = () => {
        if (home) {
            setHome(false);
        }
        if (dashboard) {
            setDashboard(false);
        }/*
        if(qualification){
            setQualification(false);
        }*/
        // setProfile(true);
    }

    let showHome = () => {
        if (dashboard) {
            setDashboard(false);
        }
        /*if(qualification){
            setQualification(false);
        }*/
        // if (profile) {
        //     setProfile(false);
        // }
        setHome(true);
    }

    let showDashboard = () => {
        if (home) {
            setHome(false);
        }
        /*if(qualification){
            setQualification(false);
        }*/
        // if (profile) {
        //     setProfile(false);
        // }
        setDashboard(true);
    }

    return (
        <div>
            {loggedInCollegeFalse && <Navigate to="/" />}
            {logOut && <Navigate to="/login" />}
            <div className="row g-1 bg-light">
                <div className="col-2 bg-light p-3" style={{ height: "650px" }}>
                    <a href="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <FaUserGraduate style={{ width: "30px" }} />
                        <span className="fs-4">Hello <span className="text-success"><b>{collegeName}</b></span></span>
                    </a>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li onClick={showHome}>
                            <AiTwotoneHome size={20} style={{ width: "30px", paddingBottom: "4px" }} />
                            Home
                        </li>
                        <li onClick={showDashboard}>
                            <AiFillDashboard size={20} style={{ width: "30px", paddingBottom: "4px" }} />
                            Dashboard
                        </li>
                        {/*<li onClick={showQualification}>
                            <ImBooks size={20} style={{ width: "30px", paddingBottom: "4px" }} />
                                Add Qualification
                        </li>
                        <li onClick={showPreference}>
                            <BsFillDoorOpenFill size={20} style={{ width: "30px", paddingBottom: "4px" }} />
                                Add Preferences
                        </li>*/}
                    </ul>
                    <div style={{ marginTop: "150%" }}>
                        <hr />
                        <div className="dropdown">
                            <a className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                                <strong>{collegeName}</strong>
                            </a>
                            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                                <li><Link to="/collegeProfile" className="dropdown-item" >Profile</Link></li>
                                {/* <li onClick= { showProfile }>
                                    <AiFillSetting size={20} style={{ width: "30px", paddingBottom: "4px" }} />
                                    Profile
                                </li> */}
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <button type="button" className="btn1 primary1 dropdown-item" onClick={logoutClick}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-10" style={{ backgroundColor: "#d3ded6" }}>
                    {home && <Home />}
                    {dashboard && <Dashboard />}
                    {/* {profile && <CollegeProfile />} */}
                    {/* {qualification && <AddQualification />} */}
                    {/* {preference && <AddPreference />} */}
                    <div className={show} id="snackbar">Login Successfully..</div>
                    <div className={show2} id="snackbar">College details are added..</div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default CollegeSidebar;