import React from 'react';
import { useEffect, useState } from "react";
import CollegeService from '../../Services/CollegeService';

const ListShortlistedStudents = () => {

    const collegeId = window.sessionStorage.getItem("id");
    const [formList, setFormList] = useState([]);
    const [noFormData, setNoFormData] = useState(false);
    const [formData, setFormData] = useState(false);

    useEffect(() => {
        CollegeService.getShortlistedStudents(collegeId).then(response => {
            let studentList = response.data;
            if (studentList !== null && studentList.length!==0) {
                console.log(studentList);
                setFormList(studentList);
                setFormData(true);
                setNoFormData(false);
            }
            else {
                console.log("Hello");
                setNoFormData(true);
                setFormData(false);
            }
        }
        ).catch(error => { console.log(error); });
    }, [noFormData, formData]);


    return (
        <>
            {noFormData && <center>
              <div className="border border-1 border-secondary w-25 rounded mt-5">
                <div className="p-2">
                  <h3 className="my-3">Result Status</h3>
                  <hr/>
                  <p className="text-danger">Not declared yet..</p>
                </div>
              </div>
            </center>}
            {formData && <div><h3 className="fw-bold mt-3 mb-5 text-center" style={{ color: "#1e3a54" }}>List of Shortlisted Students</h3><table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr className="text-center">
                        <th>Student Id</th>
                        <th>Student Name</th>
                        <th>Student Marks</th>
                        <th>Student Rank</th>
                        <th>Course Name</th>
                    </tr>
                </thead>
                <tbody>
                    {formList.map((student) => {
                        return <tr className="text-center">
                            <td>
                                {student.studentId}
                            </td>
                            <td>
                                {student.name}
                            </td>
                            <td>
                                {student.markInComp}
                            </td>
                            <td>
                                {student.rankInComp}
                            </td>
                            <td>
                                {student.courseName}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table></div>}
        </>
    );
}

export default ListShortlistedStudents;