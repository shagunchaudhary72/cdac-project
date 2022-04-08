import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeServices from "../../Services/HomeServices";

const CollegePage = () => {
  const [collegeDetails, setCollegeDetails] = useState();
  const params = useParams();

  console.log(params.name);

  const getCollegeData = () => {
    HomeServices.getCollegeDetails(params.name)
      .then((response) => {
        console.log(response.data);
        setCollegeDetails(response.data);
      })
      .catch((error) => {
        console.log("cant' access college details : ", error);
      });
  };

  useEffect(() => {
    getCollegeData();
  }, []);

  return (
    <>
      <h1>College Details:</h1>
      <div>{JSON.stringify(collegeDetails)}</div>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat
      </h3>
    </>
  );
};

export default CollegePage;
