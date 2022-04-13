import React, { useEffect, useState } from "react";
import CollegeCard from "../Cards/CollegeCard";
import HomeServices from "../../Services/HomeServices";
import '../Home/Colleges.css'


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
    window.scrollTo(0,0);
  },[]);

  return (
    <div className="college-section my-5 ">
   
        <div className="college-section-row1">
        <h1 className="text-center py-3 heading-bottom-border">Our Colleges</h1>
        </div>
  
      <div className="college-section-row2">
        {collegeList.map((college) => {
          return <CollegeCard key={college.id} collegeDetails={college} />;
        })}
      </div>
    </div>
  );
};

export default CollegeList;
