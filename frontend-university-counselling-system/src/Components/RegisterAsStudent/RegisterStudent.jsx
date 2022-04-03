import { useState } from "react";
import "../Login/Login.css"
import userService from "../../Services/UserService"

const RegisterStudent = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("STUDENT");
    const [age, setAge] = useState("");
    const [nameErr, setNameErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [confirmEmailErr, setConfirmEmailErr] = useState("");
    const [phoneNoErr, setPhoneNoErr] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [ageError, setAgeError] = useState("");
    const [successMesg, setSuccessMesg] = useState("");
    const [errorMesg, setErrorMesg] = useState("");

    let emailTextHandler = (event) => {
        if (successMesg !== "" || successMesg !== null)
            setSuccessMesg("");
        if (errorMesg !== "" || errorMesg !== null)
            setErrorMesg("");
        setEmail(event.target.value);
    }
    let passwordTextHandler = (event) => {
        if (successMesg !== "" || successMesg !== null)
            setSuccessMesg("");
        if (errorMesg !== "" || errorMesg !== null)
            setErrorMesg("");
        setPassword(event.target.value);
    }
    let nameTextHandler = (event) => {
        if (successMesg !== "" || successMesg !== null)
            setSuccessMesg("");
        if (errorMesg !== "" || errorMesg !== null)
            setErrorMesg("");
        setName(event.target.value);
    }

    let confirmEmailTextHandler = (event) => {
        if (successMesg !== "" || successMesg !== null)
            setSuccessMesg("");
        if (errorMesg !== "" || errorMesg !== null)
            setErrorMesg("");
        setConfirmEmail(event.target.value)
    }

    let confirmPasswordTextHandler = (event) => {
        if (successMesg !== "" || successMesg !== null)
            setSuccessMesg("");
        if (errorMesg !== "" || errorMesg !== null)
            setErrorMesg("");
        setConfirmPassword(event.target.value);
    }

    let phoneNoTextHandler = (event) => {
        if (successMesg !== "" || successMesg !== null)
            setSuccessMesg("");
        if (errorMesg !== "" || errorMesg !== null)
            setErrorMesg("");
        setPhoneNo(event.target.value);
    }

    let ageTextHandler = (event) => {
        if (successMesg !== "" || successMesg !== null)
            setSuccessMesg("");
        if (errorMesg !== "" || errorMesg !== null)
            setErrorMesg("");
        setAge(event.target.value);
    }

    let validation = () => {
        setSuccessMesg("");
        setErrorMesg("");
        setNameErr("");
        setEmailErr("");
        setConfirmEmailErr("");
        setPhoneNoErr("");
        setPasswordError("");
        setConfirmPasswordError("");
        setAgeError("");
        let nameFlag = true;
        let emailFlag = true;
        let confirmEmailFlag = true;
        let phoneNoFlag = true;
        let passwordFlag = true;
        let confirmPasswordFlag = true;
        let ageFlag = true;
        let regex = /[a-zA-Z0-9]+@{1}[a-zA-Z0-9]+\.[a-zA-Z]+/;
        if (name === "" || name === null) {
            setNameErr("This field is compulsory");
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
        if (confirmEmail === "" || confirmEmail === null) {
            setConfirmEmailErr("This field is compulsory");
            confirmEmailFlag = false;
        }

        if (confirmEmail !== email) {
            setConfirmEmailErr("Email is not matching");
            emailFlag = false;
        }

        if (phoneNo === "" || phoneNo === null) {
            setPhoneNoErr("This field is compulsory");
            phoneNoFlag = false;
        }
        if (password === "" || password === null) {
            setPasswordError("This field is compulsory");
            passwordFlag = false;
        }
        if (confirmPassword === "" || confirmPassword === null) {
            setConfirmPasswordError("This field is compulsory");
            confirmPasswordFlag = false;
        }
        if (confirmPassword !== password) {
            setConfirmPasswordError("Password is not matching");
            emailFlag = false;
        }
        if (age === "" || age === null) {
            setAgeError("This field is compulsory");
            ageFlag = false;
        }
        if (nameFlag && emailFlag && confirmEmailFlag && phoneNoFlag && passwordFlag && confirmPasswordFlag && ageFlag) {
            return true;
        }

    }

    let onRegisterationSubmit = (event) => {
        event.preventDefault();
        if (validation() === true) {
            let studentRegistration = {
                "user": {
                    name, email, password, role, phoneNo
                }, "student": {
                    name, email, age
                }
            }
            userService.createUserAndStudent(studentRegistration).then(response => {
                setName("");
                setEmail("");
                setConfirmEmail("");
                setPhoneNo("");
                setPassword("");
                setConfirmPassword("");
                setAge("");
                setSuccessMesg("User Created Successfully");
            }).catch(error => {
                setErrorMesg("Something went wrong", error);
            });
        }
    }

    return (
        <div className="container-fluid w-50 mt-5">
            <div className="m-3">
                <h2 className="fw-bold mb-2 text-uppercase">Student Registration</h2>
                <p className="text-50 text-success mb-3">Please fill up the details</p>
                <div className="border border-1 rounded">
                    <div className="m-3">
                        <form onSubmit={onRegisterationSubmit}>
                            <input type="hidden" value={role} />
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" value={name} onChange={nameTextHandler} placeholder="Enter Name" />
                                <label>Name</label>
                                <span className="text-danger">{nameErr}</span>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" value={email} onChange={emailTextHandler} placeholder="name@example.com" />
                                <label>Email address</label>
                                <span className="text-danger">{emailErr}</span>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" value={confirmEmail} onChange={confirmEmailTextHandler} placeholder="name@example.com" />
                                <label>Confirm Email address</label>
                                <span className="text-danger">{confirmEmailErr}</span>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="tel" className="form-control" value={phoneNo} onChange={phoneNoTextHandler} pattern="[0-9]{10}" placeholder="ex: 6362139594" />
                                <label>Mobile</label>
                                <span className="text-danger">{phoneNoErr}</span>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" value={password} onChange={passwordTextHandler} placeholder="Enter Password" />
                                <label>Password</label>
                                <span className="text-danger">{passwordError}</span>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" value={confirmPassword} onChange={confirmPasswordTextHandler} placeholder="Enter Confirm Password" />
                                <label>Confirm Password</label>
                                <span className="text-danger">{confirmPasswordError}</span>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" value={age} onChange={ageTextHandler} placeholder="Enter Age" />
                                <label>Age</label>
                                <span className="text-danger">{ageError}</span>
                            </div>
                            <div className="row g-1">
                                <button type="submit" className="btn1 primary1">Register</button>
                                <hr className="my-4" />
                                <p>Already have an Account? <a href="#!" className="link-success">Click Here</a></p>
                            </div>
                        </form>
                    </div >
                </div >
                <span className="text-success"><b>{successMesg}</b></span><span className="text-danger"><b>{errorMesg}</b></span>
            </div >
        </div >
    );
}

export default RegisterStudent;