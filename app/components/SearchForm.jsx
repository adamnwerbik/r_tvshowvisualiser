"use client";
import React from "react";

const SearchForm = ({ onInputChange }) => {
  return (
    <div className="py-2">
      <input
        className="min-w-72 bg-white dark:bg-gray-900"
        type="search"
        placeholder="Search for TV show..."
        onChange={onInputChange}
      ></input>
    </div>
  );
};

export default SearchForm;
