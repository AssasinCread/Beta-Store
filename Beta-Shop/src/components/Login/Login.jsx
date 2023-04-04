import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import "./Login.scss";

const initialUser = { password: "", identifire: "" };

const Login = () => {
  const [user, setUser] = useState(initialUser);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const url = `http://localhost:1337/api/auth/local`;
    try {
      if (user.identifire && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          toast.success("Logged in successfully!", {
            hideProgressBar: true,
          });
          setUser(initialUser);
          navigate("/");
        }
      }
    } catch (error) {
      console.log({ error });
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="login-wrapper">
        <div className="login-box">
          <form action="">
            <h2>Login</h2>
            <div className="input-box">
              <span className="icons">
                <AiOutlineMail />
              </span>
              <input
                type="email"
                name="identifire"
                value={user.identifire}
                onChange={handleChange}
                required
              />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icons">
                <AiOutlineLock />
              </span>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
              />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <span>Forgot Password ?</span>
            </div>
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
            <div className="registration">
              <p>Don't have account ?</p>
              <span onClick={() => navigate("/sign up")}>
                Creat new account
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
