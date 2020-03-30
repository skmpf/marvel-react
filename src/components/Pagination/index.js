import React, { useState, useEffect } from "react";

import "./index.css";

function Pagination({ page, setPage, numPage, setIsLoading }) {
  const [filter, setFilter] = useState([]);

  console.log("numPage");
  console.log(numPage);

  useEffect(() => {
    const filterPages = () => {
      const filter = [];
      if (numPage.length < 16) {
        for (let i = 1; i <= numPage.length; i++) {
          filter.push(i);
        }
      } else {
        // filter to only show +/- 7 pages of current page
        if (page < 8) {
          for (let i = 1; i < 16; i++) {
            filter.push(i);
          }
        } else if (page > numPage.length - 8) {
          for (let i = numPage.length - 14; i <= numPage.length; i++) {
            filter.push(i);
          }
        } else {
          for (let i = page - 7; i <= page; i++) {
            filter.push(i);
          }
          for (let i = page + 1; i < page + 8; i++) {
            filter.push(i);
          }
        }
      }
      setFilter(filter);
    };
    filterPages();
  }, [numPage, page]);

  return (
    <ul className="pagination">
      <li
        onClick={() => {
          if (page !== 1) {
            setPage(1);
            setIsLoading(true);
          }
        }}
      >
        <i className="fas fa-chevron-left"></i>
        <i className="fas fa-chevron-left"></i>
      </li>
      <li
        onClick={() => {
          if (page !== 1) {
            setPage(page - 1);
            setIsLoading(true);
          }
        }}
      >
        <i className="fas fa-chevron-left"></i>
      </li>
      <li>
        <ul className="page">
          {filter.map(pageNum => {
            return (
              <li
                className={pageNum === page && "page-bold"}
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
      </li>
      <li
        onClick={() => {
          if (page !== numPage.length) {
            setPage(page + 1);
            setIsLoading(true);
          }
        }}
      >
        <i className="fas fa-chevron-right"></i>
      </li>
      <li
        onClick={() => {
          if (page !== numPage.length) {
            setPage(numPage.length);
            setIsLoading(true);
          }
        }}
      >
        <i className="fas fa-chevron-right"></i>
        <i className="fas fa-chevron-right"></i>
      </li>
    </ul>
  );
}

export default Pagination;
