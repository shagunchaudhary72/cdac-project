import React, { useEffect, useState } from "react";
import CourseCard from "../Cards/CourseCard";
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
    <div className="course-section my-5">
        <div className="course-section-row1">
          <h1 className="text-center py-3 course-heading heading-bottom-border">
            Our Courses
          </h1>
      </div>
      <div className="course-section-row2">
        {courseList.map((course) => {
          return <CourseCard key={course.id} courseDetails={course} />;
        })}
      </div>
    </div>
  );
};

export default CourseList;
