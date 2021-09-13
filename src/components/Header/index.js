import React from "react";
import { Link } from "react-router-dom";

import "./index.css";
import logo from "../../assets/img/logo.png";
import Search from "../../components/Search/";

function Header() {
  return (
    <header>
      <div className="d-flex align-center">
        <Link to="/">
          <img src={logo} alt="marvel-logo" />
        </Link>
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
        </ul>
        <div>
          <Link to="/user/sign_in">SIGN IN</Link>
        </div>
      </div>
      <Search />
    </header>
  );
}

export default Header;
