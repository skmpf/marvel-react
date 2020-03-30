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

        {star ? (
          <li className="star">
            <i
              className="fas fa-star"
              onClick={() => {
                addFav(id, category);
              }}
            ></i>
          </li>
        ) : cross ? (
          <li className="cross">
            <i
              className="fas fa-times"
              onClick={() => {
                handleRemoveFav(id);
              }}
            ></i>
          </li>
        ) : null}
      </ul>
    </div>
  );
}

export default Card;
