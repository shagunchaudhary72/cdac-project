import React, { useEffect, useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import AdminService from "../../Services/AdminService";
import "./AdminDashboard.css";

const Home = () => {

    const [show, setShow] = useState(false);
    const name = window.sessionStorage.getItem("name");
    const [adminName, setAdminName] = useState("");
    const [studentCount, setStudentCount] = useState("");
    const [collegeCount, setCollegeCount] = useState("");
    const [courseCount, setCourseCount] = useState("")
    const [title, setTitle] = useState("");
    const [body1, setBody1] = useState("");
    const [body2, setBody2] = useState("");
    const [body3,setBody3] = useState("");
    const [collegeList, setCollegeList] = useState([]);
    const [courseList, setCourseList] = useState([]);
    const [studentList, setStudentList] = useState([]);
    const [collegeState, setCollegeState] = useState(false);
    const [courseState,setCourseState] = useState(false);
    const [studentSate,setStudentState] = useState(false);

    function getCount() {
        AdminService.getCount().then(resp => {
            setCollegeCount(resp.data.collegeCount);
            setCourseCount(resp.data.courseCount);
            setStudentCount(resp.data.studentCount);
        }).catch(err => {
            console.log(err);
        })
    }

    function getCollegeContent() {
        AdminService.getListOfColleges().then(resp => {
            setCollegeList(resp.data);
        }).catch(err => {
            console.log(err);
        })
    }

    function getCourseContent() {
        AdminService.getListOfCourses().then(resp => {
            setCourseList(resp.data);
            console.log(courseList);
        }).catch(err => {
            console.log(err);
        })
    }

    function getStudentContent(){
        AdminService.getListOfStudents().then(resp => {
            setStudentList(resp.data);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        if (name !== null) {
            setAdminName(name.toUpperCase());
        }
        getCount();
        getCollegeContent();
        getCourseContent();
        getStudentContent();
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        if (id === 1) {
            setTitle("List of Colleges");
            setCourseState(false);
            setStudentState(false);
            setBody1(
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {collegeList.map((ele, key) => {
                            return (
                                <tr>
                                    <th>{key + 1}</th>
                                    <th>{ele.name}</th>
                                    <th>{ele.email}</th>
                                    <th>{ele.phoneNo}</th>
                                    <th>{ele.city}</th>
                                    <th>{ele.state}</th>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            )
            setCollegeState(true);
            setShow(true);
        }
        else if (id === 2) {
            setTitle("List of Courses");
            setCollegeState(false);
            setStudentState(false);
            setBody2(
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Course Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courseList.map((ele, key) => {
                            return (
                                <tr>
                                    <th>{key + 1}</th>
                                    <th>{ele.courseName}</th>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>)
            setCourseState(true);
            setShow(true);
        }
        else if (id === 3) {
            setTitle("List of Students");
            setCollegeState(false);
            setCourseState(false);
            setBody3(
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentList.map((ele, key) => {
                            return (
                                <tr>
                                    <th>{key + 1}</th>
                                    <th>{ele.name}</th>
                                    <th>{ele.email}</th>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>);
                setStudentState(true);
            setShow(true);
        }
    };

    return (
        <>
            <div className="container-fluid mt-5 dashboard-home-section">
                <h1 className="display-5 text-center" style={{ color: "#194f38" }}>Welcome back, <b>{adminName}</b></h1>
                <div className="row g-1">
                    <div className="col-5 border border-1 m-5 rounded box" style={{ backgroundColor: "#548a69" }}>
                        <div onClick={() => handleShow(1)} style={{ cursor: "context-menu" }}>
                            <div className="bg-light my-3 mx-3 rounded text-center rank-box" style={{ fontFamily: "Garamond, serif", color: "black" }}>
                                {collegeCount}
                            </div>
                            <div>
                                <p className="text-center fw-bolder" style={{ fontFamily: "Garamond, serif", fontSize: "20px", color: "white" }}>COLLEGES</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 border border-1 m-5 rounded box" style={{ backgroundColor: "#548a69" }}>
                        <div onClick={() => handleShow(2)} style={{ cursor: "context-menu" }}>
                            <div className="bg-light my-3 mx-3 rounded text-center course-box" style={{ fontFamily: "Garamond, serif", color: "black" }}>
                                {courseCount}
                            </div>
                            <div>
                                <p className="text-center fw-bolder" style={{ fontFamily: "Garamond, serif", fontSize: "20px", color: "white" }}>COURSES</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-11 border border-1 m-5 rounded box" style={{ backgroundColor: "#548a69" }}>
                        <div onClick={() => handleShow(3)} style={{ cursor: "context-menu" }}>
                            <div className="bg-light my-3 mx-3 rounded text-center college-box" style={{ fontFamily: "Garamond, serif", color: "black" }}>
                                {studentCount}
                            </div>
                            <div>
                                <p className="text-center fw-bolder" style={{ fontFamily: "Garamond, serif", fontSize: "20px", color: "white" }}>STUDENTS</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <Modal show={show} onHide={handleClose} dialogClassName="custom-dialog">
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <div className="table-responsive">
                            {collegeState && body1}
                            {courseState && body2}
                            {studentSate && body3}
                            </div>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>

    );
}

export default Home;