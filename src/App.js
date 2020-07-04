import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import LeftSideBar from "./components/LeftSideBar";
import Main from "./components/main/Main";
import RightSideBar from "./components/RightSideBar";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <LeftSideBar></LeftSideBar>
        <Main></Main>
        <RightSideBar></RightSideBar>
      </div>
    </BrowserRouter>
  );
}

export default App;
