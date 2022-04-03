import axios from 'axios';

const USER_API_SERVICE_URL = "http://localhost:8080/api/users";

    const createCollege = (college) => {
        return axios.post(USER_API_SERVICE_URL+"/college/register", college);
    }

    const login = (loginRequest) => {
        return axios.post(USER_API_SERVICE_URL + '/signin', loginRequest);
    }

export default {createCollege, login}