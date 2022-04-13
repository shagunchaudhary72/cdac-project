import axios from 'axios';

const USER_API_SERVICE_URL = "http://localhost:8080/api/users";
const COLLEGE_SERVICE_API_URL = "http://localhost:8080/college";

const getAllCollege = () => {
    return axios.get(COLLEGE_SERVICE_API_URL);
}

const getCoursesOfCollge = (name) => {
    return axios.get(COLLEGE_SERVICE_API_URL + "/" + name + "/courses");
}

const createCollege = (college) => {
    return axios.post(USER_API_SERVICE_URL + "/college/register", college);
}

const login = (loginRequest) => {
    return axios.post(USER_API_SERVICE_URL + '/signin', loginRequest);
}

const updateCollegeDetails = (college) => {
    return axios.put("http://localhost:8080/college/edit", college);
}

const getCourseList = () => {
    return axios.get("http://localhost:8080/college/courseList");
}

const getCollegeProfile = (collegeId) => {
    return axios.get("http://localhost:8080/college/profile/" + collegeId);
}

const getShortlistedStudents= (collegeId) => {
    return axios.get(COLLEGE_SERVICE_API_URL+"/"+collegeId+"/shortlisted_students")
}



export default { createCollege, login, updateCollegeDetails, getCourseList, getCollegeProfile, getAllCollege, getCoursesOfCollge, getShortlistedStudents }