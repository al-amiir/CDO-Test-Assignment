import React, { useEffect } from "react";

const Pagination = ({ page, setPage, totalPages }) => {
  useEffect(() => {
    console.log({ totalPages });
  }, [totalPages]);

  return (
    <div>
      {page > 1 && <button onClick={() => setPage((prev) => prev - 1)}>prev</button>}
      {page}
      {page < totalPages && <button onClick={() => setPage((prev) => prev + 1)}>next</button>}
    </div>
  );
};

export default Pagination;
