import React from "react";

import "./index.css";

function Card({ image, title, description, category, index }) {
  return (
    <ul
      className={category === "characters" ? "character" : "character"}
      index={index}
    >
      <li>
        <img src={image} alt={title} />
      </li>
      <li>
        <h3>{title}</h3>
      </li>
      <li>
        <p>{description}</p>
      </li>
      <li>
        <button onClick={() => {}}>Favorite</button>
      </li>
    </ul>
  );
}

export default Card;
