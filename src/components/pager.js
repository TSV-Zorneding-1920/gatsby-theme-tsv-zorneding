import React from "react";
import { Link } from "gatsby";

const Pager = ({ currentPage, numPages }) => {
  if (numPages < 2) {
    return <></>;
  }

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? "/blog" : "/blog/" + (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <ul className="pagination">
      <li>
        {!isFirst ? (
          <Link to={prevPage} rel="prev" className="button">
            Zurück
          </Link>
        ) : (
          <span className="button disabled">Zurück</span>
        )}
      </li>

      {Array.from({ length: numPages }, (_, i) => (
        <li key={`pagination-number${i + 1}`}>
          <Link
            to={`/blog/${i === 0 ? "" : i + 1}`}
            className={`page ${i + 1 === currentPage ? "active" : ""}`}
          >
            {i + 1}
          </Link>
        </li>
      ))}

      <li>
        {!isLast ? (
          <Link to={`/blog/${nextPage}`} rel="next" className="button">
            Nächste
          </Link>
        ) : (
          <span className="button disabled">Nächste</span>
        )}
      </li>
    </ul>
  );
};

export default Pager;
