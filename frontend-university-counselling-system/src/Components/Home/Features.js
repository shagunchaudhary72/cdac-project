import React from "react";
import { MdLibraryBooks } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { FaCrown } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import "./Features.css";

const Features = () => {
  return (
    <section className="py-5 features-section text-success">
      <div className="features-section-img"></div>
      <div className="features-section-data">
        <div className="features-section-data-card">
          <p className="features-section-data-logo">
            <MdCastForEducation />
          </p>
          <h3>Trending Courses</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            suscipit fugiat sint totam soluta assume
          </p>
        </div>
        <div className="features-section-data-card">
          <p className="features-section-data-logo">
            <MdLibraryBooks />
          </p>
          <h3>Books & Library</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            suscipit fugiat sint totam soluta assume
          </p>
        </div>
        <div className="features-section-data-card">
          <p className="features-section-data-logo">
            <GiTeacher />
          </p>
          <h3>Best Facility</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            suscipit fugiat sint totam soluta assume
          </p>
        </div>
        <div className="features-section-data-card">
          <p className="features-section-data-logo">
            <MdLibraryBooks />
          </p>
          <h3>Certified Teachers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            suscipit fugiat sint totam soluta assume
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
