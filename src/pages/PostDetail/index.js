import React, { Component } from "react";

class PostsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    fetch(
      `https://reactsessions-ac545.firebaseio.com/${this.props.match.params.id}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          post: data,
        });
      });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.state.post.title}</h1>
      </div>
    );
  }
}

export default PostsDetail;
