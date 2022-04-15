import React, { useEffect } from 'react'
import { useState } from "react";
import "../Login/Login.css";
import userService from "../../Services/UserService";
import { Link, useNavigate } from "react-router-dom";

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
  //const [successMesg, setSuccessMesg] = useState("");
  const [errorMesg, setErrorMesg] = useState("");
  const navigate = useNavigate();
  const sessionRole = window.sessionStorage.getItem("role");

  useEffect(()=>{
    window.scrollTo(0, 0);
    if(sessionRole!==null){
      navigate("/home");
    }
  },[])

  let emailTextHandler = (event) => {
    if(emailErr!==""||emailErr!==null) setEmailErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setEmail(event.target.value.toLowerCase());
    console.log(email);
  };
  let passwordTextHandler = (event) => {
    if (passwordError!=="" || passwordError!==null) setPasswordError("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setPassword(event.target.value);
  };
  let nameTextHandler = (event) => {
    if(nameErr!=="" || nameErr!==null) setNameErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setName(event.target.value.toUpperCase());
  };

  let confirmEmailTextHandler = (event) => {
    if(confirmEmailErr!=="" || confirmEmailErr!==null) setConfirmEmailErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setConfirmEmail(event.target.value.toLowerCase());
  };

  let confirmPasswordTextHandler = (event) => {
    if(confirmPasswordError!=="" || confirmPasswordError!==null) setConfirmPasswordError("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setConfirmPassword(event.target.value);
  };

  let phoneNoTextHandler = (event) => {
    if(phoneNoErr!=="" || phoneNoErr!==null) setPhoneNoErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setPhoneNo(event.target.value);
  };

  let ageTextHandler = (event) => {
    if(ageError!=="" || ageError!==null) setAgeError("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setAge(event.target.value);
  };

  let validation = () => {
    setErrorMesg("");
    setNameErr("");
    setEmailErr("");
    setConfirmEmailErr("");
    setPhoneNoErr("");
    setPasswordError("");
    setConfirmPasswordError("");
    setAgeError("");
    let flag = true;
    let regex = /[a-zA-Z0-9]+@{1}[a-zA-Z0-9]+\.[a-zA-Z]+/;
    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    let ageRegex = /^\d+$/;
    if (name === "" || name === null) {
      setNameErr("This field is compulsory");
      flag = false;
    }
    if (email === "" || email === null) {
      setEmailErr("This field is compulsory");
      flag = false;
    } else if (regex.test(email) === false) {
      setEmailErr("Email is in wrong format. Example: abc@gmail.com");
      flag = false;
    }
    if (confirmEmail === "" || confirmEmail === null) {
      setConfirmEmailErr("This field is compulsory");
      flag = false;
    }

    if (confirmEmail!== email) {
      setConfirmEmailErr("Email is not matching");
      flag = false;
    }

    if (phoneNo === "" || phoneNo === null) {
      setPhoneNoErr("This field is compulsory");
      flag = false;
    }
    if (password === "" || password === null) {
      setPasswordError("This field is compulsory");
      flag = false;
    }
    else if(passwordRegex.test(password)===false){
      setPasswordError("Password should have atleast one capital letter, one special character and a number.\nAlso, the size of password should lies between 8 to 15 characters");
      flag = false;
    }
    if (confirmPassword === "" || confirmPassword === null) {
      setConfirmPasswordError("This field is compulsory");
      flag = false;
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError("Password is not matching");
      flag = false;
    }
    if (age === "" || age === null) {
      setAgeError("This field is compulsory");
      flag = false;
    }
    else if(ageRegex.test(age)===false){
      setAgeError("Age should be in numbers");
      flag = false;
    }
    if (flag) {
      return true;
    }
  };

  let onRegisterationSubmit = (event) => {
    event.preventDefault();
    if (validation() === true) {
      let studentRegistration = {
        user: {
          name,
          email,
          password,
          role,
          phoneNo,
        },
        student: {
          name,
          email,
          age,
        },
      };
      userService
        .createUserAndStudent(studentRegistration)
        .then((response) => {
          setName("");
          setEmail("");
          setConfirmEmail("");
          setPhoneNo("");
          setPassword("");
          setConfirmPassword("");
          setAge("");
          // setSuccessMesg("User Created Successfully");
          window.sessionStorage.setItem("snackbar_registration","show");
          //toastr.success("Student Profile Created Successfully");
          navigate("/login");
        })
        .catch((error) => {
          console.log(error)
          setErrorMesg(error.response.data);
        });
    }
  };

  return (
    <div className="container-fluid w-50 mt-5 register-section">
      <div className="m-3">
        <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">Student Registration</h2>
        <p className="text-50 text-success mb-3">Please fill up the details</p>
        <div className="border border-1 rounded">
          <div className="m-3">
            <form onSubmit={onRegisterationSubmit}>
              <input type="hidden" value={role} />
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={nameTextHandler}
                  placeholder="Enter Name"
                />
                <label>Name</label>
                <span className="text-danger">{nameErr}</span>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={emailTextHandler}
                  placeholder="name@example.com" 
                />
                <label>Email address</label>
                <span className="text-danger">{emailErr}</span>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  value={confirmEmail}
                  onChange={confirmEmailTextHandler}
                  placeholder="name@example.com"
                />
                <label>Confirm Email address</label>
                <span className="text-danger">{confirmEmailErr}</span>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="tel"
                  className="form-control"
                  value={phoneNo}
                  onChange={phoneNoTextHandler}
                  pattern="[0-9]{10}"
                  placeholder="ex: 6362139594"
                />
                <label>Mobile</label>
                <span className="text-danger">{phoneNoErr}</span>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={passwordTextHandler}
                  placeholder="Enter Password"
                />
                <label>Password</label>
                <span className="text-danger">{passwordError}</span>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  onChange={confirmPasswordTextHandler}
                  placeholder="Enter Confirm Password"
                />
                <label>Confirm Password</label>
                <span className="text-danger">{confirmPasswordError}</span>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={age}
                  onChange={ageTextHandler}
                  placeholder="Enter Age"
                />
                <label>Age</label>
                <span className="text-danger">{ageError}</span>
              </div>
              <div className="row g-1">
                <button type="submit" className="btn1 primary1">
                  Register
                </button>
                <hr className="my-4" />
                <p>
                  Already have an Account?{" "}
                  <Link to="/login" className="link-success">
                    Click Here
                  </Link>
                </p>
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
};

export default RegisterStudent;
