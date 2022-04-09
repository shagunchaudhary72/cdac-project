import React from 'react';
import { useEffect, useState } from "react";
import CollegeService from '../../Services/CollegeService';

const ListShortlistedStudents = () => {

    const [collegeId, setCollegeId] = useState(window.sessionStorage.getItem("id"));
    const [formList, setFormList] = useState([]);
    const [formData, setFormData] = useState(false);

    useEffect(() => {
        CollegeService.getShortlistedStudents(collegeId).then(response => {
            if (response.data === null || response.data === "") {
                setFormData(false);
            }
            else {
                setFormList(response.data);
                setFormData(true);
            }
        }
        ).catch(error => { console.log(error); });
    }, []);

    return (
        <>
            {!formData && <h1>The result has not been declared yet</h1>}
            <table className="table table-bordered table-striped">
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
                {formData && formList.map((student) => {
                    return <tr>
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
        </table>
        </>
    );
}

export default ListShortlistedStudents;