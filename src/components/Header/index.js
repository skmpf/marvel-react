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
        <div>
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
        <Search />
        </div>
        <div className="signin-btn">
          {/* <Link to="/user/sign_in">SIGN IN</Link> */}
          <Link>SIGN IN</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
