import React, { useState, useEffect } from "react";

// Components
import Post from "../../components/Post";

function PostsListHooks(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://reactsessions-ac545.firebaseio.com/.json")
      .then((response) => response.json())
      .then((data) => {
        let parsedData = [];
        for (let key in data) {
          let post = data[key];
          post["key"] = key;
          parsedData.push(post);
        }
        setPosts(parsedData);
      });
  }, []);

  console.log(posts);

  const renderPosts = posts.map(({ key, title, subtitle, author }) => (
    <Post
      id={key}
      key={key}
      title={title}
      subtitle={subtitle}
      author={author}
      push={props.history.push}
    />
  ));

  return <div>{renderPosts}</div>;
}

export default PostsListHooks;
