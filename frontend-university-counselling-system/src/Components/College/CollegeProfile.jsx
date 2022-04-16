import React, { useEffect, useState } from "react";
import "../Login/Login.css"
import { Navigate, Link } from "react-router-dom";
import collegeService from "../../Services/CollegeService";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Country, State, City } from 'country-state-city';
import AdminService from "../../Services/AdminService";

const AddCollegeDetails = () => {

    let country = Country.getAllCountries();
    const [countryid, setCountryId] = useState("");
    const [state, setState] = useState([]);
    const [stateid, setStateId] = useState("");
    const [city, setCity] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const handlecountry = (e) => {
        setCountryId(e.target.value);
        setState(State.getStatesOfCountry(e.target.value));
    }

    const handlestate = (e) => {
        setStateId(e.target.value);
        setCity(City.getCitiesOfState(countryid, e.target.value));
    }

    const handlecity = (e) => {
        setSelectedCountry(Country.getCountryByCode(countryid).name);
        setSelectedState(State.getStateByCodeAndCountry(stateid, countryid).name);
        setSelectedCity(e.target.value);
    }

    const [countryError, setCountryError] = useState(false);
    const [stateError, setStateError] = useState(false);
    const [cityError, setCityError] = useState(false);

    const collegeName = window.sessionStorage.getItem("name");
    const collegeEmail = window.sessionStorage.getItem("email");
    const collegeId = window.sessionStorage.getItem("id");
    const collegecountry = window.sessionStorage.getItem("country");
    const collegestate = window.sessionStorage.getItem("state");
    const collegecity = window.sessionStorage.getItem("city");
    const collegephoneNo = window.sessionStorage.getItem("phone_no");
    const universityId = window.sessionStorage.getItem("universityId");
    const universityEmail = window.sessionStorage.getItem("universityEmail");
    const universityName = window.sessionStorage.getItem("universityName");
    const role = window.sessionStorage.getItem("role");

    const [collegeCourses, setCollegeCourses] = useState([]);

    const [loggedInCollegeFalse, setLoggedInCollegeFalse] = useState(false);
    let courses = [];

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
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
    //const [resultDate,setResultDate] = useState("");
    const [disable, setDisable] = useState("");

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
            toast.warn("Something went wrong", {
                position: "bottom-center"
            })
            console.log("Something went wrong", error);
        });
    }

    useEffect(() => {
        window.sessionStorage.setItem("success", "false");
        if (collegeName !== "" && collegeEmail !== "" && collegecountry !== "" && collegestate !== "" && collegecity !== "" && collegephoneNo !== "" && role === "COLLEGE") {
            collegeService.getCollegeProfile(collegeId).then(
                (response) => {
                    setName(response.data.name);
                    setEmail(response.data.email);
                    console.log(response.data.country);
                    setSelectedCountry(response.data.country);
                    setSelectedState(response.data.state);
                    setSelectedCity(response.data.city);
                    setCollegePhoneNo(response.data.phoneNo);
                    setCutOff(response.data.cutOffRank);
                    //console.log(collegeCourses);
                    setCollegeCourses(response.data.courses.map(
                        (SelectedCourse) => {
                            return collegeCourses.push(SelectedCourse.courseName);
                        }));
                    //console.log(collegeCourses);
                    setMinimumPercentInBoards(response.data.minimumPercentInBoards);
                    setTotalSeats(response.data.totalSeats);
                    setVaccantSeats(response.data.vaccantSeats);
                    getCourseList();
                }
            ).catch(error => {
                toast.warn("Something went wrong", {
                    position: "bottom-center"
                })
                console.log("Something went wrong", error);
            });
            AdminService.getAcademicDates().then(resp => {
                let resultDate = resp.data.resultDate;
                console.log(Date.parse(resultDate));
                console.log(Date.parse(new Date()))
                if (Date.parse(resultDate) <= Date.parse(new Date())) {
                    setDisable("disabled")
                }
                else {
                    setDisable("");
                }
            }).catch(err => {
                console.log("Something Went Wrong", err);
            })
        }
        else {
            setLoggedInCollegeFalse(true);
        }

    }, [])

    let totalSeatsTextHandler = (e) => {
        setTotalSeats(e.target.value);
    }

    let cutOffTextHandler = (e) => {
        setCutOff(e.target.value);
    }

    let vaccantSeatsTextHandler = (e) => {
        setVaccantSeats(e.target.value);
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

    function validation() {
        let nameFlag = true;
        let emailFlag = true;
        let percentFlag = true;
        let cutOffFlag = true;
        let totalSeatsFlag = true;
        let vaccantSeatsFlag = true;
        let phoneFlag = true;
        let countryFlag = true;
        let stateFlag = true;
        let cityFlag = true;
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
        setCountryError("");
        setCityError("");
        setStateError("");
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
        if (totalSeats < vaccantSeats) {
            setVaccantSeatsError("Vaccant Seats should be less than or equal to the Total Seats");
            vaccantSeatsFlag = false;
        }
        if (phoneNo.length != 10) {
            setPhoneError("Invalid Phone Number");
            phoneFlag = false;
        }
        if (selectedCountry === "") {
            setCountryError(true);
            countryFlag = false;
        }
        if (selectedState === "") {
            setStateError(true);
            stateFlag = false;
        }
        if (selectedCity === "") {
            setCityError(true);
            cityFlag = false;
        }
        if (emailFlag && percentFlag && cutOffFlag && totalSeatsFlag && vaccantSeatsFlag && nameFlag && phoneFlag) {
            return true;
        }
        countryFlag = true;
        stateFlag = true;
        cityFlag = true;
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
        if (disable === "") {
            if (validation() === true) {
                addSelectedCourseList();
                console.log(courses);
                let college = { "id": collegeId, "name": name.toUpperCase(), email, university: { "id": universityId, "universityName": universityName, "emailId": universityEmail }, phoneNo, cutOffRank, minimumPercentInBoards, courses, "country": selectedCountry, "city": selectedCity, "state": selectedState, totalSeats, vaccantSeats };
                console.log(college);
                window.sessionStorage.setItem("name", name);
                window.sessionStorage.setItem("country", selectedCountry);
                window.sessionStorage.setItem("state", selectedState);
                window.sessionStorage.setItem("city", selectedCity);
                window.sessionStorage.setItem("phone_no", phoneNo);
                window.sessionStorage.setItem("universityId", universityId);
                window.sessionStorage.setItem("universityEmail", universityEmail);
                window.sessionStorage.setItem("universityName", universityName);
                // console.log("City"+selectedCity);
                collegeService.updateCollegeDetails(college).then(() => {
                    setSuccessMesg("College Profile Updated");
                    console.log("College Profile Updated");
                }).catch(error => {
                    setErrorMesg("Something went wrong", error);
                    console.log(error);
                });

                setDetailsUpdated(true);

                window.sessionStorage.setItem("success", "true");
                window.sessionStorage.setItem("name", name);
            }
        }
        else {
            alert("Date for Updating Profile is OVER..");
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
            <div className="container-fluid w-50 mt-5 college-details-section">
                <div className="m-3">
                    <h2 className="fw-bold mb-2 text-uppercase">College Details</h2>
                    <p className="text-50 text-success mb-3">Please fill up the form</p>
                    <div className="border border-1 rounded">
                        <div className="m-3">
                            <form onSubmit={addCollegeDetails}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={name} onChange={nameTextHandler} placeholder="Enter Name" disabled={disable} />
                                    <label>Name</label>
                                    <span className="text-danger">{nameError}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" value={email} onChange={emailTextHandler} placeholder="name@example.com" disabled />
                                    <label>Email address</label>
                                    <span className="text-danger">{emailErr}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    {countryError && <span style={{ color: 'red' }}>Field cannot be empty</span>}
                                    {selectedCountry !== "" ?
                                        <select name="country" className="form-select" onChange={handlecountry} disabled={disable}>
                                            <option>{selectedCountry}</option>
                                            {
                                                country.map((getcon, index) => (
                                                    <option key={index} value={getcon.isoCode}>{getcon.name} </option>
                                                ))
                                            }
                                        </select>
                                        :
                                        <select name="country" className="form-select" onChange={handlecountry} disabled={disable}>
                                            <option value="">--Select Country--</option>
                                            {
                                                country.map((getcon, index) => (
                                                    <option key={index} value={getcon.isoCode}>{getcon.name} </option>
                                                ))
                                            }
                                        </select>
                                    }
                                </div>
                                <div className="form-floating mb-3">
                                    {stateError && <span style={{ color: 'red' }}>Field cannot be empty</span>}
                                    {selectedState !== "" ?
                                        <select className="form-select" name="state" onChange={handlestate} disabled={disable}>
                                            <option>{selectedState}</option>
                                            {
                                                state.map((getst, index) => (
                                                    <option key={index} value={getst.isoCode}>{getst.name} </option>
                                                ))
                                            }
                                        </select>
                                        :
                                        <select className="form-select" name="state" onChange={handlestate} disabled={disable}>
                                            <option value="">--Select State--</option>
                                            {
                                                state.map((getst, index) => (
                                                    <option key={index} value={getst.isoCode}>{getst.name} </option>
                                                ))
                                            }
                                        </select>
                                    }
                                </div>

                                <div className="form-floating mb-3">
                                    {cityError && <span style={{ color: 'red' }}>Field cannot be empty</span>}
                                    {selectedCity !== "" ?
                                        <select className="form-select" name="city" onChange={handlecity} disabled={disable}>
                                            <option>{selectedCity}</option>
                                            {
                                                city.map((gcity, index) => (
                                                    <option key={index} value={gcity.name}> {gcity.name} </option>
                                                ))
                                            }
                                        </select>
                                        :
                                        <select className="form-select" name="city" onChange={handlecity} disabled={disable}>
                                            <option value="">--Select City--</option>
                                            {
                                                city.map((gcity, index) => (
                                                    <option key={index} value={gcity.name}> {gcity.name} </option>
                                                ))
                                            }
                                        </select>
                                    }
                                </div>

                                {/* <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={country} onChange={countryTextHandler} placeholder="Enter Country" required />
                                    <label>Country</label>
=======
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={city} onChange={cityTextHandler} placeholder="Enter City" required disabled={disable}/>
                                    <label>City</label>
>>>>>>> 10d2c1ed96da4c76d3a5798c36c121ddd8ccabe8
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={state} onChange={stateTextHandler} placeholder="Enter State" required disabled={disable}/>
                                    <label>State</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={city} onChange={cityTextHandler} placeholder="Enter City" required />
                                    <label>City</label>
                                </div> */}
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={phoneNo} onChange={phoneTextHandler} placeholder="Enter Phone Number" required disabled={disable} />
                                    <label>Phone No</label>
                                    <span className="text-danger">{phoneError}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={minimumPercentInBoards} onChange={percentTextHandler} placeholder="Enter Marks" required disabled={disable} />
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
                                                        <input type="checkbox" name="cl" id={course.id} value={course.courseName} defaultChecked disabled={disable} />
                                                        : <input type="checkbox" name="cl" id={course.id} value={course.courseName} disabled={disable} />
                                                    }
                                                    </td>
                                                    <td className="form-control">{course.courseName}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={cutOffRank} onChange={cutOffTextHandler} placeholder="Enter CutOff Rank" required disabled={disable} />
                                    <label>Cutt Off Rank</label>
                                    <span className="text-danger">{cutOffError}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={totalSeats} onChange={totalSeatsTextHandler} placeholder="Enter Totla Seats" required disabled={disable} />
                                    <label>Total Seats</label>
                                    <span className="text-danger">{totalSeatsError}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={vaccantSeats} onChange={vaccantSeatsTextHandler} placeholder="Enter Vaccant Seats" required disabled={disable} />
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