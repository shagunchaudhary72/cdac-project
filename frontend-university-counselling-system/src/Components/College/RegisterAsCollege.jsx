import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
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
    const [passwordValidationError, setpasswordValidatonError] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [phoneNoError, setphoneNoError] = useState(false);
    const [errorMessage, setErrorMessage] = useState({});
    const [errorMessageFlag, setErrorMessageFlag] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [successMessageFlag, setSuccessMessageFlag] = useState(false);
    const [navigateToLogin, setNavigateToLogin] = useState(false);
    const sessionRole = window.sessionStorage.getItem("role");
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        if(sessionRole!==null){
            navigate("/home");
          }
    }, [])

    function setErrorMessagesBlank() {
        setnameError(false);
        setemailError(false);
        setpasswordValidatonError(false);
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
        let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
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
        else if (passwordRegex.test(password) === false) {
            setpasswordValidatonError(true);
            return false;
        }

        if (password !== (confirmPassword)) {
            setPasswordMatch(false);
            return false;
        }

        if (phone_no.length != 10) {
            setphoneNoError(true);
            return false;
        }

        if (phoneRegex.test(phone_no) === false) {
            setphoneNoError(true);
            return false;
        }

        if (selectedCountry === "") {
            console.log(selectedCountry);
            setCountryError(true);
            return false;
        }
        if (selectedState === "") {
            console.log(selectedState);
            setStateError(true);
            return false;
        }
        if (selectedCity === "") {
            console.log(selectedCity);
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
                window.sessionStorage.setItem("snackbar", "show");
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

    const setPasswordHandler = (e) => { 
        setpasswordValidatonError("");
        setPassword(e.target.value) 
    }

    const setConfimrPasswordHandler = (e) => {
        setPasswordMatch(true);
        setConfimrPassword(e.target.value);
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

                    {successMessageFlag && <span style={{ color: 'green' }}>{successMessage}</span>}
                    <div className="border border-1 rounded">
                        <div className="m-3">
                            <form onSubmit={submitHandler}>

                                <div className="form-floating mb-3">
                                    <input type="text" id="name" className="form-control"
                                        placeholder="Enter College Name" value={name} onChange={setNameHandler} required />
                                    <label>College Name</label>
                                </div>

                                {emailError && <span style={{ color: 'red' }}>Invalid Email Id</span>}
                                <div className="form-floating mb-3">
                                    <input type="email" id="form3Example3" className="form-control"
                                        placeholder="Enter a valid email address" value={email} onChange={setEmailHandler} required />
                                    <label>Email address</label>
                                </div>

                                {passwordError && <span style={{ color: 'red' }}>Invalid Password</span>}
                                {passwordValidationError && <span style={{ color: 'red' }}>Password should have atleast one capital letter, one special character and a number. Also, the size of password should lies between 8 to 15 characters</span>}
                                <div className="form-floating mb-3">
                                    <input type="password" id="password" className="form-control"
                                        placeholder="Enter password" value={password} onChange={setPasswordHandler} required />
                                    <label>Password</label>
                                </div>

                                {!passwordMatch && <span style={{ color: 'red' }}>Password does not match</span>}
                                <div className="form-floating mb-3">
                                    <input type="password" id="confirmPassword" value={confirmPassword} className="form-control"
                                        placeholder="Confirm password" onChange={setConfimrPasswordHandler} required />
                                    <label>Confirm Password</label>
                                </div>

                                {phoneNoError && <span style={{ color: 'red' }}>Invalid Phone Number</span>}
                                <div className="form-floating mb-3">
                                    <input type="text" id="phno" className="form-control"
                                        placeholder="Enter Phone Number" value={phone_no} onChange={setPhoneNoHandler} required />
                                    <label>Phone Number</label>
                                </div>

                                {countryError && <span style={{ color: 'red' }}>Please select Country-State-City</span>}
                                <div className="form-floating mb-3">
                                    <select name="country" className="form-select" onChange={handlecountry} >
                                        <option value="">--Select Country--</option>
                                        {
                                            country.map((getcon, index) => (
                                                <option key={index} value={getcon.isoCode}>{getcon.name} </option>
                                            ))
                                        }
                                    </select>
                                    <label>Country</label>
                                </div>

                                {stateError && <span style={{ color: 'red' }}>Please select Country-State-City</span>}
                                <div className="form-floating mb-3">
                                    <select className="form-select" name="state" onChange={handlestate}>
                                        <option value="">--Select State--</option>
                                        {
                                            state.map((getst, index) => (
                                                <option key={index} value={getst.isoCode}>{getst.name} </option>
                                            ))
                                        }
                                    </select>
                                    <label>State</label>
                                </div>

                                {cityError && <span style={{ color: 'red' }}>Please select Country-State-City</span>}
                                <div className="form-floating mb-3">
                                    <select className="form-select" name="city" onChange={handlecity}>
                                        <option value="">--Select City--</option>
                                        {
                                            city.map((gcity, index) => (
                                                <option key={index} value={gcity.name}> {gcity.name} </option>
                                            ))
                                        }
                                    </select>
                                    <label>City</label>
                                </div>
                                <div className="row g-1">
                                    <button type="submit" className="btn1 primary1">Register</button>
                                    <hr className="my-4" />
                                    <p>Already have an Account? <Link to="/login" className="link-success">Click Here</Link></p>
                                </div>
                            </form>
                        </div >
                    </div >
                    {errorMessageFlag && <span style={{ color: 'red' }}>{errorMessage}</span>}
                </div >
                <ToastContainer />
            </div >
        </>
    );
}

export default RegisterAsCollege;