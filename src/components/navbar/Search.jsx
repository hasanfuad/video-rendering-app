import React from "react";

import search from "../../assets/search.svg";

const Search = () => {
  return (
    <>
      <form>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
        />
      </form>
      <img
        className="inline h-4 cursor-pointer"
        src={search}
        alt="Search"
      />
    </>
  );
};

export default Search;
