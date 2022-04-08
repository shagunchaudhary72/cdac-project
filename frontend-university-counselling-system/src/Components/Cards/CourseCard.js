import React from "react";
import { useNavigate } from "react-router-dom";
import {ImStack} from 'react-icons/im'

const CourseCard = ({courseDetails}) => {
  const navigate = useNavigate();

  const coursePage = () => {
      navigate(`/course_details/${courseDetails.courseName}`);
  }

  return (
      <div className="card" style={{width:'18rem'}} onClick={coursePage}>
        <img src="https://lh3.googleusercontent.com/-czp6MLnxDOI/Ybb04CZoR2I/AAAAAAAAAf8/46zyVhzsnZcfhFd0u6sjZq39hgH1_55jQCNcBGAsYHQ/s1600/1639380189261302-0.png" className="card-img-top" alt="courseImage" />
        <div className="card-body">
          <h5 className="card-title">Course : {courseDetails.courseName}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <h3 className='card-text'><ImStack className="text-success"/></h3>
        </div>
    </div>
  );
};

export default CourseCard;
