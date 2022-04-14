import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeServices from "../../Services/HomeServices";
import { FaUniversity } from "react-icons/fa";

const CollegePage = () => {
  const params = useParams();
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [email, setEmail] = useState("");
  const [courses,setCourses] = useState([]);
  const [phone,setPhone] = useState("");
  console.log(params.name);

  const getCollegeData = () => {
    HomeServices.getCollegeDetails(params.name)
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
        setPlace(response.data.city + ", " + response.data.state + ", " + response.data.country);
        setEmail(response.data.email);
        setCourses(response.data.courses);
        setPhone(response.data.phoneNo);

      })
      .catch((error) => {
        console.log("cant' access college details : ", error);
      });
  };

  useEffect(() => {
    getCollegeData();
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="container" style={{ marginTop:"5%",marginBottom: "5%" }}>
      <div className="row">
        <center><div className="col-md-4 w-50" >
          <div className="card p-3 mb-2" style={{ backgroundColor: "#23694d", color: "white", textAlign:"left" }}>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <FaUniversity width={300} height={500} />
                <div className="ms-2 c-details">
                  <h2 className="mb-0 display-5">{name}</h2>
                </div>
              </div>
              <div class="badge"> <span>Phone: {phone}</span> </div>
            </div>
            <div className="mt-3 bg-light rounded text-dark">
              <div className="m-3">
                <p><b>Place:</b> {place}<br />
                  <b>Email:</b> {email}</p>
                  <b>Course Offering: </b><br/>{courses.map((ele,key)=>{
                    return (
                      <>
                      {(key+1)+"." + ele.courseName}<br/>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        </center>
      </div>
    </div>
  );
};

export default CollegePage;
