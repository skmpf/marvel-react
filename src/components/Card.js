import React from "react";
import Cookies from "js-cookie";

function Card({ image, title, description, category, index }) {
  let favCharacters = [];
  if (Cookies.get("favCharacters")) {
    favCharacters = Cookies.get("favCharacters");
  }
  let favComics = [];
  if (Cookies.get("favComics")) {
    favComics = Cookies.get("favComics");
  }

  return (
    <ul className="character d-flex flex-col align-center" index={index}>
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
        <button
          onClick={() => {
            if (category === "characters") {
              favCharacters.push(index);
              Cookies.set("favCharacters", favCharacters, { expires: 100 });
            } else {
              favComics.push(index);
              Cookies.set("favComics", favComics, { expires: 100 });
            }
          }}
        >
          Favorite
        </button>
      </li>
    </ul>
  );
}

export default Card;
