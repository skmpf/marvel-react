import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
        <div className="loading wrapper d-flex align-center just-center">
          <p>Page Loading</p>
        </div>
      ) : (
        <ul className="charId wrapper d-flex flex-col">
          <li>
            <img
              src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
              alt={data.name}
            />
          </li>
          <li>
            <h3>{data.name}</h3>
          </li>
          <li>
            <p>{data.description}</p>
          </li>
          <li className="d-flex flex-col">
            <h4>Appearances in Comics:</h4>
            {data.comics.items.map(item => {
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
