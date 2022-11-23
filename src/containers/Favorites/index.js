import React, { useState, useEffect } from "react";
import axios from "axios";

import "./index.css";

import Loading from "../../components/Loading/";
import Card from "../../components/Card/";

function Favorites({ fav, setFav }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        `https://backend-marvel-test.fly.dev/favorites`,
        { fav }
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [fav]);

  return (
    <div className="content">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="favorites wrapper">
          <div>
            <h2>CHARACTERS</h2>
            {data[0].length === 0 ? (
              <span>No favorite character!</span>
            ) : (
              <ul className="fav-characters">
                {data[0].map((element) => {
                  return (
                    <Card
                      image={`${element.data.results[0].thumbnail.path}.${element.data.results[0].thumbnail.extension}`}
                      title={element.data.results[0].name}
                      description={element.data.results[0].description}
                      category={"characters"}
                      id={element.data.results[0].id}
                      fav={fav}
                      setFav={setFav}
                    />
                  );
                })}
              </ul>
            )}
          </div>
          <div>
            <h2>COMICS</h2>
            {data[1].length === 0 ? (
              <span>No favorite comic!</span>
            ) : (
              <ul className="fav-comics">
                {data[1].map((element) => {
                  return (
                    <Card
                      image={`${element.data.results[0].thumbnail.path}.${element.data.results[0].thumbnail.extension}`}
                      title={element.data.results[0].title}
                      description={element.data.results[0].description}
                      category={"comics"}
                      id={element.data.results[0].id}
                      key={element.data.results[0].id}
                      fav={fav}
                      setFav={setFav}
                    />
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorites;
