import React, { Component } from "react";

class PostsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  // componentDidMount() {
  //   setTimeout(() => this.props.history.push("/page1"), 4000);
  // }

  render() {
    console.log(this.props);
    return <div>Hola soy el detalle del post {this.props.match.params.id}</div>;
  }
}

export default PostsDetail;
