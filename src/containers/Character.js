import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Character() {
  const [character, setCharacter] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:3000/characters/" + id
      );
      setCharacter(response.data.data.results[0]);
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
        <ul className="charId wrapper d-flex flex-col">
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
            <p>{character.description}</p>
          </li>
          <li className="d-flex flex-col">
            <h4>Appearances in Comics:</h4>
            {character.comics.items.map(item => {
              return (
                <a key={item.name} href={item.resourceURI}>
                  {item.name}
                </a>
              );
            })}
          </li>
        </ul>
      )}
    </>
  );
}

export default Character;
