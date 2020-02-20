import React from "react";

function Pagination({ page, setPage, numPage, setNumPage }) {
  return (
    <ul className="pagination d-flex">
      {numPage.map(pageNum => {
        return (
          <li
            key={pageNum}
            onClick={() => {
              setPage(pageNum);
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
