import React, { useState } from "react";
import CourseCard from "../Cards/CourseCard";

const Courses = () => {
    const list = [
        { id: 1, name: "ACTS" },
        { id: 2, name: "Sunbeam" },
        { id: 3, name: "Knowledge Park" },
        { id: 4, name: "Electronic City" },
      ];
  const [courseList, setCourseList] = useState(list);


  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center py-5">Our Courses</h1>
      </div>
      <div className="row justify-content-between">
      {courseList.map((course) => {
        return <CourseCard key={course.id} courseDetails={course}/> 
      })}
      </div>
    </div>
  );
};

export default Courses;
