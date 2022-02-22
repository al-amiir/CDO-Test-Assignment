import React, { useEffect } from "react";

const Pagination = ({ page, setPage, totalPages }) => {
  useEffect(() => {
    console.log({ totalPages });
  }, [totalPages]);

  return (
    <div className="pagination">
      {page > 1 && (
        <button className="pagination-button" onClick={() => setPage((prev) => prev - 1)}>
          <img src="https://img.icons8.com/ios-filled/15/ffffff/back.png" />{" "}
        </button>
      )}
      <p className="pagination-page">page: {page}</p>
      {page < totalPages && (
        <button className="pagination-button" onClick={() => setPage((prev) => prev + 1)}>
          <img src="https://img.icons8.com/ios-filled/15/ffffff/forward.png" />
          {/* <img src="https://img.icons8.com/ios/40/ffffff/long-arrow-right.png" /> */}
        </button>
      )}
    </div>
  );
};

export default Pagination;
