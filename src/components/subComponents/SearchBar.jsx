import React, { useState, useEffect } from "react";
import TableOfForks from "./TableOfForks";
import { useGetForksByNameQuery } from "../../services/githubAPI";

const SearchBar = () => {
  const [ownerName, setOwnerName] = useState("");
  const [ownerReposatiry, setOwnerReposatiry] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [forksValue, setForksValue] = useState([]);
  const [favourite, setFavourite] = useState({});

  const { data, error, isLoading } = useGetForksByNameQuery(searchQuery);

  async function handleOnSubmit(e) {
    e.preventDefault();
    setSearchQuery(`${ownerName}/${ownerReposatiry}`);
  }

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

      {isLoading && searchQuery.length > 0 ? "Loading" : error && searchQuery.length > 0 ? `${error.data.message}` : data ? data.map((value) => <TableOfForks key={value.id} value={value} />) : ""}
    </div>
  );
};

export default SearchBar;
