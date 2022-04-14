import axios from "axios";

const USER_API_SERVICE_URL = "http://localhost:8080/api/users";

const createUserAndStudent = (studentRegistration) =>{
    return axios.post(USER_API_SERVICE_URL + '/student/register',studentRegistration);
}

const login = (loginRequest) => {
    return axios.post(USER_API_SERVICE_URL + '/signin',loginRequest);
}

const updatePassword = (newPasswordObj) =>{
    return axios.put(USER_API_SERVICE_URL+'/updatePassword',newPasswordObj);
}

const userDetails = (email)=>{
    return axios.get(USER_API_SERVICE_URL+'/details/'+email);
}

const changePassword = (newPasswordObj) =>{
    return axios.put(USER_API_SERVICE_URL+"/changePassword",newPasswordObj);
}
export default {createUserAndStudent,login,updatePassword,userDetails,changePassword};
