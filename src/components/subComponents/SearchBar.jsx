import React, { useState, useEffect } from "react";
import TableOfForks from "./TableOfForks";
import { useGetForksByNameQuery, useGetForksLimitQuery } from "../../services/githubAPI";
import Pagination from "./Pagination";
// redux
import { useSelector, useDispatch } from "react-redux";
import { updateOwnerName, updateOwnerRepositry, updateSearchQuery, updateSearchForksLimit } from "../../features/githubAPI/githubAPISlice";
// css
import "../../styles/components/tableOfForks.css";

const SearchBar = () => {
  const dispatch = useDispatch();

  // Form Inputs
  const ownerName = useSelector((state) => state.github.ownerName);
  const ownerReposatiry = useSelector((state) => state.github.ownerReposatiry);

  // Searching Parametes
  const searchQuery = useSelector((state) => state.github.searchQuery);
  const searchForksLimit = useSelector((state) => state.github.searchForksLimit);

  // Pagination
  const page = useSelector((state) => state.github.page);

  // Forks Data of a Single Repositry Through "https://api.github.com/repos/ <Owner Name> / <Owner Repositry> /Forks"
  const { data, error, isLoading } = useGetForksByNameQuery(`${searchQuery}/forks?page=${page}`);
  // Forks Number of Every Repositry Through "https://api.github.com/repos/ <Owner Name> / <Owner Repositry>"
  const { data: forksCount } = useGetForksLimitQuery(searchForksLimit);

  const [totalPages, setTotalPages] = useState(Math.ceil(forksCount?.forks / 30));

  function handleOnSubmit(e) {
    e.preventDefault();
    if (ownerName.length > 0 && ownerReposatiry.length > 0) {
      dispatch(updateSearchQuery(`${ownerName}/${ownerReposatiry}`));
      dispatch(updateSearchForksLimit(`${ownerName}/${ownerReposatiry}`));
    }
  }

  useEffect(() => {
    forksCount && setTotalPages(Math.ceil(forksCount?.forks / 30));
  }, [forksCount]);

  return (
    <div style={{ textAlign: "center" }}>
      <form style={{ display: "flex" }}>
        <div className="searchBar-form">
          <input className="searchBar-form--input" type="text" placeholder="Owner" value={ownerName} onInput={(e) => dispatch(updateOwnerName(e.target.value))} />
          <span>/</span>
          <input className="searchBar-form--input" type="text" placeholder="Repository Name" value={ownerReposatiry} onInput={(e) => dispatch(updateOwnerRepositry(e.target.value))} />
        </div>
        <button className="searchBar-form--button" onClick={handleOnSubmit}>
          <img src="https://img.icons8.com/pastel-glyph/30/000000/search--v1.png" alt="search-icon" />
        </button>
      </form>

      {searchQuery.length > 0 ? (
        isLoading && searchQuery.length > 0 ? (
          <p className="loading-message">Loading ...</p>
        ) : error && searchQuery.length > 0 ? (
          <p className="error-message">{error.data.message}</p>
        ) : data ? (
          <table>
            <tbody>
              <tr>
                <th>Owner</th>
                <th>Stars</th>
                <th>URL</th>
                <th>Add to favourite</th>
              </tr>
              {data?.map((value) => (
                <TableOfForks key={value.id} value={value} />
              ))}
            </tbody>
          </table>
        ) : (
          ""
        )
      ) : (
        ""
      )}
      {!error && data && <Pagination totalPages={totalPages} />}
    </div>
  );
};

export default SearchBar;
