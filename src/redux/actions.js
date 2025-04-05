export let fetchPosts = () => {
    return async (dispatch) => {
      dispatch({ type: "LOADING_POSTS" });
  
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await res.json();
  
      dispatch({ type: "SET_POSTS", payload: data });
    };
  };
  