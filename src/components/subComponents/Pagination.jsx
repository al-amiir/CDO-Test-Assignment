import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePage } from "../../features/githubAPI/githubAPISlice";

const Pagination = ({ totalPages }) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.github.page);

  return (
    <div className="pagination">
      {page > 1 && (
        <button className="pagination-button" onClick={() => dispatch(updatePage(page - 1))}>
          <img src="https://img.icons8.com/ios-filled/15/ffffff/back.png" alt="back-arrow" />
        </button>
      )}
      <p className="pagination-page">page: {page}</p>
      {page < totalPages && (
        <button className="pagination-button" onClick={() => dispatch(updatePage(page + 1))}>
          <img src="https://img.icons8.com/ios-filled/15/ffffff/forward.png" alt="forward-arrow" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
