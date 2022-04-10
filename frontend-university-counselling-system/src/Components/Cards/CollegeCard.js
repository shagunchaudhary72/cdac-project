import React from "react";
import { useNavigate } from "react-router-dom";
import "./CollegeCard.css";
import { AiFillStar } from "react-icons/ai";

const CollegeCard = ({ collegeDetails }) => {
  const navigate = useNavigate();

  const collegePage = () => {
    navigate(`/college_details/${collegeDetails.name}`);
  };

  return (

      <div
        className="card college-card"
        style={{ width: "18rem" }}
        onClick={collegePage}
      >
        <img
          src="https://mycareersview.com/afile/mcv16700_CDAC.jpg"
          className="card-img-top"
          alt="CollegeImage"
        />
        <div className="card-body">
          <h5 className="card-title"  style={{ color: "var(--green-color)" }}>College : {collegeDetails.name}</h5>
          <p className="card-text">
            University : CDAC
          </p>
          <p className="card-text">
            Available Courses :{" "}

            {  collegeDetails.courses.map((course) => {
              return course.courseName+" ";
            })  }
          </p>
          <p className="card-text">
            Address : {  collegeDetails.city }, {  collegeDetails.state  }, INDIA
          </p>
          <p className="card-text">
            <span className="text-secondary">
              {" "}
              Total Seats : {  collegeDetails.totalSeats }
            </span>
            <AiFillStar style={{ color: "var(--green-color)" }} />
            <AiFillStar style={{ color: "var(--green-color)" }} />
            <AiFillStar style={{ color: "var(--green-color)" }} />
          </p>
        </div>
      </div>

  );
};

export default CollegeCard;
