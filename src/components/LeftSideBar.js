import React from "react";

function LeftSideBar() {
  return (
    <aside className="app-container-item ls-top-container ">
      <div className="ls-top-container-wrapper">
        <div className="l-navlinks">
          <div className="home-link">Home</div>
          <div className="profile-link">Profile</div>
          <button>Tweet</button>
        </div>

        <div className="user-profile-link">user profile lihnks</div>
      </div>
    </aside>
  );
}

export default LeftSideBar;
