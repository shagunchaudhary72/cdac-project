import React, { useEffect, useState } from "react";
import AdminService from "../../Services/AdminService";
import HomeServices from "../../Services/HomeServices";

const DeclareResult = () => {
  const [isDeclared, setIsDeclared] = useState(false);
  const [shortlistedStudents, setShortlistedStudents] = useState([]);
  const [filteredShortlistedStudents, setFilteredShortlistedStudents] =
    useState([]);
  const [courseList, setCourseList] = useState([]);
  const [filteredCourseList, setFilteredCourseList] = useState([]);
  const [collegeList, setCollegeList] = useState([]);
  const [collegeChoice, setCollegeChoice] = useState("All Colleges");
  const [courseChoice, setCourseChoice] = useState("All Courses");

  const getCollegeList = () => {
    HomeServices.getListOfCollege()
      .then((response) => {
        if (response.status === 200) {
          setCollegeList(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCourseList = () => {
    HomeServices.getListOfCourse()
      .then((response) => {
        if (response.status === 200) {
          setCourseList(response.data);
          setFilteredCourseList(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    AdminService.getListOfShortlistedStudents()
      .then((response) => {
        if (response.status === 200) {
          if (response.data.length > 0) {
            console.log("shortlisted : ", response.data);
            setShortlistedStudents(response.data);
            setFilteredShortlistedStudents(response.data);
            setIsDeclared(true);
            getCollegeList();
            getCourseList();
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

  const shortlistedStudentsHandler = (collegeValue, courseValue) => {

    if (collegeValue === "All Colleges") {
      setFilteredCourseList(courseList);

      if (courseValue === "All Courses") {
        setFilteredShortlistedStudents(shortlistedStudents);
      } else {
        setFilteredShortlistedStudents(
          shortlistedStudents.filter(
            (student) => student.courseName === courseValue
          )
        );
      }
    } else {
      setFilteredCourseList(
        collegeList.filter((college) => college.name === collegeValue)[0]
          .courses
      );

      if (courseValue === "All Courses") {
        setFilteredShortlistedStudents(
          shortlistedStudents.filter(
            (student) => student.collegeName === collegeValue
          )
        );
      } else {
        setFilteredShortlistedStudents(
          shortlistedStudents.filter(
            (student) =>
              student.collegeName === collegeValue &&
              student.courseName === courseValue
          )
        );
      }
    }
  };

  const collegeChoiceHandler = (e) => {
    const value = e.target.value;
    setCollegeChoice(value);
    shortlistedStudentsHandler(value, courseChoice);
  };

  const courseChoiceHandler = (e) => {
    const value = e.target.value;
    setCourseChoice(value);
    shortlistedStudentsHandler(collegeChoice, value);
  };

  useEffect(() => {}, [collegeChoice, courseChoice]);

  return (
    <>
      <div className="container my-5 mx-2">
        {!isDeclared && (
          <>
            <center>
              <div className="border border-1 border-secondary w-25 rounded">
                <div className="p-2">
                  <h3 className="my-3 dashboard-data-section-heading">Result Status</h3>
                  <hr />
                  <p className="text-danger dashboard-data-section-para">Not declared yet..</p>
                  <button className="btn btn-success" onClick={declareResult}>
                    Declare Result
                  </button>
                </div>
              </div>
            </center>
          </>
        )}

        {isDeclared && (
          <h3 className="my-3 text-success dashboard-data-section-heading">Result has been declared </h3>
        )}
        {isDeclared && (
          <>
            <h3 className="my-3 dashboard-data-section-heading">Shortlisted Students List :</h3>
            <div className="students-filter">
              <p className="fs-5 text-secondary dashboard-data-section-para">Apply Filters :- </p>
              <div className="mb-3 filter-container">
                <select
                  id="select-college"
                  class="form-select"
                  value={collegeChoice}
                  onChange={collegeChoiceHandler}
                >
                  <option value="All Colleges">All Colleges</option>
                  {collegeList.map((college) => {
                    return <option value={college.name}>{college.name}</option>;
                  })}
                </select>
              </div>
              <div className="mb-3 filter-container">
                <select
                  id="select-course"
                  class="form-select"
                  value={courseChoice}
                  onChange={courseChoiceHandler}
                >
                  <option value="All Courses">All Courses</option>
                  {filteredCourseList.map((course) => {
                    return (
                      <option value={course.courseName}>
                        {course.courseName}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </>
        )}
        {isDeclared && (
          <div className="table-responsive">
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
                filteredShortlistedStudents.map((student) => {
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
          </div>
        )}
      </div>
    </>
  );
};

export default DeclareResult;
