import React from "react";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const ExtraInfo = () => {
  return (
    <section className="container-fluid extra-info-section py-5 text-white bg-dark">
      <div className="row justify-content-around">
        <div className="col-4">
          <h3>About University</h3>
          <ul>
            <li>Phone : +123 456-7890</li>
            <li>Email : Info@youremail.com</li>
            <li>Address : 123, Maharastra, INDIA</li>
            <div className="container social-sites-logo">
              <div className="row justify-content-start">
                <div className="col">
                  <AiFillTwitterCircle />
                </div>
                <div className="col">
                  <BsFacebook />
                </div>
                <div className="col">
                  <AiFillInstagram />
                </div>
                <div className="col">
                  <AiFillYoutube />
                </div>
                <div className="col">
                  <AiFillLinkedin />
                </div>
              </div>
            </div>
          </ul>
        </div>
        <div className="col-4">
        <h3>About University</h3>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Our Colleges</li>
            <li>Our COurses</li>
            <li>Upcoming Events</li>
            <li>Faq's</li>
        </ul>
        </div>
        <div className="col-4">
            <h3>Opening Hours</h3>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <ul>
                            <li>Saturday-Sunday</li>
                            <li>Monday-Tuesday</li>
                            <li>Wednesday</li>
                            <li>Thursday</li>
                            <li>Friday</li>
                        </ul>
                    </div>
                    <div className="col-6">
                    <ul>
                            <li>09am - 05pm</li>
                            <li>09am - 05pm</li>
                            <li>09am - 05pm</li>
                            <li>09am - 05pm</li>
                            <li style={{backgroundColor:"var(--green-color)"}}>Closed</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraInfo;
