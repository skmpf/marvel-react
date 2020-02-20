import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Pagination from "../components/Pagination";
import Card from "../components/Card";

function Results(props) {
  const { searchInput } = useParams();
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState([]);

  useEffect(() => {
    const fetchData = async (req, res) => {
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
  }, [page]);

  return (
    <>
      {isLoading ? (
        <div className="loading wrapper d-flex align-center just-center">
          <p>Page Loading</p>
        </div>
      ) : (
        <>
          <Pagination
            setIsLoading={setIsLoading}
            setPage={setPage}
            numPage={numPage}
          />
          {category === "characters"
            ? data.results.map(element => {
                return (
                  <Card
                    image={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                    title={element.name}
                    description={element.description}
                    category={category}
                    index={element.id}
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
                    index={element.id}
                  />
                );
              })}
          <Pagination
            setIsLoading={setIsLoading}
            setPage={setPage}
            numPage={numPage}
          />
        </>
      )}
    </>
  );
}

export default Results;
