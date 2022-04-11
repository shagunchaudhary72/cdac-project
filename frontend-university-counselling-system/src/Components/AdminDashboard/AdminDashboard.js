import React, { useContext, useEffect, useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import "../StudentDashboard/StudentDashboard.css";
import { AiFillDashboard, AiTwotoneHome } from "react-icons/ai";
import { BsFillDoorOpenFill,BsPeopleFill } from "react-icons/bs";
import {FaBook} from  "react-icons/fa";
import './AdminDashboard.css'
import { FaUniversity } from "react-icons/fa";
import ListOfStudents from "./ListOfStudents";
import DeclareResult from "./DeclareResult";
import { UserContext } from "../../App";
import AddCourse from "./AddCourse";
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
    const [course,setCourse] = useState(false);
    const [unauthorizedAdminAccess, setUnauthorizedAdminAccess] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
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
    }, []);

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
        if(course){
            setCourse(false);
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
        if(course){
            setCourse(false);
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
        if(course){
            setCourse(false);
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
        if(course){
            setCourse(false);
        }
        if (listOfStudents) {
            setListOfStudents(false);
        }
        if (declareResult) {
            setDeclareResult(false);
        }
        setDashboard(true);
    }

    let showCourse = () => {
        if (home) {
            setHome(false);
        }
        if (listOfStudents) {
            setListOfStudents(false);
        }
        if (declareResult) {
            setDeclareResult(false);
        }
        if(dashboard){
            setDashboard(false);
        }
        setCourse(true);
    }

    return (
        <>
            {unauthorizedAdminAccess && <Navigate to="/" />}
            {notloggedInAsAdmin && <Navigate to="/login" />}
            {logOut && <Navigate to="/login" />}
            <div className="row g-1 bg-light w-100">
                <div className="col-2 bg-light p-3" style={{ height: "650px" }}>
                    <a href="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <FaUniversity style={{ width: "30px" }} />
                        <span className="fs-4">Hello <span className="text-success"><b>{name}</b></span></span>
                    </a>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li onClick={showHome} style={{cursor:"context-menu"}}>
                            <AiTwotoneHome size={20} style={{ width: "30px", paddingBottom: "4px" }} />
                            Home
                        </li>
                        <li onClick={showDashboard} style={{cursor:"context-menu"}}>
                            <AiFillDashboard size={20} style={{ width: "30px", paddingBottom: "4px" }} />
                            Dashboard
                        </li>
                        <li onClick={showCourse} style={{cursor:"context-menu"}}>
                            <FaBook size={20} style={{ width: "30px", paddingBottom: "4px" }} />
                            Add Course
                        </li>
                        <li onClick={showListOfStudents} style={{cursor:"context-menu"}}>
                            <BsPeopleFill size={20} style={{ width: "30px", paddingBottom: "4px" }} />
                            List Of Students
                        </li>
                        <li onClick={showResultPage} style={{cursor:"context-menu"}}>
                            <BsFillDoorOpenFill size={20} style={{ width: "30px", paddingBottom: "4px" }} />
                            Declare Result
                        </li>
                    </ul>
                    <div style={{ marginTop: "150%" }}>
                        <hr />
                        <div className="dropdown">
                            <a className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                                <strong>{name}</strong>
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
                    {course && <AddCourse />}
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