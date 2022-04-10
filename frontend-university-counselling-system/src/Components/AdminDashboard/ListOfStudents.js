import React, { useEffect, useState } from "react";
import AdminService from "../../Services/AdminService";
import StudentService from "../../Services/StudentService";

const ListOfStudents = () => {
  const [studentsList, setStudentsList] = useState([]);
  const [studentDetails, setStudentDetails] = useState(null);
  const [studentPreferences, setStudentPreferences] = useState(null);
  const [isPreferenceAvailabe, setIsPreferenceAvailable] = useState(false);
  const [isFullfilled, setIsFulfilled] = useState(false);

  const getStudentsList = () => {
    AdminService.getListOfStudents()
      .then((response) => {
        if (response.status === 200) {
          setIsFulfilled(true);
          setStudentsList(response.data);
        }
      })
      .catch((error) => {
        console.log(" error occured : ", error);
      });
  };

  useEffect(() => {
    getStudentsList();
  }, [isFullfilled]);

  useEffect(() => {
    console.log(studentDetails);
    console.log(studentPreferences);
  }, [studentDetails, isPreferenceAvailabe]);

  const showStudentDetails = (student) => {
    console.log(student.educationQualifationList.length);

    StudentService.getPreferences(student.id)
      .then((response) => {
        if (response.status === 200) {
          setStudentPreferences(response.data);
          setIsPreferenceAvailable(true);
        }
      })
      .catch((err) => {
        console.log("can't get Preferences : ", err);
      });

    setStudentDetails(student);
  };

  return (
    <div className="container-fluid my-5">
      <h3 className="my-3">Applicants List</h3>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">StudentId</th>
            <th scope="col">Name</th>
            <th scope="col">Marks</th>
            <th scope="col">Rank</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {isFullfilled
            ? studentsList.map((student) => {
              return (
                <tr>
                  <th scope="row">{student.id}</th>
                  <td>{student.name}</td>
                  <td>{student.marksInComp}</td>
                  <td>{student.rankInComp}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => showStudentDetails(student)}
                    >
                      Other Details
                    </button>
                  </td>
                </tr>
              );
            })
            : <h3 className="text-success">Processing..</h3>}
        </tbody>
        <h3 className="my-3"><u>Student Details</u>: </h3>
      </table>

      {studentDetails != null ? (
        <center><table className="table table-bordered w-75">
          <tbody>
            <tr>
              <th className="text-end">Name: </th>
              <td >{studentDetails.name}</td>
            </tr>
            <tr>
              <th className="text-end">Age: </th>
              <td>{studentDetails.age}</td>
            </tr>
            <tr>
              <th className="text-end">Email: </th>
              <td>{studentDetails.email}</td>
            </tr>
            <tr>
              <th className="text-end">Preferences: </th>
              <td>
                <table className="table table-primary">
                  {isPreferenceAvailabe && studentPreferences.length > 0 ? (
                    studentPreferences.map((pre, index) => {
                      return (
                        <>
                          <tr>
                            <td>{index + 1}.</td>
                            <td width={200}>{pre.collegePreference}</td>
                            <td>{pre.coursePreference}</td>
                            <td>&nbsp;</td>
                          </tr>
                        </>
                      );
                    })
                  ) : (
                    "N.A"
                  )}
                </table>
              </td>
            </tr>

            <tr>
              <th className="text-end">Address: </th>
              <td>
                <table className="table table-primary">
                  {studentDetails.address != null ? (
                    <>
                      <tr>
                        <th className="text-end" width={50}>City:</th>
                        <td  >-{studentDetails.address.city}</td>
                      </tr>
                      <tr>
                        <th className="text-end" width={50}>State:</th>
                        <td >-{studentDetails.address.state}</td>
                      </tr>
                      <tr>
                        <th className="text-end" width={50}>Country:</th>
                        <td >-{studentDetails.address.country}</td>
                      </tr>
                      <tr>
                        <th className="text-end" width={50}>Pincode:</th>
                        <td >-{studentDetails.address.pincode}</td>
                      </tr>
                    </>
                  ) : (
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                  )}
                </table>
              </td>
            </tr>

            <tr>
              <th className="text-end">Educational Qualification: </th>
              <td>
                <table className="table table-primary">
                  <tr>
                    <th>#</th>
                    <th>Standard</th>
                    <th>Stream</th>
                    <th>Percentage</th>
                    <th>Institute</th>
                    <th>Passing Year</th>
                  </tr>
                  {studentDetails.educationQualifationList.length > 0 ? (
                    studentDetails.educationQualifationList.map((edu, index) => {
                      return (
                        <tr>
                          <td>
                            {index+1}.
                          </td>
                          <td>
                            {edu.type}
                          </td>
                          <td>{edu.streamName}</td>
                          <td>{edu.percentage}</td>
                          <td>{edu.nameOfInstitute}</td>
                          <td>{edu.yearOfPassing}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td></td>
                    </tr>
                  )}
                </table>
              </td>
            </tr>


          </tbody>
        </table>
        </center>
      ) : (
        <h3></h3>
      )}
    </div>
  );
};

export default ListOfStudents;
