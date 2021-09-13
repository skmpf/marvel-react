import React, { useState, useEffect } from "react";

import "./index.css";

import Pagination from "../../components/Pagination/";
import Loading from "../../components/Loading/";
import Card from "../../components/Card/";

const axios = require("axios");

function Comics({ addFav, handleRemoveFav }) {
  const [data, setData] = useState();
  const [category, setCategory] = useState("comics");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://backend-marvel-test.herokuapp.com/comics?page=${page}`
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
    <div className="content">
      <Pagination
        setIsLoading={setIsLoading}
        page={page}
        setPage={setPage}
        numPage={numPage}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="comics wrapper">
          {data.map(element => {
            return (
              <Card
                image={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                title={element.title}
                description={element.description}
                category={category}
                id={element.id}
                key={element.id}
                addFav={addFav}
                handleRemoveFav={handleRemoveFav}
                star
              />
            );
          })}
        </ul>
      )}
      <Pagination
        setIsLoading={setIsLoading}
        page={page}
        setPage={setPage}
        numPage={numPage}
      />
    </div>
  );
}

export default Comics;
