import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const axios = require("axios");

function Characters() {
  const [characters, setCharacters] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/characters");
      setCharacters(response.data.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading wrapper d-flex align-center just-center">
          <p>Page Loading</p>
        </div>
      ) : (
        <ul className="characters wrapper d-flex flex-row space-between">
          {characters.map(character => {
            return (
              <Link to={"/characters/" + character.id}>
                <div
                  key={character.id}
                  className="character d-flex flex-col align-center"
                  onClick={event => {}}
                >
                  <li>
                    <img
                      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                      alt={character.name}
                    />
                  </li>
                  <li>
                    <h3>{character.name}</h3>
                  </li>
                  <li>
                    {character.description ? (
                      <p>{character.description}</p>
                    ) : (
                      <p></p>
                    )}
                  </li>
                </div>
              </Link>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Characters;
