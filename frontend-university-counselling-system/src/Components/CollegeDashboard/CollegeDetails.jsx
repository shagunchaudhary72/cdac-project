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

    const [successMesg, setSuccessMesg] = useState("");
    const [errorMesg, setErrorMesg] = useState("");
    const [courseList, setCourseList] = useState("");
    const [gotCourseList, setGotCourseList] = useState(false);
    const [selectedCourseList, setSelectedCourseList] = useState([]);

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
            console.log(error);
        });
    }

    useEffect(() => {
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
            {/* {logOut && <Navigate to="/login" />} */}
            {/* {detailsUpdated && <Navigate to="/collegeDashboard" />} */}
            {/* <button type="button" className="btn1 primary1" onClick={logoutClick}>Back</button> */}
            {/* <button type="button" className="btn1 primary1"><Link to="/collegeDashboard" className="dropdown-item" >Back</Link></button> */}
            <div className="container-fluid w-50 mt-5">
                <div className="m-3">
                    <h2 className="fw-bold mb-2 text-uppercase">College Details</h2>

                    <div className="border border-1 rounded">
                        <div className="m-3">
                            <form>
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
                                    <input type="text" className="form-control" value={universityName} onChange={stateTextHandler} placeholder="Enter State" disabled />
                                    <label>University Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={phoneNo} onChange={phoneTextHandler} placeholder="Enter Phone Number" disabled />
                                    <label>Phone No</label>

                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={minimumPercentInBoards} onChange={percentTextHandler} placeholder="Enter Marks" disabled />
                                    <label>Minimum Percentage Required in Boards</label>

                                </div>
                                <label>Course List</label>

                                <div className="form-floating mb-3">
                                    <table width="100%" >
                                        <tbody>
                                            {gotCourseList && courseList.map((course) => (
                                                <tr>{console.log(selectedCourseList)}
                                                    <td>{checkIfExists(course) ?
                                                        <input type="checkbox" name="cl" id={course.id} value={course.courseName} defaultChecked disabled />
                                                        : <input type="checkbox" name="cl" id={course.id} value={course.courseName} disabled />
                                                    }
                                                    </td>
                                                    <td className="form-control" style={{background:"#e9ecef"}}>{course.courseName}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={cutOffRank} onChange={cutOffTextHandler} placeholder="Enter CutOff Rank" disabled />
                                    <label>Cutt Off Rank</label>

                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={totalSeats} onChange={totalSeatsTextHandler} placeholder="Enter Marks" disabled />
                                    <label>Total Seats</label>

                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={vaccantSeats} onChange={vaccantSeatsTextHandler} placeholder="Enter Marks" disabled />
                                    <label>Vacant Seats</label>

                                </div>
                            </form>
                        </div >
                    </div >
                    <span className="text-success"><b>{successMesg}</b></span><span className="text-danger"><b>{errorMesg}</b></span>
                </div >
            </div >
        </>
    );
}

export default AddCollegeDetails;
