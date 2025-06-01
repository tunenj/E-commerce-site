import React, { useState } from "react";
import "./CSS/LoginSignUp.css";

function LoginSignUp() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <div className="loginsignup-fields">
          {!isLogin && <input type="text" placeholder="Your Name" />}
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>{isLogin ? "Login" : "Continue"}</button>
        <p className="loginsignup-login">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span onClick={toggleMode}>
            {isLogin ? "Sign up here" : "Login here"}
          </span>
        </p>
        {!isLogin && (
          <div className="loginsignup-agree">
            <input type="checkbox" id="agree" />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginSignUp;
