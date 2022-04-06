import React, { useEffect, useState } from "react";
import CollegeCard from "../Cards/CollegeCard";
import HomeServices from "../../Services/HomeServices";


const CollegeList = () => {

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
    </div>
  );
};

export default CollegeList;
