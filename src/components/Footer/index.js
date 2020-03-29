import React from "react";

import "./index.css";

function Footer() {
  return (
    <footer>
      <span>
        Made with
        <a href="https://reactjs.org" target="_blank">
          {" "}
          React{" "}
        </a>
        at
        <a href="https://www.lereacteur.io" target="_blank">
          {" "}
          Le Reacteur{" "}
        </a>
        by
        <a href="https://www.linkedin.com/in/sebastienkempf/" target="_blank">
          {" "}
          Seb
        </a>
      </span>
    </footer>
  );
}

export default Footer;
