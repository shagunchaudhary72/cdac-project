import React, { useEffect, useState } from "react";
import AdminService from "../../Services/AdminService";

const DeclareResult = () => {
  const [isDeclared, setIsDeclared] = useState(false);
  const [shortlistedStudents, setShortlistedStudents] = useState();

  useEffect(() => {
    AdminService.getListOfShortlistedStudents()
      .then((response) => {
        if (response.status === 200) {
          if (response.data.length > 0) {
            console.log("shortlisted : ", response.data);
            setShortlistedStudents(response.data);
            setIsDeclared(true);
          }
        }
      })
      .catch((error) => {
        console.log("can't get shortlistedstudents : ", error);
      });
  }, [isDeclared]);

  const declareResult = () => {
    AdminService.declareResult()
      .then((response) => {
        if (response.status) {
          console.log(response.data);
          setShortlistedStudents(response.data);
          setIsDeclared(true);
        }
      })
      .catch((error) => console.log("in declare result : ", error));
  };

  return (
    <>
      <div className="container my-5 mx-2">
        {!isDeclared && (
          <>
            <center>
              <div className="border border-1 border-secondary w-25 rounded">
                <div className="p-2">
                  <h3 className="my-3">Result Status</h3>
                  <hr/>
                  <p className="text-danger">Not declared yet..</p>
                  <button className="btn btn-success" onClick={declareResult}>
                    Declare Result
                  </button>
                </div>
              </div>
            </center>
          </>
        )}

        {isDeclared &&
          <h3 className="my-3 text-success">Result has been declared </h3>
        }
        {isDeclared && <h3 className="my-3">Shortlisted Students List :</h3>}
        {isDeclared && (
          <table className="table table-success table-striped w-75">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Marks</th>
                <th scope="col">Rank</th>
                <th scope="col">College</th>
                <th scope="col">Course</th>
                <th scope="col">University</th>
              </tr>
            </thead>
            <tbody>
              {isDeclared &&
                shortlistedStudents.map((student) => {
                  return (
                    <tr>
                      <th scope="row">{student.studentId}</th>
                      <td scope="row">{student.name}</td>
                      <td scope="row">{student.markInComp}</td>
                      <td scope="row">{student.rankInComp}</td>
                      <td scope="row">{student.collegeName}</td>
                      <td scope="row">{student.courseName}</td>
                      <td scope="row">{student.universityName}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default DeclareResult;
