import axios from "axios";

const ADMIN_BASE_URL = "http://localhost:8080/admin";

const deleteCollegeDetails = (id) => {
  return axios.delete(ADMIN_BASE_URL + `/college/${id}`);
};

const getListOfStudents = () => {
  return axios.get(ADMIN_BASE_URL + "/students");
};

const getListOfColleges = () => {
  return axios.get(ADMIN_BASE_URL + "/colleges");
}

const getListOfCourses = () => {
  return axios.get(ADMIN_BASE_URL + "/courses");
}

const getStudentDetails = (id) => {
  return axios.get(ADMIN_BASE_URL + `/student/${id}`);
};

const deleteStudentsDetails = (id) => {
  return axios.delete(ADMIN_BASE_URL + `/students/${id}`);
};

const getListOfShortlistedStudents = () => {
  return axios.get(ADMIN_BASE_URL + `/shortlisted_students`);
};

const getListOfShortlistedStudentsByCollege = (id) => {
  return axios.get(ADMIN_BASE_URL + `/shortlisted_students/college/${id}`);
};

const getListOfShortlistedStudentsByCollegeCourse = (collegeId, courseId) => {
  return axios.get(
    ADMIN_BASE_URL +
      `/shortlisted_students/college/${courseId}/course/${courseId}`
  );
};

const declareResult = () => {
  return axios.get(ADMIN_BASE_URL + `/declare_result`);
};

const addNewCourseInUniversity = (newCourse) => {
  return axios.post(ADMIN_BASE_URL + `/course`, newCourse);
};

const updateDates = (emailId,dates)=>{
  return axios.put(ADMIN_BASE_URL+"/dateupdation/"+emailId,dates);
}

const getAcademicDates = () =>{
  return axios.get(ADMIN_BASE_URL+"/academic_dates");
}

const getCount = () =>{
  return axios.get(ADMIN_BASE_URL+"/count");
}

export default {
  deleteCollegeDetails,
  getListOfStudents,
  getStudentDetails,
  deleteStudentsDetails,
  getListOfShortlistedStudents,
  getListOfShortlistedStudentsByCollege,
  getListOfShortlistedStudentsByCollegeCourse,
  declareResult,
  addNewCourseInUniversity,
  updateDates,
  getAcademicDates,
  getCount,
  getListOfColleges,
  getListOfCourses
};
