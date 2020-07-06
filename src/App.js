import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import LeftSideBar from "./components/LeftSideBar";
import Main from "./components/main/Main";
import RightSideBar from "./components/RightSideBar";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <BrowserRouter>
      {!isLoggedIn ? (
        <Login></Login>
      ) : (
        <switch>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
          <Route path="/signup" exact>
            <SignUp></SignUp>
          </Route>
          <Route path="/" exact>
            <div className="app-container">
              {/* <LeftSideBar></LeftSideBar>
        <Main></Main>
        <RightSideBar></RightSideBar> */}
            </div>
          </Route>
        </switch>
      )}
    </BrowserRouter>
  );
}

export default App;
