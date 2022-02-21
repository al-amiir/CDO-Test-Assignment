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

  // useEffect(() => {
  //   setSearchQuery(`${ownerName}/${ownerReposatiry}/forks?page=${page}`);
  // }, [page]);

  useEffect(() => {
    forksCount && setTotalPages(Math.ceil(forksCount?.forks / 30));
  }, [forksCount]);

  return (
    <div>
      <form style={{ display: "flex" }}>
        <div style={{ width: "400px", display: "flex", alignItems: "center", border: "2px solid", borderRadius: "3px", padding: "5px" }}>
          <input type="text" placeholder="Owner" value={ownerName} onInput={(e) => setOwnerName(e.target.value)} style={{ width: "150px", maxWidth: "fit-content", border: "none", outline: "none", fontSize: "15px" }} />
          <span>/</span>
          <input type="text" placeholder="Repository Name" onInput={(e) => setOwnerReposatiry(e.target.value)} style={{ width: "150px", maxWidth: "fit-content", border: "none", outline: "none", fontSize: "15px" }} />
        </div>
        <button onClick={handleOnSubmit}>Search</button>
      </form>
      {searchQuery.length > 0 ? (isLoading && searchQuery.length > 0 ? "Loading" : error && searchQuery.length > 0 ? `${error.data.message}` : data ? data?.map((value) => <TableOfForks key={value.id} value={value} />) : "") : ""}
      {!error && data && <Pagination page={page} setPage={setPage} totalPages={totalPages} />}
    </div>
  );
};

export default SearchBar;
