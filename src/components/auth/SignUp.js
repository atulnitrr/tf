import React from "react";
import { Link } from "react-router-dom";
import "../../css/SignUp.css";

function SignUp() {
  return (
    <div className="sup-top-container">
      <div className="sup-wrapper">
        <h4>Sign Up</h4>
        <form action="" className="form-wrapper">
          <input type="text" placeholder="email id..." />
          <input type="password" name="" id="" placeholder="password..." />
          <input
            type="password"
            name=""
            id=""
            placeholder="confirm password..."
          />
          <button type="submit">Sign Up</button>
        </form>
        <p className="al-mem">Already a member?</p>
        <p className="su-login">
          <Link to="/login"> Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
