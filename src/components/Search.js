import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("characters");

  const history = useHistory();

  return (
    <>
      <div className="search d-flex just-center">
        <ul className="d-flex align-center">
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
          <li>
            <label htmlFor="categories">Choose a category</label>
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
        </ul>
        <button
          onClick={() => {
            history.push(`/search/${category}/${searchInput}`);
          }}
        >
          SEARCH
        </button>
      </div>
    </>
  );
}

export default Search;
