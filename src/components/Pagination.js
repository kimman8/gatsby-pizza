import { Link } from 'gatsby';
import React from 'react';

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
  return (
    <div>
      <Link to={`${base}/${prevPage}`}>&#8592;Prev</Link>
      <Link to={`${base}/${nextPage}`}>Next&#8594;</Link>
    </div>
  );
}
