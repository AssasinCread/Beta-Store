import React from "react";
import  { useNavigate }  from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import "./Login.scss";



const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <form action="">
          <h2>Login</h2>
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
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <span>Forgot Password ?</span>
          </div>
          <button type="submit">Login</button>
          <div className="registration">
            <p>
              Don't have account ? 
            </p>
            <span onClick={() => navigate("/sign up")}>Creat new account</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
