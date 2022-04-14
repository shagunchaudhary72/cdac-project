import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../Services/UserService";

const ChangePassword = () => {
    const emailId = window.sessionStorage.getItem("email");
    const role = window.sessionStorage.getItem("role");
    const [email,setEmail] = useState(emailId);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");
    const [oldPasswordError, setOldPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [error,setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        if(emailId===null){
            navigate("/login");
        }
    }, [])

    let oldPasswordTextHandler = (event) => {
        setOldPasswordError("");
        setOldPassword(event.target.value);
    };

    let newPasswordTextHandler = (event) => {
        setNewPasswordError("");
        setNewPassword(event.target.value);
    };
    let confirmPasswordTextHandler = (event) => {
        setConfirmPasswordError("");
        setConfirmPassword(event.target.value);
    };

    let validation = () => {
        let flag = true;
        let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
        if (oldPassword === "" || oldPassword === null) {
            setOldPasswordError("This field is compulsory");
            flag = false;
        }
        if (newPassword === "" || newPassword === null) {
            setNewPasswordError("This field is compulsory");
            flag = false;
        }
        else if (passwordRegex.test(newPassword)===false) {
            setNewPasswordError("Password should have atleast one capital letter, one special character and a number.\nAlso, the size of password should lies between 8 to 15 characters");
            flag = false;
        }
        if (confirmPassword === "" || confirmPassword === null) {
            setConfirmPasswordError("This field is compulsory");
            flag = false;
        }
        else if (confirmPassword !== newPassword) {
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
            let newPasswordObj = {email,oldPassword,newPassword};
            UserService.changePassword(newPasswordObj).then(resp=>{
                console.log(resp.data);
                window.sessionStorage.setItem("passwordUpdated","show");
                if(role==="STUDENT")
                    navigate("/student_dashboard");
                if(role==="COLLEGE")
                    navigate("/college_dashboard");
                if(role==="ADMIN")
                    navigate("/admin_dashboard");
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
                    <h2 className="fw-bold mb-2 text-uppercase">Change Password Form</h2>
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
                                        placeholder="name@example.com" disabled
                                    />
                                    <label>Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control form-control-sm"
                                        value={oldPassword}
                                        onChange={oldPasswordTextHandler}
                                        placeholder="password"
                                    />
                                    <label>Old Password</label>
                                    <span className="text-danger">{oldPasswordError}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control form-control-sm"
                                        value={newPassword}
                                        onChange={newPasswordTextHandler}
                                        placeholder="password"
                                    />
                                    <label>New Password</label>
                                    <span className="text-danger">{newPasswordError}</span>
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

export default ChangePassword;