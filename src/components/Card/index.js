import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

function Card({
  id,
  image,
  title,
  description,
  category,
  addFav,
  handleRemoveFav,
  star,
  cross
}) {
  return (
    <div className={category === "characters" ? "character" : "comic"}>
      <button
        className="star"
        onClick={() => {
          star ? addFav(id, category) : handleRemoveFav(id)
        }}
      > 
        <i className={`fas fa-star ${star && "starred"}`}></i>
      </button>
      <div className="img-container">
        <img src={image} alt={title} />
      </div>
      <ul className="details">
        {category === "characters" ? (
          <Link to={"/characters/" + id}>
            <li>
              <h3>{title}</h3>
            </li>
            <li>
              <p>{description}</p>
            </li>
          </Link>
        ) : (
          <>
            <li>
              <h3>{title}</h3>
            </li>
            <li>
              <p>{description}</p>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Card;
