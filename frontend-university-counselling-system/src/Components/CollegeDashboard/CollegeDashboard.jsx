import React, { useEffect, useState } from "react";
import CollegeService from "../../Services/CollegeService";



const CollegeDashboard = () => {
    const [courses,setCourses] = useState("");
    const [students,setStudents] = useState("");
    const collegeName = window.sessionStorage.getItem("name");
    const collegeId = window.sessionStorage.getItem("id");

    const getCourses = () =>{
        if(collegeName!==null){
            CollegeService.getCoursesOfCollge(collegeName).then(resp=>{
                let courseList = resp.data;
                setCourses(courseList.length);
            })
        }
    }

    const getStudents = () =>{

        if(collegeId!==null){
            CollegeService.getShortlistedStudents(collegeId).then(resp=>{
                let studentList = resp.data;
                setStudents(studentList.length);
            })
        }
    }
    useEffect(()=>{
        getCourses();
        getStudents();
        
    },[])

    return (
        <div className="container-fluid mt-5 dashboard-home-section">
            <h1 className="text-center fw-bolder dash" style={{fontFamily:"Garamond, serif",color:"#194f38"}}>COLLEGE DASHBOARD</h1>
            <div className="row g-1">
                <center><div className="col-5 border border-1 m-5 rounded box" style={{backgroundColor:"#548a69"}}>
                    <div>
                        <div className="bg-light my-3 mx-3 rounded text-center rank-box" style={{fontFamily:"Garamond, serif",color:"black"}}>
                            {students}
                        </div>
                        <div>
                            <p className="text-center fw-bolder" style={{fontFamily:"Garamond, serif",fontSize:"20px",color:"white"}}>STUDENTS SHORTLISTED</p>
                        </div>
                    </div>
                </div>
                <div className="col-5 border border-1 m-5 rounded box" style={{backgroundColor:"#548a69"}}>
                    <div>
                        <div className="bg-light my-3 mx-3 rounded text-center course-box" style={{fontFamily:"Garamond, serif",color:"black"}}>
                             {courses}
                        </div>
                        <div>
                            <p className="text-center fw-bolder" style={{fontFamily:"Garamond, serif",fontSize:"20px",color:"white"}}>COURSES AVAILABLE</p>
                        </div>
                    </div>
                </div></center>                
            </div>
        </div>
    );
}

export default CollegeDashboard;