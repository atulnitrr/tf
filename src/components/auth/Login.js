import React from "react";
import "../../css/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-top-container">
      <div className="login-wrapper">
        <p>Log In</p>
        <form action="" className="login-form">
          <input type="text" placeholder="email id..." />
          <input type="password" name="" id="" placeholder="password..." />
          <button type="submit">Log In</button>
        </form>

        <p className="lg-not-a-mem">Not a member?</p>
        <p className="lg-signup">
          <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
