import React, { useState } from "react";
import CollegeCard from "../Cards/CollegeCard";

const Colleges = () => {
    const list = [
        { id: 1, name: "ACTS" },
        { id: 2, name: "Sunbeam" },
        { id: 3, name: "Knowledge Park" },
        { id: 4, name: "Electronic City" },
      ];
  const [collegeList, setCollegeList] = useState(list);


  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center py-5">Our Colleges</h1>
      </div>
      <div className="row justify-content-between">
      {collegeList.map((college) => {
        return <CollegeCard key={college.id} collegeDetails={college}/> 
      })}
      </div>
    </div>
  );
};

export default Colleges;
