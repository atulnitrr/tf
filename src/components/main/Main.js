import React from "react";
import MainHeader from "./MainHeader";
import TweetContainer from "./TweetContainer";

function Main() {
  return (
    <main className="app-container-item  main-top-container">
      <MainHeader></MainHeader>
      <TweetContainer></TweetContainer>
    </main>
  );
}

export default Main;
