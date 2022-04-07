import axios from "axios";

const COLLEGE_SERVICE_API_URL = "http://localhost:8080/college";

const getAllCollege = () => {
    return axios.get(COLLEGE_SERVICE_API_URL);
}

const getCoursesOfCollge = (name) =>{
    return axios.get(COLLEGE_SERVICE_API_URL+"/"+name+"/courses");
}

export default { getAllCollege,getCoursesOfCollge };