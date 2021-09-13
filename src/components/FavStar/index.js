import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

import "./index.css";

function FavStar({
  id,
  category,
  fav,
  setFav
}) {
  const [favStatus, setFavStatus] = useState(false);

  useEffect(() => {
    checkFavoriteStatus();
  }, [fav]);

  const checkFavoriteStatus = () => {
    if (category === "characters") {
      if (fav[0].indexOf(id) !== -1) {
        setFavStatus(true);
      }
    } else if (fav[1].indexOf(id) !== -1) {
      setFavStatus(true);
    }
  }

  // add to favorites
  const addFav = (id, from) => {
    let favCopy = [...fav];
    if (from === "characters") {
      if (favCopy[0].indexOf(id) === -1) {
        favCopy[0].push(id);
        setFavStatus(true);
      }
    } else if (favCopy[1].indexOf(id) === -1) {
      favCopy[1].push(id);
      setFavStatus(true);
    }
    setFav(favCopy);
    Cookies.set("fav", JSON.stringify(favCopy), { expires: 100 });
  };
  
  // remove from favorites
  const handleRemoveFav = id => {
    const fav = Cookies.get("fav");
    const tabFav = fav && JSON.parse(fav);
    
    let newFav = [[], []];
    for (let i = 0; i < tabFav.length; i++) {
      for (let j = 0; j < tabFav[i].length; j++) {
        if (i === 0) {
          if (tabFav[i][j] !== id) {
            newFav[0].push(tabFav[i][j]);
            setFavStatus(false);
          }
        } else {
          if (tabFav[i][j] !== id) {
            newFav[1].push(tabFav[i][j]);
            setFavStatus(false);
          }
        }
      }
    }
    setFav(newFav);
    Cookies.set("fav", JSON.stringify(newFav), { expires: 100 });
  };

  return (
    <button
        className="star"
        onClick={() => {
          !favStatus ? addFav(id, category) : handleRemoveFav(id)
        }}
      > 
        <i className={`fas fa-star ${favStatus && "starred"}`}></i>
    </button>
  );
}

export default FavStar;
