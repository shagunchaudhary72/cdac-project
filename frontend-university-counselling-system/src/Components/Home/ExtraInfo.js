import React from "react";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineRight,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import "./ExtraInfo.css";

const ExtraInfo = () => {
  return (
    <section className="container-fluid extra-info-section bg-dark text-white">
      <div className="extra-info-section-left">
        <h3>About University</h3>
        <ul className="extra-info-section-list">
          <li>Phone : +123 456-7890</li>
          <li>Email : Info@youremail.com</li>
          <li>Address : 123, Maharastra, INDIA</li>
          <div className="social-sites-logo">
            <div className="twitter-logo">
              <AiFillTwitterCircle />
            </div>
            <div className="facebook-logo">
              <BsFacebook />
            </div>
            <div className="instagram-logo">
              <AiFillInstagram />
            </div>
            <div className="youtube-logo">
              <AiFillYoutube />
            </div>
            <div className="linkedin-logo">
              <AiFillLinkedin />
            </div>
          </div>
        </ul>
      </div>

      <div className="extra-info-section-middle">
        <h3>About University</h3>
        <ul className="extra-info-section-list">
          <li>
            <AiOutlineRight /> Home
          </li>
          <li>
            <AiOutlineRight /> About
          </li>
          <li>
            <AiOutlineRight /> Our Colleges
          </li>
          <li>
            <AiOutlineRight /> Our COurses
          </li>
          <li>
            <AiOutlineRight /> Upcoming Events
          </li>
          <li>
            <AiOutlineRight /> Faq's
          </li>
        </ul>
      </div>

      <div className="extra-info-section-right">
        <h3>Opening Hours</h3>
        <div className="extra-info-section-right-inner">
            <ul className="extra-info-section-list time-table">
              <li>
                <span>Sat-Sun</span>
                <span>09am - 05pm</span>
              </li>
              <li>
                <span>Mon-Tue</span>
                <span>09am - 05pm</span>
              </li>
              <li>
                <span>Wed</span>
                <span>09am - 05pm</span>
              </li>
              <li>
                <span>Thu</span>
                <span>09am - 05pm</span>
              </li>
              <li>
                <span>Fri</span> <span style={{backgroundColor:'var(--green-color)',padding:'3px 7px', borderRadius:'10px'}}>Closed</span>
              </li>
            </ul>
          </div>
        </div>
    </section>
  );
};

export default ExtraInfo;
