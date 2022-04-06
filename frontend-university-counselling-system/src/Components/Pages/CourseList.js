import React, { useEffect, useState } from "react";
import CourseCard from "../Cards/CourseCard";
import { ImArrowRight2 } from "react-icons/im";
import { Link } from "react-router-dom";
import HomeServices from '../../Services/HomeServices'

const CourseList = () => {

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
    </div>
  );
};

export default CourseList;
