import React, { useState, useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserContext from "./context/user/UserContext";
import { initialState, appReducer } from "./context/user/UserReducer";
import "./App.css";

import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Home from "./components/Home";

function App() {
  const [appState, appDispatch] = useReducer(appReducer, initialState);
  return (
    <UserContext.Provider value={{ appState, appDispatch }}>
      <BrowserRouter>
        <Switch>
          {!appState.isLoggedIn && (
            <Route path="/login" exact>
              <Login></Login>
            </Route>
          )}
          {!appState.isLoggedIn && (
            <Route path="/signup" exact>
              <SignUp></SignUp>
            </Route>
          )}
          <Route path="/" exact>
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
