import React from "react";

function Pagination({ setPage, numPage, setIsLoading }) {
  return (
    <ul className="pagination d-flex">
      {numPage.map(pageNum => {
        return (
          <li
            key={pageNum}
            onClick={() => {
              setPage(pageNum);
              setIsLoading(true);
            }}
          >
            {pageNum}
          </li>
        );
      })}
    </ul>
  );
}

export default Pagination;
