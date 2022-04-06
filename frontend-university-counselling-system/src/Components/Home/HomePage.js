import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import Colleges from "./Colleges";
import Courses from "./Courses";
import Events from "./Events";
import Features from "./Features";

const HomePage = () => {
  return (
    <>
      <section className="info-section container-fluid">
        <div className="first-section"></div>
        <div className="first-section-info-box">
          <h2>Hello</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.{" "}
          </p>
          <Link className="registration-btn" to="/register/college">
            College Registration
          </Link>
          <Link className="registration-btn" to="/register/student">
            Student Registration
          </Link>
        </div>
      </section>

      <div className="colleges">
        <Colleges />
      </div>
      <div className="courses">
        <Courses />
      </div>
      <div className="features">
        <Features />
      </div>
      <div className="events">
        <Events />
      </div>
    </>
  );
};

export default HomePage;
