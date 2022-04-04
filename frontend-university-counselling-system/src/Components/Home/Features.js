import React from "react";
import { MdLibraryBooks } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { FaCrown } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";


const Features = () => {
  return (
    <section className="container-fluid py-5 features-section text-success">
      <div className="row">
        <div className="col-3">
          <h3>
            <MdCastForEducation/>
          </h3>
          <h3>Trending Courses</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            suscipit fugiat sint totam soluta assume
          </p>
        </div>
        <div className="col-3">
        <h3>
            <MdLibraryBooks />
          </h3>
          <h3>Books & Library</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            suscipit fugiat sint totam soluta assume
          </p>
        </div>
        <div className="col-3">
        <h3>
            <GiTeacher/>
          </h3>
          <h3>Best Fecility</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            suscipit fugiat sint totam soluta assume
          </p>
        </div>
        <div className="col-3">
        <h3>
            <MdLibraryBooks />
          </h3>
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
