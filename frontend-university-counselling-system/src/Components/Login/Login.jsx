import { useState } from "react";
import "./Login.css";
import UserService from "../../Services/UserService";
import { Link,Navigate } from "react-router-dom";
import AddStudentDetails from "../LoginAsStudent/AddStudentDetails";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [errorMesg, setErrorMesg] = useState("");
    const [loggedInAsStudent,setLoggedInStudent] = useState(false);
    const [loggedInAsCollege,setLoggedInCollege] = useState(false);
    const [loggedInStudentAfterUpdatingDetails,setLoggedInStudentAfterUpdatingDetails] = useState(false);
    const [loggedInCollegeAfterUpdatingDetails,setLoggedInCollegeAfterUpdatingDetails] = useState(false);

    let emailTextHandler = (event) => {
        setEmailErr("");
        if (errorMesg !== "" || errorMesg !== null)
            setErrorMesg("");
        setEmail(event.target.value);  
    }

    let passwordTextHandler = (event) => {
        setPasswordError("");
        if (errorMesg !== "" || errorMesg !== null)
            setErrorMesg("");
        setPassword(event.target.value);
    }

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
        if(emailFlag && passwordFlag){
            return true;
        }
    }

    let onLoginSubmit = (event) => {
        event.preventDefault();
        if(validation()===true){
            let loginRequest = {
                email,password
            }
            UserService.login(loginRequest).then(response=>{
                setEmail("");
                setPassword("");
                if(response.data.role === "STUDENT"){
                    if(response.data.address===null)
                        setLoggedInStudent(true);
                    else
                        setLoggedInStudentAfterUpdatingDetails(true);    
                    console.log("Login Successfully",response.data);
                    let studentEmail = response.data.email;
                    let studentName = response.data.name;
                    let studentAge = response.data.age;
                    let studentId = response.data.studentId;
                    console.log(studentId);
                    window.sessionStorage.setItem("id",studentId);
                    window.sessionStorage.setItem("email",studentEmail);
                    window.sessionStorage.setItem("name",studentName);
                    window.sessionStorage.setItem("age",studentAge);
                }
                else if(response.data.role === "COLLEGE"){
                    if(response.data.cutOffRank!=="" && response.data.minimumPercentInBoards!=="" && response.data.totalSeats!=="" && response.data.vaccantSeats!=="" && response.data.courses!==null)
                        setLoggedInCollegeAfterUpdatingDetails(true);    
                    else
                        setLoggedInCollege(true);
                    console.log("Login Successfully",response.data);
                    let collegeEmail = response.data.email;
                    let collegeName = response.data.name;
                    let collegeId = response.data.collegeId;
                    let collegeCity = response.data.city;
                    let collegeState = response.data.state;
                    let collegePhonoNo = response.data.phoneNo;
                    let university = response.data.university;
                    console.log(collegeId);
                    window.sessionStorage.setItem("id",collegeId);
                    window.sessionStorage.setItem("email",collegeEmail);
                    window.sessionStorage.setItem("name",collegeName);
                    window.sessionStorage.setItem("city",collegeCity);
                    window.sessionStorage.setItem("state",collegeState);
                    window.sessionStorage.setItem("university", JSON.stringify(university));
                    window.sessionStorage.setItem("phone_no",collegePhonoNo);
                }
            }).catch(error=>{
                setErrorMesg("Email or Password is incorrect",error);
            })
    }
}

    return (
        <>
        {loggedInAsStudent && <Navigate to="/addStudentDetails" />}
        {loggedInAsCollege && <Navigate to="/addCollegeDetails" />}
        {loggedInStudentAfterUpdatingDetails && <Navigate to="/studentDashboard"/>}
        {loggedInCollegeAfterUpdatingDetails && <Navigate to="/collegeDashboard"/>}
        <div className="container-fluid w-50 mt-5">
            <div className="m-3">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-50 text-success mb-3">Please enter your login and password!</p>
                <div className="border border-1 rounded">
                    <div className="m-3">
                        <form onSubmit={onLoginSubmit}>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" value={email} onChange={emailTextHandler} placeholder="name@example.com" />
                                <label>Email address</label>
                                <span className="text-danger">{emailErr}</span>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" value={password} onChange={passwordTextHandler} placeholder="password" />
                                <label>Password</label>
                                <span className="text-danger">{passwordError}</span>
                            </div>

                            <div className="row g-1">
                                <div className="text-center mb-2"><a href="#!" className="link-success">Forgot password?</a></div>
                                <button type="submit" className="btn1 primary1">Login</button>
                                <hr className="my-4" />
                                <p>Don't have an account? <Link to="/registerStudent" className="link-success">Register as Student</Link><span className="text-secondary"> OR </span><a href="#!" className="link-success">College</a></p>
                            </div>
                        </form>
                    </div >
                </div >
                <span className="text-danger"><b>{errorMesg}</b></span>
            </div >
        </div >
        </>
    );
}

export default Login;