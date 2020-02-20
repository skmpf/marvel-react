import React, { useState, useEffect } from "react";

import Pagination from "../components/Pagination";

import Search from "../components/Search";

const axios = require("axios");

function Comics() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/comics?page=${page}`
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
          <ul className="comics wrapper d-flex flex-row space-between">
            {data.map(comic => {
              return (
                <div
                  key={comic.id}
                  className="comic d-flex flex-col align-center"
                >
                  <li>
                    <img
                      src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                      alt={comic.name}
                    />
                  </li>
                  <li>{comic.title}</li>
                  <li>{comic.description}</li>
                </div>
              );
            })}
          </ul>
        </>
      )}
      <Pagination
        page={page}
        setPage={setPage}
        numPage={numPage}
        setNumPage={setNumPage}
      />
    </>
  );
}

export default Comics;
