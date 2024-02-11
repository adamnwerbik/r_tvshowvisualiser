"use client";
import React from "react";

const SearchForm = ({ onInputChange }) => {
  return (
    <div className="py-2">
      <input
        className="min-w-72"
        type="search"
        placeholder="Search for TV show here..."
        onChange={onInputChange}
      ></input>
    </div>
  );
};

export default SearchForm;
