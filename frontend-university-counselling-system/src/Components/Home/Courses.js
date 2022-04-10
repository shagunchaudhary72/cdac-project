import React, { useEffect, useState } from "react";
import CourseCard from "../Cards/CourseCard";
import { ImArrowRight2 } from "react-icons/im";
import { Link } from "react-router-dom";
import HomeServices from '../../Services/HomeServices'
import "./Course.css";

const Courses = () => {

  const [courseList, setCourseList] = useState([]);
  const [ isFullfilled, setIsFulfilled ] = useState(false);

  const getCourseList = () => {
    HomeServices.getListOfCourse().then( response => {
      if( response.status === 200 ){
        console.log(response.data);
        setCourseList(response.data);
        setIsFulfilled(true);
      }
    }).catch( error => {
      console.log( "error : ", error);
    });
  }

  useEffect(() => {
    getCourseList();
  },[ isFullfilled]);

  return (
    <div className="course-section">
        <div className="course-section-row1">
          <h1 className="text-center py-3 heading-bottom-border">
            Our Courses
          </h1>
      </div>
      <div className="course-section-row2">
        { isFullfilled ? courseList.slice(0,3).map((course) => {
          return <CourseCard key={course.id} courseDetails={course} />;
        }) : <h3 className="text-center text-success">No Data Available.......</h3>}
      </div>
        {
          isFullfilled &&
        <div className="course-section-row3 ">
          <Link className=" more-data" to="/courses">
            See more <ImArrowRight2 />{" "}
          </Link>
      </div>
        }
    </div>
  );
};

export default Courses;
