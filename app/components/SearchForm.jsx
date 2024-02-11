"use client";
import React from "react";

const SearchForm = ({ onInputChange }) => {
  return (
    <div className="pb-2">
      <input
        className="min-w-96"
        type="search"
        placeholder="Search for TV show here.."
        onChange={onInputChange}
      ></input>
    </div>
  );
};

export default SearchForm;
