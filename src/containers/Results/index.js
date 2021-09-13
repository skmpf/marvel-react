import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";

import "./index.css";
import Loading from "../../components/Loading/";
import Pagination from "../../components/Pagination/";
import Card from "../../components/Card/";

function Results({ addFav, handleRemoveFav }) {
  const { searchInput } = useParams();
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://backend-marvel-test.herokuapp.com/search/${category}/${searchInput}?page=${page}`
      );
      setData(response.data);
      const total = response.data.total;

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
  }, []);

  return (
    <>
      {numPage.length > 1 ? (
        <Pagination
          setIsLoading={setIsLoading}
          page={page}
          setPage={setPage}
          numPage={numPage}
        />
      ) : (
        <div className="no-pagination"></div>
      )}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="results wrapper">
            {category === "characters"
              ? data.results.map(element => {
                  return (
                    <Card
                      image={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                      title={element.name}
                      description={element.description}
                      category={category}
                      key={element.id}
                      id={element.id}
                      addFav={addFav}
                      handleRemoveFav={handleRemoveFav}
                      star
                    />
                  );
                })
              : data.results.map(element => {
                  return (
                    <Card
                      image={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                      title={element.title}
                      description={element.description}
                      category={category}
                      key={element.id}
                      id={element.id}
                      addFav={addFav}
                      handleRemoveFav={handleRemoveFav}
                      star
                    />
                  );
                })}
          </div>
        </>
      )}
      {numPage.length > 1 ? (
        <Pagination
          setIsLoading={setIsLoading}
          page={page}
          setPage={setPage}
          numPage={numPage}
        />
      ) : (
        <div className="no-pagination"></div>
      )}
    </>
  );
}

export default Results;
