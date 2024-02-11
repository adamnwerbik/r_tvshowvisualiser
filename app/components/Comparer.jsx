"use client";
import { useDebounce } from "use-debounce";
import React from "react";
import SearchAndSelect from "./SearchAndSelect";
import { useState } from "react";
import LineChart from "./LineChart";
import { useEffect } from "react";
import collect from "collect.js";
import { isDeepStrictEqual } from "util";

//import server actions
import {
  fetchAllSeasonsInfo,
  fetchResultsOfSearch,
} from "../serverActions/FetchingData";
import MiniCard from "./MiniCard";

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
    const nameToAdd = e.currentTarget.dataset.name;
    setSelectedShowsID(
      collect([...selectedShowsID, { id: idToAdd, name: nameToAdd }])
        .unique("id")
        .all()
    );
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

  function handleSelectedShowRemove(e) {
    const showIDToRemove = e.currentTarget.dataset.id;
    console.log(`showIDToRemove: ${showIDToRemove}: shows ${selectedShowsID}`);
    setSelectedShowsID(
      collect([...selectedShowsID]).where("id", "!==", showIDToRemove)
    );
  }

  return (
    <>
      <h1>Comparer</h1>
      <SearchAndSelect
        onInputChange={onInputChange}
        searchResults={searchResults}
        onSearchResultClick={onSearchResultClick}
      />
      <div className="flex flex-row">
        {selectedShowsID.map((r) => {
          return (
            <MiniCard
              name={r.name}
              id={r.id}
              onBtnClick={handleSelectedShowRemove}
            ></MiniCard>
          );
        })}
      </div>

      <LineChart />
    </>
  );
};

export default Comparer;
