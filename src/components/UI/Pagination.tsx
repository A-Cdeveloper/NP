import React from "react";

type paginationProps = {
  usersPerPage: number;
  totalUsers: number;
  currentPage: number;
  paginate: (a: number) => void;
  previousPage: () => void;
  nextPage: () => void;
};

const Pagination = ({
  usersPerPage,
  totalUsers,
  currentPage,
  paginate,
  previousPage,
  nextPage,
}: paginationProps) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <ul className="pagination">
        {currentPage !== 1 && (
          <li className="page-number arrow" onClick={previousPage}>
            Prev
          </li>
        )}
        {pageNumbers.map((number) => (
          <li
            className={currentPage === number ? "active" : "page-number"}
            key={number}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
        {currentPage !== pageNumbers.length && (
          <li className="page-number arrow" onClick={nextPage}>
            Next
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
