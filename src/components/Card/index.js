import React from "react";
import { Link } from "react-router-dom";

import "./index.css";
import FavStar from "../FavStar/index";

function Card({
  id,
  image,
  title,
  description,
  category,
  fav,
  setFav,
}) {

  return (
    <div className={category === "characters" ? "character" : "comic"}>
      <div className="img-container">
        <div
          className="image"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center top",
            backgroundClip: "content-box",
            backgroundOrigin: "content-box",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <FavStar
            id={id}
            category={category}
            fav={fav}
            setFav={setFav}
          />
        </div>
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
