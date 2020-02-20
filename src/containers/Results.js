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
        `http://localhost:3000/search/${category}/${searchInput}`
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
      {isLoading ? (
        <div className="loading wrapper d-flex align-center just-center">
          <p>Page Loading</p>
        </div>
      ) : (
        <>
          <Pagination
            page={page}
            setPage={setPage}
            numPage={numPage}
            setNumPage={setNumPage}
          />
          {category === "characters"
            ? data.results.map(key => {
                return (
                  <ul key={key.id}>
                    <li>
                      <img
                        src={`${key.thumbnail.path}.${key.thumbnail.extension}`}
                        alt={key.name}
                      />
                    </li>
                    <li>{key.name}</li>
                    <li>{key.description}</li>
                  </ul>
                );
              })
            : data.results.map(key => {
                return (
                  <ul key={key.id}>
                    <li>
                      <img
                        src={`${key.thumbnail.path}.${key.thumbnail.extension}`}
                        alt={key.title}
                      />
                    </li>
                    <li>{key.title}</li>
                    <li>{key.description}</li>
                  </ul>
                );
              })}

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

export default Results;
