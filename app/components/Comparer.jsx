"use client";
import { useDebounce } from "use-debounce";
import React from "react";
import SearchAndSelect from "./SearchAndSelect";
import { useState } from "react";
import Chart from "./LineChart";
import { useEffect } from "react";
import collect from "collect.js";

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
  const [selectedShowsData, setselectedShowsData] = useState({});

  function onInputChange(e) {
    console.log("INPUT CHANGED");
    setSearchQuery(e.target.value);
  }

  useEffect(() => {
    async function fetchAndUpdateData() {
      const selectedShowsDataKeys = Object.keys(selectedShowsData);
      selectedShowsID.forEach((obj) => {
        console.log(obj.name);
        if (selectedShowsDataKeys.includes(obj.id)) {
          console.log(`ID: ${obj.id} IS INCLUDED`);
          // do nothing
        } else {
          console.log(`ID: ${obj.id} IS NOT INCLUDED`);
          //fetch data
          selectedShowsData[`${obj.id}`] = {
            data: `${fetchAllSeasonsInfo(obj.id)}`,
          };
        }
      });
    }

    fetchAndUpdateData();

    console.log(selectedShowsData);
    //fetch data for each showID in this
  }, [selectedShowsID]);

  function onSearchResultClick(e) {
    setSearchQuery("");
    const idToAdd = e.currentTarget.dataset.ajdi;
    const nameToAdd = e.currentTarget.dataset.name;
    setSelectedShowsID(
      collect([...selectedShowsID, { id: idToAdd, name: nameToAdd }])
        .unique("id")
        .toArray()
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
      collect([...selectedShowsID])
        .where("id", "!==", showIDToRemove)
        .toArray()
    );

    delete selectedShowsData[showIDToRemove];
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

      <Chart tvshowdata="[1, 2, 3, 4, 5]" />
    </>
  );
};

export default Comparer;
