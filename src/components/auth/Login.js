import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import "../../css/Login.css";
import { Link } from "react-router-dom";
import { LOGING_URL, SIGN_UP_URL } from "../../consts";

import UserContext from "../../context/user/UserContext";

function Login(props) {
  const { appDispatch } = useContext(UserContext);

  const [submitCount, setSubmitCount] = useState(0);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    if (submitCount > 0) {
      async function login() {
        try {
          const res = await Axios.post(LOGING_URL, { email, password: pass });
          if (res.status === 200 && res.data.status === "SUCCESS") {
            appDispatch({ type: "login", payload: email });
            props.history.push("/");
          }
        } catch (error) {
          console.log(error);
        }
      }
      login();
    }
  }, [submitCount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitCount((prev) => prev + 1);
  };

  return (
    <div className="login-top-container">
      <div className="login-wrapper">
        <p>Log In</p>
        <form action="" className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="email id..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="password..."
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
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

export default withRouter(Login);
