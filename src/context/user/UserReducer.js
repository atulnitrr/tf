const initialState = {
  username: "Guest",
  isLoggedIn: false,
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, isLoggedIn: true, username: action.payload };
    case "logout":
      return {
        ...state,
        isLoggedIn: false,
        username: "Guest",
      };
    case "test":
      console.log("test --> ");
      return { ...state };
    default:
      return state;
  }
};

export { initialState, appReducer };
