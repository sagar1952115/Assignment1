import React, { useState, useEffect } from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import "./AuthPage.css";
const AuthPage = () => {
  const [active, setActive] = useState(true);

  return (
    <div>
      <div className="auth-main-container">
        <div className="auth-inner-container">
          <div className="auth-content-left">
            <img src="/assets/left-img.png" alt="" />
          </div>
          <div className="auth-content-right">
            <div className="right-header">
              <a
                className={
                  active === true ? "header-login act" : "header-login"
                }
                onClick={() => {
                  setActive(true);
                }}
              >
                Log In
              </a>
              <a
                className={
                  active === false ? "header-signup act" : "header-signup"
                }
                onClick={() => {
                  setActive(false);
                }}
              >
                Sign Up
              </a>
            </div>
            <div className="right-main">
              {!active && (
                <div>
                  <Signup />{" "}
                </div>
              )}
              {active && (
                <div>
                  <Login />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
