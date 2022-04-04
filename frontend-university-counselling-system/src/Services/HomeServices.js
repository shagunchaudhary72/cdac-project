import axios from "axios";

const HOME_BASE_URL = 'http://localhost:8080/home';

const HomeServices = () => {

        const getListOfCollege = () => {
          return axios.get( HOME_BASE_URL + '/colleges');
        }

        const getListOfCourses = () => {
            return axios.get( HOME_BASE_URL + '/courses');
        }

        const getCollegeDetails = () => {
            return axios.get( HOME_BASE_URL + '/college', collegeId);
        }

        const getCourseDetails = () => {
            return axios.get( HOME_BASE_URL + '/course', courseId);
        }
}

export default HomeServices