import React, { useContext, useEffect, useState,useRef} from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import "../StudentDashboard/StudentDashboard.css";
import { AiFillDashboard, AiTwotoneHome } from "react-icons/ai";
import { ImBooks,ImCross } from "react-icons/im";
import { BsFillDoorOpenFill } from "react-icons/bs";
import './AdminDashboard.css'
import { FaUserGraduate } from "react-icons/fa";
import ListOfStudents from "./ListOfStudents";
import DeclareResult from "./DeclareResult";
import { UserContext } from "../../App";
import {MdVerticalDistribute} from "react-icons/md"
// import Home from "./Home";

const AdminDashboard = () => {
    const {state,dispatch} = useContext(UserContext);
    const userData = JSON.parse(window.sessionStorage.getItem("user"));
    const name = window.sessionStorage.getItem("name");
    const studentId = window.sessionStorage.getItem("id");
    const [logOut, setLogOut] = useState(false);
    const [show, setShow] = useState("");
    const [show2, setShow2] = useState("");
    const snackbar = window.sessionStorage.getItem("snackbar");
    const snackbar3 = window.sessionStorage.getItem("snackbar3");
    const [listOfStudents, setListOfStudents] = useState(false);
    const [home, setHome] = useState(true);
    const [dashboard, setDashboard] = useState(false);
    const [notloggedInAsAdmin, setNotLoggedInAsAdmin] = useState(false);
    const [declareResult, setDeclareResult] = useState(false);
    const [unauthorizedAdminAccess, setUnauthorizedAdminAccess] = useState(false);
    const sidebarRef = useRef(null);
    const sidebarTogglerRef = useRef(null);
    const dashboardDataSectionRef = useRef(null);
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      }) 

    useEffect(() => {
        if (studentId !== null) {
            setUnauthorizedAdminAccess(true);
        }
        else {
            if (userData === null) {
                setNotLoggedInAsAdmin(true);
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
        }

        const handleResize = () => {
            setDimensions({
              height: window.innerHeight,
              width: window.innerWidth
            })
        }

        if( dimensions.width >= 768){
            sidebarRef.current.style.width = "25%";
            dashboardDataSectionRef.current.style.width = "75%";
            sidebarRef.current.style.display = "block";
            sidebarTogglerRef.current.style.display = "none";
        }else{
            sidebarRef.current.style.display = "none";
            sidebarTogglerRef.current.style.display = "block";
        }
        window.addEventListener( 'resize', handleResize);

        return _ => window.removeEventListener( 'resize', handleResize);

    }, [dimensions]);

    let logoutClick = () => {
        window.sessionStorage.removeItem("name");
        window.sessionStorage.removeItem('user');
        window.sessionStorage.removeItem('loggedIn');
        window.sessionStorage.removeItem('role');
        window.sessionStorage.setItem("snackbar2", "show");
        setLogOut(true);
        dispatch({type:"USER",payload:false})
    }

    let showListOfStudents = () => {
        if (home) {
            setHome(false);
        }
        if (dashboard) {
            setDashboard(false);
        }
        if (declareResult) {
            setDeclareResult(false);
        }
        setListOfStudents(true);
    }

    let showResultPage = () => {
        if (home) {
            setHome(false);
        }
        if (dashboard) {
            setDashboard(false);
        }
        if (listOfStudents) {
            setListOfStudents(false);
        }
        setDeclareResult(true);
    }

    let showHome = () => {
        if (dashboard) {
            setDashboard(false);
        }
        if (listOfStudents) {
            setListOfStudents(false);
        }
        if (declareResult) {
            setDeclareResult(false);
        }
        setHome(true);
    }

    let showDashboard = () => {
        if (home) {
            setHome(false);
        }
        if (listOfStudents) {
            setListOfStudents(false);
        }
        if (declareResult) {
            setDeclareResult(false);
        }
        setDashboard(true);
    }

       
    const showSidebar = () => {
        sidebarRef.current.style.display = "block";
        sidebarRef.current.style.width = "80vw";
        dashboardDataSectionRef.current.style.display = "none";
        sidebarTogglerRef.current.style.display = "none";

    }

    const hideSidebar = () => {
        sidebarRef.current.style.display = "none";
        dashboardDataSectionRef.current.display = "100vw";
        dashboardDataSectionRef.current.style.display = "block";
        sidebarTogglerRef.current.style.display = "block";
    }
    return (
        <>
            {unauthorizedAdminAccess && <Navigate to="/" />}
            {notloggedInAsAdmin && <Navigate to="/login" />}
            {logOut && <Navigate to="/login" />}
            <div className="row g-1  w-100 dashboard-section">
             <div className="sidebar-toggler" ref={sidebarTogglerRef} onClick={showSidebar}><MdVerticalDistribute /></div> 
                <div ref={sidebarRef} className=" dashboard-sidebar bg-light col-md-3 col-sm-3 col-5 bg-light p-3" style={{ height: "650px" }}>
                    
                    <div id="close-sidebar" className="text-end" onClick={hideSidebar}><ImCross /></div>
                    
                    <a href="#" className="hello-text d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <FaUserGraduate style={{ width: "30px" }} />
                        <span className="fs-4">Hello <span className="text-success"><b>{name}</b></span></span>
                    </a>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto sidebar-list">
                        <li onClick={showHome}>
                            <AiTwotoneHome className="sidebar-list-icon" style={{ width: "30px", paddingBottom: "4px" }} />
                            Home
                        </li>
                        <li onClick={showDashboard}>
                            <AiFillDashboard className="sidebar-list-icon" style={{ width: "30px", paddingBottom: "4px" }} />
                            Dashboard
                        </li>
                        <li onClick={showListOfStudents}>
                            <ImBooks className="sidebar-list-icon" style={{ width: "30px", paddingBottom: "4px" }} />
                            Students
                        </li>
                        <li onClick={showResultPage}>
                            <BsFillDoorOpenFill className="sidebar-list-icon" style={{ width: "30px", paddingBottom: "4px" }} />
                            Result
                        </li>
                    </ul>
                    <div style={{ marginTop: "150%" }}>
                        <hr />
                        <div className="dropdown">
                            <a className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                                <strong>{name}</strong>
                            </a>
                            <ul className="dropdown-menu text-small shadow sidebar-list" aria-labelledby="dropdownUser2">
                                <li><Link to="/profile" className="dropdown-item" >Profile</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <button type="button" className="btn1 primary1 dropdown-item" onClick={logoutClick}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div ref={dashboardDataSectionRef} className="col-md-9 col-sm-9 col-7 dashboard-data-section" style={{ backgroundColor: "#d3ded6" }}>
                    {/* {home && <Home />} */}
                    {/* {dashboard && <Dashboard />} */}
                    {listOfStudents && <ListOfStudents />}
                    {declareResult && <DeclareResult />}
                    <div className={show} id="snackbar">Login Successfully..</div>
                    <div className={show2} id="snackbar">Student details are added..</div>
                </div>
            </div>
        </>
    );
}

export default AdminDashboard;