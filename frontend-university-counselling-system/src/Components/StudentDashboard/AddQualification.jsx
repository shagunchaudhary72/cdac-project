import { useEffect, useState } from "react";
import StudentService from "../../Services/StudentService";
import "./StudentDashboard.css";

const AddQualification = () => {
    var yearArray = [];
    for (let i = 2015; i < 2022; i++) {
        yearArray.push(i);
    }
    let studentId = window.sessionStorage.getItem("id");

    const [type, setType] = useState("");
    const [streamName, setStreamName] = useState("");
    const [institute, setInstitute] = useState("");
    const [percentage, setPercentage] = useState("");
    const [yop, setYop] = useState("");
    const [typeErr, setTypeErr] = useState("");
    const [streamNameErr, setStreamNameErr] = useState("");
    const [instituteErr, setInstituteErr] = useState("");
    const [percentageErr, setPercentageErr] = useState("");
    const [yopErr, setYopErr] = useState("");
    const [show, setShow] = useState("");
    const [error,setError] = useState("");

    const [educations, setEducations] = useState([]);

    const init = () => {
        StudentService.getEducationDetailsOfStudent(studentId).then(response => {
            console.log(response.data);
            setEducations(response.data);
        }).catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        init();
    }, []);

    let onTypeHandler = (event) => {
        setType(event.target.value);
        if (typeErr !== "" || typeErr !== null) {
            setTypeErr("");
        }
    }

    let onStreamHandler = (event) => {
        setStreamName(event.target.value);
        if (streamNameErr !== "" || streamNameErr !== null) {
            setStreamNameErr("");
        }
    }

    let instituteHandler = (event) => {
        setInstitute(event.target.value);
        if (instituteErr !== "" || instituteErr !== null) {
            setInstituteErr("");
        }
    }

    let percentageHandler = (event) => {
        setPercentage(event.target.value);
        if (percentageErr !== "" || percentageErr !== null) {
            setPercentageErr("");
        }
    }

    let yopHandler = (event) => {
        setYop(event.target.value);
        if (yopErr !== "" || yopErr !== null) {
            setYopErr("");
        }
    }

    let validation = () => {
        // console.log(studentId);
        let flag = true;
        let percentageRegex = /[A-Za-z\@\?\/\!\~]+/;
        if (type === "") {
            setTypeErr("Please select Course");
            flag = false;
        }

        if (streamName === "") {
            setStreamNameErr("Please select Stream");
            flag = false;
        }

        if (type === "SSC" && (streamName === "PCM" || streamName === "PCMB")) {
            setStreamNameErr("Please select General");
            flag = false;
        }

        if (type === "HSC" && (streamName === "GENERAL")) {
            setStreamNameErr("Please select PCM or PCMB");
            flag = false;
        }

        if (institute === "" || institute === null) {
            setInstituteErr("Please Enter your Institute Name");
            flag = false;
        }
        if (percentage === "" || percentage === null) {
            setPercentageErr("Please Enter your Percentage");
            flag = false;
        }
        else if (percentageRegex.test(percentage)) {
            setPercentageErr("Percentage should be in numbers");
            flag = false;
        }
        else if (((parseFloat(percentage)) < (0)) || ((parseFloat(percentage)) > 100)) {
            setPercentageErr("Percentage should be greater than equal to 0.00 or less than equal to 100.00 (For ex: 87.5)");
            flag = false;
        }
        if (yop === "" || yop === null) {
            setYopErr("Please Enter your Year of Passing");
            flag = false;
        }

        if (flag)
            return true;

    }


    let onAddEducationSubmit = (event) => {
        event.preventDefault();
        if (validation()) {
            setTypeErr("");
            setStreamNameErr("");
            setInstituteErr("");
            setPercentageErr("");
            setYopErr("");
            console.log("...." + studentId);
            let education = { "type": type, "streamName": streamName, "nameOfInstitute": institute, "percentage": percentage, "yearOfPassing": yop };
            console.log(education);
            StudentService.updateEducation(parseInt(studentId), education).then(response => {
                //console.log("Education Added", response.data);
                setType("");
                setStreamName("");
                setInstitute("");
                setPercentage("");
                setYop("");
                setError("");
                init();
                setShow("show");
                setTimeout(function () { setShow(""); clearTimeout(); }, 3000)
            }).catch(err => {
                console.log("Error found", err);
                setError("Something went wrong");
            })

        }

    }

    return (
        <div className="container-fluid w-50 mt-5">
            <div className="m-3">
                <h2 className="fw-bold mb-2 text-uppercase">Education Qualification</h2>
                <p className="text-50 text-success mb-3">Please enter your qualification</p>
                <div className="border border-1 rounded">
                    <div className="m-3">
                        <form onSubmit={onAddEducationSubmit}>
                            <div className="form-floating mb-3">
                                <select className="form-select" value={type} onChange={onTypeHandler}>
                                    <option value="" selected>--SELECT--</option>
                                    <option value="SSC">SSC</option>
                                    <option value="HSC">HSC</option>
                                </select>
                                <label>Course</label>
                                <span className="text-danger">{typeErr}</span>
                            </div>
                            <div className="form-floating mb-3">
                                <select className="form-select" value={streamName} onChange={onStreamHandler}>
                                    <option value="" selected>--SELECT--</option>
                                    <option value="PCM">PCM</option>
                                    <option value="PCMB">PCMB</option>
                                    <option value="GENERAL">GENERAL</option>
                                </select>
                                <label>Stream</label>
                                <span className="text-danger">{streamNameErr}</span>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" value={institute} onChange={instituteHandler} placeholder="Enter Institute" />
                                <label>Name of your Institute</label>
                                <span className="text-danger">{instituteErr}</span>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" value={percentage} onChange={percentageHandler} placeholder="Enter Percentage" />
                                <label>Percentage</label>
                                <span className="text-danger">{percentageErr}</span>
                            </div>
                            <div className="form-floating mb-3">
                                <select className="form-select" value={yop} onChange={yopHandler}>
                                    <option value="" selected>--SELECT--</option>
                                    {yearArray.map((ele, key) => {
                                        return (
                                            <option value={ele}>{ele}</option>
                                        );
                                    })}
                                </select>
                                <label>Year of Passing</label>
                                <span className="text-danger">{yopErr}</span>
                            </div>
                            <div className="row g-1">
                                <button type="submit" className="btn1 primary1">Add Qualification</button>
                            </div>
                        </form>
                    </div >
                </div >
                <span className="text-danger">{error}</span>
                <div className={show} id="snackbar">Education Added Successfully<output></output></div>
            </div >

            <hr />
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Course</th>
                        <th>Stream</th>
                        <th>Name of Institute</th>
                        <th>Percentage</th>
                        <th>Year of Passing</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        educations.map(education => (
                            <tr key={education.id}>
                                <td>{education.type}</td>
                                <td>{education.streamName}</td>
                                <td>{education.nameOfInstitute}</td>
                                <td>{education.percentage}</td>
                                <td>
                                    {education.yearOfPassing}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AddQualification;