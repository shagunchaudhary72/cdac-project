import React, { useEffect, useState } from "react";
import "../Login/Login.css"
import { Navigate } from "react-router-dom";
import collegeService from "../../Services/CollegeService";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCollegeDetails = () => {

    const collegeName = window.sessionStorage.getItem("name");
    const collegeEmail = window.sessionStorage.getItem("email");
    const collegeId = window.sessionStorage.getItem("id");
    const universityId = window.sessionStorage.getItem("universityId");
    const universityEmail = window.sessionStorage.getItem("universityEmail");
    const universityName = window.sessionStorage.getItem("universityName");
    const collegestate = window.sessionStorage.getItem("state");
    const collegecity = window.sessionStorage.getItem("city");
    const collegephoneNo = window.sessionStorage.getItem("phone_no");
    const obj = { collegeName, collegeEmail, university: { "id": universityId, "universityName": universityName, "email": universityEmail }, collegestate, collegecity, collegephoneNo };
    const [loggedInCollegeFalse, setLoggedInCollegeFalse] = useState(false);
    let courses = [];

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [cutOffRank, setCutOff] = useState("");
    const [minimumPercentInBoards, setMinimumPercentInBoards] = useState("");
    const [totalSeats, setTotalSeats] = useState("");
    const [vaccantSeats, setVaccantSeats] = useState("");
    const [phoneNo, setCollegePhoneNo] = useState("");
    const [logOut, setLogOut] = useState(false);
    const [navigateToLogin, setNavigateToLogin] = useState(false);

    const [percentError, setPercentError] = useState("");
    const [cutOffError, setCutOffError] = useState("");
    const [totalSeatsError, setTotalSeatsError] = useState("");
    const [vaccantSeatsError, setVaccantSeatsError] = useState("");
    const [successMesg, setSuccessMesg] = useState("");
    const [errorMesg, setErrorMesg] = useState("");
    const [courseList, setCourseList] = useState("");
    const [gotCourseList, setGotCourseList] = useState(false);

    const getCourseList = () => {
        collegeService.getCourseList().then(
            response => {
                console.log(response.data);
                setCourseList(response.data);
                setGotCourseList(true);
            }
        ).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        if (collegeName !== "" && collegeEmail !== "" && collegestate !== "" && collegecity !== "" && collegephoneNo !== "") {
            getCourseList();
            setName(obj.collegeName);
            setEmail(obj.collegeEmail);
            setState(obj.collegestate);
            setCity(obj.collegecity);
            setCollegePhoneNo(obj.collegephoneNo);
        }
        else {
            setLoggedInCollegeFalse(true);
        }
    }, [successMesg])

    let cityTextHandler = (e) => {
        setCity(e.target.value);
    }

    let totalSeatsTextHandler = (e) => {
        setTotalSeats(e.target.value);
    }

    let cutOffTextHandler = (e) => {
        setCutOff(e.target.value);
    }

    let vaccantSeatsTextHandler = (e) => {
        setVaccantSeats(e.target.value);
    }

    let stateTextHandler = (e) => {
        setState(e.target.value);
    }

    let percentTextHandler = (e) => {
        setMinimumPercentInBoards(e.target.value);
    }

    let phoneTextHandler = (e) => {
        setCollegePhoneNo(e.target.value);
    }

    let nameTextHandler = (event) => {
        if (successMesg !== "" || successMesg !== null)
            setSuccessMesg("");
        if (errorMesg !== "" || errorMesg !== null)
            setErrorMesg("");
        setName(event.target.value);
    }
    let emailTextHandler = (event) => {
        if (successMesg !== "" || successMesg !== null)
            setSuccessMesg("");
        if (errorMesg !== "" || errorMesg !== null)
            setErrorMesg("");
        setEmail(event.target.value);
    }

    let logoutClick = () => {
        window.sessionStorage.removeItem("name");
        window.sessionStorage.removeItem("email");
        window.sessionStorage.removeItem("id");
        window.sessionStorage.removeItem("universityId");
        window.sessionStorage.removeItem("universityEmail");
        window.sessionStorage.removeItem("universityName");
        window.sessionStorage.removeItem("state");
        window.sessionStorage.removeItem("city");
        window.sessionStorage.removeItem("phone_no");
        setLogOut(true);
    }

    function validation() {
        let percentFlag = true;
        let cutOffFlag = true;
        let totalSeatsFlag = true;
        let vaccantSeatsFlag = true;
        setErrorMesg("");
        setSuccessMesg("");
        setPercentError("");
        setCutOffError("");
        setTotalSeatsError("");
        setVaccantSeatsError("");
        if (minimumPercentInBoards < 0) {
            setPercentError("Please enter valid percentage");
            percentFlag = false;
        }
        if (cutOffRank < 0) {
            setCutOffError("Please enter valid cutOff Rank");
            cutOffFlag = false;
        }
        if (totalSeats < 0) {
            setTotalSeatsError("Please enter valid number of seats");
            totalSeatsFlag = false;
        }
        if (vaccantSeats < 0) {
            setVaccantSeatsError("Please enter valid number of seats");
            vaccantSeatsFlag = false;
        }
        if (percentFlag && cutOffFlag && totalSeatsFlag && vaccantSeatsFlag) {
            return true;
        }
        percentFlag = true;
        cutOffFlag = true;
        totalSeatsFlag = true;
        vaccantSeatsFlag = true;
        return false;
    }

    let addCollegeDetails = (e) => {
        e.preventDefault();
        if (validation() === true) {
            addSelectedCourseList();
            console.log(courses);
            let college = { "id": collegeId, name, email, university: { "id": universityId, "universityName": universityName, "": universityEmail }, cutOffRank, minimumPercentInBoards, courses, city, state, totalSeats, vaccantSeats }
            console.log(college);
            collegeService.updateCollegeDetails(college).then(() => {
                setSuccessMesg("College Profile Updated");
                toast.dark("Details updated successfully", {
                    position: "bottom-center"
                });
                //window.sessionStorage.setItem("success", "true");
                setNavigateToLogin(true);
            }).catch(error => {
                toast.warn("Something went wrong", {
                    position: "bottom-center"
                });
                console.log("Something went wrong", error);
            });
        }
    }

    const addSelectedCourseList = () => {
        var markedCheckbox = document.getElementsByName('cl');
        for (var checkbox of markedCheckbox) {
            if (checkbox.checked)
                courses.push({ "id": checkbox.id, "courseName": checkbox.value });
        }
    }



    return (
        <>{loggedInCollegeFalse && <Navigate to="/login" />}
            {logOut && <Navigate to="/login" />}
            {navigateToLogin && <Navigate to="/login" />}
            <button type="button" className="btn1 primary1" onClick={logoutClick}>Logout</button>
            <div className="container-fluid w-50 mt-5">
                <div className="m-3">
                    <h2 className="fw-bold mb-2 text-uppercase">College Details</h2>
                    <p className="text-50 text-success mb-3">Please fill up the form</p>
                    <div className="border border-1 rounded">
                        <div className="m-3">
                            <form onSubmit={addCollegeDetails}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={name} onChange={nameTextHandler} placeholder="Enter Name" disabled />
                                    <label>Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" value={email} onChange={emailTextHandler} placeholder="name@example.com" disabled />
                                    <label>Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={city} onChange={cityTextHandler} placeholder="Enter City" disabled />
                                    <label>City</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={state} onChange={stateTextHandler} placeholder="Enter State" disabled />
                                    <label>State</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={phoneNo} onChange={phoneTextHandler} placeholder="Enter State" disabled />
                                    <label>Phone No</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={minimumPercentInBoards} onChange={percentTextHandler} placeholder="Enter Marks" required />
                                    <label>Minimum Percentage Required in Boards</label>
                                    <span className="text-danger">{percentError}</span>
                                </div>
                                <label>Course List</label>

                                <div className="form-floating mb-3">
                                    <table width="100%" onChange={getCourseList}>
                                        <tbody>
                                            {gotCourseList && courseList.map((course) => (
                                                <tr>
                                                    <td><input type="checkbox" name="cl" id={course.id} value={course.courseName} /></td>
                                                    <td className="form-control">{course.courseName}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={cutOffRank} onChange={cutOffTextHandler} placeholder="Enter CutOff Rank" required />
                                    <label>Cutt Off Rank</label>
                                    <span className="text-danger">{cutOffError}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={totalSeats} onChange={totalSeatsTextHandler} placeholder="Enter Total Seats" required />
                                    <label>Total Seats</label>
                                    <span className="text-danger">{totalSeatsError}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={vaccantSeats} onChange={vaccantSeatsTextHandler} placeholder="Enter Vaccant Seats" required />
                                    <label>Vaccant Seats</label>
                                    <span className="text-danger">{vaccantSeatsError}</span>
                                </div>
                                <div className="row g-1">
                                    <button type="submit" className="btn1 primary1">Update Details</button>
                                </div>
                            </form>
                        </div >
                    </div >
                    <span className="text-success"><b>{successMesg}</b></span><span className="text-danger"><b>{errorMesg}</b></span>
                </div >
                <ToastContainer />
            </div >
        </>
    );
}

export default AddCollegeDetails;