import React, { Component } from "react";

// Components
import Post from "../../components/Post";

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("https://reactsessions-ac545.firebaseio.com/.json")
      .then((response) => response.json())
      .then((data) => {
        let parsedData = [];
        for (let key in data) {
          let post = data[key];
          post["key"] = key;
          parsedData.push(post);
        }
        this.setState({
          posts: parsedData,
        });
      });
  }

  renderPosts() {
    return this.state.posts.map(({ key, title, subtitle, author }) => (
      <Post
        id={key}
        key={key}
        title={title}
        subtitle={subtitle}
        author={author}
        push={this.props.history.push}
      />
    ));
  }

  render() {
    console.log(this.props, "desde la lista");
    return <div>{this.renderPosts()}</div>;
  }
}

export default PostsList;

// fetch("https://reactsessions-ac545.firebaseio.com/.json") // request ->
// .then(response => response.json()) // response <-
// .then(data => console.log(data)) // OBJ legible para el usuario

// var post = {
//   'title': "Mi nombre es David",
//   "subtitle": "Ya pude!!!",
//   "image": "http://fdjkfghds.com/hola.jpg",
//   "author": "David"
// }

// fetch("https://reactsessions-ac545.firebaseio.com/.json", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(post)
// })
