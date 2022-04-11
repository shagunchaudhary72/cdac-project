import React, { useEffect, useState } from "react";
import AdminService from "../../Services/AdminService";
import CollegeService from "../../Services/CollegeService";

const AddCourse = () => {

    const [show, setShow] = useState("");
    const [course, setCourse] = useState("");
    const [courseErr, setCourseErr] = useState("");
    const [courses, setCourses] = useState([]);
    const [responseFromMethod, setResponseFromMethod] = useState("");
    const [show1, setShow1] = useState("");

    let courseList = () => {
        CollegeService.getCourseList().then(response => {
            console.log(response.data);
            setCourses(response.data);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        courseList();
    }, [])

    let courseTextHandler = (e) => {
        if (courseErr !== null || courseErr !== "") {
            setCourseErr("");
        }
        setCourse(e.target.value);
    }

    let validation = () => {
        let flag = true;
        if (course === null || course === "") {
            setCourseErr("Field is mandatory");
            flag = false;
        }
        if (flag) {
            return true;
        }
    }

    let handleDelete = (id) => {

        CollegeService.deleteCourseById(id).then(resp => {
            setResponseFromMethod(resp.data);
            // if(responseFromMethod!==""){
            console.log(resp.data);
            setShow1("show");
            courseList();
            setTimeout(function () {
                setShow1("");
                clearTimeout();
            }, 3000)
            // }
        }).catch(err => {
            console.log(err);
        })

    }

    let addCourse = (e) => {
        e.preventDefault();
        if (validation()) {
            let courseObj = { "courseName": course.toUpperCase() };
            AdminService.addNewCourseInUniversity(courseObj).then(response => {
                console.log(response.data);
                setCourse("");
                courseList();
                setShow("show");
                setTimeout(function () {
                    setShow("");
                    clearTimeout();
                }, 3000);
            }).catch(err => {
                console.log(err);
            })
        }
    }


    return (
        <>
            <div className="container-fluid w-50 mt-5">
                <div className="m-3">
                    <h2 className="fw-bold mb-2 text-uppercase">Add Course</h2>
                    <p className="text-50 text-success mb-3">
                        Please enter course name
                    </p>
                    <div className="border border-1 rounded">
                        <div className="m-3">
                            <form onSubmit={addCourse}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={course}
                                        onChange={courseTextHandler}
                                        placeholder="name@example.com"
                                    />
                                    <label>Course Name</label>
                                    <span className="text-danger">{courseErr}</span>
                                </div>
                                <button type="submit" className="btn1 primary1">Proceed to Add</button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr />
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>Course Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((course, key) => (
                                <tr key={key}>
                                    <td>{key+1}</td>
                                    <td>{course.courseName}</td>
                                    <td><center><button className="btn1 primary1 rounded" onClick={() => {
                                        handleDelete(course.id);
                                    }}>Delete</button></center></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className={show} id="snackbar">Course Added Successfully</div>
                <div className={show1} id="snackbar">{responseFromMethod}</div>
            </div>
        </>

    );
}

export default AddCourse;