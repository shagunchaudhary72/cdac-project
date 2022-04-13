import React, { useEffect, useState } from "react";
import StudentService from "../../Services/StudentService";


const Home = () => {
    const studentId = window.sessionStorage.getItem("id");
    const [rank,setRank] = useState("");
    const [courseAlloted,setCourseAlloted] = useState("");
    const [collegeAlloted,setCollegeAlloted] = useState("");

    useEffect(()=>{
        StudentService.getResult(parseInt(studentId)).then(resp=>{
            console.log(resp.data);
            setRank(resp.data.rank);
            setCourseAlloted(resp.data.courseAlloted);
            setCollegeAlloted(resp.data.collegeAllotedWithAddress);
        }).catch(err=>{
            console.log(err);
            setRank("N/A");
            setCollegeAlloted("N/A");
            setCourseAlloted("N/A");
        })
    },[])

    return (
        <div className="container-fluid mt-5 dashboard-home-section">
            <h1 className="text-center fw-bolder dash" style={{fontFamily:"Garamond, serif",color:"#194f38"}}>RESULT OF COUNSELLING</h1>
            <div className="row g-1">
                <div className="col-5 border border-1 m-5 rounded box" style={{backgroundColor:"#548a69"}}>
                    <div>
                        <div className="bg-light my-3 mx-3 rounded text-center rank-box" style={{fontFamily:"Garamond, serif",color:"black"}}>
                            {rank}
                        </div>
                        <div>
                            <p className="text-center fw-bolder" style={{fontFamily:"Garamond, serif",fontSize:"20px",color:"white"}}>RANK</p>
                        </div>
                    </div>
                </div>
                <div className="col-5 border border-1 m-5 rounded box" style={{backgroundColor:"#548a69"}}>
                    <div>
                        <div className="bg-light my-3 mx-3 rounded text-center course-box" style={{fontFamily:"Garamond, serif",color:"black"}}>
                             {courseAlloted}
                        </div>
                        <div>
                            <p className="text-center fw-bolder" style={{fontFamily:"Garamond, serif",fontSize:"20px",color:"white"}}>COURSE ALLOTED</p>
                        </div>
                    </div>
                </div>
                <div className="col-11 border border-1 m-5 rounded box" style={{backgroundColor:"#548a69"}}>
                    <div>
                        <div className="bg-light my-3 mx-3 rounded text-center college-box" style={{fontFamily:"Garamond, serif", color:"black"}}>
                           {collegeAlloted}
                        </div>
                        <div>
                            <p className="text-center fw-bolder" style={{fontFamily:"Garamond, serif",fontSize:"20px",color:"white"}}>COLLEGE ALLOTED</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Home;