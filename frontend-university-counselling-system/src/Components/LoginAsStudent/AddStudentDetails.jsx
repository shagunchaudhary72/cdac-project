import React, { useEffect, useState } from "react";
import "../Login/Login.css";
import { Navigate } from "react-router-dom";
import studentService from "../../Services/StudentService";

const AddStudentDetails = () => {
  const studentName = window.sessionStorage.getItem("name");
  const studentEmail = window.sessionStorage.getItem("email");
  const studentAge = window.sessionStorage.getItem("age");
  const studentId = window.sessionStorage.getItem("id");
  const obj = { studentName, studentEmail, studentAge };
  const [loggedInStudentFalse, setLoggedInStudentFalse] = useState(false);
  // const [logOut, setLogOut] = useState(false);
  const [studentProfileUpdated, setStudentProfileUpdated] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
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
  const [successMesg, setSuccessMesg] = useState("");
  const [errorMesg, setErrorMesg] = useState("");

  useEffect(() => {
    if (studentName !== null && studentEmail !== null && studentAge !== null) {
      setName(obj.studentName);
      setEmail(obj.studentEmail);
      setAge(obj.studentAge);
    } else {
      setLoggedInStudentFalse(true);
    }
  }, []);

  let cityTextHandler = (e) => {
    if (cityError !== "" || cityError !== null) setCityError("");
    setCity(e.target.value);
  };

  let stateTextHandler = (e) => {
    if (stateError !== "" || stateError !== null) setStateError("");
    setStates(e.target.value);
  };

  let countryTextHandler = (e) => {
    if (countryError !== "" || countryError !== null) setCountryError("");
    setCountry(e.target.value);
  };

  let pincodeTextHandler = (e) => {
    if (pincodeError !== "" || pincodeError !== null) setPincodeError("");
    setPincode(e.target.value);
  };

  let marksTextHandler = (e) => {
    if (marksError !== "" || marksError !== null) setMarksError("");
    setMarks(e.target.value);
  };

  let nameTextHandler = (event) => {
    if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setName(event.target.value);
  };
  let emailTextHandler = (event) => {
    if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setEmail(event.target.value);
  };

  let ageTextHandler = (event) => {
    if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setAge(event.target.value);
  };

  let validation = () => {
    let flag = true;
    let regex = /[0-9]+/;
    let marksRegex = /[0-9]+/;
    if (city === null || city === "") {
      setCityError("Please Enter City");
      flag = false;
    }
    if (states === null || states === "") {
      setStateError("Please Enter State");
      flag = false;
    }
    if (country === null || country === "") {
      setCountryError("Please Enter Country");
      flag = false;
    }
    if (pincode === null || pincode === "") {
      setPincodeError("Please Enter Pincode");
      flag = false;
    } else if (regex.test(pincode) === false) {
      setPincodeError("Pincode should be in numbers");
      flag = false;
    }

    if (marks === null || marks === "") {
      setMarksError("Marks should not be empty");
      flag = false;
    } else if (marksRegex.test(marks) === false) {
      setMarksError("Please enter numbers");
      flag = false;
    } else if (parseInt(marks) < 0 || parseInt(marks) > 300) {
      setMarksError("Please Enter Marks between 0-300");
      flag = false;
    }

    if (flag) {
      return true;
    }
  };

  // let logoutClick = () => {
  //     window.sessionStorage.removeItem("name");
  //     window.sessionStorage.removeItem("email");
  //     window.sessionStorage.removeItem("age");
  //     window.sessionStorage.removeItem("id");
  //     setLogOut(true);
  // }

  let addStudentDetails = (e) => {
    e.preventDefault();
    if (validation()) {
      let student = {
        id: studentId,
        name,
        email,
        age,
        address: {
          city,
          state: states,
          country,
          pincode,
        },
        marksInComp: marks,
      };
      console.log(student);
      studentService
        .updateStudentDetails(student)
        .then(() => {
          setSuccessMesg("Student Profile Updated");
          setStudentProfileUpdated(true);
          window.sessionStorage.setItem("snackbar3", "show");
        })
        .catch((error) => {
          setErrorMesg("Something went wrong", error);
        });
    }
  };

  return (
    <>
      {loggedInStudentFalse && <Navigate to="/login" />}
      {studentProfileUpdated && <Navigate to="/student_dashboard" />}
      {/* {logOut && <Navigate to="/login" />} */}
      {/* <button type="button" className="btn1 primary1" onClick={logoutClick}>Logout</button> */}
      <div className="container-fluid w-50 mt-5 add-details-section">
        <div className="m-3">
          <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">
            Student Details
          </h2>
          <p className="text-50 text-success mb-3 dashboard-data-section-para">
            Please fill up the form
          </p>
          <div className="border border-1 rounded">
            <div className="m-3">
              <form onSubmit={addStudentDetails}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={nameTextHandler}
                    placeholder="Enter Name"
                    disabled
                  />
                  <label>Name</label>
                  {/* <span className="text-danger">{nameErr}</span> */}
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={emailTextHandler}
                    placeholder="name@example.com"
                    disabled
                  />
                  <label>Email address</label>
                  {/* <span className="text-danger">{emailErr}</span> */}
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={age}
                    onChange={ageTextHandler}
                    placeholder="Enter Age"
                    disabled
                  />
                  <label>Age</label>
                  {/* <span className="text-danger">{ageError}</span> */}
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={city}
                    onChange={cityTextHandler}
                    placeholder="Enter City"
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
                    placeholder="Enter State"
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
                    placeholder="Enter Country"
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
                    placeholder="Enter Country"
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
                    placeholder="Enter Marks"
                  />
                  <label>Marks In CCAT</label>
                  <span className="text-danger">{marksError}</span>
                </div>
                <div className="row g-1">
                  <button type="submit" className="btn1 primary1">
                    Update Details
                  </button>
                </div>
              </form>
            </div>
          </div>
          <span className="text-success">
            <b>{successMesg}</b>
          </span>
          <span className="text-danger">
            <b>{errorMesg}</b>
          </span>
        </div>
      </div>
    </>
  );
};

export default AddStudentDetails;
