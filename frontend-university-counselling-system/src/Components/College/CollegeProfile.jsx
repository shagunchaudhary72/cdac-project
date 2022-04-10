import React, { useEffect, useState } from "react";
import "../Login/Login.css"
import { Navigate, Link } from "react-router-dom";
import collegeService from "../../Services/CollegeService";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCollegeDetails = () => {

    const collegeName = window.sessionStorage.getItem("name");
    const collegeEmail = window.sessionStorage.getItem("email");
    const collegeId = window.sessionStorage.getItem("id");
    const collegestate = window.sessionStorage.getItem("state");
    const collegecity = window.sessionStorage.getItem("city");
    const collegephoneNo = window.sessionStorage.getItem("phone_no");
    const universityId = window.sessionStorage.getItem("universityId");
    const universityEmail = window.sessionStorage.getItem("universityEmail");
    const universityName = window.sessionStorage.getItem("universityName");

    const [collegeCourses, setCollegeCourses] = useState([]);

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

    const [nameError, setNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [percentError, setPercentError] = useState("");
    const [cutOffError, setCutOffError] = useState("");
    const [totalSeatsError, setTotalSeatsError] = useState("");
    const [vaccantSeatsError, setVaccantSeatsError] = useState("");
    const [successMesg, setSuccessMesg] = useState("");
    const [errorMesg, setErrorMesg] = useState("");
    const [courseList, setCourseList] = useState("");
    const [gotCourseList, setGotCourseList] = useState(false);
    const [selectedCourseList, setSelectedCourseList] = useState([]);
    const [detailsUpdated, setDetailsUpdated] = useState(false);

    const getCourseList = () => {
        collegeService.getCourseList().then(
            response => {
                setSelectedCourseList(collegeCourses);
                console.log(response.data);
                console.log(selectedCourseList);
                setCourseList(response.data);
                setGotCourseList(true);
            }
        ).catch(error => {
            toast.warn("Something went wrong",{
                position:"bottom-center"
            })
            console.log("Something went wrong", error);
        });
    }

    useEffect(() => {
        window.sessionStorage.setItem("success", "false");
        if (collegeName !== "" && collegeEmail !== "" && collegestate !== "" && collegecity !== "" && collegephoneNo !== "") {
            collegeService.getCollegeProfile(collegeId).then(
                (response) => {
                    setName(response.data.name);
                    setEmail(response.data.email);
                    setState(response.data.state);
                    setCity(response.data.city);
                    setCollegePhoneNo(response.data.phoneNo);
                    setCutOff(response.data.cutOffRank);
                    console.log(collegeCourses);
                    setCollegeCourses(response.data.courses.map(
                        (SelectedCourse) => {
                            return collegeCourses.push(SelectedCourse.courseName);
                        }));
                    console.log(collegeCourses);
                    setMinimumPercentInBoards(response.data.minimumPercentInBoards);
                    setTotalSeats(response.data.totalSeats);
                    setVaccantSeats(response.data.vaccantSeats);
                    getCourseList();
                }
            ).catch(error => {
                toast.warn("Something went wrong",{
                    position:"bottom-center"
                })
                console.log("Something went wrong", error);
            });
        }
        else {
            setLoggedInCollegeFalse(true);
        }
    }, [])

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

    // let logoutClick = () => {
    //     window.sessionStorage.removeItem("name");
    //     window.sessionStorage.removeItem("email");
    //     window.sessionStorage.removeItem("id");
    //     window.sessionStorage.removeItem("universityId");
    //     window.sessionStorage.removeItem("universityEmail");
    //     window.sessionStorage.removeItem("universityName");
    //     window.sessionStorage.removeItem("state");
    //     window.sessionStorage.removeItem("city");
    //     window.sessionStorage.removeItem("phone_no");
    //     setLogOut(true);
    // }

    function validation() {
        let nameFlag = true;
        let emailFlag = true;
        let percentFlag = true;
        let cutOffFlag = true;
        let totalSeatsFlag = true;
        let vaccantSeatsFlag = true;
        let phoneFlag = true;
        setErrorMesg("");
        setSuccessMesg("");
        setPercentError("");
        setCutOffError("");
        setTotalSeatsError("");
        setVaccantSeatsError("");
        setPhoneError("");
        setNameError("");
        setEmailErr("");
        setPhoneError("");
        let regex = /[a-zA-Z0-9]+@{1}[a-zA-Z0-9]+\.[a-zA-Z]+/;
        if (name === "") {
            setNameError("This field is compulsory");
            nameFlag = false;
        }
        if (email === "" || email === null) {
            setEmailErr("This field is compulsory");
            emailFlag = false;
        }
        else if (regex.test(email) === false) {
            setEmailErr("Email is in wrong format. Example: abc@gmail.com");
            emailFlag = false;
        }
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
        if (phoneNo.length != 10) {
            setPhoneError("Invalid Phone Number");
            phoneFlag = false;
        }
        if (emailFlag && percentFlag && cutOffFlag && totalSeatsFlag && vaccantSeatsFlag && nameFlag && phoneFlag) {
            return true;
        }
        emailFlag = true;
        percentFlag = true;
        cutOffFlag = true;
        totalSeatsFlag = true;
        vaccantSeatsFlag = true;
        phoneFlag = true;
        nameFlag = true;
        return false;

    }

    let addCollegeDetails = (e) => {
        e.preventDefault();
        if (validation() === true) {
            addSelectedCourseList();
            console.log(courses);
            let college = { "id": collegeId, name, email, university: { "id": universityId, "universityName": universityName, "": universityEmail },phoneNo, cutOffRank, minimumPercentInBoards, courses, city, state, totalSeats, vaccantSeats };
            console.log(college);
            collegeService.updateCollegeDetails(college).then(() => {
                setSuccessMesg("College Profile Updated");
                console.log("College Profile Updated");
            }).catch(error => {
                setErrorMesg("Something went wrong", error);
                console.log(error);
            });
            setDetailsUpdated(true);
            window.sessionStorage.setItem("success", "true");
            // window.sessionStorage.setItem("updated", true);
            window.sessionStorage.setItem("name", name);
        }
    }

    const addSelectedCourseList = () => {
        var markedCheckbox = document.getElementsByName('cl');
        for (var checkbox of markedCheckbox) {
            if (checkbox.checked)
                courses.push({ "id": checkbox.id, "courseName": checkbox.value });
        }
    }

    const checkIfExists = (course) => {
        if (selectedCourseList.includes(course.courseName)) {
            return true;
        }
        else {
            return false;
        }
    }


    return (
        <>{loggedInCollegeFalse && <Navigate to="/login" />}
            {logOut && <Navigate to="/login" />}
            {detailsUpdated && <Navigate to="/college_dashboard" />}
            {/* <button type="button" className="btn1 primary1" onClick={logoutClick}>Back</button> */}
            <button type="button" className="btn1 primary1"><Link to="/college_dashboard" className="dropdown-item" >Back</Link></button>
            <div className="container-fluid w-50 mt-5">
                <div className="m-3">
                    <h2 className="fw-bold mb-2 text-uppercase">College Details</h2>
                    <p className="text-50 text-success mb-3">Please fill up the form</p>
                    <div className="border border-1 rounded">
                        <div className="m-3">
                            <form onSubmit={addCollegeDetails}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={name} onChange={nameTextHandler} placeholder="Enter Name" />
                                    <label>Name</label>
                                    <span className="text-danger">{nameError}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" value={email} onChange={emailTextHandler} placeholder="name@example.com" disabled />
                                    <label>Email address</label>
                                    <span className="text-danger">{emailErr}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={city} onChange={cityTextHandler} placeholder="Enter City" required />
                                    <label>City</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={state} onChange={stateTextHandler} placeholder="Enter State" required />
                                    <label>State</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={phoneNo} onChange={phoneTextHandler} placeholder="Enter Phone Number" required/>
                                    <label>Phone No</label>
                                    <span className="text-danger">{phoneError}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={minimumPercentInBoards} onChange={percentTextHandler} placeholder="Enter Marks" required/>
                                    <label>Minimum Percentage Required in Boards</label>
                                    <span className="text-danger">{percentError}</span>
                                </div>
                                <label>Course List</label>

                                <div className="form-floating mb-3">
                                    <table width="100%" >
                                        <tbody>
                                            {gotCourseList && courseList.map((course) => (
                                                <tr>{console.log(selectedCourseList)}
                                                    <td>{checkIfExists(course) ?
                                                        <input type="checkbox" name="cl" id={course.id} value={course.courseName} defaultChecked />
                                                        : <input type="checkbox" name="cl" id={course.id} value={course.courseName} />
                                                    }
                                                    </td>
                                                    <td className="form-control">{course.courseName}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={cutOffRank} onChange={cutOffTextHandler} placeholder="Enter CutOff Rank" required/>
                                    <label>Cutt Off Rank</label>
                                    <span className="text-danger">{cutOffError}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={totalSeats} onChange={totalSeatsTextHandler} placeholder="Enter Totla Seats" required/>
                                    <label>Total Seats</label>
                                    <span className="text-danger">{totalSeatsError}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={vaccantSeats} onChange={vaccantSeatsTextHandler} placeholder="Enter Vaccant Seats" required/>
                                    <label>Vacant Seats</label>
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