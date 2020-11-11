import React, { Component } from "react";

class PostsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  render() {
    console.log(this.props);
    return <div>X</div>;
  }
}

export default PostsDetail;
