import axios from "axios";

const STUDENT_API_SERVICE_URL = "http://localhost:8080/api";

const updateStudentDetails = (detachedStudent) => {
    return axios.put(STUDENT_API_SERVICE_URL + "/student/edit", detachedStudent);
}

const updateEducation = (id, education) => {
    return axios.put(STUDENT_API_SERVICE_URL + "/student/education/" + id, education);
}

const getEducationDetailsOfStudent = (id) => {
    return axios.get(STUDENT_API_SERVICE_URL + "/student/educations/" + id);
}

const addPreference = (id, preference) => {
    return axios.post(STUDENT_API_SERVICE_URL + "/students/" + id + "/preference", preference);
}

const getPreferences = (id) => {
    return axios.get(STUDENT_API_SERVICE_URL + "/students/preference/" + id);
}

const deletePreference = (studentId, preferenceId) => {
    return axios.delete(STUDENT_API_SERVICE_URL + "/student/" + studentId + "/preference/" + preferenceId);
}

const deleteEducation = (educationId, studentId) => {
    return axios.delete(STUDENT_API_SERVICE_URL + "/student/" + studentId + "/education/" + educationId);
}

const getResult = (studentId) => {
    return axios.get(STUDENT_API_SERVICE_URL + "/student/counselling_result/" + studentId);
}

export default { updateStudentDetails, updateEducation, getEducationDetailsOfStudent, addPreference, getPreferences, deletePreference, deleteEducation, getResult };