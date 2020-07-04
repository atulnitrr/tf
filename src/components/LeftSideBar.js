import React from "react";

function LeftSideBar() {
  return (
    <aside className="app-container-item ls-top-container ">
      <div className="ls-top-container-wrapper">
        <div className="l-navlinks">
          <div className="home-link  l-navlinks-item">
            <i class="far fa-star"></i>
            <p>Home</p>
          </div>
          <div className="home-link l-navlinks-item">
            <i class="far fa-star"></i>
            <p>Notifications</p>
          </div>
          <div className="profile-link l-navlinks-item">
            <i class="far fa-star"></i>
            <p>Profile</p>
          </div>
          <div className="profile-link l-navlinks-item">
            <i class="far fa-star"></i>
            <p>Messages</p>
          </div>
          <div className="profile-link l-navlinks-item">
            <i class="far fa-star"></i>
            <p>BookMarks</p>
          </div>
          <div className="profile-link l-navlinks-item">
            <i class="far fa-star"></i>
            <p>Lists</p>
          </div>
          <div className="profile-link l-navlinks-item">
            <i class="far fa-star"></i>
            <p>More</p>
          </div>
          <button>Tweet</button>
        </div>
        <div className="user-profile-link">user profile lihnks</div>
      </div>
    </aside>
  );
}

export default LeftSideBar;
