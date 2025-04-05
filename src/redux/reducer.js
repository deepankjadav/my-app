let initialState = {
    posts: [],
    loading: false
  };
  
  let reducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOADING_POSTS":
        return { ...state, loading: true };
      case "SET_POSTS":
        return { ...state, posts: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  export default reducer;
  