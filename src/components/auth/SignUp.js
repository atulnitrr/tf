import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "../../css/SignUp.css";

import UseDetail from "../../models/UserDetail";
const BACK_URL = "http://localhost:3033";

function SignUp() {
  const [signUpStatus, setSingUpStatus] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const userDetail = new UseDetail();
    userDetail.email = email;
    userDetail.firstName = firstName;
    userDetail.lastName = lastName;
    userDetail.password = password;
    if (submitCount > 0) {
      signUp(userDetail);
    }
  }, [submitCount]);

  async function signUp(userDetail) {
    try {
      const response = await Axios.post(`${BACK_URL}/signup`, userDetail, {
        headers: [{}],
      });
      console.log("dddd");
      console.log(response);
      if (response.status === 200 && response.data.status === "SUCCESS") {
        setSingUpStatus(true);
      } else {
        setSingUpStatus(false);
      }
    } catch (error) {
      setSingUpStatus(false);
      console.log(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitCount((prev) => prev + 1);
  };

  return (
    <div className="sup-top-container">
      <div className="sup-wrapper">
        <h4>Sign Up</h4>
        <form action="" className="form-wrapper" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="email id..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            placeholder="first name..."
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="last name..."
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
