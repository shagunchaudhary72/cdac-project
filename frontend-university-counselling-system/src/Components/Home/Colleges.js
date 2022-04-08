import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CollegeCard from "../Cards/CollegeCard";
import { ImArrowRight2 } from "react-icons/im";
import HomeServices from "../../Services/HomeServices";
import './Colleges.css'

const Colleges = () => {

  const [collegeList, setCollegeList] = useState([]);
  const [ isFullfilled, setIsFulfilled ] = useState(false);


  const getCollegeList = () => {
    HomeServices.getListOfCollege().then( response =>{
      if( response.status === 200 ){
        setIsFulfilled(true);
        console.log(response.data);
        setCollegeList(response.data);
      }

    }).catch( error => {
      console.log("error while getting College List :  ", error );
    })
  }

  useEffect(() =>{
    getCollegeList();
  },[isFullfilled]);

  return (
    <div className="college-section ">
      <div className="college-section-row1">
        <h1 className="text-center py-3 heading-bottom-border">Our Colleges</h1>
      </div>
      <div className="college-section-row2">
        { isFullfilled ? collegeList.map((college) => {
          return <CollegeCard key={college.id} collegeDetails={college} />;
        }) : <h3 className="text-center text-success">No Data Available........</h3>}
      </div>
        {
           isFullfilled &&  
       <div className="college-section-row3">
          <Link className="more-data" to="/colleges">
            See more <ImArrowRight2 />{" "}
          </Link>
        </div>
      }
    </div>
  );
};

export default Colleges;
