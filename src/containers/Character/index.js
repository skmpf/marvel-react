import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./index.css";
import Loading from "../../components/Loading/";

function Character() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://backend-marvel-test.herokuapp.com/characters/" + id
      );
      setData(response.data.data.results[0]);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="charId wrapper">
          <li>
            <img
              src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
              alt={data.name}
            />
            <h2>{data.name}</h2>
          </li>
          <li className="character-details">
            <p>{data.description}</p>
            <h4>Appearances in Comics:</h4>
            {data.comics.items.map(item => {
              return (
                <span key={item.name} href={item.resourceURI}>
                  {item.name}
                </span>
              );
            })}
          </li>
        </ul>
      )}
    </>
  );
}

export default Character;
