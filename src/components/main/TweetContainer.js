import React from "react";

function TweetContainer() {
  return (
    <div className="tweet-container">
      <i class="fas fa-user-circle user-icon"></i>
      <div className="tweet-area">
        <form className="tweet-form">
          <textarea
            name=""
            id=""
            rows="4"
            placeholder="whats in your mind?"
          ></textarea>
          <button> Tweet</button>
        </form>
      </div>
    </div>
  );
}

export default TweetContainer;
