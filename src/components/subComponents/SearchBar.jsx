import React, { useState, useEffect } from "react";
import TableOfForks from "./TableOfForks";
import { useGetForksByNameQuery, useGetForksLimitQuery } from "../../services/githubAPI";
import Pagination from "./Pagination";

const SearchBar = () => {
  // Form Inputs
  const [ownerName, setOwnerName] = useState("");
  const [ownerReposatiry, setOwnerReposatiry] = useState("");

  // Searching Parametes
  const [searchQuery, setSearchQuery] = useState("");
  const [searchForksLimit, setSearchForksLimit] = useState("");

  // Pagination
  const [page, setPage] = useState(1);

  // Forks Data of a Single Repositry Through "https://api.github.com/repos/ <Owner Name> / <Owner Repositry> /Forks"
  const { data, error, isLoading } = useGetForksByNameQuery(`${searchQuery}/forks?page=${page}`);
  // Forks Number of Every Repositry Through "https://api.github.com/repos/ <Owner Name> / <Owner Repositry>"
  const { data: forksCount } = useGetForksLimitQuery(searchForksLimit);

  const [totalPages, setTotalPages] = useState(Math.ceil(forksCount?.forks / 30));

  function handleOnSubmit(e) {
    e.preventDefault();
    if (ownerName.length > 0 && ownerReposatiry.length > 0) {
      setSearchQuery(`${ownerName}/${ownerReposatiry}`);
      setSearchForksLimit(`${ownerName}/${ownerReposatiry}`);
    }
  }

  useEffect(() => {
    forksCount && setTotalPages(Math.ceil(forksCount?.forks / 30));
  }, [forksCount]);

  return (
    <div>
      <form style={{ display: "flex" }}>
        <div className="searchBar-form">
          <input className="searchBar-form--input" type="text" placeholder="Owner" value={ownerName} onInput={(e) => setOwnerName(e.target.value)} />
          <span>/</span>
          <input className="searchBar-form--input" type="text" placeholder="Repository Name" onInput={(e) => setOwnerReposatiry(e.target.value)} />
        </div>
        <button className="searchBar-form--button" onClick={handleOnSubmit}>
          <img src="https://img.icons8.com/pastel-glyph/30/000000/search--v1.png" />
        </button>
      </form>
      {searchQuery.length > 0 ? (isLoading && searchQuery.length > 0 ? "Loading" : error && searchQuery.length > 0 ? `${error.data.message}` : data ? data?.map((value) => <TableOfForks key={value.id} value={value} />) : "") : ""}
      {!error && data && <Pagination page={page} setPage={setPage} totalPages={totalPages} />}
    </div>
  );
};

export default SearchBar;
