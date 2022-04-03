import axios from "axios";

const STUDENT_API_SERVICE_URL = "http://localhost:8080/api";

const updateStudentDetails = (detachedStudent) => {
    return axios.put(STUDENT_API_SERVICE_URL + "/student/edit",detachedStudent);
}

export default {updateStudentDetails};