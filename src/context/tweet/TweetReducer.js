const tweetInitialState = {
  currentTweet: "",
  userTweets: [],
};

function tweetReducer(state, action) {
  switch (action.type) {
    case "posttweet":
      return {
        ...state,
        currentTweet: action.payload,
      };

    case "usertimeline":
      return {
        ...state,
        userTweets: action.payload,
      };
    case "hometimeline":
      return {
        ...state,
      };
    default:
      return state;
  }
}

module.exports = { tweetInitialState, tweetReducer };
