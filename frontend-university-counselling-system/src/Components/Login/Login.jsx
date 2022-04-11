import React, { useContext } from "react";
import { useState, useEffect } from "react";
import "./Login.css";
import UserService from "../../Services/UserService";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMesg, setErrorMesg] = useState("");
  const [loggedInAsStudent, setLoggedInStudent] = useState(false);
  const [loggedInAsCollege, setLoggedInCollege] = useState(false);
  const [
    loggedInStudentAfterUpdatingDetails,
    setLoggedInStudentAfterUpdatingDetails,
  ] = useState(false);
  const [
    loggedInCollegeAfterUpdatingDetails,
    setLoggedInCollegeAfterUpdatingDetails,
  ] = useState(false);
  const [show, setShow] = useState("");
  let snackbar2 = window.sessionStorage.getItem("snackbar2");
  const [loggedInAsAdmin, setLoggedInAsAdmin] = useState(false);

  useEffect(() => {
    if (snackbar2 === "show") {
      setShow(snackbar2);
      setTimeout(function () {
        setShow("");
        clearTimeout();
      }, 3000);
      window.sessionStorage.removeItem("snackbar2");
    }
  }, []);

  let emailTextHandler = (event) => {
    setEmailErr("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setEmail(event.target.value);
  };

  let passwordTextHandler = (event) => {
    setPasswordError("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setPassword(event.target.value);
  };

  let validation = () => {
    let emailFlag = true;
    let passwordFlag = true;
    if (email === "" || email === null) {
      setEmailErr("This field is compulsory");
      emailFlag = false;
    }

    if (password === "" || password === null) {
      setPasswordError("This field is compulsory");
      passwordFlag = false;
    }
    if (emailFlag && passwordFlag) {
      return true;
    }
  };

  let onLoginSubmit = (event) => {
    event.preventDefault();
    if (validation() === true) {
      let loginRequest = {
        email,
        password,
      };
      UserService.login(loginRequest)
        .then((response) => {
          setEmail("");
          setPassword("");
          if (response.data.role === "ADMIN") {
            const user = response.data;
            window.sessionStorage.setItem("user", JSON.stringify(user));
            window.sessionStorage.setItem("name", user.name);
            window.sessionStorage.setItem("role", user.role);
            window.sessionStorage.setItem("snackbar", "show");
            console.log(user);
            setLoggedInAsAdmin(true);
          } else if (response.data.role === "STUDENT") {
            if (response.data.address === null) setLoggedInStudent(true);
            else setLoggedInStudentAfterUpdatingDetails(true);
            console.log("Login Successfully", response.data);
            let studentEmail = response.data.email;
            let studentName = response.data.name;
            let studentAge = response.data.age;
            let studentId = response.data.studentId;
            console.log(studentId);
            window.sessionStorage.setItem("id", studentId);
            window.sessionStorage.setItem("email", studentEmail);
            window.sessionStorage.setItem("name", studentName);
            window.sessionStorage.setItem("age", studentAge);
            window.sessionStorage.setItem("role", response.data.role);
            window.sessionStorage.setItem("snackbar", "show");
          } else if (response.data.role === "COLLEGE") {
            console.log(response.data);
            if (
              response.data.cutOffRank === "0" ||
              response.data.minimumPercentInBoards === "0" ||
              response.data.totalSeats === "0" ||
              response.data.vaccantSeats === "0" ||
              response.data.courses.length === 0
            )
              setLoggedInCollege(true);
            else setLoggedInCollegeAfterUpdatingDetails(true);
            console.log("Login Successfully", response.data);
            let collegeEmail = response.data.email;
            let collegeName = response.data.name;
            let collegeId = response.data.collegeId;
            let collegeCity = response.data.city;
            let collegeState = response.data.state;
            let collegePhonoNo = response.data.phoneNo;
            let collegeSelectedCourses = response.data.courses;
            let universityId = response.data.uniid;
            let universityEmail = response.data.uniemail;
            let universityName = response.data.uniname;
            console.log(collegeId);
            window.sessionStorage.setItem("id", collegeId);
            window.sessionStorage.setItem("email", collegeEmail);
            window.sessionStorage.setItem("name", collegeName);
            window.sessionStorage.setItem("city", collegeCity);
            window.sessionStorage.setItem("state", collegeState);
            window.sessionStorage.setItem("universityId", universityId);
            window.sessionStorage.setItem("universityEmail", universityEmail);
            window.sessionStorage.setItem("universityName", universityName);
            window.sessionStorage.setItem("phone_no", collegePhonoNo);
            window.sessionStorage.setItem(
              "courses",
              JSON.stringify(collegeSelectedCourses)
            );
            window.sessionStorage.setItem("role", response.data.role);
            window.sessionStorage.setItem("snackbar", "show");
          }
          dispatch({ type: "USER", payload: true });
        })
        .catch((error) => {
          setErrorMesg("Email or Password is incorrect", error);
        });
    }
  };

  return (
    <>
      {loggedInAsAdmin && <Navigate to="/admin_dashboard" />}
      {loggedInAsStudent && <Navigate to="/add_student_details" />}
      {loggedInStudentAfterUpdatingDetails && (
        <Navigate to="/student_dashboard" />
      )}
      {loggedInAsCollege && <Navigate to="/add_college_details" />}
      {loggedInCollegeAfterUpdatingDetails && (
        <Navigate to="/college_dashboard" />
      )}
      <div className="container-fluid w-50 mt-5 login-section">
        <div className="m-3">
          <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
          <p className="text-50 text-success mb-3">
            Please enter your login and password!
          </p>
          <div className="border border-1 rounded">
            <div className="m-3">
              <form onSubmit={onLoginSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    value={email}
                    onChange={emailTextHandler}
                    placeholder="name@example.com"
                  />
                  <label>Email address</label>
                  <span className="text-danger">{emailErr}</span>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    value={password}
                    onChange={passwordTextHandler}
                    placeholder="password"
                  />
                  <label>Password</label>
                  <span className="text-danger">{passwordError}</span>
                </div>

                <div className="row g-1">
                  <div className="text-center mb-2">
                    <a href="#!" className="link-success">
                      Forgot password?
                    </a>
                  </div>
                  <button type="submit" className="btn1 btn btn-sm primary1">
                    Login
                  </button>
                  <hr className="my-4" />
                  <p>
                    Don't have an account?{" "}
                    <Link to="/register/student" className="link-success">
                      Register as Student
                    </Link>
                    <span className="text-secondary"> OR </span>
                    <a href="/register/college" className="link-success">
                      College
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <span className="text-danger">
            <b>{errorMesg}</b>
          </span>
        </div>
      </div>
      <div className={show} id="snackbar">
        You have successfully logged out..
      </div>
    </>
  );
};

export default Login;
