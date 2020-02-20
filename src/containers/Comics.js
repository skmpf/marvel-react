import React, { useState, useEffect } from "react";
const axios = require("axios");

function Comics() {
  const [comics, setComics] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/comics");
      setComics(response.data.data.results);
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
        <ul className="comics wrapper d-flex flex-row space-between">
          {comics.map(comic => {
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
      )}
    </>
  );
}

export default Comics;
