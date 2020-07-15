import React from "react";
import LeftSideBar from "./LeftSideBar";
import Main from "./main/Main";
import RightSideBar from "./RightSideBar";

function Home() {
  return (
    <div className="app-container">
      <LeftSideBar></LeftSideBar>
      <Main></Main>
      <RightSideBar></RightSideBar>
    </div>
  );
}

export default Home;
