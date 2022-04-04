import axios from "axios";

const USER_API_SERVICE_URL = "http://localhost:8080/api/users";

const createUserAndStudent = (studentRegistration) =>{
    return axios.post(USER_API_SERVICE_URL + '/student/register',studentRegistration);
}

const login = (loginRequest) => {
    return axios.post(USER_API_SERVICE_URL + '/signin',loginRequest);
}

export default {createUserAndStudent,login};
