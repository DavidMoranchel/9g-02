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
    this.setState({
      posts: [
        {
          title: "Koder aprende React",
          subtitle: "Con lagrimas",
          image: "http://fddsfdsafdsa.com/fdsafdsa.jpg",
          author: "David",
        },
        {
          title: "Leo deja salirme temprano de una junta",
          subtitle: "Esto jamás pasará",
          image: "http://fddsfdsafdsa.com/fdsafdsa.jpg",
          author: "David",
        },
      ],
    });
  }

  renderPosts() {
    return this.state.posts.map(({ title, subtitle, author }) => (
      <Post title={title} subtitle={subtitle} author={author} />
    ));
  }

  render() {
    return <div>{this.renderPosts()}</div>;
  }
}

export default PostsList;
