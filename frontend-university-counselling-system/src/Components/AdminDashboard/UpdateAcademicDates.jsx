import React, { useState } from "react";
import AdminService from "../../Services/AdminService";
import "../StudentDashboard/StudentDashboard.css";

const UpdateAcademicDates = () => {
    const email = window.sessionStorage.getItem("email");
    const [resultDate, setResultDate] = useState("");
    const [updationDate, setUpdationDate] = useState("");
    const [resultDateErr, setResultDateErr] = useState("");
    const [updationDateErr, setUpdationDateErr] = useState("");
    const [show, setShow] = useState("");

    let resultDateHandler = (e) => {
        if (resultDateErr !== null || resultDateErr !== "") {
            setResultDateErr("");
        }
        setResultDate(e.target.value);
    }

    let updationDateHandler = (e) => {
        if (updationDateErr !== null || updationDateErr !== "") {
            setUpdationDateErr("");
        }
        setUpdationDate(e.target.value);
    }

    let validation = () => {
        let flag = true;
        if (updationDate === null || updationDate === "") {
            setUpdationDateErr("This field is mandatory");
            flag = false;
        }
        if (resultDate === null || resultDate === "") {
            setResultDateErr("This field is mandatory");
            flag = false;
        }
        if(updationDate>resultDate){
            setUpdationDateErr("Form updation date should be before Result Date");
            setResultDateErr("Result date should be after Form Updation Date");
            flag = false
        }
        if (flag) {
            return true;
        }
    }

    let updateDates = (e) => {
        e.preventDefault();
        if (validation()) {
            let dates = { resultDate, updationDate };
            AdminService.updateDates(email, dates).then(resp => {
                setResultDate("");
                setUpdationDate("");
                setShow("show");
                setTimeout(() => {
                    setShow("");
                    clearTimeout();
                }, 3000);
            }).catch(err => {
                console.log(err);
            })

        }
    }

    return (
        <div className="container-fluid w-50 mt-5 update-date-section">
            <div className="m-3">
                <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">Update Academic Dates</h2>
                <p className="text-50 text-success mb-3">
                    Please Choose Dates
                </p>
                <div className="border border-1 rounded">
                    <div className="m-3">
                        <form onSubmit={updateDates}>
                            <div className="form-floating mb-3">
                                <input
                                    type="date"
                                    className="form-control"
                                    value={updationDate}
                                    onChange={updationDateHandler}
                                />
                                <label>Form Updation Date</label>
                                <span className="text-danger">{updationDateErr}</span>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="date"
                                    className="form-control"
                                    value={resultDate}
                                    onChange={resultDateHandler}
                                />
                                <label>Result Date</label>
                                <span className="text-danger">{resultDateErr}</span>
                            </div>
                            <button type="submit" className="btn1 primary1 btn-sm">Update Dates</button>
                        </form>
                    </div>
                </div>
                <div className={show} id="snackbar">Academic Dates are Updated</div>
            </div>
        </div>
    );
}

export default UpdateAcademicDates;