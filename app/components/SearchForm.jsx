"use client";
import React from "react";

const SearchForm = ({ onInputChange }) => {
  return (
    <div className="pb-2">
      <input
        type="search"
        placeholder="placeholder"
        onChange={onInputChange}
      ></input>
    </div>
  );
};

export default SearchForm;
