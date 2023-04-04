import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FaFacebookF, FaLinkedin, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import "./Sign.scss";

const initialUser = { email: "", password: "", username: "" };

const Sign = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(initialUser);

  const signUp = async () => {
    try {
      const url = `http://localhost:1337/api/auth/local/register`;
      if (user.username && user.email && user.password) {
        const res = await axios.post(url, user);
        if (res) {
          setUser(initialUser);
          navigate("http://localhost:3000/login");
        }
        console.log({ res });
      }
    } catch (error) {
      console.log({ error });
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  const handleUserChange = ({ target }) => {
    const { name, value } = target;

    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };
  return (
    <div className="sign_up_wrapper">
      <div className="sign_up_box">
        <form action="">
          <h2>Sign Up</h2>
          <div className="input-box">
            <span className="icons">
              <AiOutlineUser />
            </span>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleUserChange}
              required
            />
            <label>Username</label>
          </div>
          <div className="input-box">
            <span className="icons">
              <AiOutlineLock />
            </span>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleUserChange}
              required
            />
            <label>Password</label>
          </div>
          <div className="input-box">
            <span className="icons">
              <AiOutlineMail />
            </span>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleUserChange}
              required
            />
            <label>Email</label>
          </div>
          <button type="submit" onClick={signUp}>
            Create accout
          </button>
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
