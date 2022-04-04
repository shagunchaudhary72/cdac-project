import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CollegeCard from "../Cards/CollegeCard";
import { ImArrowRight2 } from "react-icons/im";
import HomeServices from "../../Services/HomeServices";

const Colleges = () => {

  const [collegeList, setCollegeList] = useState([]);
  

  const getCollegeList = () => {
    HomeServices.getListOfCollege().then( response =>{
      console.log(response.data);
      setCollegeList(response.data);

    }).catch( error => {
      console.log("error while getting College List :  ", error );
    })
  }

  useEffect(() =>{
    getCollegeList();
  },[]);

  return (
    <div className="container college-section ">
      <div className="row justify-content-center">
        <div className="col-3">
        <h1 className="text-center py-3 heading-bottom-border">Our Colleges</h1>
        </div>
      </div>
      <div className="row justify-content-between">
        {collegeList.map((college) => {
          return <CollegeCard key={college.id} collegeDetails={college} />;
        })}
      </div>
      <div className="row justify-content-end">
        <div className="col align-self-end ">
          <Link className="more-data" to="#">
            See more <ImArrowRight2 />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Colleges;
