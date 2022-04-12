import { useContext, useEffect, useState, useRef } from "react";
import React from "react";
import { Navigate, Link } from "react-router-dom";
import "../Login/Login.css";
import "./CollegeDashboard.css";
import { AiFillDashboard, AiTwotoneHome, AiFillSetting } from "react-icons/ai";
import { ImBooks, ImCross } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import "./Sidebar.css";
import { FaUserGraduate, FaUniversity  } from "react-icons/fa";
import { MdVerticalDistribute } from "react-icons/md";
//import AddQualification from "./AddQualification";
//import AddPreference from "./AddPreference";
import Home from "./Home";
import Dashboard from "./CollegeDashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CollegeDetails from "../CollegeDashboard/CollegeDetails";
import { UserContext } from "../../App";
import ListShortlistedStudents from "./ListShortlistedStudents";

const CollegeSidebar = () => {
  const { state, dispatch } = useContext(UserContext);
  const [collegeName, setCollegeName] = useState(
    window.sessionStorage.getItem("name")
  );
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
  const [details, setShowDetails] = useState(false);
  const [shortlistedStudents, setShowShortlistedStudents] = useState(false);
  const sidebarRef = useRef(null);
  const sidebarTogglerRef = useRef(null);
  const dashboardDataSectionRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    if (collegeName === null || collegeEmail === null) {
      setLoggedInCollegeFalse(true);
    }

    if (snackbar === "show") {
      setShow(snackbar);
      setTimeout(function () {
        setShow("");
        clearTimeout();
      }, 3000);
      window.sessionStorage.removeItem("snackbar");
    }
    if (snackbar3 === "show") {
      setShow2(snackbar3);
      setTimeout(function () {
        setShow2("");
        clearTimeout();
      }, 3000);
      window.sessionStorage.removeItem("snackbar3");
    }
    //console.log(window.sessionStorage.getItem("success"));
    if (window.sessionStorage.getItem("success") === "true") {
      toast.dark("Details updated successfully", {
        position: "bottom-center",
      });
      window.sessionStorage.removeItem("success", "false");
    }

    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    if (dimensions.width >= 768) {
      sidebarRef.current.style.width = "20%";
      dashboardDataSectionRef.current.style.width = "80%";
      sidebarRef.current.style.display = "block";
      sidebarTogglerRef.current.style.display = "none";
    } else {
      sidebarRef.current.style.display = "none";
      sidebarTogglerRef.current.style.display = "block";
    }
    window.addEventListener("resize", handleResize);

    return (_) => window.removeEventListener("resize", handleResize);
  }, [collegeName, dimensions]);
  
      useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

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
    window.sessionStorage.removeItem("role");
    window.sessionStorage.setItem("snackbar2", "show");
    setLogOut(true);
    dispatch({ type: "USER", payload: false });
  };

  let showDetails = () => {
    if (home) {
      setHome(false);
    }
    if (dashboard) {
      setDashboard(false);
    }
    if (shortlistedStudents) {
      setShowShortlistedStudents(false);
    }
    setShowDetails(true);
  };

  let showHome = () => {
    if (dashboard) {
      setDashboard(false);
    }
    if (details) {
      setShowDetails(false);
    }
    if (shortlistedStudents) {
      setShowShortlistedStudents(false);
    }
    setHome(true);
  };

  let showDashboard = () => {
    if (home) {
      setHome(false);
    }
    if (details) {
      setShowDetails(false);
    }
    if (shortlistedStudents) {
      setShowShortlistedStudents(false);
    }
    setDashboard(true);
  };

  let showShortlistedStudents = () => {
    if (home) {
      setHome(false);
    }
    if (dashboard) {
      setDashboard(false);
    }
    if (details) {
      setShowDetails(false);
    }
    setShowShortlistedStudents(true);
  };

  const showSidebar = () => {
    sidebarRef.current.style.display = "block";
    sidebarRef.current.style.width = "80vw";
    dashboardDataSectionRef.current.style.display = "none";
    sidebarTogglerRef.current.style.display = "none";
  };

  const hideSidebar = () => {
    sidebarRef.current.style.display = "none";
    dashboardDataSectionRef.current.display = "100vw";
    dashboardDataSectionRef.current.style.display = "block";
    sidebarTogglerRef.current.style.display = "block";
  };

  return (
    <div>
      {loggedInCollegeFalse && <Navigate to="/" />}
      {logOut && <Navigate to="/login" />}
      <div className="row g-1 w-100 dashboard-section">
        <div
          className="sidebar-toggler"
          ref={sidebarTogglerRef}
          onClick={showSidebar}
        >
          <MdVerticalDistribute />
        </div>
        <div
          ref={sidebarRef}
          className=" dashboard-sidebar bg-light col-md-3 col-sm-3 col-5 bg-light p-3"
          style={{ height: "650px" }}
        >
          <div id="close-sidebar" className="text-end" onClick={hideSidebar}>
            <ImCross />
          </div>
          <a
            href="#"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <FaUserGraduate style={{ width: "30px" }} />
            <span className="fs-4">
              Hello{" "}
              <span className="text-success">
                <b>{collegeName}</b>
              </span>
            </span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto sidebar-list">
            <li onClick={showHome}  style={{cursor:"context-menu"}}>
              <AiTwotoneHome
                size={20}
                style={{ width: "30px", paddingBottom: "4px" }}
              />
              Home
            </li>
            <li onClick={showDashboard}  style={{cursor:"context-menu"}}>
              <AiFillDashboard
                size={20}
                style={{ width: "30px", paddingBottom: "4px" }}
              />
              Dashboard
            </li>
            <li onClick={showDetails}  style={{cursor:"context-menu"}}>
              <ImBooks
                size={20}
                style={{ width: "30px", paddingBottom: "4px" }}
              />
              College Details
            </li>
            <li onClick={showShortlistedStudents}  style={{cursor:"context-menu"}}>
              <BsPeopleFill
                size={20}
                style={{ width: "30px", paddingBottom: "4px" }}
              />
              Shortlisted Students
            </li>
          </ul>
          <div style={{ marginTop: "150%" }}>
            <hr />
            <div className="dropdown"  style={{cursor:"context-menu"}}>
              <a
                className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <strong>{collegeName}</strong>
              </a>
              <ul
                className="dropdown-menu text-small shadow"
                aria-labelledby="dropdownUser2"
              >
                <li>
                  <Link to="/college_profile" className="dropdown-item">
                    Profile
                  </Link>
                </li>
                {/* <li onClick= { showProfile }>*/}
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button
                    type="button"
                    className="btn1 primary1 dropdown-item"
                    onClick={logoutClick}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          ref={dashboardDataSectionRef}
          className="col-md-9 col-sm-9 col-7 dashboard-data-section"
          style={{ backgroundColor: "#d3ded6" }}
        >
          {home && <Home />}
          {dashboard && <Dashboard />}
          {details && <CollegeDetails />}
          {shortlistedStudents && <ListShortlistedStudents />}
          <div className={show} id="snackbar">
            Login Successfully..
          </div>
          <div className={show2} id="snackbar">
            College details are added..
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CollegeSidebar;
