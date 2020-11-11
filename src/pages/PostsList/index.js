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
      <Post key={key} title={title} subtitle={subtitle} author={author} />
    ));
  }

  render() {
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

// {
//   "-MLpH0F-Zqw41a6OnU3m": {
//     author: "ER"
//     image: "https://www.openenglish.com/wp-content/uploads/2017/07/logo-black.png"
//     subtitle: "Open English"
//     title: "I can tok wachinton tu"
//   }
//   "-MLpH0F-Zqw41a6OnU3m": {
//     author: "ER"
//     image: "https://www.openenglish.com/wp-content/uploads/2017/07/logo-black.png"
//     subtitle: "Open English"
//     title: "I can tok wachinton tu"
//   }
// }

// [
//   {
//     title: "Koder aprende React",
//     subtitle: "Con lagrimas",
//     image: "http://fddsfdsafdsa.com/fdsafdsa.jpg",
//     author: "David",
//   },
//   {
//     title: "Leo deja salirme temprano de una junta",
//     subtitle: "Esto jamás pasará",
//     image: "http://fddsfdsafdsa.com/fdsafdsa.jpg",
//     author: "David",
//   },
// ]
