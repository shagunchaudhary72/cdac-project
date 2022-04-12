import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import collegeService from "../../Services/CollegeService";
import './RegisterAsCollege.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Country, State, City } from 'country-state-city';

const RegisterAsCollege = () => {

    let country = Country.getAllCountries();
    const [countryid, setCountryId] = useState("");
    const [state, setState] = useState([]);
    const [stateid, setStateId] = useState("");
    const [city, setCity] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const [countryError, setCountryError] = useState(false);
    const [stateError, setStateError] = useState(false);
    const [cityError, setCityError] = useState(false);

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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfimrPassword] = useState("");
    const [phone_no, setPhoneNo] = useState("");

    const [nameError, setnameError] = useState(false);
    const [emailError, setemailError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [phoneNoError, setphoneNoError] = useState(false);
    const [errorMessage, setErrorMessage] = useState({});
    const [errorMessageFlag, setErrorMessageFlag] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [successMessageFlag, setSuccessMessageFlag] = useState(false);
    const [navigateToLogin, setNavigateToLogin] = useState(false);

    function setErrorMessagesBlank() {
        setnameError(false);
        setemailError(false);
        setpasswordError(false);
        setphoneNoError(false);
        setCountryError(false);
        setCityError(false);
        setStateError(false);
        setErrorMessageFlag(false);
    }

    function setFormDataBlank() {
        setName("");
        setEmail("");
        setPassword("");
        setConfimrPassword("");
        setPhoneNo("");
    }

    const validation = () => {
        setErrorMessagesBlank();
        let regex = /[a-zA-Z0-9]+@{1}[a-zA-Z0-9]+\.[a-zA-Z]+/;
        let phoneRegex = /^[0-9]{10}$/;
        if (name === "") {
            setnameError(true);
            return false;
        }

        if (regex.test(email) === false) {
            setemailError("true");
            return false;
        }

        if (password === "") {
            setpasswordError(true);
            return false;
        }

        if (phone_no.length != 10) {
            setphoneNoError(true);
            return false;
        }

        if (regex.test(email) === false) {
            setphoneNoError(true);
            return false;
        }

        if (selectedCountry === "") {
            setCountryError(true);
            return false;
        }
        if (selectedState === "") {
            setStateError(true);
            return false;
        }
        if (selectedCity === "") {
            setCityError(true);
            return false;
        }

        return true;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("In submit Handler");
        if (validation() && passwordMatch === true) {
            console.log("After Validation");
            let collegeRegisterData = {
                "name": name,
                "email": email,
                "password": password,
                "phone_no": phone_no,
                "country": selectedCountry,
                "city": selectedCity,
                "state": selectedState
            }
            console.log(collegeRegisterData);

            collegeService.createCollege(collegeRegisterData).then(response => {
                setErrorMessageFlag(false);
                setSuccessMessage("college data added successfully");
                setSuccessMessageFlag(true);
                console.log('college data added successfully!!!', response.data);
                setNavigateToLogin(true);
            }
            ).then(setFormDataBlank())
                .catch(error => {
                    const objectToArray = Object.values(error.response.data);
                    setSuccessMessageFlag(false);
                    setErrorMessage(objectToArray.map((e) => { return e }));
                    setErrorMessageFlag(true);
                    toast.warn("Something went wrong", {
                        position: "bottom-center"
                    })
                    console.log("Something went wrong", error);
                });
        }

    }

    const setNameHandler = (e) => { setName(e.target.value) }
    const setEmailHandler = (e) => { setEmail(e.target.value.toLowerCase()) }
    const setPasswordHandler = (e) => { setPassword(e.target.value) }

    const setConfimrPasswordHandler = (e) => {
        setConfimrPassword(e.target.value);
        if (password === (e.target.value)) {
            setPasswordMatch(true);
            console.log("Passwords match")
        }
        else {
            setPasswordMatch(false);
        }
    }

    const setPhoneNoHandler = (e) => {
        setPhoneNo(e.target.value)
    }

    const setCityHandler = (e) => {
        setCity(e.target.value)
    }

    const setStateHandler = (e) => {
        setState(e.target.value)
    }


    return (
        <>
            {navigateToLogin && <Navigate to="/login" />}
            <div className="container-fluid w-50 mt-5">
                <div className="m-3">
                    <h2 className="fw-bold mb-2 text-uppercase">College Registration</h2>
                    <p className="text-50 text-success mb-3">Please fill up the details</p>
                    {errorMessageFlag && <span style={{ color: 'red' }}>{errorMessage}</span>}
                    {successMessageFlag && <span style={{ color: 'green' }}>{successMessage}</span>}
                    <div className="border border-1 rounded">
                        <div className="m-3">
                            <form onSubmit={submitHandler}>

                                <div className="form-outline mb-4">
                                    <input type="text" id="name" className="form-control form-control-lg"
                                        placeholder="Enter College Name" value={name} onChange={setNameHandler} required />
                                    {/* <label className="form-label" for="name">College Name</label> */}
                                </div>

                                <div className="form-outline mb-4">
                                    {emailError && <span style={{ color: 'red' }}>Invalid Email Id</span>}
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" value={email} onChange={setEmailHandler} required />
                                    {/* <label className="form-label" for="form3Example3">Email address</label> */}
                                </div>

                                <div className="form-outline mb-3">
                                    {passwordError && <span style={{ color: 'red' }}>Invalid Password</span>}
                                    <input type="password" id="password" className="form-control form-control-lg"
                                        placeholder="Enter password" value={password} onChange={setPasswordHandler} required />
                                    {/* <label className="form-label" for="password">Password</label> */}
                                </div>

                                <div className="form-outline mb-3">
                                    {!passwordMatch && <span style={{ color: 'red' }}>Password does not match</span>}
                                    <input type="password" id="confirmPassword" value={confirmPassword} className="form-control form-control-lg"
                                        placeholder="Confirm password" onChange={setConfimrPasswordHandler} required />
                                    {/* <label className="form-label" for="confirmPassword">Confirm Password</label> */}
                                </div>

                                <div className="form-outline mb-4">
                                    {phoneNoError && <span style={{ color: 'red' }}>Invalid Phone Number</span>}
                                    <input type="text" id="phno" className="form-control form-control-lg"
                                        placeholder="Enter Phone Number" value={phone_no} onChange={setPhoneNoHandler} required />
                                    {/* <label className="form-label" for="phno">Phone Number</label> */}
                                </div>

                                <div className="form-outline mb-4">
                                    {countryError && <span style={{ color: 'red' }}>Field cannot be empty</span>}
                                    <select name="country" className="form-select" onChange={handlecountry} >
                                        <option value="">--Select Country--</option>
                                        {
                                            country.map((getcon, index) => (
                                                <option key={index} value={getcon.isoCode}>{getcon.name} </option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className="form-outline mb-4">
                                    {stateError && <span style={{ color: 'red' }}>Field cannot be empty</span>}
                                    <select className="form-select" name="state" onChange={handlestate}>
                                        <option value="">--Select State--</option>
                                        {
                                            state.map((getst, index) => (
                                                <option key={index} value={getst.isoCode}>{getst.name} </option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className="form-outline mb-4">
                                    {cityError && <span style={{ color: 'red' }}>Field cannot be empty</span>}
                                    {/* <input type="text" id="state" className="form-control form-control-lg"
                                        placeholder="Enter State" value={state} onChange={setStateHandler} required /> */}
                                    <select className="form-select" name="city" onChange={handlecity}>
                                        <option value="">--Select City--</option>
                                        {
                                            city.map((gcity, index) => (
                                                <option key={index} value={gcity.name}> {gcity.name} </option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="row g-1">
                                    <button type="submit" className="btn1 primary1">Register</button>
                                    <hr className="my-4" />
                                    <p>Already have an Account? <Link to="/login" className="link-success">Click Here</Link></p>
                                </div>
                            </form>
                        </div >
                    </div >
                </div >
                <ToastContainer />
            </div >
        </>
    );
}

export default RegisterAsCollege;