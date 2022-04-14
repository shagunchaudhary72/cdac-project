import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import Colleges from "./Colleges";
import Courses from "./Courses";
import Events from "./Events";
import Features from "./Features";

const HomePage = () => {
  const email = window.sessionStorage.getItem("email");
  const [hideRegisterButton, setHideRegisterButton] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (email === null) {
      setHideRegisterButton(true);
    }
    else {
      setHideRegisterButton(false);
    }
  }, [])


  return (
    <>
      <section className="info-section container-fluid">
        <div className="first-section"></div>
        <div className="first-section-info-box">
          <h6><i>Welcome to the University Counselling System</i></h6>
          <p>
            {" "} We are here to simplify your counselling experience through our new Counselling system.
            This is the first step towards building your bright future. We are always working in the best interest for you.
            Get ready to feel the hassle-free experience. Together we will attain new heights!
            {" "}
          </p>
          {hideRegisterButton && <Link
            className="registration-btn registration-btn1"
            to="/register/college"
          >
            <button className="btn btn-sm text-white">College Registration</button>
          </Link>}
          {hideRegisterButton && <Link
            className="registration-btn registration-btn2"
            to="/register/student"
          >
            <button className="btn btn-sm text-white">Student Registration</button>
          </Link>}
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
