import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
  let { id } = useParams();
  let posts = useSelector((state) => state.posts);

  let post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <p>Post not found. Try refreshing or going back.</p>;

  let imgSrc = `https://picsum.photos/400?random=${post.id}`;

  return (
    <div className="detail-page">
        <h2>Details Page For Post With ID {post.id}</h2>
      <img src={imgSrc} alt="Post" />
      <p><strong>User ID : </strong> {post.userId}</p>
      <h2>Title : {post.title}</h2>
      
      <p>Body : {post.body}</p>
    </div>
  );
}

export default Detail;
