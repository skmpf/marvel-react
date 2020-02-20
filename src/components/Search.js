import React from "react";

function Search() {
  return (
    <div className="search d-flex just-center">
      <ul className="d-flex align-center">
        <li>
          <i className="fas fa-search"></i>
        </li>
        <li>
          <input type="text" />
        </li>
      </ul>
      <button
        onClick={event => {
          event.preventDefault();
          alert("searched");
        }}
      >
        SEARCH!
      </button>
    </div>
  );
}

export default Search;
