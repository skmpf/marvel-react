import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Pagination from "../components/Pagination";
import Card from "../components/Card";

function Results(props) {
  const { searchInput } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState([]);

  useEffect(() => {
    const fetchData = async (req, res) => {
      const response = await axios.get(
        `http://localhost:3000/search?search=${searchInput}`
      );
      setData(response.data);
      //   console.log(response.data);
      console.log(response.data[1].searchComics.results[0].title);

      const total =
        response.data[0].searchCharacters.total +
        response.data[1].searchComics.total;
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
          {data.map(search => {
            return (
              <ul>
                {/* <li>
                  {search.searchCharacters.results.map(result => {
                    return (
                      <ul>
                        <li>
                          <img
                            src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
                            alt={result.name}
                          />
                        </li>
                        <li>{result.name}</li>
                        <li>{result.description}</li>
                      </ul>
                    );
                  })}
                </li> */}
                {/* <li>
                  {search.searchComics.results.map(result => {
                    return (
                      <ul>
                        <li>
                          <img
                            src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
                            alt={result.title}
                          />
                        </li>
                        <li>{result.title}</li>
                        <li>{result.description}</li>
                      </ul>
                    );
                  })}
                </li> */}
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
