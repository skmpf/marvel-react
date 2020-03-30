import React from "react";

import "./index.css";

function Card({ image, title, description, category }) {
  return (
    <div className={category === "characters" ? "character" : "comic"}>
      <div className="img-container">
        <img src={image} alt={title} />
      </div>
      <ul className="details">
        <li>
          <h3>{title}</h3>
        </li>
        <li>
          <p>{description}</p>
        </li>
        <li>
          <i className="far fa-star" onClick={() => {}}></i>
          <i className="fas fa-star" onClick={() => {}}></i>
        </li>
      </ul>
    </div>
  );
}

export default Card;
