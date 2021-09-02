import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const PaginationStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--grey);
  margin: 2rem 0rem;
  border-radius: 5px;
  text-align: center;
  @media (max-width: 800px) {
    .word {
      display: none;
    }
    font-size: 1.6rem;
  }
  & > * {
    padding: 1rem;
    flex: 1;
    text-decoration: none;
    border-right: 1px solid var(--grey);
    &[aria-current],
    &.current {
      color: var(--red);
    }
    &[disabled] {
      pointer-events: none;
      color: var(--grey);
    }
  }
`;

export default function Pagination({
  pageSize,
  skip,
  base,
  totalCount,
  currentPage,
}) {
  // make some variables
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage > 0;

  return (
    <PaginationStyles>
      <Link
        title="Previous page"
        disabled={!hasPrevPage}
        to={`${base}/${prevPage}`}
      >
        &#8592;<span className="word">Prev</span>
      </Link>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link
          to={`${base}/${i > 0 ? i + 1 : ""}`}
          key={`page-${i}`}
          className={i === 0 && currentPage === 1 ? "current" : ""}
        >
          {i + 1}
        </Link>
      ))}
      <Link
        title="next page"
        disabled={!hasNextPage}
        to={`${base}/${nextPage}`}
      >
        <span className="word">Next</span>&#8594;
      </Link>
    </PaginationStyles>
  );
}
