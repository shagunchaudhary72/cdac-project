import axios from "axios";

const STUDENT_API_SERVICE_URL = "http://localhost:8080/api";

const updateStudentDetails = (detachedStudent) => {
    return axios.put(STUDENT_API_SERVICE_URL + "/student/edit", detachedStudent);
}

const updateEducation = (id, education) => {
    return axios.put(STUDENT_API_SERVICE_URL + "/student/education/" + id, education);
}

const getEducationDetailsOfStudent = (id) =>{
    return axios.get(STUDENT_API_SERVICE_URL + "/student/educations/" + id);
}

export default { updateStudentDetails, updateEducation, getEducationDetailsOfStudent };