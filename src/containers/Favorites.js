import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

import axios from "axios";

import Pagination from "../components/Pagination";
import Card from "../components/Card";

function Favorites() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState([]);

  const [favCharacters, setFavCharacters] = useState([]);
  const [favComics, setFavComics] = useState([]);

  // if (Cookies.get("favCharacters")) {
  //   setFavCharacters(Cookies.get("favCharacters"));
  // }
  // if (Cookies.get("favComics")) {
  //   setFavComics(Cookies.get("favComics"));
  // }

  // useEffect(() => {
  //   const fetchData = async (req, res) => {
  //     const response = await axios.get(
  //       `https://backend-marvel-test.herokuapp.com/search/${category}/${searchInput}?page=${page}`
  //     );
  //     setData(response.data);
  //     setCategory(req.params.category);
  //     const total = response.data.total;
  //     let copyNumPage = [];
  //     if (total % 100 === 0) {
  //       for (let i = 1; i < total / 100; i++) {
  //         copyNumPage.push(i);
  //       }
  //       setNumPage(copyNumPage);
  //     } else {
  //       for (let i = 1; i < total / 100 + 1; i++) {
  //         copyNumPage.push(i);
  //       }
  //       setNumPage(copyNumPage);
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, [page]);

  return <span>Favorites</span>;
}

export default Favorites;
