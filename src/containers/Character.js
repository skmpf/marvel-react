import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Character() {
  const [character, setCharacter] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/character/" + id);
      setCharacter(response.data.data.results[0]);
      console.log(response.data.data.results[0]);
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
        <ul>
          <li>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
          </li>
          <li>{character.name}</li>
          <li>{character.description}</li>
          {/* <li>{character.comics}</li> */}
        </ul>
      )}
    </>
  );
}

export default Character;
