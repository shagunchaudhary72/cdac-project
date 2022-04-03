import { useState } from "react";
import collegeService from "../../Services/CollegeService";
import './RegisterAsCollege.css';

const RegisterAsCollege = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfimrPassword] = useState("");
    const [phone_no, setPhoneNo] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    const [nameError, setnameError] = useState(false);
    const [emailError, setemailError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [phoneNoError, setphoneNoError] = useState(false);
    const [cityError, setcityError] = useState(false);
    const [stateError, setstateError] = useState(false);
    const [errorMessage, setErrorMessage] = useState({});
    const [errorMessageFlag, setErrorMessageFlag] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [successMessageFlag, setSuccessMessageFlag] = useState(false);


    function setErrorMessagesBlank() {
        setnameError(false);
        setemailError(false);
        setpasswordError(false);
        setphoneNoError(false);
        setcityError(false);
        setstateError(false);
        setErrorMessageFlag(false);
    }

    function setFormDataBlank() {
        setName("");
        setEmail("");
        setPassword("");
        setConfimrPassword("");
        setPhoneNo("");
        setCity("");
        setState("");
    }

    const validation = () => {

        setErrorMessagesBlank();

        if (name === "") {
            setnameError(true);
            return false;
        }

        if (email === "") {
            setemailError(true);
            return false;
        }
        if (password === "") {
            setpasswordError(true);
            return false;
        }
        if (phone_no === "") {
            setphoneNoError(true);
            return false;
        }
        if (city === "") {
            setcityError(true);
            return false;
        }
        if (state === "") {
            setstateError(true);
            return false;
        }
        return true;
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (validation() && passwordMatch === true) {
            let collegeRegisterData = {
                "name": name,
                "email": email,
                "password": password,
                "phone_no": phone_no,
                "city": city,
                "state": state
            }

            collegeService.createCollege(collegeRegisterData).then(response => {
                setErrorMessageFlag(false);
                setSuccessMessage("college data added successfully");
                setSuccessMessageFlag(true);
                console.log('college data added successfully!!!', response.data);
            }
            ).then(setFormDataBlank())
                .catch(error => {
                    const objectToArray = Object.values(error.response.data);
                    setSuccessMessageFlag(false);
                    setErrorMessage(objectToArray.map((e) => { return e }));
                    setErrorMessageFlag(true);
                    console.log('Something went wrong', error.response.data.email);
                });
        }

    }

    const setNameHandler = (e) => { setName(e.target.value) }
    const setEmailHandler = (e) => { setEmail(e.target.value) }
    const setPasswordHandler = (e) => { setPassword(e.target.value) }

    const setConfimrPasswordHandler = (e) => {

        if (password === (e.target.value)) {
            setConfimrPassword(e.target.value);
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
                                {nameError && <span style={{ color: 'red' }}>Field cannot be empty</span>}
                                <input type="text" id="name" className="form-control form-control-lg"
                                    placeholder="Enter College Name" value={name} onChange={setNameHandler} />
                                {/* <label className="form-label" for="name">College Name</label> */}
                            </div>

                            <div className="form-outline mb-4">
                                {emailError && <span style={{ color: 'red' }}>Field cannot be empty</span>}
                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" value={email} onChange={setEmailHandler} />
                                {/* <label className="form-label" for="form3Example3">Email address</label> */}
                            </div>

                            <div className="form-outline mb-3">
                                {passwordError && <span style={{ color: 'red' }}>Field cannot be empty</span>}
                                <input type="password" id="password" className="form-control form-control-lg"
                                    placeholder="Enter password" value={password} onChange={setPasswordHandler} />
                                {/* <label className="form-label" for="password">Password</label> */}
                            </div>

                            <div className="form-outline mb-3">
                                {!passwordMatch && <span style={{ color: 'red' }}>Password does not match</span>}
                                <input type="password" id="confirmPassword" value={confirmPassword} className="form-control form-control-lg"
                                    placeholder="Confirm password" onChange={setConfimrPasswordHandler} />
                                {/* <label className="form-label" for="confirmPassword">Confirm Password</label> */}
                            </div>

                            <div className="form-outline mb-4">
                                {phoneNoError && <span style={{ color: 'red' }}>Field cannot be empty</span>}
                                <input type="text" id="phno" className="form-control form-control-lg"
                                    placeholder="Enter Phone Number" value={phone_no} onChange={setPhoneNoHandler} />
                                {/* <label className="form-label" for="phno">Phone Number</label> */}
                            </div>

                            <div className="form-outline mb-4">
                                {cityError && <span style={{ color: 'red' }}>Field cannot be empty</span>}
                                <input type="text" id="city" className="form-control form-control-lg"
                                    placeholder="Enter City" value={city} onChange={setCityHandler} />
                                {/* <label className="form-label" for="city">City</label> */}
                            </div>

                            <div className="form-outline mb-4">
                                {stateError && <span style={{ color: 'red' }}>Field cannot be empty</span>}
                                <input type="text" id="state" className="form-control form-control-lg"
                                    placeholder="Enter State" value={state} onChange={setStateHandler} />
                                {/* <label className="form-label" for="state">State</label> */}
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example" />
                                    <label className="form-check-label" for="form2Example">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Register</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href="/login"
                                    className="link-danger">Login</a></p>
                            </div>

                        </form>
                    </div >
                </div >
            </div >
        </div >
    );
}

export default RegisterAsCollege;