import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HomeServices from "../../Services/HomeServices";

const CoursePage = () => {
  const [courseDetails, setCourseDetails] = useState();
  const params = useParams();

  console.log(params);

  const getCourseData = () => {
    HomeServices.getCourseDetails(params.courseName)
      .then((response) => {
        console.log(response.data);
        setCourseDetails(response.data);
      })
      .catch((error) => {
        console.log("cant' access college details : ", error);
      });
  };

  useEffect(() => {
    getCourseData();
  }, []);

  return (
    <>
      <h1>Course Details : </h1>
      <div>{JSON.stringify(courseDetails)}</div>
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

export default CoursePage;
