import "./App.css";

// React router
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// Pages
import PostsList from "./pages/PostsList";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page1">Pagina 1</Link>
            </li>
            <li>
              <Link to="/page2">Pagina 2</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/posts/1">Posts 1</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/page1">
            <h1>Contenido de la página 1</h1>
          </Route>
          <Route path="/page2">
            <h1>Contenido de la página 2</h1>
          </Route>
          <Route exact path="/posts" component={PostsList} />
          <Route path="/posts/:id" component={PostDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
