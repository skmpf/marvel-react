import React from "react";

function Card({ image, title, description }) {
  return (
    <ul>
      <li>
        <img src={image} alt={title} />
      </li>
      <li>
        <h3>{title}</h3>
      </li>
      <li>
        <p>{description}</p>
      </li>
    </ul>
  );
}

export default Card;
