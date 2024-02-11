"use client";
import { useDebounce } from "use-debounce";
import React from "react";
import SearchAndSelect from "./SearchAndSelect";
import { useState } from "react";
import LineChart from "./LineChart";
import { useEffect } from "react";
import collect from "collect.js";

//import server actions
import {
  fetchAllSeasonsInfo,
  fetchResultsOfSearch,
} from "../serverActions/FetchingData";

const Comparer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedValue] = useDebounce(searchQuery, 200);
  const [searchResults, setSearchResults] = useState({});
  const [selectedShowsID, setSelectedShowsID] = useState([]);
  const [selectedShowsData, setselectedShowsData] = useState([]);

  function onInputChange(e) {
    console.log("INPUT CHANGED");
    setSearchQuery(e.target.value);
  }

  useEffect(() => {
    console.log("ADDED");
  }, [selectedShowsID]);

  function onSearchResultClick(e) {
    setSearchQuery("");
    const idToAdd = e.currentTarget.dataset.ajdi;
    setSelectedShowsID(
      collect([...selectedShowsID, idToAdd])
        .unique()
        .all()
    );

    console.log(selectedShowsID);
  }

  //change search results based on debounced query
  useEffect(() => {
    async function changeSearchResults() {
      console.log(`myEffectJustRan: ${debouncedValue}`);
      const results = await fetchResultsOfSearch(debouncedValue);
      setSearchResults(results);
      console.log(results);
    }
    changeSearchResults();
  }, [debouncedValue]);

  //FETCH DATA

  return (
    <>
      <h1>Comparer</h1>
      <SearchAndSelect
        onInputChange={onInputChange}
        searchResults={searchResults}
        onSearchResultClick={onSearchResultClick}
      />
      <p>Currently selected: {selectedShowsID}</p>

      <LineChart />
    </>
  );
};

export default Comparer;
