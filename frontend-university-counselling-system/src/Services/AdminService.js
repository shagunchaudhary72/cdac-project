import axios from "axios";

const ADMIN_BASE_URL = "http://localhost:8080/admin";

const deleteCollegeDetails = (id) => {
  return axios.delete(ADMIN_BASE_URL + `/college/${id}`);
};

const getListOfStudents = () => {
  return axios.get(ADMIN_BASE_URL + "/students");
};

const getStudentsDetails = (id) => {
  return axios.get(ADMIN_BASE_URL + `/students/${id}`);
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

export default {
  deleteCollegeDetails,
  getListOfStudents,
  getStudentsDetails,
  deleteStudentsDetails,
  getListOfShortlistedStudents,
  getListOfShortlistedStudentsByCollege,
  getListOfShortlistedStudentsByCollegeCourse,
  declareResult,
  addNewCourseInUniversity
};
