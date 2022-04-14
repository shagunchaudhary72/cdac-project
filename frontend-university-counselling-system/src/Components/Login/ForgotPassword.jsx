import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../Services/UserService";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [error,setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    let emailTextHandler = (event) => {
        setEmailErr("");
        //if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
        setEmail(event.target.value);
    };

    let passwordTextHandler = (event) => {
        setPasswordError("");
        //if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
        setPassword(event.target.value);
    };
    let confirmPasswordTextHandler = (event) => {
        setConfirmPasswordError("");
        //if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
        setConfirmPassword(event.target.value);
    };

    let validation = () => {
        let flag = true;
        let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
        if (email === "" || email === null) {
            setEmailErr("This field is compulsory");
            flag = false;
        }
        if (password === "" || password === null) {
            setPasswordError("This field is compulsory");
            flag = false;
        }
        else if (passwordRegex.test(password)===false) {
            setPasswordError("Password should have atleast one capital letter, one special character and a number.\nAlso, the size of password should lies between 8 to 15 characters");
            flag = false;
        }
        if (confirmPassword === "" || confirmPassword === null) {
            setConfirmPasswordError("This field is compulsory");
            flag = false;
        }
        else if (confirmPassword !== password) {
            setConfirmPasswordError("Password is not matching");
            flag = false;
        }
        if (flag) {
            return true;
        }
    };

    let onUpdatePasswordSubmit=(event)=>{
        event.preventDefault();
        if(validation()){
            setError("");
            let newPasswordObj = {email,"newPassword":password};
            UserService.updatePassword(newPasswordObj).then(resp=>{
                console.log(resp.data);
                window.sessionStorage.setItem("passwordUpdated","show");
                navigate("/login");
            }).catch(err=>{
                console.log(err);
                setError(err.response.data.errorDetails);
            })
        }
    }

    return (
        <>
            <div className="container-fluid w-50 mt-5 login-section">
                <div className="m-3">
                    <h2 className="fw-bold mb-2 text-uppercase">Update Password</h2>
                    <p className="text-50 text-success mb-3">
                        Please fill this form to change your password!
                    </p>
                    <div className="border border-1 rounded">
                        <div className="m-3">
                            <form onSubmit={onUpdatePasswordSubmit}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control form-control-sm"
                                        value={email}
                                        onChange={emailTextHandler}
                                        placeholder="name@example.com"
                                    />
                                    <label>Email address</label>
                                    <span className="text-danger">{emailErr}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control form-control-sm"
                                        value={password}
                                        onChange={passwordTextHandler}
                                        placeholder="password"
                                    />
                                    <label>New Password</label>
                                    <span className="text-danger">{passwordError}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control form-control-sm"
                                        value={confirmPassword}
                                        onChange={confirmPasswordTextHandler}
                                        placeholder="password"
                                    />
                                    <label>Confirm Password</label>
                                    <span className="text-danger">{confirmPasswordError}</span>
                                </div>
                                <div className="row g-1">
                                    <button type="submit" className="btn1 btn btn-sm primary1">
                                        Update Password
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <span className="text-danger">
                        <b>{error}</b>
                    </span>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;