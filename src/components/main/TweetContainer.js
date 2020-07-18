import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import UserContext from "../../context/user/UserContext";

function TweetContainer() {
  const [submitCount, setSubmitCount] = useState(0);
  const [tweetText, setTweetText] = useState("");
  const {
    appState: { username, isLoggedIn },
  } = useContext(UserContext);

  useEffect(() => {
    async function postTweet() {
      try {
        console.log(tweetText);
        const response = await Axios.post(`http://localhost:3033/tweet`, {
          tweetText: tweetText,
          userId: username,
        });
        console.log(response);
      } catch (error) {}
    }
    if (submitCount > 0) {
      postTweet();
    }
  }, [submitCount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitCount((prev) => prev + 1);
    console.log(submitCount);
  };
  return (
    <div className="tweet-container">
      <i className="fas fa-user-circle user-icon"></i>
      <div className="tweet-area">
        <form className="tweet-form" onSubmit={handleSubmit}>
          <textarea
            name=""
            id=""
            rows="4"
            placeholder="whats in your mind?"
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
          ></textarea>
          <button type="submit">Tweet</button>
        </form>
      </div>
    </div>
  );
}

export default TweetContainer;
