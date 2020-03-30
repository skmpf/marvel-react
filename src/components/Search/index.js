import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./index.css";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("characters");

  const history = useHistory();

  return (
    <>
      <div className="search d-flex just-center">
        <ul>
          <li>
            <i className="fas fa-search"></i>
          </li>
          <li>
            <input
              type="text"
              placeholder="What are you looking for?"
              onChange={e => {
                setSearchInput(e.target.value);
              }}
            />
          </li>
          <li className="d-flex flex-col align-center">
            <label htmlFor="categories">SEARCH FOR</label>
            <select
              id="categories"
              onChange={e => {
                setCategory(e.target.value);
              }}
            >
              <option defaultValue value="characters">
                Characters
              </option>
              <option value="comics">Comics</option>
            </select>
          </li>
          <li>
            <button
              onClick={() => {
                history.push(`/search/${category}/${searchInput}`);
              }}
            >
              LET'S GO!
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Search;
