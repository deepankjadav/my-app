import { Link } from "react-router-dom";

function PostCard({ post }) {
  let title = post.title.length > 30 ? post.title.slice(0, 30) + "..." : post.title;
  let body = post.body.length > 100 ? post.body.slice(0, 100) + "..." : post.body;
  let imgSrc = `https://picsum.photos/200?random=${post.id}`;

  return (
    <div className="post-card">
      <img src={imgSrc} alt="Post" />
      <h4>User ID: {post.userId}</h4>
      <h3>TITLE: {title}</h3>
      <p>BODY: {body}</p>
      <Link to={`/item/${post.id}`}>Read More →</Link>
    </div>
  );
}

export default PostCard;
