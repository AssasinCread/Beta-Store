import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FaFacebookF, FaLinkedin, FaGoogle } from "react-icons/fa";
import "./Sign.scss";

const Sign = () => {
  const navigate = useNavigate();

  return (
    <div className="sign_up_wrapper">
      <div className="sign_up_box">
        <form action="">
          <h2>Sign Up</h2>
          <div className="input-box">
            <span className="icons">
              <AiOutlineMail />
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icons">
              <AiOutlineLock />
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <button type="submit">Create accout</button>
          <div className="or">
            <h3>Or</h3>
          </div>
          <div className="social_icons">
            <div>
              <FaGoogle size={20} />
            </div>
            <div>
              <FaFacebookF size={20} />
            </div>
            <div>
              <FaLinkedin size={20} />
            </div>
          </div>
          <div className="back_to_login">
            <p>Alredy a user ?</p>
            <span onClick={() => navigate("/login")}>Login now</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign;
