import React, { useState } from "react";
import "./style2.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleRegisterClick = () => {
    setIsLogin(false);
  };

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  return (
    <div className={`container ${isLogin ? "" : "right-panel-active"}`}>
      <div className="form-container register-container">
        <form>
          <h1>Register</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Register</button>
          <span>or use your account</span>
          <div className="social-container">
            <a href="#" className="social">
              <i className="lni lni-facebook-fill"></i>
            </a>
            <a href="#" className="social">
              <i className="lni lni-google"></i>
            </a>
            <a href="#" className="social">
              <i className="lni lni-linkedin-original"></i>
            </a>
          </div>
        </form>
      </div>

      <div className="form-container login-container">
        <form>
          <h1>Login</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="content">
            <div className="checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label>Remember me</label>
            </div>
            <div className="pass-link">
              <a href="#">Forgot password?</a>
            </div>
          </div>
          <button>Login</button>
          <span>or use your account</span>
          <div className="social-container">
            <a href="#" className="social">
              <i className="lni lni-facebook-fill"></i>
            </a>
            <a href="#" className="social">
              <i className="lni lni-google"></i>
            </a>
            <a href="#" className="social">
              <i className="lni lni-linkedin-original"></i>
            </a>
          </div>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className="title">Hello!</h1>
            <p>if you have an account, login here </p>
            <button className="ghost" onClick={handleLoginClick}>
              Login
              <i className="lni lni-arrow-left login"></i>
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className="title">Start your journey now</h1>
            <p>
              if you don't have an account yet, join us and start your journey.
            </p>
            <button className="ghost" onClick={handleRegisterClick}>
              Register
              <i className="lni lni-arrow-right register"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
