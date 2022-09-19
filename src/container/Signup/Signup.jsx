import React from "react";
import "./Signup.css";
import { BsFillEyeFill } from "react-icons/bs";

const Signup = () => {
  return (
    <div>
      <div className="authentication-main-container">
        <div className="authentication-container">
          <div className="auth-input">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="input-field"
              />
            </div>
            <div>
              <input type="text" placeholder="Email" className="input-field" />
            </div>
            <div>
              <input
                type="text"
                placeholder="Password"
                className="input-field"
              />
              <BsFillEyeFill
                color="
rgba(183, 192, 201, 1)"
              />
            </div>

            <button className="auth-btn">Sign up</button>
            <div className="remember">
              <input type="checkbox" />
              Remember me
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
