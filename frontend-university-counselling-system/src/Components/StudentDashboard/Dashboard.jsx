import React, { useEffect, useRef, useState } from "react";
import studentavatar from "../../images/studentavatar.png";
import AdminService from "../../Services/AdminService";

const Dashboard = () => {

    const username = window.sessionStorage.getItem("name");
    const [name, setName] = useState("");
    const [resultDate,setResultDate] = useState("");
    const [updationDate,setUpdationDate] = useState("");

    useEffect(() => {
        if (username !== null) {
            setName(username);
        }
        else {
            setName("");
        }

        AdminService.getAcademicDates().then(resp=>{
            setResultDate(resp.data.resultDate);
            setUpdationDate(resp.data.updationDate);
        }).catch(err=>{
            console.log("Something Went Wrong",err);
        })
    }, [])

    return (
        <div className="container-fluid">
            <div className="border border-1 rounded" style={{ margin: "10%", backgroundColor: "#548a69" }}>
                <div className="m-3">
                    <div className="d-flex justify-content-center">
                        <img
                            src={studentavatar}
                            alt="Student"
                            width={170} height={200}
                        />
                    </div>
                    <h2 className="display-5 text-center mt-3" style={{ color: "white" }}>Welcome back, <b><span>{name}</span></b></h2>
                </div>
                <div className="row g-1 mt-5">
                    <div className="col-5 m-2 text-white text-center">
                        <b>Result Declaration Date:</b> {resultDate}
                    </div>
                    <div className="col-5 m-2 text-white text-center">
                        <b>Last Date to Update your Preference:</b> {updationDate}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;