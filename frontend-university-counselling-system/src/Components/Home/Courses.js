import React, { useEffect, useState } from "react";
import CourseCard from "../Cards/CourseCard";
import { ImArrowRight2 } from "react-icons/im";
import { Link } from "react-router-dom";
import HomeServices from '../../Services/HomeServices'
import "./Course.css";

const Courses = () => {

  const [courseList, setCourseList] = useState([]);

  const getCourseList = () => {
    HomeServices.getListOfCourse().then( response => {
      console.log(response.data);
      setCourseList(response.data);
    }).catch( error => {
      console.log( "error : ", error);
    });
  }

  useEffect(() => {
    getCourseList();
  },[]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-3 align-self-center">
          <h1 className="text-center py-3 course-heading heading-bottom-border">
            Our Courses
          </h1>
        </div>
      </div>
      <div className="row justify-content-between">
        {courseList.map((course) => {
          return <CourseCard key={course.id} courseDetails={course} />;
        })}
      </div>
      <div className="row justify-content-end">
        <div className="col align-self-end">
          <Link className=" more-data" to="#">
            See more <ImArrowRight2 />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
