import { useState } from "react";

const RegisterStudent = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name,setName] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role,setRole] = useState("STUDENT");
    const [nameErr,setNameErr] = useState("");
    const [emailErr,setEmailErr] = useState("");
    const [confirmEmailErr,setConfirmEmailErr] = useState("");
    const [phoneErr,setPhoneErr] = useState("");
    const [passwordError,setPasswordError] = useState("");

    let emailTextHandler = (event) => {
        setEmail(event.target.value);
    }
    let passwordTextHandler = (event) => {
        setPassword(event.target.value);
    }
    let nameTextHandler = (event) => {
        setName(event.target.value);
    }

    let confirmEmailTextHandler = (event) => {
        setConfirmEmail(event.target.value)
    }

    let confirmPasswordTextHandler = (event) => {
        setConfirmPassword(event.target.value);
    }

    let phoneTextHandler = (event) => {
        setPhone(event.target.value);
    }

    let validation = () => {
        if(name == "" || name == null){

        }
    }

    let onRegisterationSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="container-fluid w-50 mt-5">
            <div className="m-3">
                <h2 className="fw-bold mb-2 text-uppercase">Student Registration</h2>
                <p className="text-50 text-success mb-3">Please fill up the details</p>
                <div className="border border-1 rounded">
                    <div className="m-3">
                        <form onSubmit={onRegisterationSubmit}>
                        <input type="hidden" value={role}/>
                        <div className="form-floating mb-3">
                                <input type="text" className="form-control" value={name} onChange={nameTextHandler} placeholder="Enter Name" />
                                <label>Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" value={email} onChange={emailTextHandler} placeholder="name@example.com" />
                                <label>Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" value={confirmEmail} onChange={confirmEmailTextHandler} placeholder="name@example.com" />
                                <label>Confirm Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="tel" className="form-control" value={phone} onChange={phoneTextHandler} pattern="[0-9]{10}" placeholder="ex: 6362139594" />
                                <label>Mobile</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" value={password} onChange={passwordTextHandler} placeholder="Enter Password" />
                                <label>Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" value={confirmPassword} onChange={confirmPasswordTextHandler} placeholder="Enter Confirm Password" />
                                <label>Confirm Password</label>
                            </div>
                            <div className="row g-1">
                                <button className="btn1 primary1">Register</button>


                                <hr className="my-4" />
                                <p>Already have an Account? <a href="#!" className="link-success">Click Here</a></p>
                            </div>
                        </form>
                    </div >
                </div >
            </div >
        </div >
    );
}

export default RegisterStudent;