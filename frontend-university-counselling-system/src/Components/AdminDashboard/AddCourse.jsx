import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AdminService from "../../Services/AdminService";
import CollegeService from "../../Services/CollegeService";


const AddCourse = () => {

    const [show, setShow] = useState("");
    const [course, setCourse] = useState("");
    const [courseErr, setCourseErr] = useState("");
    const [courses, setCourses] = useState([]);
    const [responseFromMethod, setResponseFromMethod] = useState("");
    const [show1, setShow1] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [courseId, setCourseId] = useState("");


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
        console.log(id);
        if (id !== null) {
            AdminService.deleteCourseById(id).then(resp => {
                setResponseFromMethod(resp.data);
                console.log(resp.data);
                setShow1("show");
                courseList();
                setTimeout(function () {
                    setShow1("");
                    clearTimeout();
                }, 3000)
                setCourseId("");
                setShowModal(false);
            }).catch(err => {
                console.log(err);
            })
        }

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
    const handleClose = () => setShowModal(false);
    const handleShow = (id) => {
        console.log(id);
        setShowModal(true);
        setCourseId(id);
    }


    return (
        <>
            <div className="container-fluid w-50 mt-5 add-course-section">
                <div className="m-3">
                    <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">Add Course</h2>
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
                                <button type="submit" className="btn1 primary1 btn-sm">Proceed to Add</button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="table-responsive">
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
                                        <td>{key + 1}</td>
                                        <td>{course.courseName}</td>
                                        <td><center><button className="btn1 primary1 rounded" onClick={() => {
                                            handleShow(course.id);
                                        }}>Delete</button></center></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className={show} id="snackbar">Course Added Successfully</div>
                <div className={show1} id="snackbar">{responseFromMethod}</div>
            </div>
            <Modal show={showModal} onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Are you sure?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        If this course present in some college profiles in their courses offering then, it will be deleted immediately from there plus those students who got this course in counselling won't be able to get admission for this particular course.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button className="btn btn-danger" onClick={() => handleDelete(courseId)}>Proceed to Delete</Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}

export default AddCourse;