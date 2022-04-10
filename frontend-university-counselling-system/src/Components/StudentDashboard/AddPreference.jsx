import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import CollegeService from "../../Services/CollegeService";
import StudentService from "../../Services/StudentService";
import "./StudentDashboard.css";

const AddPreference = () => {
    let userId = window.sessionStorage.getItem("id");
    const [college, setCollege] = useState("");
    const [course, setCourse] = useState("");
    const [loggedOut, setLoggedOut] = useState(false);
    const [collegeErr, setCollgeErr] = useState("");
    const [courseErr, setCourseErr] = useState("");
    const [show, setShow] = useState("");
    const [show2, setShow2] = useState("");
    const [show3,setShow3] = useState("");
    const [error, setError] = useState("");
    const [colleges, setColleges] = useState([]);
    const [courses, setCourses] = useState([]);
    const [preferences, setPreferences] = useState([]);
    const [education, setEducation] = useState([]);

    const initCourse = (collegeName) => {
        CollegeService.getCoursesOfCollge(collegeName).then(response => {
            console.log(college);
            console.log(response.data);
            setCourses(response.data);
        }).catch(err => {
            console.log(err);
        })
    }

    const initCollege = () => {
        CollegeService.getAllCollege().then(response => {
            console.log(response.data);
            setColleges(response.data);
        }).catch(err => {
            console.log(err);
        });
    }

    const getPreferenceList = (id) => {
        StudentService.getPreferences(id).then(res => {
            setPreferences(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        getPreferenceList(userId);
        educationChecking(userId);
    }, [])
    useEffect(() => {
        const email = window.sessionStorage.getItem("email");
        if (email === null) {
            setLoggedOut(true);
        }
        initCollege();
        if (college !== "") {
            initCourse(college);
        }
        else {
            setCourses([]);
        }

    }, [college])

    let onCollegeHandler = (e) => {
        setCollege(e.target.value);
        if (collegeErr !== "") {
            setCollgeErr("");
        }
    }

    let onCourseHandler = (e) => {
        setCourse(e.target.value);
        if (courseErr !== "") {
            setCourseErr("");
        }
    }

    let validation = () => {
        let flag = true;
        if (college === "") {
            setCollgeErr("Please select any college from the given list");
            flag = false;
        }
        if (course === "") {
            setCourseErr("Please select course");
            flag = false;
        }
        if (flag) {
            return true;
        }
    }

    let educationChecking = (id) => {
        StudentService.getEducationDetailsOfStudent(id).then(response => {
            console.log(response.data);
            setEducation(response.data);
        }).catch(err => {
            console.log(err);
        })
    }

    let onAddPreferenceSubmit = (event) => {
        event.preventDefault();
        if (validation()) {
            if (education.length === 2) {
                let preference = { "collegePreference": college, "coursePreference": course };
                StudentService.addPreference(userId, preference).then(response => {
                    console.log(response.data);
                    setShow("show");
                    getPreferenceList(userId);
                    setTimeout(function () { setShow(""); clearTimeout(); }, 3000);
                }).catch(err => {
                    console.log("Something Went Wrong", err);
                    setError("You have already added this preference in list");
                })
            }
            else{
                setShow3("show");
                setTimeout(function () { setShow3(""); clearTimeout(); }, 3000);
            }
        }
    }

    let handleDelete = (p_id) => {
        StudentService.deletePreference(userId, p_id).then(response => {
            setShow2("show");
            getPreferenceList(userId);
            setTimeout(function () { setShow2(""); clearTimeout(); }, 3000);
        }).catch(err => {
            alert("Delete Process Cancelled..");
        })
    }

    return (
        <>
            {loggedOut && <Navigate to="/login" />}
            <div className="container-fluid w-50 mt-5">
                <div className="m-3">
                    <h2 className="fw-bold mb-2 text-uppercase">Enter your Preferences</h2>
                    <p className="text-50 text-success mb-3">Remember!! you should add college according to your priority</p>
                    <div className="border border-1 rounded">
                        <div className="m-3">
                            <form onSubmit={onAddPreferenceSubmit} className="row g-1">
                                <div className="form-floating col-6">
                                    <select className="form-select" value={college} onChange={onCollegeHandler}>
                                        <option value="" selected>--SELECT--</option>
                                        {colleges.map((ele, key) => {
                                            return (
                                                <option value={ele.name}>{ele.name}</option>
                                            )
                                        })}
                                    </select>
                                    <label>College</label>
                                    <span className="text-danger">{collegeErr}</span>
                                </div>
                                <div className="form-floating col-6">
                                    <select className="form-select" value={course} onChange={onCourseHandler}>
                                        <option value="" selected>--SELECT--</option>
                                        {courses.map((ele, key) => {
                                            return (
                                                <option value={ele.courseName}>{ele.courseName}</option>
                                            )
                                        })}
                                    </select>
                                    <label>Course</label>
                                    <span className="text-danger">{courseErr}</span>
                                </div>
                                <button type="submit" className="btn1 primary1 mt-3">Add Preference</button>

                            </form>
                        </div >
                    </div >
                    <span className="text-danger">{error}</span>
                    <div className={show} id="snackbar">Preference Added Successfully<output></output></div>
                    <div className={show2} id="snackbar">Preference Deleted Successfully<output></output></div>
                    <div className={show3} id="snackbar">Please add your Education Details<output></output></div>
                </div >

                <hr />
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr className="text-center">
                            <th>Priority</th>
                            <th>College</th>
                            <th>Course</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            preferences.map((ele, k) => {
                                return (
                                    <tr key={k + 1}>
                                        <td>{k + 1}</td>
                                        <td>{ele.collegePreference}</td>
                                        <td>{ele.coursePreference}</td>
                                        <td><center><button className="btn1 primary1 rounded" onClick={() => {
                                            handleDelete(ele.id);
                                        }}>Delete</button></center></td>
                                    </tr>
                                )
                            }
                            )}


                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AddPreference;