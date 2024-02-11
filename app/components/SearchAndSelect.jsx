import React from "react";
import SearchForm from "./SearchForm";
import LineChart from "./LineChart";
import SearchResultCard from "./SearchResultCard";

const SearchAndSelect = ({
  onInputChange,
  searchResults,
  onSearchResultClick,
}) => {
  function displaySearchResults() {
    try {
      if (searchResults.results.length > 0) {
        {
          return searchResults.results
            .slice(0, 4)
            .map((r) => (
              <SearchResultCard
                givenID={r.id}
                name={r.name}
                image={r.poster_path}
                blurb={r.overview}
                rating={r.vote_average}
                firstAired={r.first_air_date}
                onSearchResultClick={onSearchResultClick}
              ></SearchResultCard>
            ));
        }
      } else {
        return "No Results";
      }
    } catch (error) {
      return "No Results";
    }
  }

  return (
    <>
      <h1>Search && Select</h1>
      <SearchForm onInputChange={onInputChange} />
      <>{displaySearchResults()}</>
    </>
  );
};

export default SearchAndSelect;
