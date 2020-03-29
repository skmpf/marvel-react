import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./index.css";
import logo from "../../assets/img/logo.png";

function Header() {
  return (
    <>
      <header className="d-flex flex-col align-center">
        <img src={logo} alt="marvel-logo" />
        <div className="border"></div>
      </header>
      <ul className="menu">
        <li>
          <Link to="/">CHARACTERS</Link>
        </li>
        <li>
          <Link to="/comics">COMICS</Link>
        </li>
        <li>
          <Link to="/user/favorites">FAVORITES</Link>
        </li>
        <li>
          <Link to="/user/sign_in">SIGN IN</Link>
        </li>
      </ul>
    </>
  );
}

export default Header;
