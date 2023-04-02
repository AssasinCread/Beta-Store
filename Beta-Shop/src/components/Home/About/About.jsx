import React from "react";
import "./About.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import team from "../../../assets/team-poster.webp";

const About = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="content-section">
          <div className="title">
            <h1>About Us</h1>
          </div>
          <div className="content">
            <h3>Welcome to my test Beta | Store site hope you like it.</h3>
            <p>
              Beta | Store is a Professional eCommers Platform. Here we will
              provide you only interesting content, which you will like very
              much. We're dedicated to providing you the best products. We hope
              you enjoy our store products as much as we enjoy offering them to
              you.We will keep posting more important posts on my Website for
              all of you. Please give your support and love.
            </p>
            <div className="btn">Read more</div>
            <div className="social-icons">
              <div className="icon">
                <FaFacebookF size={14} />
              </div>
              <div className="icon">
                <FaTwitter size={14} />
              </div>
              <div className="icon">
                <FaInstagram size={14} />
              </div>
              <div className="icon">
                <FaLinkedin size={14} />
              </div>
            </div>
          </div>
        </div>
        <div className="img-section">
          <img src={team} alt="team poster" />
        </div>
      </div>
    </div>
  );
};

export default About;
