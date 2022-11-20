import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";

import search from "../../assets/search.svg";
import { searched } from "../../features/filter/filterSlice";

const Search = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState();

  const match = useMatch("/");
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));
    
    if(!match) navigate("/")
    setInput("")
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <img className="inline h-4 cursor-pointer" src={search} alt="Search" />
    </>
  );
};

export default Search;
