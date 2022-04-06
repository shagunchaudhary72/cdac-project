import axios from "axios";

const HOME_BASE_URL = 'http://localhost:8080/home';



        const getListOfCollege = () => {
          return axios.get( HOME_BASE_URL + '/colleges');
        }

        const getListOfCourse = () => {
            return axios.get( HOME_BASE_URL + '/courses');
        }

        const getCollegeDetails = ( name ) => {
            return axios.get( HOME_BASE_URL + `/college_details/${name}`);
        }
        // const getCollegeDetails = ( id ) => {
        //     return axios.get( HOME_BASE_URL + `/college/${id}`);
        // }

        const getCourseDetails = (courseName) => {
            return axios.get( HOME_BASE_URL + `/course_details/${courseName}`);
        }
                // const getCollegeDetails = ( id ) => {
        //     return axios.get( HOME_BASE_URL + `/course/${id}`);
        // }


export default {getListOfCollege, getListOfCourse, getCollegeDetails, getCourseDetails}