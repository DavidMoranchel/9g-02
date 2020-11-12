import "./Post.css";

function Post(props) {
  const { id, title, subtitle, author, push } = props;

  return (
    <div className="Post" onClick={() => push(`/posts/${id}`)}>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{author}</p>
    </div>
  );
}

export default Post;
