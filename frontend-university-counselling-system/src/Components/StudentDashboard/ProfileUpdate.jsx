import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminService from "../../Services/AdminService";
import StudentService from "../../Services/StudentService";
import UserService from "../../Services/UserService";

const ProfileUpdate = () => {
    const studentId = window.sessionStorage.getItem("id");
    const role = window.sessionStorage.getItem("role");
    const studentEmail = window.sessionStorage.getItem("email");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [age, setAge] = useState("");
    const [nameErr, setNameErr] = useState("");
    const [phoneNoErr, setPhoneNoErr] = useState("");
    const [ageError, setAgeError] = useState("");
    const [errorMesg, setErrorMesg] = useState("");
    const [city, setCity] = useState("");
    const [states, setStates] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPincode] = useState("");
    const [marks, setMarks] = useState("");
    const [cityError, setCityError] = useState("");
    const [stateError, setStateError] = useState("");
    const [countryError, setCountryError] = useState("");
    const [pincodeError, setPincodeError] = useState("");
    const [marksError, setMarksError] = useState("");
    const [disable,setDisable] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0,0);
        if(studentId!==null && role==="STUDENT"){
            StudentService.getStudentDeatils(studentId).then(resp=>{
                setName(resp.data.name);
                setEmail(resp.data.email);
                setAge(resp.data.age);
                setCity(resp.data.address.city);
                setStates(resp.data.address.state);
                setCountry(resp.data.address.country);
                setPincode(resp.data.address.pincode);
                setMarks(resp.data.marksInComp);
                UserService.userDetails(studentEmail).then(resp=>{
                    setPhoneNo(resp.data.phoneNo);
                }).catch(err=>{
                    console.log("Error in UserService",err);
                })
            }).catch(err=>{
                console.log("Error",err);
                setErrorMesg("Something went wrong. Maybe some server issue");
            })
        }
        else{
            navigate("/login");
        }
        AdminService.getAcademicDates().then(resp=>{
            let resultDate = resp.data.resultDate;
            console.log(Date.parse(resultDate));
            console.log(Date.parse(new Date()))
            if(Date.parse(resultDate)<=Date.parse(new Date())){
                setDisable("disabled")
            }
            else{
                setDisable("");
            }
        }).catch(err=>{
            console.log("Something Went Wrong",err);
        })

    }, [])

    let nameTextHandler = (event) => {
        if (nameErr !== "" || nameErr !== null) setNameErr("");
        if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
        setName(event.target.value);
    };


    let phoneNoTextHandler = (event) => {
        if (phoneNoErr !== "" || phoneNoErr !== null) setPhoneNoErr("");
        if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
        setPhoneNo(event.target.value);
    };

    let ageTextHandler = (event) => {
        if (ageError !== "" || ageError !== null) setAgeError("");
        if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
        setAge(event.target.value);
    };

    let cityTextHandler = (e) => {
        if (cityError !== "" || cityError !== null) setCityError("");
        if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
        setCity(e.target.value);
    };

    let stateTextHandler = (e) => {
        if (stateError !== "" || stateError !== null) setStateError("");
        if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
        setStates(e.target.value);
    };

    let countryTextHandler = (e) => {
        if (countryError !== "" || countryError !== null) setCountryError("");
        if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
        setCountry(e.target.value);
    };

    let pincodeTextHandler = (e) => {
        if (pincodeError !== "" || pincodeError !== null) setPincodeError("");
        if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
        setPincode(e.target.value);
    };

    let marksTextHandler = (e) => {
        if (marksError !== "" || marksError !== null) setMarksError("");
        if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
        setMarks(e.target.value);
    };


    let validation = () => {
        setErrorMesg("");
        setNameErr("");
        setPhoneNoErr("");
        setAgeError("");
        let flag = true;
        let ageRegex = /^\d+$/;
        if (name === "" || name === null) {
            setNameErr("This field is compulsory");
            flag = false;
        }
        if (phoneNo === "" || phoneNo === null) {
            setPhoneNoErr("This field is compulsory");
            flag = false;
        }
        if (age === "" || age === null) {
            setAgeError("This field is compulsory");
            flag = false;
        }
        else if (ageRegex.test(age) === false) {
            setAgeError("Age should be in numbers");
            flag = false;
        }
        if (flag) {
            return true;
        }
    };

    let onUpdateSubmit = (event) => {
        event.preventDefault();
        setErrorMesg("");
        if(validation() && disable===false){
            let student = {"id":studentId,"name":name.toUpperCase(),email,age,"address":{city,"state":states,country,pincode},"marksInComp":marks}
            StudentService.updateStudentAndUserDetails(student,phoneNo).then(resp=>{
                window.sessionStorage.setItem("snackbarUpdate","show");
                navigate("/student_dashboard");
            }).catch(err=>{
                console.log("Error found",err);
            })
        }
        else{
            alert("Date for Updating Profile is OVER..");
        }

    }

    return (
        <div className="container-fluid w-50 mt-5 register-section">
            <div className="m-3">
                <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">Student Details</h2>
                <p className="text-50 text-success mb-3">Please fill up the details</p>
                <div className="border border-1 rounded">
                    <div className="m-3">
                        <form onSubmit={onUpdateSubmit}>
                            <div className="form-floating mb-3">
                                <input type="hidden" value={studentId}/>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={nameTextHandler}
                                    placeholder="Enter Name" disabled={disable}
                                />
                                <label>Name</label>
                                <span className="text-danger">{nameErr}</span>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    placeholder="name@example.com" disabled
                                />
                                <label>Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="tel"
                                    className="form-control"
                                    value={phoneNo}
                                    onChange={phoneNoTextHandler}
                                    pattern="[0-9]{10}"
                                    placeholder="ex: 6362139594" disabled={disable}
                                />
                                <label>Mobile</label>
                                <span className="text-danger">{phoneNoErr}</span>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={age}
                                    onChange={ageTextHandler}
                                    placeholder="Enter Age" disabled={disable}
                                />
                                <label>Age</label>
                                <span className="text-danger">{ageError}</span>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={city}
                                    onChange={cityTextHandler}
                                    placeholder="Enter City" disabled={disable}
                                />
                                <label>City</label>
                                <span className="text-danger">{cityError}</span>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={states}
                                    onChange={stateTextHandler}
                                    placeholder="Enter State" disabled={disable}
                                />
                                <label>State</label>
                                <span className="text-danger">{stateError}</span>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={country}
                                    onChange={countryTextHandler}
                                    placeholder="Enter Country" disabled={disable}
                                />
                                <label>Country</label>
                                <span className="text-danger">{countryError}</span>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={pincode}
                                    onChange={pincodeTextHandler}
                                    placeholder="Enter Country" disabled={disable}
                                />
                                <label>Pincode</label>
                                <span className="text-danger">{pincodeError}</span>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={marks}
                                    onChange={marksTextHandler}
                                    placeholder="Enter Marks" disabled={disable}
                                />
                                <label>Marks In CCAT</label>
                                <span className="text-danger">{marksError}</span>
                            </div>
                            <div className="row g-1">
                                <button type="submit" className="btn1 primary1">
                                    Update Profile
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <span className="text-danger">
                    <b>{errorMesg}</b>
                </span>
            </div>
        </div>
    );
}

export default ProfileUpdate;