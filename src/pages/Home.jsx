import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import PostCard from "../components/PostCard";

function Home() {
  let dispatch = useDispatch();
  let posts = useSelector((state) => state.posts);
  let loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="home-container">
      <h1>Social Media App</h1>
      <line />
      {loading && <p>Loading...</p>}

      <div className="post-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
