"use client";
import { useDebounce } from "use-debounce";
import React from "react";
import SearchAndSelect from "./SearchAndSelect";
import { useState } from "react";
import MyChart from "./Chart";
import { useEffect } from "react";
import collect from "collect.js";
import EpisodeCard from "./EpisodeCard";

//import server actions
import {
  fetchAllSeasonsInfo,
  fetchResultsOfSearch,
} from "../serverActions/FetchingData";
import MiniCard from "./MiniCard";
import TopEpisodes from "./TopEpisodes";
import { Video } from "./showCase.jsx/Video";

const Comparer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedValue] = useDebounce(searchQuery, 200);
  const [searchResults, setSearchResults] = useState({});
  const [selectedShowsID, setSelectedShowsID] = useState([]);
  const [selectedShowsData, setselectedShowsData] = useState({});

  function onInputChange(e) {
    setSearchQuery(e.target.value);
  }

  useEffect(() => {
    async function fetchAndUpdateData() {
      const selectedShowsDataKeys = Object.keys(selectedShowsData);

      selectedShowsID.forEach(async (obj) => {
        
        if (selectedShowsDataKeys.includes(obj.id)) {
          // do nothing
        } else {
          //fetch data
          const fetchedData = await fetchAllSeasonsInfo(obj.id);

          selectedShowsData[obj.id] = { name: obj.name, data: fetchedData };
        }
      });
    }

    fetchAndUpdateData();

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
      const results = await fetchResultsOfSearch(debouncedValue);
      setSearchResults(results);
    }
    changeSearchResults();
  }, [debouncedValue]);

  //FETCH DATA
  function handleSelectedShowRemove(e) {
    const showIDToRemove = e.currentTarget.dataset.id;
    setSelectedShowsID(
      collect([...selectedShowsID])
        .where("id", "!==", showIDToRemove)
        .toArray()
    );

    delete selectedShowsData[showIDToRemove];
  }

  return (
    <>
      <SearchAndSelect
        onInputChange={onInputChange}
        searchResults={searchResults}
        onSearchResultClick={onSearchResultClick}
        shouldBeRendered={searchQuery}
      />
      <div className="flex flex-row">
        {selectedShowsID.map((r) => {
          return (
            <MiniCard
              key={r.id}
              name={r.name}
              id={r.id}
              onBtnClick={handleSelectedShowRemove}
            ></MiniCard>
          );
        })}
      </div>

      {selectedShowsID.length > 0 && (
        <>
          <div className="w-screen md:w-2/3">
            <MyChart tvshowdata={selectedShowsData}></MyChart>
          </div>

          <TopEpisodes data={selectedShowsData} />
        </>
      )}
      {!searchQuery && <Video />}
    </>
  );
};

export default Comparer;
