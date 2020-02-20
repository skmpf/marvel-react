import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import logo from "./assets/img/logo.png";

import Characters from "./containers/Characters";
import Character from "./containers/Character";
import Comics from "./containers/Comics";
import Favorites from "./containers/Favorites";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";

import Search from "./components/Search";

function App() {
  return (
    <main>
      <Router>
        <header className="d-flex flex-col align-center">
          <img src={logo} alt="marvel-logo" />
          <p></p>

          <ul className="menu wraper d-flex flex-row align-center">
            <li>
              <Link to="/">CHARACTERS</Link>
            </li>
            <li>
              <Link to="/comics">COMICS</Link>
            </li>
            <li>
              <Link to="/user/favorites">FAVORITES</Link>
            </li>
            {/* <li>
              <Link to="/user/sign_in">SIGN IN</Link>
            </li> */}
          </ul>
        </header>
        <div className="wrapper">
          <Search />
        </div>

        <Switch>
          <Route path="/characters/:id">
            <Character />
          </Route>
          <Route path="/comics">
            <Comics />
          </Route>
          <Route path="/user/favorites">
            <Favorites />
          </Route>
          <Route path="/user/sign_in">
            <SignIn />
          </Route>
          <Route path="/user/sign_up">
            <SignUp />
          </Route>
          <Route exact path="/">
            <Characters />
          </Route>
        </Switch>
      </Router>
      <footer className="d-flex just-center align-center">
        <h4>
          Marvel - Coded by{" "}
          <a
            style={{ textDecoration: "none" }}
            href="https://www.linkedin.com/in/kempfsebastien/"
          >
            Seb
          </a>{" "}
          - <a href="http://LeReacteur.io">LeReacteur.io</a>
        </h4>
      </footer>
    </main>
  );
}

export default App;
