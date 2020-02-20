import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Pagination from "../components/Pagination";

import Search from "../components/Search";

const axios = require("axios");

function Characters() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/characters?page=${page}`
      );
      setData(response.data.data.results);
      const total = response.data.data.total;
      let copyNumPage = [];
      if (total % 100 === 0) {
        for (let i = 1; i < total / 100; i++) {
          copyNumPage.push(i);
        }
        setNumPage(copyNumPage);
      } else {
        for (let i = 1; i < total / 100 + 1; i++) {
          copyNumPage.push(i);
        }
        setNumPage(copyNumPage);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [page]);

  return (
    <>
      {isLoading ? (
        <div className="loading wrapper d-flex align-center just-center">
          <p>Page Loading</p>
        </div>
      ) : (
        <>
          <Search />
          <Pagination
            page={page}
            setPage={setPage}
            numPage={numPage}
            setNumPage={setNumPage}
          />
          <ul className="characters wrapper d-flex flex-row space-between">
            {data.map(character => {
              return (
                <Link to={"/characters/" + character.id} key={character.id}>
                  <div className="character d-flex flex-col align-center">
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
          <Pagination
            page={page}
            setPage={setPage}
            numPage={numPage}
            setNumPage={setNumPage}
          />
        </>
      )}
    </>
  );
}

export default Characters;
