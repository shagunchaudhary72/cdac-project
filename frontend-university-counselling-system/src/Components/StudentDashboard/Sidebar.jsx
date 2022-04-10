import React, { useContext, useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import "../Login/Login.css";
import "./StudentDashboard.css";
import { AiFillDashboard, AiTwotoneHome } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import { BsFillDoorOpenFill } from "react-icons/bs";
import "./Sidebar.css";
import { FaUserGraduate } from "react-icons/fa";
import AddQualification from "./AddQualification";
import AddPreference from "./AddPreference";
import Home from "./Home";
import Dashboard from "./Dashboard";
import { UserContext } from "../../App";

const Sidebar = () => {

    const {state,dispatch} = useContext(UserContext);

    //const userData = window.sessionStorage.getItem("user");
    const studentName = window.sessionStorage.getItem("name");
    const studentEmail = window.sessionStorage.getItem("email");
    const studentAge = window.sessionStorage.getItem("age");
    const [loggedInStudentFalse, setLoggedInStudentFalse] = useState(false);
    const [logOut, setLogOut] = useState(false);
    const [show, setShow] = useState("");
    const [show2, setShow2] = useState("");
    const snackbar = window.sessionStorage.getItem("snackbar");
    const snackbar3 = window.sessionStorage.getItem("snackbar3");
    const [qualification, setQualification] = useState(false);
    const [preference, setPreference] = useState(false);
    const [home, setHome] = useState(false);
    const [dashboard, setDashboard] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (studentName === null || studentEmail === null || studentAge === null) {
            setLoggedInStudentFalse(true);
        }

        if (snackbar === "show") {
            setShow(snackbar);
            setTimeout(function () { setShow(""); clearTimeout(); }, 3000);
            window.sessionStorage.removeItem("snackbar");
        }
        if (snackbar3 === "show") {
            setShow2(snackbar3);
            setTimeout(function () { setShow2(""); clearTimeout(); }, 3000);
            window.sessionStorage.removeItem("snackbar3");
        }

    }, []);

    let logoutClick = () => {
        window.sessionStorage.removeItem("name");
        window.sessionStorage.removeItem("email");
        window.sessionStorage.removeItem("age");
        window.sessionStorage.removeItem("id");
        window.sessionStorage.removeItem('role');
        window.sessionStorage.setItem("snackbar2", "show");
        setLogOut(true);
        dispatch({type:"USER",payload:false});
    }

    let showQualification = () => {
        if (home) {
            setHome(false);
        }
        if (dashboard) {
            setDashboard(false);
        }
        if (preference) {
            setPreference(false);
        }
        setQualification(true);
    }

    let showPreference = () => {
        if (home) {
            setHome(false);
        }
        if (dashboard) {
            setDashboard(false);
        }
        if (qualification) {
            setQualification(false);
        }
        setPreference(true);
    }

    let showHome = () => {
        if (dashboard) {
            setDashboard(false);
        }
        if (qualification) {
            setQualification(false);
        }
        if (preference) {
            setPreference(false);
        }
        setHome(true);
    }

    let showDashboard = () => {
        if (home) {
            setHome(false);
        }
        if (qualification) {
            setQualification(false);
        }
        if (preference) {
            setPreference(false);
        }
        setDashboard(true);
    }


    return (
        <>
            {loggedInStudentFalse && <Navigate to="/" />}
            {logOut && <Navigate to="/login" />}
            <div className="row g-1 bg-light w-100">
                <div className="col-2 bg-light p-3" style={{ height: "650px" }}>
                    <a href="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none" >
                        <FaUserGraduate style={{ width: "30px" }} />
                        <span className="fs-4">Hello <span className="text-success"><b>{studentName}</b></span></span>
                    </a>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li onClick={showDashboard} style={{cursor:"context-menu"}}>
                            <AiTwotoneHome size={20} style={{ width: "30px", paddingBottom: "4px" }} />
                            Home
                        </li>
                        <li onClick={showQualification} style={{cursor:"context-menu"}}>
                            <ImBooks size={20} style={{ width: "30px", paddingBottom: "4px" }} />
                            Add Qualification
                        </li>
                        <li onClick={showPreference} style={{cursor:"context-menu"}}>
                            <BsFillDoorOpenFill size={20} style={{ width: "30px", paddingBottom: "4px" }} />
                            Add Preferences
                        </li>
                        <li onClick={showHome} style={{cursor:"context-menu"}}>
                            <AiFillDashboard size={20} style={{ width: "30px", paddingBottom: "4px" }} />
                            Result of Counselling
                        </li>
                    </ul>
                    <div style={{ marginTop: "150%" }}>
                        <hr />
                        <div className="dropdown" style={{cursor:"context-menu"}}>
                            <a className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                                <strong>{studentName}</strong>
                            </a>
                            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                                <li><Link to="/profile" className="dropdown-item" >Profile</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <button type="button" className="btn1 primary1 dropdown-item" onClick={logoutClick}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-10" style={{ backgroundColor: "#d3ded6" }}>
                    {dashboard && <Dashboard />}
                    {qualification && <AddQualification />}
                    {preference && <AddPreference />}
                    {home && <Home />}
                    <div className={show} id="snackbar">Login Successfully..</div>
                    <div className={show2} id="snackbar">Student details are added..</div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;