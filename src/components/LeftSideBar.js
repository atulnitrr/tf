import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/LeftSidebar.css";
import UserContext from "../context/user/UserContext";

function LeftSideBar() {
  const { appState } = useContext(UserContext);
  return (
    <aside className="app-container-item ls-top-container ">
      <div className="ls-top-container-wrapper">
        <div className="l-navlinks">
          <div className="home-link  l-navlinks-item">
            <i className="far fa-star"></i>
            <p>Home</p>
          </div>
          <div className="home-link l-navlinks-item">
            <i className="far fa-star"></i>
            <p>Notifications</p>
          </div>
          <div className="profile-link l-navlinks-item">
            <i className="far fa-star"></i>
            <p>Profile</p>
          </div>
          <div className="profile-link l-navlinks-item">
            <i className="far fa-star"></i>
            <p>Messages</p>
          </div>
          <div className="profile-link l-navlinks-item">
            <i className="far fa-star"></i>
            <p>BookMarks</p>
          </div>
          <div className="profile-link l-navlinks-item">
            <i className="far fa-star"></i>
            <p>Lists</p>
          </div>
          <div className="profile-link l-navlinks-item">
            <i className="far fa-star"></i>
            <p>More</p>
          </div>
          <button className="ln-tweet-btn">Tweet</button>
        </div>
        <div className="user-profile-link">
          <p>
            Hello <span>{appState.username}</span>
          </p>
          <Link to="/login">Logout</Link>
        </div>
      </div>
    </aside>
  );
}

export default LeftSideBar;
